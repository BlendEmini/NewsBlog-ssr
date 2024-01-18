import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lqnnbdfzslttudvlrywx.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxxbm5iZGZ6c2x0dHVkdmxyeXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwMzkzOTEsImV4cCI6MjAxODYxNTM5MX0.IRExu1Nj7_GriK8Ey-Um0kIQxUjKOMnJaAntN56C0nk";

export const supabase = createClient(supabaseUrl, supabaseKey);
