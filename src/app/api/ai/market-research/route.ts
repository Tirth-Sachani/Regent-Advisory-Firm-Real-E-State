import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { createAdminClient } from '@/lib/supabase/admin';

export async function POST(req: NextRequest) {
  try {
    const { zone = 'Mayfair' } = await req.json();

    const mockPriceData = {
      Mayfair: { avgSquareFootCost: 2450, quarterlyAppreciation: '1.2%', inventoryVolume: 42 },
      Belgravia: { avgSquareFootCost: 2600, quarterlyAppreciation: '1.8%', inventoryVolume: 28 },
      Knightsbridge: { avgSquareFootCost: 2550, quarterlyAppreciation: '1.4%', inventoryVolume: 35 },
      Kensington: { avgSquareFootCost: 2200, quarterlyAppreciation: '0.9%', inventoryVolume: 50 },
      Richmond: { avgSquareFootCost: 1100, quarterlyAppreciation: '2.4%', inventoryVolume: 65 }
    };

    const targetData = mockPriceData[zone as keyof typeof mockPriceData] || mockPriceData.Mayfair;

    const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    let researchReport = `### Market Overview: ${zone}\n\nOur data models indicate that ${zone} currently commands an average prime valuation of **£${targetData.avgSquareFootCost.toLocaleString()} per sq ft**. Over the preceding fiscal quarter, transaction logs revealed a capital appreciation growth of **${targetData.quarterlyAppreciation}**, alongside an inventory depth of **${targetData.inventoryVolume} listings**.\n\nHistorically, this area serves as a safe-haven wealth asset class, exhibiting robust resistance to global interest rate cycles.`;

    if (geminiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey: geminiKey });
        const prompt = `
          Draft a high-end, authoritative market analysis report for the region of ${zone}, London.
          Data parameters:
          - Average square foot cost: £${targetData.avgSquareFootCost}
          - Quarterly capital appreciation: ${targetData.quarterlyAppreciation}
          - Active listings in database: ${targetData.inventoryVolume}

          Use an elite, academic financial advisory tone. Break down the quarter-over-quarter price shifts, identify yield drivers, and outline a 12-month growth outlook. Limit the report to 250 words and format as clean Markdown.
        `;

        const response = await ai.models.generateContent({
          model: 'gemini-1.5-flash',
          contents: prompt,
          config: {
            systemInstruction: "You are Olivia, a Lead Real Estate Economist. Provide professional real estate summaries.",
            temperature: 0.75,
            maxOutputTokens: 350
          }
        });

        if (response.text) {
          researchReport = response.text.trim();
        }
      } catch (geminiErr) {
        console.error('Gemini research report generation failed, fallback used:', geminiErr);
      }
    }

    // Save report to database market_reports collection
    const supabase = createAdminClient();
    supabase.from('market_reports').insert([
      {
        geographic_zone: zone,
        average_square_cost: targetData.avgSquareFootCost,
        market_narrative_text: researchReport
      }
    ]).then(({ error }) => {
      if (error) console.error('Failed to save market report:', error);
    });

    return NextResponse.json({
      success: true,
      data: {
        zone,
        statistics: targetData,
        reportMarkdown: researchReport
      }
    });

  } catch (error: any) {
    console.error('Market Research Error:', error);
    return NextResponse.json(
      { error: 'Internal server error generating market report.' },
      { status: 500 }
    );
  }
}
