import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json({ error: 'Question is required.' }, { status: 400 });
    }

    const normalizedQ = question.toLowerCase();

    // Standard RAG verification rules
    let matchedComplianceData = "";
    let citation = "";

    if (normalizedQ.includes('tds') || normalizedQ.includes('tax') || normalizedQ.includes('withholding')) {
      matchedComplianceData = `Tax Deducted at Source (TDS) under Section 195 must be withheld by buyers when purchasing real estate from an NRI. The withholding tax rate starts from 20% on capital gains plus applicable surcharges and cess, unless a lower tax deduction certificate is obtained from the Income Tax department.`;
      citation = "Income Tax Act, Section 195 & Section 197";
    } else if (normalizedQ.includes('nre') || normalizedQ.includes('nro') || normalizedQ.includes('banking') || normalizedQ.includes('repatriation')) {
      matchedComplianceData = `NRIs can repatriate sale proceeds of up to two residential properties. Sale proceeds must be credited to NRE/NRO accounts for outward remittance, up to USD 1 million per financial year, subject to tax clearances and Form 15CA/15CB documentation.`;
      citation = "RBI Master Circular on Remittance Facilities";
    } else if (normalizedQ.includes('sell') || normalizedQ.includes('selling') || normalizedQ.includes('disposal') || normalizedQ.includes('dispose')) {
      matchedComplianceData = `When selling real estate, Non-Resident Indians (NRIs) can sell residential or commercial property to a person resident in India, another NRI, or an OCI. However, agricultural land, plantation property, or farmhouses can only be sold to a person resident in India. Capital gains tax is applicable on all sales.`;
      citation = "FEMA Notification No. 21(R)/2015-RB";
    } else if (normalizedQ.includes('buy') || normalizedQ.includes('buying') || normalizedQ.includes('purchase') || normalizedQ.includes('rules')) {
      matchedComplianceData = `For purchasing property, NRIs are permitted to acquire residential or commercial properties. They do not require any prior approval from the Reserve Bank of India (RBI). Funds must be routed via NRE, NRO, or FCNR accounts through standard banking channels.`;
      citation = "FEMA Notification No. 21(R) / Section 3";
    } else {
      matchedComplianceData = `All prime real estate transactions demand structured due diligence including title verification, checking local planning permits, environmental surveys, and executing a formal sale deed. Contracts must be executed under seal/registered with land registries to transfer legal ownership.`;
      citation = "UK Land Registration Act 2002 / Law of Property Act 1925";
    }


    const disclaimer = `\n\n**LEGAL DISCLAIMER**: The advice above is generated for informational/structural guidance purposes and does not represent official legal or tax counsel. Please consult a qualified solicitor or licensed accountant before executing any transactions.`;

    const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    let replyText = "";

    if (geminiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey: geminiKey });
        const prompt = `
          We have matched the following regulatory context for the user's question:
          Context: "${matchedComplianceData}"
          Citation: "${citation}"
          
          User Question: "${question}"

          Draft a step-by-step clear response to the user's compliance/legal question using only the verified context. Be concise and authoritative, citing the regulation appropriately.
        `;

        const response = await ai.models.generateContent({
          model: 'gemini-1.5-flash',
          contents: prompt,
          config: {
            systemInstruction: "You are Olivia, a Wealth Compliance Officer. Be highly accurate, reference direct citations, and write professionally.",
            temperature: 0.2,
            maxOutputTokens: 250
          }
        });

        if (response.text) {
          replyText = response.text.trim();
        }
      } catch (geminiErr) {
        console.error('Gemini compliance assistant failed, fallback used:', geminiErr);
      }
    }

    if (!replyText) {
      replyText = `Regarding your inquiry: ${matchedComplianceData}\n\n*Source Citation: ${citation}*`;
    }

    return NextResponse.json({
      success: true,
      reply: replyText + disclaimer
    });

  } catch (error: any) {
    console.error('Knowledge Base RAG API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error answering legal questions.' },
      { status: 500 }
    );
  }
}
