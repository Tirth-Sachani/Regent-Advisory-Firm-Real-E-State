-- Schema script to create voice_conversations table in Supabase

CREATE TABLE IF NOT EXISTS public.voice_conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID,
  language TEXT,
  transcript TEXT,
  response TEXT,
  intent TEXT,
  lead_score INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on voice_conversations
ALTER TABLE public.voice_conversations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (submit voice conversations logs)
DROP POLICY IF EXISTS "Allow public insert access to voice_conversations" ON public.voice_conversations;
CREATE POLICY "Allow public insert access to voice_conversations" 
  ON public.voice_conversations FOR INSERT WITH CHECK (true);

-- Create policy to allow admin/service role full access to voice_conversations
DROP POLICY IF EXISTS "Allow admin full access to voice_conversations" ON public.voice_conversations;
CREATE POLICY "Allow admin full access to voice_conversations" 
  ON public.voice_conversations FOR ALL USING (true);
