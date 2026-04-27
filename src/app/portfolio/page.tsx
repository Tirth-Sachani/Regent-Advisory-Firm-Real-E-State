"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { properties } from "@/data/properties";
import { useFadeIn, useStaggerFadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

export default function Portfolio() {
  const headerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useFadeIn(headerRef, 0.1);
  useStaggerFadeIn(gridRef, ".property-card");

  const [visibleCount, setVisibleCount] = useState(12);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, properties.length));
    // After loading more, we might want to re-trigger ScrollTrigger. GSAP handles it if we refresh.
    setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
        (window as any).ScrollTrigger.refresh();
      }
    }, 100);
  };

  const visibleProperties = properties.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden" ref={headerRef}>
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Portfolio Background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 max-w-4xl text-center">
          <h4 className="font-sans text-xs font-semibold tracking-[0.1em] uppercase text-tertiary mb-4">Exclusive Collection</h4>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="font-sans text-lg text-white/80 leading-relaxed mx-auto max-w-2xl">
            A curated selection of the finest prime real estate across London. From historic Mayfair townhouses to contemporary penthouses.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-outline/10 pb-6">
            <p className="font-sans text-sm text-secondary font-semibold uppercase tracking-widest mb-4 md:mb-0">
              Showing {visibleCount} of {properties.length} Properties
            </p>
            <div className="flex gap-4 font-sans text-sm">
              <select className="bg-transparent border border-outline/20 px-4 py-2 text-primary focus:outline-none focus:border-tertiary">
                <option>Sort by Price: High to Low</option>
                <option>Sort by Price: Low to High</option>
                <option>Sort by Newest</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16" ref={gridRef}>
            {visibleProperties.map((prop) => (
              <Link href={`/portfolio/${prop.id}`} key={prop.id} className="property-card group cursor-pointer block">
                <div className="relative h-[450px] w-full mb-6 overflow-hidden bg-surface-dim">
                  <Image 
                    src={prop.images[0]} 
                    alt={prop.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 shadow-sm">
                    {prop.location}
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-3 group-hover:text-tertiary transition-colors">{prop.title}</h3>
                <p className="font-sans text-sm text-secondary/70 line-clamp-2 mb-4 leading-relaxed">
                  {prop.description}
                </p>
                <div className="flex justify-between items-center text-primary font-sans text-sm border-t border-outline/10 pt-4 mt-auto">
                  <span className="font-bold">{prop.price}</span>
                  <span className="flex items-center gap-4 text-secondary">
                    <span>{prop.bedrooms} Bed</span>
                    <span>{prop.bathrooms} Bath</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {visibleCount < properties.length && (
            <div className="mt-20 text-center">
              <Button variant="secondary" onClick={loadMore}>Load More Properties</Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
