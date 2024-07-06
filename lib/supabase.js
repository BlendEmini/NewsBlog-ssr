import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lqnnbdfzslttudvlrywx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxxbm5iZGZ6c2x0dHVkdmxyeXd4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzAzOTM5MSwiZXhwIjoyMDE4NjE1MzkxfQ.qeTzM9HK3W39CabkNJ7gQ8FopGSTNQRzIaKv0QO2EGI";
export const supabase = createClient(supabaseUrl, supabaseKey);
