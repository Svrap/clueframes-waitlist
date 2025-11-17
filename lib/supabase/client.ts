import { createClient } from "@supabase/supabase-js";

/**
 * Supabase browser client for marketing waitlist
 * 
 * TODO: Add these environment variables to your .env.local:
 * NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
 * NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local file."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
});

