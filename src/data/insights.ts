export interface Insight {
  id: string;
  title: string;
  date: string;
  category: "Market Report" | "Investment Strategy" | "Area Guide" | "Economic Outlook";
  summary: string;
  imageUrl: string;
}

export const insights: Insight[] = [
  {
    id: "insight-001",
    title: "Q3 Prime Central London Market Review",
    date: "October 15, 2026",
    category: "Market Report",
    summary: "An in-depth analysis of transaction volumes and pricing trends across Mayfair, Knightsbridge, and Kensington following the autumn budget.",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "insight-002",
    title: "Navigating the New Tax Landscape for International Buyers",
    date: "September 28, 2026",
    category: "Economic Outlook",
    summary: "How recent legislative changes impact overseas investment in the UK luxury property sector, featuring expert tax commentary.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "insight-003",
    title: "The Renaissance of Marylebone: An Area Guide",
    date: "August 12, 2026",
    category: "Area Guide",
    summary: "Exploring the sustained demand for Marylebone real estate, driven by its village atmosphere and world-class retail.",
    imageUrl: "https://images.unsplash.com/photo-1656658943577-48b2d3eb7d6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1hcnlsZWJvbmV8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "insight-004",
    title: "Sustainable Luxury: The Rise of Eco-Estates",
    date: "July 05, 2026",
    category: "Investment Strategy",
    summary: "Why ESG credentials are becoming the primary driver of capital appreciation in the super-prime country house market.",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];
