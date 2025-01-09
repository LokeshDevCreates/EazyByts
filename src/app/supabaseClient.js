// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wncaefznhsbbbrjdruvo.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduY2FlZnpuaHNiYmJyamRydXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyMzk4MDksImV4cCI6MjA1MTgxNTgwOX0.eFrh4AiWrp-nIH2xROpBuxthsUtKA2rWktezuZjzM5Q'; 
export const supabase = createClient(supabaseUrl, supabaseKey);
