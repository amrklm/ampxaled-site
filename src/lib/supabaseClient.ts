import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nozammxkdbmqmxcpjmte.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vemFtbXhrZGJtcW14Y3BqbXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNzg0NzIsImV4cCI6MjA2Njk1NDQ3Mn0.nT9l3N5_NFxDWxLjgaYX17-YMVonSH3ZsWxkx70dDas';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
