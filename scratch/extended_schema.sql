-- Enable pgvector extension for AI property matching and embeddings
CREATE EXTENSION IF NOT EXISTS vector;

-- 1. Conversation History Table (AI Assistant memory)
CREATE TABLE IF NOT EXISTS chat_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL, -- Optional, for authenticated users
    session_title VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_active TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'::jsonb -- Can store preferred locations, budget range, etc. extracted over time
);

CREATE TABLE IF NOT EXISTS chat_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES chat_sessions(id) ON DELETE CASCADE,
    role VARCHAR(50) NOT NULL, -- 'user', 'assistant', 'system'
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. User Preferences (Lead Tracking & Personalization)
CREATE TABLE IF NOT EXISTS user_preferences (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
    preferred_categories TEXT[] DEFAULT '{}', -- e.g., ['Residential', 'Commercial']
    min_budget DECIMAL(15, 2),
    max_budget DECIMAL(15, 2),
    preferred_locations TEXT[] DEFAULT '{}',
    search_vector vector(1536), -- Vector representation of their ideal property description
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Lead Qualifications Table
CREATE TABLE IF NOT EXISTS lead_qualifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    session_id UUID REFERENCES chat_sessions(id) ON DELETE SET NULL,
    contact_info JSONB, -- Email, Phone parsed from chat
    qualification_score INTEGER DEFAULT 0, -- 0-100 based on intent and timeline
    timeline VARCHAR(100), -- 'Immediate', '1-3 months', etc.
    primary_interest TEXT, -- Main category/type they are looking for
    status VARCHAR(50) DEFAULT 'New', -- 'New', 'Contacted', 'Qualified', 'Lost'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Property Recommendations Tracking
CREATE TABLE IF NOT EXISTS property_recommendations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
    recommendation_reason TEXT,
    match_score DECIMAL(5, 4), -- e.g., 0.9500
    status VARCHAR(50) DEFAULT 'Suggested', -- 'Suggested', 'Viewed', 'Shortlisted', 'Rejected'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Note: In a real environment, you would also need to add a `description_vector vector(1536)` column
-- to your existing `properties` table and populate it with OpenAI embeddings for vector search.
-- ALTER TABLE properties ADD COLUMN IF NOT EXISTS description_vector vector(1536);
