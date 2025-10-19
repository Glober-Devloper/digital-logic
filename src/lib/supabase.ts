import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Unit {
  id: string;
  unit_number: number;
  title: string;
  hours: number;
  description: string;
  created_at: string;
}

export interface Topic {
  id: string;
  unit_id: string;
  title: string;
  content: string;
  examples: Example[];
  order_num: number;
  created_at: string;
}

export interface Example {
  title: string;
  description: string;
  code?: string;
  solution?: string;
  diagram?: string;
}

export interface PDFNote {
  id: string;
  unit_id: string;
  title: string;
  file_url: string;
  created_at: string;
}
