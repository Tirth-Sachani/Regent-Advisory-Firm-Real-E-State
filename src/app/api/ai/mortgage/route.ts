import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(req: NextRequest) {
  try {
    const { principal, interestRate, tenureYears } = await req.json();

    if (!principal || !interestRate || !tenureYears) {
      return NextResponse.json({ error: 'Principal, interest rate, and tenure are required.' }, { status: 400 });
    }

    const P = Number(principal);
    const r = (Number(interestRate) / 100) / 12;
    const n = Number(tenureYears) * 12;

    // Monthly EMI Calculation
    const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);

    // Amortization Schedule (Summary)
    let totalInterest = 0;
    const yearlySchedule = [];
    let balance = P;

    for (let year = 1; year <= Number(tenureYears); year++) {
      let principalPaidYearly = 0;
      let interestPaidYearly = 0;

      for (let month = 1; month <= 12; month++) {
        const interestPaid = balance * r;
        const principalPaid = emi - interestPaid;
        interestPaidYearly += interestPaid;
        principalPaidYearly += principalPaid;
        balance -= principalPaid;
      }

      totalInterest += interestPaidYearly;
      yearlySchedule.push({
        year,
        emiPaid: Math.round(emi * 12),
        principalPaid: Math.round(principalPaidYearly),
        interestPaid: Math.round(interestPaidYearly),
        remainingBalance: Math.max(0, Math.round(balance))
      });
    }

    const totalPayout = P + totalInterest;

    // Gemini Advisory prompt
    const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    let advisoryNarrative = `For a loan of £${P.toLocaleString()} at an annual rate of ${interestRate}% over ${tenureYears} years: your monthly EMI is estimated at £${Math.round(emi).toLocaleString()}. Over the lifetime of this loan, you will pay a total of £${Math.round(totalInterest).toLocaleString()} in interest, bringing your total outflow to £${Math.round(totalPayout).toLocaleString()}. We recommend paying 1 extra EMI annually to save roughly 3.5 years of tenure.`;

    if (geminiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey: geminiKey });
        const prompt = `
          Amortization Parameters:
          - Loan Principal: £${P}
          - Interest Rate: ${interestRate}% per annum
          - Tenure: ${tenureYears} years
          - Monthly EMI: £${Math.round(emi)}
          - Total Interest Paid: £${Math.round(totalInterest)}
          - Total Payout: £${Math.round(totalPayout)}

          Explain the long-term interest trajectory, suggest strategic prepayment actions (e.g., how making extra payments early cuts principal, saving years of interest), and briefly note how a shifting rate environment could impact this loan. Keep your advice professional, elite, and under 150 words.
        `;

        const response = await ai.models.generateContent({
          model: 'gemini-1.5-flash',
          contents: prompt,
          config: {
            systemInstruction: "You are Olivia, a highly successful Senior Wealth Advisory Lead. Be exceptionally intelligent, professional, and clear.",
            temperature: 0.7,
            maxOutputTokens: 250
          }
        });

        if (response.text) {
          advisoryNarrative = response.text.trim();
        }
      } catch (geminiErr) {
        console.error('Gemini Mortgage advisor failed, fallback used:', geminiErr);
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        emi: Math.round(emi),
        totalInterest: Math.round(totalInterest),
        totalPayout: Math.round(totalPayout),
        yearlySchedule,
        advisoryNarrative
      }
    });

  } catch (error: any) {
    console.error('Mortgage API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error calculating mortgage parameters.' },
      { status: 500 }
    );
  }
}
