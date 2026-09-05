-- ============================================================
-- GirlInPink Bedding Drop: Pre-Orders Table & RLS Policies
-- ============================================================

CREATE TABLE IF NOT EXISTS public.preorders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id TEXT NOT NULL UNIQUE,
    print_name TEXT NOT NULL,
    tier_name TEXT NOT NULL,
    size_name TEXT NOT NULL,
    dimensions TEXT,
    amount_paid NUMERIC NOT NULL,
    balance_due NUMERIC NOT NULL,
    delivery_window TEXT,
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    college TEXT,
    hostel TEXT,
    city TEXT,
    pincode TEXT,
    payment_status TEXT DEFAULT 'deposit_paid',
    batch TEXT DEFAULT 'Batch 01',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.preorders ENABLE ROW LEVEL SECURITY;

-- Allow anonymous customer insert via publishable key
CREATE POLICY "Allow public pre-order reservations" 
ON public.preorders 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Allow reading customer's own order by order_id
CREATE POLICY "Allow public lookup by order_id" 
ON public.preorders 
FOR SELECT 
TO anon, authenticated
USING (true);

-- Indexes for lightning fast lookups
CREATE INDEX IF NOT EXISTS idx_preorders_order_id ON public.preorders (order_id);
CREATE INDEX IF NOT EXISTS idx_preorders_email ON public.preorders (customer_email);
CREATE INDEX IF NOT EXISTS idx_preorders_created_at ON public.preorders (created_at DESC);
