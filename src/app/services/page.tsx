"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { motion, useInView, animate } from "framer-motion";
import { useMotionConfig, premiumEase, fadeInUpVariants, scaleRevealVariants } from "@/lib/animations";

// Stats Counter Component
interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

function Counter({ value, duration = 2, suffix = "", prefix = "", decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setCount(latest);
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  
  const { shouldReduceMotion } = useMotionConfig();

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

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[50vh] sm:h-[70vh] min-h-[350px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Corporate Architecture"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container relative z-10 text-center" ref={heroRef}>
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: premiumEase }}
            className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-tertiary mb-6 block"
          >
            Our Expertise
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: premiumEase }}
            className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Advisory Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: premiumEase }}
            className="font-sans text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
          >
            Independent, data-driven, and entirely client-focused. We navigate the complexities of the prime real estate market with absolute precision.
          </motion.p>
        </div>
      </section>

      {/* 2. High-Impact Alternating Blocks */}
      <section className="py-0">
        {services.map((service, index) => (
          <div key={service.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} min-h-[80vh]`}>
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.0, ease: premiumEase }}
              className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden group"
            >
              <Image 
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
            
            {/* Text Side */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-surface-container-lowest">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-xl"
              >
                <motion.span 
                  variants={fadeInUpVariants}
                  custom={{ delay: 0 }}
                  className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-secondary/60 mb-4 block"
                >
                  0{index + 1} — {service.subtitle}
                </motion.span>
                
                <motion.h2 
                  variants={fadeInUpVariants}
                  custom={{ delay: 0.15 }}
                  className="font-serif text-2xl sm:text-4xl md:text-5xl font-semibold text-primary mb-8"
                >
                  {service.title}
                </motion.h2>
                
                <motion.p 
                  variants={fadeInUpVariants}
                  custom={{ delay: 0.3 }}
                  className="font-sans text-lg text-secondary/90 leading-relaxed mb-10"
                >
                  {service.description}
                </motion.p>
                
                <motion.div 
                  variants={fadeInUpVariants}
                  custom={{ delay: 0.45 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8"
                >
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 font-sans text-secondary">
                      <span className="w-1.5 h-1.5 bg-tertiary"></span>
                      <span className="text-sm font-semibold">{feature}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. The Regent Advantage (Metrics Section) */}
      <section ref={metricsRef} className="relative py-16 sm:py-24 md:py-32 bg-primary text-white">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h4 
              variants={fadeInUpVariants}
              custom={{ delay: 0 }}
              className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-tertiary mb-4"
            >
              The Regent Advantage
            </motion.h4>
            <motion.h2 
              variants={fadeInUpVariants}
              custom={{ delay: 0.15 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              A Proven Track Record
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              custom={{ delay: 0.3 }}
              className="font-sans text-lg text-white/70 leading-relaxed"
            >
              Our clients rely on our undisputed market intelligence and absolute discretion to achieve their strategic real estate objectives.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0, ease: premiumEase }}
              className="pt-8 md:pt-0"
            >
              <div className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-tertiary mb-4">
                <Counter value={2.5} decimals={1} prefix="£" suffix="B+" />
              </div>
              <p className="font-sans text-sm tracking-widest uppercase text-white/80">Advised Transactions</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: premiumEase }}
              className="pt-8 md:pt-0"
            >
              <div className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-tertiary mb-4">
                <Counter value={40} suffix="+" />
              </div>
              <p className="font-sans text-sm tracking-widest uppercase text-white/80">Years Combined Experience</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: premiumEase }}
              className="pt-8 md:pt-0"
            >
              <div className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-tertiary mb-4">
                <Counter value={100} suffix="%" />
              </div>
              <p className="font-sans text-sm tracking-widest uppercase text-white/80">Client Discretion</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Process Timeline */}
      <section ref={processRef} className="py-16 sm:py-24 md:py-32 bg-surface-container-low">
        <div className="container max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl font-semibold text-primary">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-outline/20"></div>
            
            {[
              {
                step: 1,
                title: "Consultation",
                desc: "A highly confidential meeting to understand your exact requirements, long-term goals, and risk profile. We assess your brief against current market realities.",
                shift: false
              },
              {
                step: 2,
                title: "Strategy",
                desc: "Deploying our proprietary analytics and extensive off-market network, we formulate a bespoke strategy, shortlisting unparalleled opportunities.",
                shift: true
              },
              {
                step: 3,
                title: "Execution",
                desc: "From aggressive negotiation to overseeing complex legal due diligence, we manage the entire transaction with surgical precision until completion.",
                shift: false
              }
            ].map((proc, idx) => (
              <motion.div
                key={proc.step}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : idx * 0.15, ease: premiumEase }}
                className={`relative bg-background p-6 sm:p-8 border border-outline/10 hover:border-tertiary transition-colors duration-500 z-10 ${proc.shift ? 'md:translate-y-8' : ''}`}
              >
                <div className="w-16 h-16 bg-primary flex items-center justify-center text-tertiary font-serif text-2xl font-bold mb-8">{proc.step}</div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">{proc.title}</h3>
                <p className="font-sans text-secondary/80 leading-relaxed text-sm">
                  {proc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 bg-background border-t border-outline/10 text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleRevealVariants}
          custom={{ delay: 0, duration: 0.8 }}
          className="container max-w-3xl"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6">Require Bespoke Counsel?</h2>
          <p className="font-sans text-lg text-secondary/80 mb-10 leading-relaxed">
            Contact our senior advisory team to discuss how we can assist with your real estate portfolio.
          </p>
          <Button variant="primary" href="/contact">Schedule Consultation</Button>
        </motion.div>
      </section>
    </div>
  );
}
