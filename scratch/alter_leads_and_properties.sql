-- SQL migration script to update properties and leads tables

-- 1. Add status column to properties table
ALTER TABLE public.properties ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'active';

-- 2. Add property_id and lead_source columns to leads table
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS property_id TEXT;
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS lead_source TEXT DEFAULT 'AI Recommendation Engine';
