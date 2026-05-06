-- Create leads table for storing contact form submissions
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    business TEXT,
    service TEXT,
    message TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'won', 'lost')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for contact form)
CREATE POLICY "Allow anonymous contact form submissions" ON public.leads
    FOR INSERT
    WITH CHECK (true);

-- Create policy to allow authenticated users to read leads (for admin)
CREATE POLICY "Allow authenticated users to read leads" ON public.leads
    FOR SELECT
    USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update leads (for admin)
CREATE POLICY "Allow authenticated users to update leads" ON public.leads
    FOR UPDATE
    USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to delete leads (for admin)
CREATE POLICY "Allow authenticated users to delete leads" ON public.leads
    FOR DELETE
    USING (auth.role() = 'authenticated');

-- Create index on created_at for faster sorting
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);

-- Create index on status for faster filtering
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);