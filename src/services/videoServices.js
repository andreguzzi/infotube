import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://ikgwwgytbmtvmaskokjm.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrZ3d3Z3l0Ym10dm1hc2tva2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyODI1NDQsImV4cCI6MTk4Mzg1ODU0NH0.7cd87ART48scgkZYMwK1Au2226CmzNM6AFPhZ3qT1_I";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}