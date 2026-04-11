import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

function getEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) throw new Error("NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set");
  return { url, anon };
}

/**
 * Supabase client for Server Components, Server Actions, and Route Handlers.
 * Uses the anon key + cookies so RLS applies for public reads.
 */
export async function createSupabaseServerClient() {
  const { url, anon } = getEnv();
  const cookieStore = await cookies();

  return createServerClient(url, anon, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          /* setAll called from Server Component — middleware handles session refresh */
        }
      },
    },
  });
}
