import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

function parsePrice(priceStr: string): number {
  const cleaned = priceStr.replace(/[£,\s]/g, '');
  if (cleaned.toUpperCase().endsWith('M')) {
    return parseFloat(cleaned) * 1000000;
  }
  if (cleaned.toUpperCase().endsWith('K')) {
    return parseFloat(cleaned) * 1000;
  }
  return parseFloat(cleaned) || 0;
}

export async function POST(req: NextRequest) {
  try {
    const { userId, preferences, limit = 5 } = await req.json();

    const supabase = createAdminClient();

    // 1. Fetch user preferences if userId is provided and preferences are missing
    let searchPreferences = preferences;
    if (!searchPreferences && userId) {
      const { data: userPref } = await supabase
        .from('user_preferences')
        .select('*')
        .eq('user_id', userId)
        .single();
      
      if (userPref) {
        searchPreferences = userPref;
      }
    }

    if (!searchPreferences) {
      return NextResponse.json({ 
        error: 'Preferences must be provided either in the request body or exist in the database.' 
      }, { status: 400 });
    }

    // Load all properties to safely perform in-memory parsing and filtering
    const { data: properties, error: dbError } = await supabase
      .from('properties')
      .select('*');

    if (dbError) {
      throw dbError;
    }

    if (!properties) {
      return NextResponse.json({ success: true, count: 0, recommendations: [] });
    }

    // 2. Perform robust in-memory filtering
    let filtered = properties;

    // Filter by category (Commercial vs Residential)
    if (searchPreferences.preferred_categories && searchPreferences.preferred_categories.length > 0) {
      const preferred = searchPreferences.preferred_categories.map((c: string) => c.toLowerCase());
      filtered = filtered.filter(p => {
        const titleLower = p.title.toLowerCase();
        const descLower = p.description.toLowerCase();
        const isCommercialProperty = titleLower.includes('commercial') || titleLower.includes('office') || titleLower.includes('workspace') || descLower.includes('commercial') || descLower.includes('office');
        
        if (preferred.includes('commercial') && isCommercialProperty) return true;
        if (preferred.includes('residential') && !isCommercialProperty) return true;
        
        // If they ask for something else specifically, match via keyword
        return preferred.some((c: string) => titleLower.includes(c) || descLower.includes(c));
      });
    }

    // Filter by budget using parsed price values
    if (searchPreferences.min_budget) {
      const minVal = Number(searchPreferences.min_budget);
      filtered = filtered.filter(p => parsePrice(p.price) >= minVal);
    }

    if (searchPreferences.max_budget) {
      const maxVal = Number(searchPreferences.max_budget);
      filtered = filtered.filter(p => parsePrice(p.price) <= maxVal);
    }

    // Filter by location keywords
    if (searchPreferences.preferred_locations && searchPreferences.preferred_locations.length > 0) {
      const locations = searchPreferences.preferred_locations.map((loc: string) => loc.toLowerCase().trim());
      filtered = filtered.filter(p => {
        const locLower = p.location.toLowerCase();
        return locations.some((l: string) => locLower.includes(l));
      });
    }

    // Apply limit
    const recommendations = filtered.slice(0, limit);

    // 3. Log recommendations for the user
    if (userId && recommendations.length > 0) {
      const recsToInsert = recommendations.map((prop: any) => ({
        user_id: userId,
        property_id: prop.id,
        recommendation_reason: 'Matched based on your structured preferences.',
        match_score: 0.90
      }));

      // Fire and forget logging
      supabase.from('property_recommendations').insert(recsToInsert).then(({ error }) => {
        if (error) console.error('Failed to log recommendations:', error);
      });
    }

    return NextResponse.json({
      success: true,
      count: recommendations.length,
      recommendations
    });

  } catch (error: any) {
    console.error('Recommendations Error:', error);
    return NextResponse.json(
      { error: 'Internal server error generating recommendations.' },
      { status: 500 }
    );
  }
}

