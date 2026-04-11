import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServer } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { first_name, email, locale: localeRaw, q1, q2, q3, q4 } = body;

    if (!first_name || !email || !q1 || !q2 || !q3 || !q4) {
      return NextResponse.json(
        { error: "Name, email, and all four answers are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const locale = localeRaw === "fr" ? "fr" : "en";
    const message = JSON.stringify({ q1, q2, q3, q4, locale });

    const supabase = createSupabaseServer();
    const { error } = await supabase.from("leads").insert([
      {
        first_name,
        email,
        interest: ["coaching-booking", locale],
        source: "coaching-alignment",
        message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save your information. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (e) {
    console.error("coaching-alignment API error:", e);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
