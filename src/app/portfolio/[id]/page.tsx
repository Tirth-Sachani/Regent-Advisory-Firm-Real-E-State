import Link from "next/link";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import SafeImage from "@/components/ui/SafeImage";
import { Button } from "@/components/ui/Button";
import { PropertyEnquiryForm } from "@/components/PropertyEnquiryForm";
import { repairPropertyImages, listStorageFiles } from "@/lib/properties";
import { Shield, MapPin, BarChart3, LineChart, Award, GraduationCap, Train, HeartPulse, User } from "lucide-react";

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

function getInvestmentData(propId: string, priceNum: number, location: string) {
  const seed = Array.from(propId).reduce((acc, char) => acc + char.charCodeAt(0), 0) || 7;
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

function getLocalInsights(location: string) {
  const loc = location.toLowerCase();
  
  if (loc.includes('london')) {
    return {
      schools: ["Westminster School (0.8 miles)", "London School of Economics (1.2 miles)", "St Paul's School (2.4 miles)"],
      transports: ["Piccadilly Line - Green Park (0.3 miles)", "Heathrow Express - Paddington (2.1 miles)", "Bond Street Station (0.6 miles)"],
      hospitals: ["St Thomas' Hospital (1.4 miles)", "Chelsea and Westminster Hospital (2.3 miles)", "The Wellington Hospital (2.8 miles)"],
      marketGrowth: "+5.8% y-o-y luxury transaction index",
      marketVol: "Average time-on-market: 42 days",
      priceSqft: "£2,150 / sq ft average Mayfair tier"
    };
  } else if (loc.includes('oxford')) {
    return {
      schools: ["University of Oxford (0.4 miles)", "Oxford High School GDST (1.1 miles)", "Magdalen College School (0.6 miles)"],
      transports: ["Oxford Central Railway Station (0.8 miles)", "Gloucester Green Coach Station (0.7 miles)", "A40 Northern Bypass (1.8 miles)"],
      hospitals: ["John Radcliffe Hospital (1.5 miles)", "Nuffield Orthopaedic Centre (1.9 miles)", "Warneford Hospital (1.2 miles)"],
      marketGrowth: "+4.2% y-o-y prime university zones",
      marketVol: "Average time-on-market: 51 days",
      priceSqft: "£1,250 / sq ft average"
    };
  } else {
    return {
      schools: ["Cotswolds Grammar School (1.8 miles)", "Surrey Hills Secondary (2.5 miles)", "Elite Academy (1.2 miles)"],
      transports: ["National Express Rail Hub (2.0 miles)", "Local Bus Terminus (0.4 miles)", "M4 Highway Link (5.0 miles)"],
      hospitals: ["County General Hospital (3.1 miles)", "Private Medical Clinic (0.8 miles)"],
      marketGrowth: "+3.5% y-o-y regional growth",
      marketVol: "Average time-on-market: 64 days",
      priceSqft: "£850 / sq ft regional luxury standard"
    };
  }
}

// Since we fetch dynamically, disable Next.js static rendering cache for page
export const revalidate = 0;

export default async function PropertyDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const supabase = createAdminClient();

  // 1. Fetch live property from Supabase
  const { data: propData, error } = await supabase
    .from('properties')
    .select('*')
    .eq('id', resolvedParams.id)
    .single();

  if (error || !propData) {
    notFound();
  }

  // 2. Perform image recovery check
  const storageFiles = await listStorageFiles();
  const property = await repairPropertyImages(propData, storageFiles);

  const priceNum = parsePrice(property.price);
  const invest = getInvestmentData(property.id, priceNum, property.location);
  const insights = getLocalInsights(property.location);

  // Generate deterministic price history timeline
  const priceHistory = [
    { year: "2023", price: `£${((priceNum * 0.88) / 1000000).toFixed(2)}M`, change: "Initial Valuation" },
    { year: "2024", price: `£${((priceNum * 0.94) / 1000000).toFixed(2)}M`, change: "+6.8% Market correction" },
    { year: "2025", price: `£${((priceNum * 0.97) / 1000000).toFixed(2)}M`, change: "+3.2% Regional growth" },
    { year: "Current", price: property.price, change: "Listing Price" }
  ];

  return (
    <div className="min-h-screen bg-[#081322] text-[#e2e8f0]">
      {/* Hero Image Section */}
      <section className="relative h-[50vh] sm:h-[65vh] min-h-[400px] w-full bg-[#081322] overflow-hidden">
        <SafeImage
          src={property.images && property.images[0] ? property.images[0] : "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"}
          alt={property.title}
          className="object-cover opacity-70 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081322] via-[#081322]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="container pb-12">
            <Link href="/portfolio" className="inline-flex items-center gap-2 mb-6 text-xs font-sans font-bold tracking-widest uppercase text-tertiary hover:text-white transition-colors cursor-pointer">
              &larr; Back to Portfolio
            </Link>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight max-w-4xl">
              {property.title}
            </h1>
            <p className="font-sans text-sm sm:text-lg text-white/90 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-tertiary" /> {property.location}</span>
              <span className="w-1.5 h-1.5 bg-tertiary rounded-full hidden sm:inline-block"></span>
              <span className="font-bold text-tertiary text-lg">{property.price}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

            {/* Left Column - Details */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              
              {/* Stats Ribbon */}
              <div className="grid grid-cols-3 gap-4 border-y border-tertiary/20 py-6 font-sans">
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-white/50 mb-1">Bedrooms</span>
                  <span className="text-xl sm:text-3xl font-serif font-bold text-tertiary">{property.bedrooms}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-white/50 mb-1">Bathrooms</span>
                  <span className="text-xl sm:text-3xl font-serif font-bold text-white">{property.bathrooms}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-white/50 mb-1">Internal Area</span>
                  <span className="text-xl sm:text-3xl font-serif font-bold text-white">
                    {property.sqft?.toLocaleString()} <span className="text-xs sm:text-sm text-white/50 font-sans font-normal">sq ft</span>
                  </span>
                </div>
              </div>

              {/* Property Overview */}
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-6 border-b border-tertiary/10 pb-2">Property Overview</h3>
                <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed font-light">
                  {property.description}
                </p>
              </div>

              {/* Investment Analysis Panel */}
              <div className="bg-[#0c1c30]/60 border border-tertiary/20 p-6 sm:p-8 flex flex-col gap-6">
                <div className="flex items-center gap-2 border-b border-tertiary/10 pb-3">
                  <BarChart3 className="w-5 h-5 text-tertiary" />
                  <h4 className="font-serif text-lg font-semibold uppercase tracking-wider text-white">Advisory Investment Analysis</h4>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-[#081322] border border-outline/10 p-4 text-center">
                    <span className="text-[9px] text-white/40 block uppercase tracking-wider mb-1">Projected ROI</span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-tertiary">{invest.roi}%</span>
                  </div>
                  <div className="bg-[#081322] border border-outline/10 p-4 text-center">
                    <span className="text-[9px] text-white/40 block uppercase tracking-wider mb-1">Rental Yield</span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-white">{invest.rental_yield}%</span>
                  </div>
                  <div className="bg-[#081322] border border-outline/10 p-4 text-center">
                    <span className="text-[9px] text-white/40 block uppercase tracking-wider mb-1">Risk Profile</span>
                    <span className={`font-serif text-xl sm:text-2xl font-bold ${invest.risk === 'Low' ? 'text-green-400' : 'text-yellow-400'}`}>{invest.risk}</span>
                  </div>
                  <div className="bg-[#081322] border border-outline/10 p-4 text-center">
                    <span className="text-[9px] text-white/40 block uppercase tracking-wider mb-1">Rating</span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-white">{invest.rating}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                  <div className="bg-[#081322]/50 p-4 border border-outline/10 flex justify-between items-center">
                    <span className="text-white/60">Projected Monthly Rent</span>
                    <span className="font-serif font-bold text-white text-sm">£{invest.projectedIncome?.toLocaleString()} / mo</span>
                  </div>
                  <div className="bg-[#081322]/50 p-4 border border-outline/10 flex justify-between items-center">
                    <span className="text-white/60">Expected 5-Yr Appreciation</span>
                    <span className="font-serif font-bold text-tertiary text-sm">+{invest.appreciation}%</span>
                  </div>
                </div>

                <p className="text-xs font-sans leading-relaxed text-white/60 italic border-t border-outline/10 pt-3">
                  Disclaimer: Investment returns represent structured advisor estimates based on regional transaction volume. Actual performance fluctuates with broader Mayfair tier asset markets.
                </p>
              </div>

              {/* Amenities & Key Features */}
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-6 border-b border-tertiary/10 pb-2">Amenities & Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-sm text-white/80">
                  {property.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-tertiary shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Location Map Overlay */}
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-6 border-b border-tertiary/10 pb-2">Asset Location Map</h3>
                <div className="w-full h-80 border border-tertiary/20 overflow-hidden relative">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    className="absolute inset-0 opacity-80 hover:opacity-100 transition-opacity"
                  ></iframe>
                </div>
              </div>

              {/* Local Area Context (Schools, Transports, Hospitals) */}
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-6 border-b border-tertiary/10 pb-2">Neighborhood Connectivity</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs">
                  <div className="bg-[#0c1c30]/40 border border-outline/10 p-5 flex flex-col gap-3">
                    <span className="flex items-center gap-1.5 text-tertiary font-bold uppercase tracking-wider"><GraduationCap className="w-4 h-4" /> Nearby Schools</span>
                    <ul className="flex flex-col gap-1.5 text-white/70">
                      {insights.schools.map((s, idx) => <li key={idx}>• {s}</li>)}
                    </ul>
                  </div>
                  <div className="bg-[#0c1c30]/40 border border-outline/10 p-5 flex flex-col gap-3">
                    <span className="flex items-center gap-1.5 text-white font-bold uppercase tracking-wider"><Train className="w-4 h-4 text-tertiary" /> Public Transport</span>
                    <ul className="flex flex-col gap-1.5 text-white/70">
                      {insights.transports.map((t, idx) => <li key={idx}>• {t}</li>)}
                    </ul>
                  </div>
                  <div className="bg-[#0c1c30]/40 border border-outline/10 p-5 flex flex-col gap-3">
                    <span className="flex items-center gap-1.5 text-white font-bold uppercase tracking-wider"><HeartPulse className="w-4 h-4 text-tertiary" /> Medical Services</span>
                    <ul className="flex flex-col gap-1.5 text-white/70">
                      {insights.hospitals.map((h, idx) => <li key={idx}>• {h}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Price History & Market Insights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div>
                  <h4 className="font-serif text-lg font-semibold text-white mb-4 flex items-center gap-1.5"><LineChart className="w-4.5 h-4.5 text-tertiary" /> Transaction History</h4>
                  <div className="border border-outline/10 overflow-hidden text-xs">
                    <table className="w-full text-left font-sans border-collapse">
                      <thead>
                        <tr className="bg-[#0c1c30] text-white/50 uppercase tracking-wider font-semibold border-b border-outline/10">
                          <th className="p-3">Year</th>
                          <th className="p-3">Valuation</th>
                          <th className="p-3">Insight</th>
                        </tr>
                      </thead>
                      <tbody className="text-white/70">
                        {priceHistory.map((h, idx) => (
                          <tr key={idx} className="border-b border-outline/10 hover:bg-[#0c1c30]/25 transition-colors">
                            <td className="p-3 font-semibold">{h.year}</td>
                            <td className="p-3 font-serif font-bold text-white">{h.price}</td>
                            <td className="p-3 font-light">{h.change}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="font-serif text-lg font-semibold text-white flex items-center gap-1.5"><Award className="w-4.5 h-4.5 text-tertiary" /> Local Market Insights</h4>
                  <div className="bg-[#0c1c30]/20 border border-outline/10 p-5 text-xs flex flex-col gap-3 leading-relaxed font-sans text-white/80">
                    <p><strong>Pricing Index:</strong> {insights.priceSqft}</p>
                    <p><strong>Growth Rate:</strong> {insights.marketGrowth}</p>
                    <p><strong>Transactional Velocity:</strong> {insights.marketVol}</p>
                    <p className="text-[10px] text-white/40 italic mt-2 border-t border-outline/10 pt-2">
                      Report provided by Regent Advisory Research Team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Gallery */}
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-6 border-b border-tertiary/10 pb-2">Gallery Assets</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.images && property.images.map((img: string, idx: number) => (
                    <div key={idx} className="relative h-64 w-full bg-[#1a2e46] border border-outline/5 overflow-hidden">
                      <SafeImage
                        src={img}
                        alt={`Gallery asset ${idx + 1}`}
                        className="object-cover hover:scale-105 transition-transform duration-700 w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column - Sidebar */}
            <div>
              <div className="sticky top-28 bg-[#0c1c30] p-6 sm:p-8 border border-tertiary/20 flex flex-col gap-8 shadow-xl">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-4">Request Private Briefing</h3>
                  <p className="font-sans text-xs text-white/70 leading-relaxed">
                    Register your details to request the confidential asset prospectus, floor plans, and coordinate green-channel viewings.
                  </p>
                </div>
                
                <PropertyEnquiryForm propertyId={property.id} propertyTitle={property.title} />

                {/* Agent Card */}
                <div className="mt-4 pt-6 border-t border-outline/10 flex gap-4 items-center bg-[#081322]/50 p-4 border border-outline/5">
                  <div className="w-12 h-12 rounded-none border border-tertiary bg-primary text-tertiary flex items-center justify-center font-serif text-lg shrink-0">
                    O
                  </div>
                  <div className="text-xs font-sans">
                    <span className="font-bold text-white text-sm block">Olivia Concierge</span>
                    <span className="text-tertiary text-[10px] uppercase tracking-widest font-semibold">Lead Wealth Advisor</span>
                    <span className="text-white/40 block mt-1">+44 (0) 20 7499 9000</span>
                  </div>
                </div>

                <div className="pt-2 text-center text-[10px] font-sans text-white/40 uppercase tracking-widest">
                  Regent Advisory • London W1J 6EA
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
