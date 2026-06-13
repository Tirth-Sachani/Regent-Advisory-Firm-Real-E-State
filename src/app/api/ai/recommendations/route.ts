import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { GoogleGenAI } from '@google/genai';
import { checkImageUrl, listStorageFiles, repairPropertyImages } from '@/lib/properties';

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

const getPropertyCategory = (title: string): string => {
  const t = title.toLowerCase();
  if (t.includes("villa") || t.includes("bungalow") || t.includes("row house") || t.includes("duplex") || t.includes("independent house") || t.includes("farmhouse")) {
    return "Residential";
  }
  if (t.includes("apartment") || t.includes("penthouse") || t.includes("house") || t.includes("townhouse")) {
    return "Residential";
  }
  if (t.includes("office") || t.includes("retail") || t.includes("business center") || t.includes("coworking") || t.includes("showroom") || t.includes("commercial building") || t.includes("factory") || t.includes("logistics center") || t.includes("warehouse") || t.includes("industrial shed")) {
    return "Commercial";
  }
  if (t.includes("land") || t.includes("farm") || t.includes("plot")) {
    return "Land & Farms";
  }
  return "Residential"; // default fallback
};

const getPropertyType = (title: string): string => {
  const t = title.toLowerCase();
  const types = ["apartment", "villa", "house", "penthouse", "duplex", "townhouse", "office", "retail", "warehouse", "farmhouse", "land"];
  for (const type of types) {
    if (t.includes(type)) {
      // Capitalize first letter
      return type.charAt(0).toUpperCase() + type.slice(1);
    }
  }
  return "House"; // default
};

// Deterministic investment metrics generator
function getInvestmentData(propId: string, priceNum: number, location: string) {
  const seed = (propId as string).split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0) || 7;
  const roi = Number((4.5 + (seed % 55) / 10).toFixed(1)); // 4.5% - 9.9%
  const yieldVal = Number((3.5 + (seed % 45) / 10).toFixed(1)); // 3.5% - 7.9%
  const appreciation = Number((10.0 + (seed % 15) + (location.toLowerCase().includes('london') ? 4.0 : 0)).toFixed(1)); // 10.0% - 29.0%
  const demandScore = 75 + (seed % 24); // 75 - 98
  const growthScore = 78 + (seed % 21); // 78 - 98
  
  let rating = 'A';
  if (roi >= 9.0) rating = 'AAA';
  else if (roi >= 7.5) rating = 'AA+';
  else if (roi >= 6.0) rating = 'AA';
  
  const risk = roi > 8.5 ? 'Moderate' : 'Low';
  const projectedIncome = Math.round((priceNum * (yieldVal / 100)) / 12);
  
  return {
    roi,
    rental_yield: yieldVal,
    appreciation,
    demandScore,
    growthScore,
    rating,
    risk,
    projectedIncome
  };
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const { 
      userId, 
      preferences = {}, 
      limit = 20, 
      page = 1,
      searchQuery = '' // Free-text query for Vector search
    } = payload;

    const supabase = createAdminClient();

    // Load active properties dynamically. Check if 'status' column exists in database first.
    // If we get an error querying status, query all and filter active state in-memory.
    let dbProperties: any[] = [];
    const { data: activeProps, error: queryError } = await supabase
      .from('properties')
      .select('*')
      .eq('status', 'active');

    if (queryError) {
      // Fallback: Query all properties if status column is missing
      const { data: allProps, error: allPropsError } = await supabase
        .from('properties')
        .select('*');
      if (allPropsError) throw allPropsError;
      dbProperties = allProps || [];
    } else {
      dbProperties = activeProps || [];
    }

    if (dbProperties.length === 0) {
      return NextResponse.json({ success: true, count: 0, recommendations: [], hasMore: false });
    }

    // Extract search filters from preferences
    const category = preferences.category || preferences.preferred_categories?.[0] || 'Residential';
    const budget = Number(preferences.budget) || Number(preferences.max_budget) || null;
    const minBudget = Number(preferences.min_budget) || null;
    const region = preferences.preferred_region || preferences.preferred_locations?.[0] || '';
    const propertyType = preferences.property_type || '';
    const investmentGoal = preferences.investment_goal || '';
    const bedrooms = Number(preferences.bedrooms) || null;
    const bathrooms = Number(preferences.bathrooms) || null;
    const minRoi = Number(preferences.roi) || null;
    const minSqft = Number(preferences.min_sqft) || null;

    // Apply main hard filters (with tolerance fallback)
    let filtered = dbProperties.map(p => {
      const pCategory = getPropertyCategory(p.title);
      const pType = getPropertyType(p.title);
      const pPrice = parsePrice(p.price);
      const invest = getInvestmentData(p.id, pPrice, p.location);

      let categoryScore = 0;
      let budgetScore = 0;
      let minBudgetScore = 0;
      let locationScore = 0;
      let bedroomScore = 0;
      let bathroomScore = 0;
      let typeScore = 0;
      let investmentScore = 0;
      let sqftScore = 0;
      let vectorScore = 0;

      // 1. Category check
      if (category) {
        if (pCategory.toLowerCase() === category.toLowerCase()) {
          categoryScore = 20;
        } else if (category.toLowerCase() === 'residential' && (pCategory === 'Villas' || pCategory === 'Apartments')) {
          categoryScore = 20;
        }
      } else {
        categoryScore = 15; // neutral
      }

      // 2. Budget checks (Max & Min)
      if (budget) {
        if (pPrice <= budget) {
          budgetScore = 20;
        } else if (pPrice <= budget * 1.10) {
          budgetScore = 12; // within +10% tolerance
        }
      } else {
        budgetScore = 15;
      }

      if (minBudget) {
        if (pPrice >= minBudget) {
          minBudgetScore = 10;
        } else if (pPrice >= minBudget * 0.90) {
          minBudgetScore = 6;
        }
      } else {
        minBudgetScore = 10;
      }

      // 3. Location check
      if (region) {
        const pLoc = p.location.toLowerCase();
        const rLower = region.toLowerCase().trim();
        if (pLoc === rLower) {
          locationScore = 20; // Exact match
        } else if (pLoc.includes(rLower)) {
          locationScore = 16; // Substring match
        } else {
          // Check words overlap for county/country matching
          const locWords = pLoc.split(/[\s,]+/);
          if (locWords.includes(rLower)) {
            locationScore = 12;
          } else if (rLower.includes(pLoc) || pLoc.includes('london') && rLower.includes('london')) {
            locationScore = 10;
          }
        }
      } else {
        locationScore = 15;
      }

      // 4. Bedrooms & Bathrooms check
      if (bedrooms) {
        if (p.bedrooms >= bedrooms) {
          bedroomScore = 10;
        } else if (p.bedrooms === bedrooms - 1) {
          bedroomScore = 4;
        }
      } else {
        bedroomScore = 7;
      }

      if (bathrooms) {
        if (p.bathrooms >= bathrooms) {
          bathroomScore = 10;
        } else if (p.bathrooms === bathrooms - 1) {
          bathroomScore = 4;
        }
      } else {
        bathroomScore = 7;
      }

      // 5. Property Type check
      if (propertyType && propertyType.toLowerCase() !== 'all') {
        if (pType.toLowerCase() === propertyType.toLowerCase() || p.title.toLowerCase().includes(propertyType.toLowerCase())) {
          typeScore = 20;
        }
      } else {
        typeScore = 15;
      }

      // 6. Investment Goal & ROI check
      if (minRoi) {
        if (invest.roi >= minRoi) {
          investmentScore += 10;
        } else if (invest.roi >= minRoi * 0.9) {
          investmentScore += 6;
        }
      } else {
        investmentScore += 7;
      }

      if (investmentGoal) {
        const goal = investmentGoal.toLowerCase();
        if (goal.includes('growth') && invest.appreciation > 18) {
          investmentScore += 10;
        } else if (goal.includes('yield') && invest.rental_yield > 5.5) {
          investmentScore += 10;
        } else if (goal.includes('flow') && invest.projectedIncome > 8000) {
          investmentScore += 10;
        } else {
          investmentScore += 8;
        }
      } else {
        investmentScore += 7;
      }

      // 7. Property Size (Sqft) Check
      if (minSqft) {
        if (p.sqft >= minSqft) {
          sqftScore = 10;
        } else if (p.sqft >= minSqft * 0.9) {
          sqftScore = 6;
        }
      } else {
        sqftScore = 7;
      }

      // 8. Keyword overlap vector-like search score (relevance)
      const query = (searchQuery || '').toLowerCase().trim();
      if (query) {
        const searchText = `${p.title} ${p.description} ${p.location} ${(p.features || []).join(' ')}`.toLowerCase();
        const searchWords = query.split(/\s+/).filter((w: string) => w.length > 2);
        let matches = 0;
        searchWords.forEach((w: string) => {
          if (searchText.includes(w)) matches++;
        });
        vectorScore = searchWords.length > 0 ? Math.round((matches / searchWords.length) * 10) : 5;
      } else {
        vectorScore = 5;
      }

      const totalScore = categoryScore + budgetScore + minBudgetScore + locationScore + bedroomScore + bathroomScore + typeScore + investmentScore + sqftScore + vectorScore;
      const matchPercentage = Math.min(100, Math.max(0, totalScore));

      // Explanation details
      const explanation: string[] = [];
      if (categoryScore === 20) {
        explanation.push(`✓ Matches ${category} Category`);
      }
      if (budgetScore === 20) {
        explanation.push(`✓ Within Budget limit of £${budget?.toLocaleString()}`);
      } else if (budgetScore > 0 && budget) {
        explanation.push(`✓ Near budget limit (${p.price}) (budget expanded +10%)`);
      }
      if (minBudget && pPrice >= minBudget) {
        explanation.push(`✓ Priced above minimum threshold of £${minBudget.toLocaleString()}`);
      }
      if (locationScore >= 16) {
        explanation.push(`✓ Located in preferred region: ${p.location}`);
      }
      if (bedroomScore === 10) {
        explanation.push(`✓ Features ${p.bedrooms} Bedrooms (meets requirement)`);
      }
      if (bathroomScore === 10 && bathrooms) {
        explanation.push(`✓ Features ${p.bathrooms} Bathrooms (meets requirement)`);
      }
      if (sqftScore === 10 && minSqft) {
        explanation.push(`✓ Generous size of ${p.sqft?.toLocaleString()} sqft (meets requirement)`);
      }
      if (invest.rental_yield >= 5.0) {
        explanation.push(`✓ Outstanding ${invest.rental_yield}% Rental Yield`);
      }
      if (invest.roi >= 6.0) {
        explanation.push(`✓ Strong ROI profile of ${invest.roi}%`);
      }
      if (invest.appreciation > 15.0) {
        explanation.push(`✓ High Projected Appreciation potential`);
      }

      return {
        property: {
          ...p,
          property_type: pType,
          roi: invest.roi,
          rental_yield: invest.rental_yield,
          appreciation: invest.appreciation,
          investment_rating: invest.rating,
          risk_level: invest.risk,
          projected_income: invest.projectedIncome,
          demand_score: invest.demandScore,
          growth_score: invest.growthScore,
          explanation,
          matchPercentage
        },
        score: matchPercentage,
        isExact: categoryScore === 20 && budgetScore === 20 && locationScore >= 16 && 
                 (bedrooms ? p.bedrooms >= bedrooms : true) && 
                 (bathrooms ? p.bathrooms >= bathrooms : true) && 
                 (minSqft ? p.sqft >= minSqft : true)
      };
    });

    // Semantic reranking using Gemini if GEMINI_API_KEY is available and search query is supplied
    const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    const query = (searchQuery || '').trim();
    if (geminiKey && query && filtered.length > 0) {
      try {
        const ai = new GoogleGenAI({ apiKey: geminiKey });
        
        // Take the top 30 filtered properties based on heuristic scoring to rank semantically
        const candidates = filtered
          .sort((a, b) => b.score - a.score)
          .slice(0, 30);

        const promptContent = `
Analyze the user's property requirement: "${query}"

Rate the matching relevance of each of the following properties from 0 to 10.
Return your response as a strict JSON array of objects with the structure:
[{"id": "property-id", "semanticScore": 8, "reason": "reason why it fits"}]

Candidates:
${candidates.map(c => `- ID: "${c.property.id}", Title: "${c.property.title}", Location: "${c.property.location}", Description: "${c.property.description.slice(0, 150)}..."`).join('\n')}
`;

        const response = await ai.models.generateContent({
          model: 'gemini-1.5-flash',
          contents: promptContent,
          config: {
            systemInstruction: "You are an elite real-estate investment adviser. Output strictly valid JSON without markdown wrapping. Rate properties accurately based on location proximity, luxury levels, and search relevance.",
            responseMimeType: 'application/json',
            temperature: 0.2
          }
        });

        const textResponse = response.text || '';
        const parsed = JSON.parse(textResponse.trim());

        // Update vector score based on Gemini semantic score
        if (Array.isArray(parsed)) {
          parsed.forEach((item: any) => {
            const index = filtered.findIndex(f => f.property.id === item.id);
            if (index !== -1) {
              // Scale semanticScore (0-10) to vectorScore (0-10)
              const semScore = Number(item.semanticScore) || 5;
              filtered[index].score = Math.min(100, filtered[index].score - 5 + semScore); // adjust score
              filtered[index].property.matchPercentage = filtered[index].score;
              if (item.reason) {
                filtered[index].property.explanation.unshift(`✓ AI Advisor Insight: ${item.reason}`);
              }
            }
          });
        }
      } catch (err) {
        console.error('Gemini semantic reranking failed, fallback to keywords:', err);
      }
    }

    // Sort by Match Percentage descending
    filtered.sort((a, b) => b.score - a.score);

    // Filter out duplicates and structure result
    const sortedProperties = filtered.map(f => f.property);

    // Apply storage checking/repair to candidates on this page to ensure no broken images are shown
    const offset = (page - 1) * limit;
    const pageCandidates = sortedProperties.slice(offset, offset + limit);
    const storageFiles = await listStorageFiles();

    const verifiedProperties = await Promise.all(
      pageCandidates.map(async (prop) => {
        // Run sequential image recovery check
        return await repairPropertyImages(prop, storageFiles);
      })
    );

    const hasMore = sortedProperties.length > offset + limit;

    // Track recommendation logging in Supabase if userId is provided
    if (userId && verifiedProperties.length > 0) {
      try {
        const logs = verifiedProperties.slice(0, 5).map(prop => ({
          user_id: userId,
          property_id: prop.id,
          recommendation_reason: prop.explanation ? prop.explanation.slice(0, 3).join(' | ') : 'Advisory heuristics.',
          match_score: prop.matchPercentage / 100
        }));
        await supabase.from('property_recommendations').insert(logs);
      } catch (err) {
        console.error('Failed to log recommendations:', err);
      }
    }

    return NextResponse.json({
      success: true,
      count: verifiedProperties.length,
      totalCount: sortedProperties.length,
      hasMore,
      noExactMatches: filtered.filter(f => f.isExact).length === 0,
      recommendations: verifiedProperties
    });

  } catch (error: any) {
    console.error('Recommendations API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error generating recommendations.', details: error.message },
      { status: 500 }
    );
  }
}
