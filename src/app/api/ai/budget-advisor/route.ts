import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { income, savings, debt, category, location } = await req.json();

    if (!income || !savings) {
      return NextResponse.json({ error: 'Income and savings are required for budget analysis.' }, { status: 400 });
    }

    // This simulates an AI/Financial model evaluating purchasing power.
    // In a production app, we would query the LLM and pass financial metrics to derive this.
    
    // Simple heuristic-based calculation for simulation
    const annualIncome = Number(income);
    const totalSavings = Number(savings);
    const monthlyDebt = Number(debt) || 0;

    // Standard rule: Monthly mortgage shouldn't exceed 28% of gross monthly income
    // Total debt (including mortgage) shouldn't exceed 36%
    const monthlyIncome = annualIncome / 12;
    const maxMonthlyMortgage = Math.min(
      monthlyIncome * 0.28,
      (monthlyIncome * 0.36) - monthlyDebt
    );

    // Assume a 6% interest rate over 30 years for the simulation
    const interestRate = 0.06 / 12;
    const numPayments = 30 * 12;
    
    // Present Value formula to calculate max loan amount based on max monthly payment
    const maxLoanAmount = maxMonthlyMortgage * (
      (1 - Math.pow(1 + interestRate, -numPayments)) / interestRate
    );

    // Max property price is loan + down payment (assuming savings minus emergency fund of 3 months income)
    const availableDownPayment = Math.max(0, totalSavings - (monthlyIncome * 3));
    const maxPropertyPrice = maxLoanAmount + availableDownPayment;

    // AI Advice generation based on the calculations
    let advice = `Based on a calculated max monthly mortgage of £${Math.round(maxMonthlyMortgage).toLocaleString()} and an available down payment of £${Math.round(availableDownPayment).toLocaleString()}, `;
    
    if (maxPropertyPrice < 100000) {
      advice += `your estimated purchasing power is £${Math.round(maxPropertyPrice).toLocaleString()}. This budget might make it challenging to find properties in prime locations. We recommend focusing on accumulating a larger down payment or exploring emerging neighborhoods.`;
    } else if (maxPropertyPrice >= 100000 && maxPropertyPrice < 500000) {
      advice += `your estimated purchasing power is up to £${Math.round(maxPropertyPrice).toLocaleString()}. This puts you in a great position for apartments, row houses, or properties in standard markets.`;
    } else {
      advice += `your estimated purchasing power is up to £${Math.round(maxPropertyPrice).toLocaleString()}. You have excellent options, including premium villas, commercial spaces, and luxury properties in highly desirable locations.`;
    }

    if (availableDownPayment === 0) {
      advice += ` Note: We reserved 3 months of income from your savings as an emergency fund, which left £0 for a down payment. You may need to allocate more savings towards the down payment.`;
    }

    return NextResponse.json({
      success: true,
      data: {
        max_property_price: Math.round(maxPropertyPrice),
        max_loan_amount: Math.round(maxLoanAmount),
        available_down_payment: Math.round(availableDownPayment),
        max_monthly_mortgage: Math.round(maxMonthlyMortgage),
        ai_advice: advice
      }
    });

  } catch (error: any) {
    console.error('Budget Advisor Error:', error);
    return NextResponse.json(
      { error: 'Internal server error analyzing budget.' },
      { status: 500 }
    );
  }
}
