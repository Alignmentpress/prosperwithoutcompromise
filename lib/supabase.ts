import { createClient, type SupabaseClient } from "@supabase/supabase-js";

function getSupabaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url) throw new Error("NEXT_PUBLIC_SUPABASE_URL is not set");
  return url;
}

/**
 * Server-only client (API routes, Server Actions). Uses the service role key;
 * bypasses RLS — use only in trusted server code.
 */
export function createSupabaseServer(): SupabaseClient {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set");
  return createClient(getSupabaseUrl(), key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/**
 * Browser-safe client (anon key). For future client-side Supabase usage only.
 */
export function createSupabaseBrowser(): SupabaseClient {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!key) throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is not set");
  return createClient(getSupabaseUrl(), key);
}
