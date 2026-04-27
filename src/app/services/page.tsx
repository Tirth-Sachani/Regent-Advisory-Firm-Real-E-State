"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { useFadeIn, useStaggerFadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  
  useFadeIn(heroTextRef, 0.2);
  useFadeIn(metricsRef, 0.2);
  useStaggerFadeIn(processRef, ".process-step");

  const services = [
    {
      id: "acquisitions",
      title: "Strategic Acquisitions",
      subtitle: "Securing the Unobtainable",
      description: "We act exclusively on behalf of buyers, providing unvarnished advice and access to off-market opportunities. Our bespoke search methodology ensures our clients secure the finest properties at the best possible terms.",
      features: ["Off-market access", "Rigorous due diligence", "Skilled negotiation", "Complete anonymity"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "sales",
      title: "Sales Advisory",
      subtitle: "Maximizing Asset Value",
      description: "We provide strategic guidance on the disposal of prime assets. Rather than acting as traditional brokers, we advise on the selection of the best agents, marketing strategies, and negotiation tactics to maximize returns.",
      features: ["Broker selection", "Marketing strategy", "Pricing analysis", "Transaction management"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "investment",
      title: "Investment Portfolio Strategy",
      subtitle: "Data-Driven Wealth Preservation",
      description: "For clients building or optimizing real estate portfolios, we offer comprehensive strategic advice. We analyze market cycles, yield potential, and capital appreciation prospects across different asset classes and locations.",
      features: ["Yield analysis", "Portfolio diversification", "Risk assessment", "Market forecasting"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "management",
      title: "Private Office Services",
      subtitle: "Seamless Estate Operations",
      description: "A seamless, end-to-end service managing the complex logistics of prime property ownership. From overseeing major renovations to ongoing estate management, we ensure our clients' assets are immaculately maintained.",
      features: ["Project management", "Staff recruitment", "Ongoing maintenance", "Financial reporting"],
      image: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    }
  ];

  // Number counter animation for metrics
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      const counters = document.querySelectorAll(".metric-number");
      counters.forEach((counter) => {
        const targetStr = counter.getAttribute("data-target") || "0";
        const isBillion = targetStr.includes("B");
        const isPlus = targetStr.includes("+");
        const targetValue = parseFloat(targetStr.replace(/[^0-9.]/g, ""));
        
        ScrollTrigger.create({
          trigger: counter,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.fromTo(counter, 
              { innerText: 0 },
              {
                innerText: targetValue,
                duration: 2,
                ease: "power2.out",
                snap: { innerText: isBillion ? 0.1 : 1 },
                onUpdate: function() {
                  const val = this.targets()[0].innerText;
                  counter.innerHTML = `${isBillion ? '£' : ''}${val}${isBillion ? 'B' : ''}${isPlus ? '+' : ''}`;
                }
              }
            );
          }
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Corporate Architecture"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container relative z-10 text-center" ref={heroTextRef}>
          <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-tertiary mb-6">Our Expertise</h4>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
            Advisory Services
          </h1>
          <p className="font-sans text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Independent, data-driven, and entirely client-focused. We navigate the complexities of the prime real estate market with absolute precision.
          </p>
        </div>
      </section>

      {/* 2. High-Impact Alternating Blocks */}
      <section className="py-0">
        {services.map((service, index) => (
          <div key={service.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} min-h-[80vh]`}>
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden group">
              <Image 
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            {/* Text Side */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-surface-container-lowest">
              <div className="max-w-xl">
                <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-secondary/60 mb-4 block">0{index + 1} — {service.subtitle}</span>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-8">{service.title}</h2>
                <p className="font-sans text-lg text-secondary/90 leading-relaxed mb-10">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 font-sans text-secondary">
                      <span className="w-1.5 h-1.5 bg-tertiary"></span>
                      <span className="text-sm font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. The Regent Advantage (Metrics Section) */}
      <section className="py-32 bg-primary text-white" ref={metricsRef}>
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-tertiary mb-4">The Regent Advantage</h4>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">A Proven Track Record</h2>
            <p className="font-sans text-lg text-white/70 leading-relaxed">
              Our clients rely on our undisputed market intelligence and absolute discretion to achieve their strategic real estate objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-8 md:pt-0">
              <div className="metric-number font-serif text-6xl md:text-7xl font-bold text-tertiary mb-4" data-target="£2.5B+">£0B</div>
              <p className="font-sans text-sm tracking-widest uppercase text-white/80">Advised Transactions</p>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="metric-number font-serif text-6xl md:text-7xl font-bold text-tertiary mb-4" data-target="40+">0</div>
              <p className="font-sans text-sm tracking-widest uppercase text-white/80">Years Combined Experience</p>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="metric-number font-serif text-6xl md:text-7xl font-bold text-tertiary mb-4" data-target="100%">0</div>
              <p className="font-sans text-sm tracking-widest uppercase text-white/80">Client Discretion</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Timeline */}
      <section className="py-32 bg-surface-container-low" ref={processRef}>
        <div className="container max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl font-semibold text-primary">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-outline/20"></div>
            
            <div className="process-step relative bg-background p-8 border border-outline/10 hover:border-tertiary transition-colors duration-500 z-10">
              <div className="w-16 h-16 bg-primary flex items-center justify-center text-tertiary font-serif text-2xl font-bold mb-8">1</div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Consultation</h3>
              <p className="font-sans text-secondary/80 leading-relaxed text-sm">
                A highly confidential meeting to understand your exact requirements, long-term goals, and risk profile. We assess your brief against current market realities.
              </p>
            </div>

            <div className="process-step relative bg-background p-8 border border-outline/10 hover:border-tertiary transition-colors duration-500 z-10 md:translate-y-8">
              <div className="w-16 h-16 bg-primary flex items-center justify-center text-tertiary font-serif text-2xl font-bold mb-8">2</div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Strategy</h3>
              <p className="font-sans text-secondary/80 leading-relaxed text-sm">
                Deploying our proprietary analytics and extensive off-market network, we formulate a bespoke strategy, shortlisting unparalleled opportunities.
              </p>
            </div>

            <div className="process-step relative bg-background p-8 border border-outline/10 hover:border-tertiary transition-colors duration-500 z-10">
              <div className="w-16 h-16 bg-primary flex items-center justify-center text-tertiary font-serif text-2xl font-bold mb-8">3</div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Execution</h3>
              <p className="font-sans text-secondary/80 leading-relaxed text-sm">
                From aggressive negotiation to overseeing complex legal due diligence, we manage the entire transaction with surgical precision until completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 bg-background border-t border-outline/10 text-center">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6">Require Bespoke Counsel?</h2>
          <p className="font-sans text-lg text-secondary/80 mb-10 leading-relaxed">
            Contact our senior advisory team to discuss how we can assist with your real estate portfolio.
          </p>
          <Button variant="primary" href="/contact">Schedule Consultation</Button>
        </div>
      </section>
    </div>
  );
}
