-- Schema script to create appointments, leads and notifications tables in Supabase

-- 1. Create leads table if not exists (for CRM integration)
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  lead_score INTEGER DEFAULT 0,
  intent_tier TEXT,
  assigned_advisor TEXT DEFAULT 'Unassigned',
  priority TEXT, -- High, Medium, Low
  status TEXT DEFAULT 'New Lead',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on leads
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (submit leads)
DROP POLICY IF EXISTS "Allow public insert access to leads" ON public.leads;
CREATE POLICY "Allow public insert access to leads" 
  ON public.leads FOR INSERT WITH CHECK (true);

-- Create policy to allow admin/service role full access to leads
DROP POLICY IF EXISTS "Allow admin full access to leads" ON public.leads;
CREATE POLICY "Allow admin full access to leads" 
  ON public.leads FOR ALL USING (true);


-- 2. Create appointments table if not exists
CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  request TEXT,
  intent TEXT,
  lead_score INTEGER,
  urgency TEXT,
  budget TEXT,
  location TEXT,
  appointment_date TEXT,
  status TEXT DEFAULT 'New Lead',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on appointments
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (submit appointments)
DROP POLICY IF EXISTS "Allow public insert access to appointments" ON public.appointments;
CREATE POLICY "Allow public insert access to appointments" 
  ON public.appointments FOR INSERT WITH CHECK (true);

-- Create policy to allow admin/service role full access to appointments
DROP POLICY IF EXISTS "Allow admin full access to appointments" ON public.appointments;
CREATE POLICY "Allow admin full access to appointments" 
  ON public.appointments FOR ALL USING (true);


-- 3. Create notifications table if not exists (for team notifications log)
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  channels TEXT[] NOT NULL, -- e.g., ['Admin Dashboard', 'Email', 'WhatsApp']
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on notifications
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (submit notifications)
DROP POLICY IF EXISTS "Allow public insert access to notifications" ON public.notifications;
CREATE POLICY "Allow public insert access to notifications" 
  ON public.notifications FOR INSERT WITH CHECK (true);

-- Create policy to allow admin/service role full access to notifications
DROP POLICY IF EXISTS "Allow admin full access to notifications" ON public.notifications;
CREATE POLICY "Allow admin full access to notifications" 
  ON public.notifications FOR ALL USING (true);
