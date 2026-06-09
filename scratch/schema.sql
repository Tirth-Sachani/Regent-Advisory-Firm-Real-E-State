-- Create the properties table if it does not already exist
create table if not exists public.properties (
  id text primary key,
  title text not null,
  location text not null,
  price text not null,
  bedrooms integer not null,
  bathrooms integer not null,
  sqft integer not null,
  description text not null,
  images text[] not null,
  features text[] not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.properties enable row level security;

-- Drop existing policy if it exists to allow safe re-runs
drop policy if exists "Allow public read access to properties" on public.properties;

-- Create policy to allow anonymous read-only access (select)
create policy "Allow public read access to properties" 
  on public.properties 
  for select 
  using (true);

-- Create the inquiries table if it does not already exist
create table if not exists public.inquiries (
  id uuid default gen_random_uuid() primary key,
  first_name text,
  last_name text,
  name text, -- For forms that use a single name field
  email text not null,
  phone text,
  nature_of_inquiry text, -- e.g. Strategic Acquisitions, Sales Advisory, Portfolio Management, General Enquiry
  message text,
  property_id text references public.properties(id), -- optional, link to specific property
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS) on inquiries
alter table public.inquiries enable row level security;

-- Create policy to allow anonymous inserts (submit enquiry)
create policy "Allow public insert access to inquiries" 
  on public.inquiries 
  for insert 
  with check (true);

-- Create policy to allow admin/service role to read/manage inquiries
create policy "Allow admin full access to inquiries" 
  on public.inquiries 
  for all 
  using (true);

-- Create the subscriptions table if it does not already exist
create table if not exists public.subscriptions (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS) on subscriptions
alter table public.subscriptions enable row level security;

-- Create policy to allow anonymous inserts (subscribe)
create policy "Allow public insert access to subscriptions" 
  on public.subscriptions 
  for insert 
  with check (true);

-- Create policy to allow admin/service role to read/manage subscriptions
create policy "Allow admin full access to subscriptions" 
  on public.subscriptions 
  for all 
  using (true);
