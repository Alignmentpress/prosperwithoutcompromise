// Supabase client placeholder
// Once you add your Supabase credentials to .env.local, uncomment the code below.

/*
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
*/

// For now, we export a mock that logs to console
export const supabase = {
  from: (table: string) => ({
    insert: async (data: Record<string, unknown>[]) => {
      console.log(`[Mock Supabase] Insert into ${table}:`, data);
      return { data, error: null };
    },
  }),
};
