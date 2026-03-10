import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    const errorMsg = 'Missing Supabase environment variables! Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment.';
    console.error(errorMsg);
    // In production, we might want to throw a more user-friendly error or redirect
    if (import.meta.env.PROD) {
        throw new Error(errorMsg);
    }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
