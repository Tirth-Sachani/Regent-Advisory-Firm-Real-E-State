"use client";

import Image from "next/image";
import { useRef } from "react";
import { useFadeIn } from "@/lib/animations";

export default function About() {
  const headerRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);

  useFadeIn(headerRef, 0.1);
  useFadeIn(storyRef, 0.2);
  useFadeIn(teamRef, 0.2);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden" ref={headerRef}>
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Philosophy Background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 max-w-4xl text-center">
          <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-tertiary mb-6">Our Philosophy</h4>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Timeless Authority. Modern Precision.
          </h1>
          <p className="font-sans text-xl text-white/80 leading-relaxed mx-auto max-w-2xl">
            We are a boutique advisory firm providing uncompromising service and strategic insight to the world's most discerning real estate investors.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24" ref={storyRef}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative h-[600px] w-full bg-surface-dim">
              <Image 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Office Interior"
                fill
                className="object-cover grayscale"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-8">A Legacy of Discretion</h2>
              <div className="font-sans text-lg text-secondary/90 leading-relaxed space-y-6">
                <p>
                  Founded on the principles of trust and absolute discretion, Regent Advisory has established itself as the preeminent authority on prime London real estate.
                </p>
                <p>
                  We recognize that for our clients, real estate is more than a transaction; it is a legacy. Our advisors offer a tailored approach, drawing upon decades of collective experience, rigorous analytical research, and an unrivaled network.
                </p>
                <p>
                  From strategic acquisitions in Mayfair to portfolio diversification strategies across the UK, our commitment remains singular: protecting and enhancing our clients' wealth through astute real estate decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-surface-container-low">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-semibold text-primary">Core Tenets</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Discretion", desc: "Absolute confidentiality is the cornerstone of our client relationships. We operate with the utmost privacy at all times." },
              { title: "Expertise", desc: "Our knowledge of the prime market is both broad and granular, supported by industry-leading data analytics." },
              { title: "Integrity", desc: "We provide independent, unvarnished advice. Our interests are perfectly aligned with those of our clients." }
            ].map((value, idx) => (
              <div key={idx} className="p-8 bg-white border border-outline/10 text-center hover:border-tertiary transition-colors duration-500">
                <div className="w-12 h-12 bg-primary mx-auto mb-6 flex items-center justify-center">
                  <span className="text-tertiary font-serif text-xl font-bold">{idx + 1}</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">{value.title}</h3>
                <p className="font-sans text-secondary/80 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
