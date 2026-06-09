import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPropertyById, properties } from "@/data/properties";
import { Button } from "@/components/ui/Button";
import { PropertyEnquiryForm } from "@/components/PropertyEnquiryForm";

// Pre-generate routes for all properties
export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const property = getPropertyById(resolvedParams.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image Section */}
      <section className="relative h-[40vh] sm:h-[60vh] min-h-[350px] sm:min-h-[500px] w-full bg-primary">
        <Image 
          src={property.images[0]} 
          alt={property.title}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d18] via-[#050d18]/45 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="container pb-12">
            <Link href="/portfolio" className="inline-block mb-6 text-sm font-sans font-semibold tracking-widest uppercase text-tertiary hover:text-white transition-colors">
              &larr; Back to Portfolio
            </Link>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              {property.title}
            </h1>
            <p className="font-sans text-base sm:text-xl text-white/90 flex items-center gap-4">
              <span>{property.location}</span>
              <span className="w-1 h-1 bg-tertiary rounded-full"></span>
              <span className="font-bold text-tertiary">{property.price}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            
            {/* Left Column - Details */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-8 py-6 border-y border-outline/10 mb-12 font-sans">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-widest uppercase text-secondary/60 mb-1">Bedrooms</span>
                  <span className="text-2xl font-serif text-primary">{property.bedrooms}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-widest uppercase text-secondary/60 mb-1">Bathrooms</span>
                  <span className="text-2xl font-serif text-primary">{property.bathrooms}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-widest uppercase text-secondary/60 mb-1">Area</span>
                  <span className="text-2xl font-serif text-primary">{property.sqft.toLocaleString()} <span className="text-base text-secondary/60">sq ft</span></span>
                </div>
              </div>

              <div className="mb-16">
                <h3 className="font-serif text-3xl font-semibold text-primary mb-6">Property Overview</h3>
                <p className="font-sans text-lg text-secondary/90 leading-relaxed">
                  {property.description}
                </p>
                <p className="font-sans text-lg text-secondary/90 leading-relaxed mt-4">
                  Further details are available upon request to qualified buyers. Our dedicated advisory team is available to arrange private viewings and provide comprehensive due diligence reports.
                </p>
              </div>

              <div className="mb-16">
                <h3 className="font-serif text-3xl font-semibold text-primary mb-6">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-secondary/90">
                  {property.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-tertiary"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="font-serif text-3xl font-semibold text-primary mb-6">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.images.slice(1).map((img, idx) => (
                    <div key={idx} className="relative h-64 w-full bg-surface-dim">
                      <Image 
                        src={img} 
                        alt={`Gallery image ${idx + 1}`}
                        fill
                        className="object-cover hover:opacity-90 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div>
              <div className="sticky top-28 bg-surface-container-low p-6 sm:p-8 border border-outline/10">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-6">Interested in this property?</h3>
                <p className="font-sans text-sm text-secondary/80 mb-8 leading-relaxed">
                  Register your interest to receive the full brochure, floor plans, and arrange a private viewing.
                </p>
                <PropertyEnquiryForm propertyId={property.id} propertyTitle={property.title} />

                <div className="mt-10 pt-8 border-t border-outline/10">
                  <h4 className="font-sans text-xs font-semibold tracking-[0.1em] uppercase text-secondary/60 mb-3">Or contact us directly</h4>
                  <p className="font-serif text-lg text-primary">+44 (0) 20 7499 9000</p>
                  <p className="font-sans text-sm text-secondary">enquiries@regentadvisory.co.uk</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
