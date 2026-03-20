import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yjtahynkggizwtuuuvuw.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqdGFoeW5rZ2dpend0dXV1dnV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMDIyNTAsImV4cCI6MjA4OTU3ODI1MH0.iGI4pn4-uHVgABGxmbN0vUzja8fNBRRpmiqunp3dt0E';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Story = {
  id: string;
  title: string;
  origin_country: string;
  origin_flag: string;
  age_groups: string[];
  cover_emoji: string;
  cover_gradient: string;
  summary: string;
  moral: string;
  cultural_note: string;
  difficulty_level: number;
};

export type StoryPage = {
  id: number;
  story_id: string;
  page_number: number;
  text: string;
  illustration_emojis: string;
  bg_color: string;
};

export type VocabWord = {
  id: number;
  story_id: string;
  word: string;
  definition: string;
  example_sentence: string;
  pronunciation: string;
  caribbean_context: string;
};

export type ComprehensionQuestion = {
  id: number;
  story_id: string;
  question: string;
  options: string[];
  correct_index: number;
};

export type PhonicsLevel = {
  id: string;
  name: string;
  description: string;
  icon: string;
  age_groups: string[];
};

export type PhonicsExercise = {
  id: number;
  level_id: string;
  exercise_type: string;
  instruction: string;
  exercise_data: Record<string, unknown>;
};
