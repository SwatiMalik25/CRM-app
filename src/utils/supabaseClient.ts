import {SupabaseClient} from "@supabase/supabase-js"

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL!;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY!;


// taking the username and email password parameters:
export const supabase = new SupabaseClient(supabaseUrl , supabaseAnonKey);
