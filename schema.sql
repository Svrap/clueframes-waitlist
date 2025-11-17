-- ClueFrames Waitlist Leads Table
-- Safe, separate from main app tables
-- Copy this SQL and run it in your Supabase SQL Editor

create table waitlist_leads (
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
