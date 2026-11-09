const SUPABASE_URL = "https://zrkepsvrbvklkgzlehdo.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_coZJoTDtdDen4sApFVwZpw_CIh1b7Bc";

const { createClient } = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);