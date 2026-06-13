import fs from 'fs';
import path from 'path';

// Manually load environmental variables from .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const firstEqual = trimmed.indexOf('=');
      if (firstEqual !== -1) {
        const key = trimmed.slice(0, firstEqual).trim();
        const val = trimmed.slice(firstEqual + 1).trim();
        process.env[key] = val;
      }
    }
  });
}

import { NextRequest } from 'next/server';
import { POST as recsPost } from '../src/app/api/ai/recommendations/route';
import { POST as leadPost } from '../src/app/api/crm/lead/route';
import { GET as metricsGet } from '../src/app/api/admin/metrics/route';

async function runTests() {
  console.log("=== STARTING AI RECOMMENDATION ENGINE TESTS ===");

  // 1. Test Admin Metrics GET
  try {
    console.log("\nTesting GET /api/admin/metrics...");
    const req = new NextRequest('http://localhost:3000/api/admin/metrics');
    const res = await metricsGet(req);
    const body = await res.json();
    console.log("Admin Metrics Response status:", res.status);
    console.log("Admin Metrics Response body properties:", Object.keys(body));
    if (body.success && body.stats) {
      console.log("✅ Admin Metrics Test Passed!");
      console.log(`- Total Properties: ${body.stats.totalProperties}`);
      console.log(`- Missing Images: ${body.stats.propertiesMissingImages}`);
      console.log(`- Top Saved: ${body.stats.topSaved?.length} assets`);
      console.log(`- Top Recommended: ${body.stats.topRecommended?.length} assets`);
    } else {
      console.error("❌ Admin Metrics Test Failed:", body);
    }
  } catch (err: any) {
    console.error("❌ Admin Metrics Test Exception:", err.message);
  }

  // 2. Test Property Recommendations POST
  try {
    console.log("\nTesting POST /api/ai/recommendations...");
    const payload = {
      preferences: {
        category: "Residential",
        budget: 15000000,
        min_budget: 1000000,
        preferred_region: "London",
        property_type: "apartment",
        investment_goal: "Capital Growth",
        bedrooms: 2,
        bathrooms: 2,
        roi: 5.0,
        min_sqft: 800
      },
      searchQuery: "luxury penthouse with yield"
    };
    const req = new NextRequest('http://localhost:3000/api/ai/recommendations', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    const res = await recsPost(req);
    const body = await res.json();
    console.log("Recommendations Response status:", res.status);
    if (body.success && body.recommendations) {
      console.log("✅ Recommendations Test Passed!");
      console.log(`- Recommendations count: ${body.count}`);
      console.log(`- Total matches in DB: ${body.totalCount}`);
      if (body.recommendations.length > 0) {
        const first = body.recommendations[0];
        console.log(`- Sample Match: ${first.title} (${first.matchPercentage}% Match)`);
        console.log(`- Match explanations:`, first.explanation);
        console.log(`- Dynamic ROI/Yield: ROI: ${first.roi}%, Yield: ${first.rental_yield}%`);
        console.log(`- Dynamic Type/Score: Type: ${first.property_type}, Score: ${first.demand_score}/100`);
      }
    } else {
      console.error("❌ Recommendations Test Failed:", body);
    }
  } catch (err: any) {
    console.error("❌ Recommendations Test Exception:", err.message);
  }

  // 3. Test CRM Lead POST
  try {
    console.log("\nTesting POST /api/crm/lead...");
    const payload = {
      name: "Lord Test Admin",
      email: "testadmin@regentadvisory.com",
      phone: "+44 7700 900088",
      propertyId: "prop-001"
    };
    const req = new NextRequest('http://localhost:3000/api/crm/lead', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    const res = await leadPost(req);
    const body = await res.json();
    console.log("CRM Lead Response status:", res.status);
    if (body.success && body.leadId) {
      console.log("✅ CRM Lead Test Passed! Registered lead ID:", body.leadId);
    } else {
      console.error("❌ CRM Lead Test Failed:", body);
    }
  } catch (err: any) {
    console.error("❌ CRM Lead Test Exception:", err.message);
  }

  console.log("\n=== COMPLETED AI RECOMMENDATION ENGINE TESTS ===");
}

runTests();
