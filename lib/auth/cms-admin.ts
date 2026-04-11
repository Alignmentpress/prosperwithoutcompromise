import type { User } from "@supabase/supabase-js";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function parseAdminEmails(): string[] {
  const raw = process.env.CMS_ADMIN_EMAILS ?? "";
  return raw
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

export function isCmsAdminEmail(email: string | undefined): boolean {
  if (!email) return false;
  const list = parseAdminEmails();
  if (list.length === 0) return false;
  return list.includes(email.trim().toLowerCase());
}

export async function getCmsAdminUser(): Promise<User | null> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email || !isCmsAdminEmail(user.email)) return null;
  return user;
}
