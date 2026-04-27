"use client";

import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { useFadeIn, useStaggerFadeIn } from "@/lib/animations";
import { properties } from "@/data/properties";
import Link from "next/link";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useFadeIn(heroRef, 0.2);
  useStaggerFadeIn(featuredRef, ".feature-card");
  useFadeIn(ctaRef, 0.2);

  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] min-h-[600px] flex items-center bg-primary overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Property Background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10" ref={heroRef}>
          <div className="max-w-3xl">
            <h1 className="text-white font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Timeless Authority in British Real Estate
            </h1>
            <p className="text-neutral/80 font-sans text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Discreet, expert advisory for high-net-worth individuals and institutional investors navigating the prime London market.
            </p>
            <div className="flex gap-4">
              <Button href="/portfolio" variant="primary">Explore Portfolio</Button>
              <Button href="/contact" variant="secondary" className="border-white text-white hover:bg-white hover:text-primary">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6">A Legacy of Trust</h2>
              <p className="font-sans text-lg text-secondary/80 leading-relaxed mb-8">
                At Regent Advisory, we believe that exceptional real estate requires an equally exceptional level of service. Our approach is founded on discretion, deep market knowledge, and an unwavering commitment to our clients' long-term success.
              </p>
              <Button href="/about" variant="ghost" className="font-bold border-b border-primary text-primary hover:border-tertiary uppercase text-sm tracking-widest pb-1">Our Philosophy</Button>
            </div>
            <div className="relative h-[500px] w-full">
              <Image 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Corporate Architecture"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="py-24 bg-surface-container-low" ref={featuredRef}>
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h4 className="font-sans text-xs font-semibold tracking-[0.1em] uppercase text-tertiary mb-3">Curated Collection</h4>
              <h2 className="font-serif text-4xl font-semibold text-primary">Featured Properties</h2>
            </div>
            <Button href="/portfolio" variant="ghost" className="hidden md:inline-flex border-b border-primary pb-1">View All</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((prop) => (
              <Link href={`/portfolio/${prop.id}`} key={prop.id} className="feature-card group cursor-pointer">
                <div className="relative h-[400px] w-full mb-6 overflow-hidden">
                  <Image 
                    src={prop.images[0]} 
                    alt={prop.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-2">
                    {prop.location}
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-2 group-hover:text-tertiary transition-colors">{prop.title}</h3>
                <div className="flex justify-between items-center text-secondary/80 font-sans text-sm">
                  <span>{prop.price}</span>
                  <span className="flex items-center gap-4">
                    <span>{prop.bedrooms} Bed</span>
                    <span>{prop.bathrooms} Bath</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center" ref={ctaRef}>
        <div className="container max-w-4xl">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Begin Your Journey</h2>
          <p className="font-sans text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you are acquiring a flagship residence or expanding your investment portfolio, our advisors are ready to guide you with unparalleled precision.
          </p>
          <Button href="/contact" variant="secondary" className="border-tertiary text-tertiary hover:bg-tertiary hover:text-white">Schedule a Consultation</Button>
        </div>
      </section>
    </div>
  );
}
