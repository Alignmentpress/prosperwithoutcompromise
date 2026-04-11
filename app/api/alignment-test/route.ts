import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { createSupabaseServer } from "@/lib/supabase";

const PDF_NAMES = { en: "dap-alignment-en.pdf", fr: "dap-alignment-fr.pdf" } as const;

async function readPdfBase64(locale: "en" | "fr"): Promise<{ filename: string; content: string } | null> {
  const filename = PDF_NAMES[locale];
  const pdfPath = path.join(process.cwd(), "content", "lead-magnets", filename);
  try {
    const buf = await readFile(pdfPath);
    return { filename, content: buf.toString("base64") };
  } catch {
    console.warn(`[alignment-test] PDF not found at ${pdfPath}; email will be sent without attachment.`);
    return null;
  }
}

async function sendResendEmail(opts: {
  to: string;
  locale: "en" | "fr";
  firstName: string;
  attachment: { filename: string; content: string } | null;
}): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? "Alignment Press <hello@alignmentpress.com>";
  if (!key) {
    console.warn("[alignment-test] RESEND_API_KEY not set; skipping email send.");
    return false;
  }

  const subject =
    opts.locale === "fr"
      ? "Votre Test d'alignement (PDF) — Alignment Press"
      : "Your Alignment Test (PDF) — Alignment Press";

  const html =
    opts.locale === "fr"
      ? `<p>Bonjour ${escapeHtml(opts.firstName)},</p>
<p>Merci ! Vous trouverez en pièce jointe le PDF du Test d'alignement (modèle DAP).</p>
<p>Bien à vous,<br/>Kevin Adou · Alignment Press</p>`
      : `<p>Hi ${escapeHtml(opts.firstName)},</p>
<p>Thank you! Your Alignment Test PDF (DAP model) is attached.</p>
<p>— Kevin Adou, Alignment Press</p>`;

  const body: Record<string, unknown> = {
    from,
    to: [opts.to],
    subject,
    html,
  };

  if (opts.attachment) {
    body.attachments = [
      {
        filename: opts.attachment.filename,
        content: opts.attachment.content,
      },
    ];
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("[alignment-test] Resend error:", res.status, errText);
    return false;
  }
  return true;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { first_name, email, locale: localeRaw } = body;

    if (!first_name || !email) {
      return NextResponse.json({ error: "First name and email are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const locale = localeRaw === "fr" ? "fr" : "en";

    const supabase = createSupabaseServer();
    const { error } = await supabase.from("leads").insert([
      {
        first_name,
        email,
        interest: ["dap-test", locale],
        source: "dap-test",
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save your information. Please try again." }, { status: 500 });
    }

    const attachment = await readPdfBase64(locale);
    const hasResend = Boolean(process.env.RESEND_API_KEY);
    const sent = hasResend
      ? await sendResendEmail({
          to: email,
          locale,
          firstName: first_name,
          attachment,
        })
      : false;

    if (hasResend && !sent) {
      return NextResponse.json(
        { error: "Could not send email. Please try again later." },
        { status: 502 }
      );
    }

    if (!hasResend) {
      console.log("[alignment-test] Lead saved; set RESEND_API_KEY to send the PDF by email.");
    }

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (e) {
    console.error("alignment-test API error:", e);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
