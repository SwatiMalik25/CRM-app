
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uebdndkwrwdtuobxwgqi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlYmRuZGt3cndkdHVvYnh3Z3FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwMTk0NjgsImV4cCI6MjA0MDU5NTQ2OH0.lIzyRpStccamyHyBdV0cz7j5okkH_2R5iLbB9cQqoc0'
export const supabase = createClient(supabaseUrl, supabaseKey)