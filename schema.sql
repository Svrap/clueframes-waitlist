-- ClueFrames Waitlist Leads Table
-- Safe, separate from main app tables
-- Copy this SQL and run it in your Supabase SQL Editor

create table if not exists waitlist_leads (
  id uuid primary key default uuid_generate_v4(),
  name text,
  email text not null,
  channel_url text,
  category text,
  biggest_pain text,
  source text,
  created_at timestamptz default now()
);

-- Enable RLS (Row Level Security)
alter table waitlist_leads enable row level security;

-- Create policy to allow public inserts
create policy "public insert waitlist"
on waitlist_leads
for insert
to public
with check (true);

-- ============================================
-- Waitlist Users Table (for email logging)
-- ============================================

create table if not exists waitlist_users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text default 'website',
  created_at timestamptz default now()
);

-- Enable RLS (Row Level Security)
alter table waitlist_users enable row level security;

-- Create policy to allow service role (bypasses RLS) and authenticated inserts
-- Service role key bypasses RLS automatically, but we add this for completeness
create policy "Allow service role inserts"
on waitlist_users
for insert
to service_role
with check (true);

-- Also allow authenticated users (if needed)
create policy "Allow authenticated inserts"
on waitlist_users
for insert
to authenticated
with check (true);

-- Note: Service role key bypasses RLS, so the above policies are mainly for documentation
-- If you're using service role key in your API route, RLS is automatically bypassed
