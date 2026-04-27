"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { insights } from "@/data/insights";
import { useFadeIn, useStaggerFadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

export default function Insights() {
  const headerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useFadeIn(headerRef, 0.1);
  useStaggerFadeIn(gridRef, ".insight-card");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-20 bg-primary text-white" ref={headerRef}>
        <div className="container max-w-4xl text-center">
          <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-tertiary mb-6">Research & Analysis</h4>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Market Insights
          </h1>
          <p className="font-sans text-xl text-white/80 leading-relaxed mx-auto max-w-2xl">
            Our proprietary research provides clients with the data-driven clarity required to navigate prime real estate markets effectively.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16" ref={gridRef}>
            {insights.map((insight) => (
              <Link href="#" key={insight.id} className="insight-card group block">
                <div className="relative h-[350px] w-full mb-6 overflow-hidden">
                  <Image 
                    src={insight.imageUrl} 
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-2">
                    {insight.category}
                  </div>
                </div>
                <div className="flex justify-between items-center font-sans text-xs text-secondary/60 uppercase tracking-widest mb-3">
                  <span>{insight.date}</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4 group-hover:text-tertiary transition-colors">{insight.title}</h3>
                <p className="font-sans text-secondary/80 leading-relaxed mb-6">
                  {insight.summary}
                </p>
                <span className="font-sans text-sm font-semibold text-primary border-b border-primary pb-1 group-hover:border-tertiary group-hover:text-tertiary transition-colors">
                  Read Article
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-24 bg-surface-container-low p-12 text-center border border-outline/10">
            <h3 className="font-serif text-3xl font-semibold text-primary mb-4">Subscribe to our Intelligence</h3>
            <p className="font-sans text-secondary/80 mb-8 max-w-xl mx-auto">
              Receive our quarterly market reports and exclusive investment analysis directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-white border border-outline/20 px-6 py-4 font-sans focus:outline-none focus:border-tertiary"
              />
              <Button variant="primary">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
