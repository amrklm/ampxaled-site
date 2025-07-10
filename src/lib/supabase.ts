import { createClient } from '@supabase/supabase-js';

// Vite uses import.meta.env (NOT process.env)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(`
    Missing environment variables!
    Create a .env file with:
    VITE_SUPABASE_URL=your-url
    VITE_SUPABASE_ANON_KEY=your-key
  `);
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  global: {
    fetch: (url, options) => {
      return fetch(url, {
        ...options,
        timeout: 10000 // 10 second timeout
      });
    }
  }
});