"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useMotionConfig, premiumEase, fadeInUpVariants, scaleRevealVariants } from "@/lib/animations";

// 3D Counter Component
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

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const tenetsSectionRef = useRef<HTMLElement>(null);
  const statsSectionRef = useRef<HTMLElement>(null);

  const { shouldReduceMotion } = useMotionConfig();

  const headingText = "Timeless Authority. Modern Precision.";
  const headingWords = headingText.split(" ");

  // Staggered reveal for letters with liquid metal gradient shimmer
  const letterVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30, rotateY: shouldReduceMotion ? 0 : 90 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      backgroundPosition: ["0% center", "200% center"],
      transition: {
        y: { duration: 0.8, delay: idx * 0.02, ease: premiumEase },
        rotateY: { duration: 0.8, delay: idx * 0.02, ease: premiumEase },
        opacity: { duration: 0.8, delay: idx * 0.02, ease: premiumEase },
        backgroundPosition: { repeat: Infinity, duration: 4, ease: "linear" as const, delay: idx * 0.08 }
      }
    })
  };

  // Reveal variants for story image container (optimized for maximum compatibility)
  const storyContainerVariants = {
    hidden: { 
      opacity: 0, 
      scale: shouldReduceMotion ? 1 : 0.98,
      y: shouldReduceMotion ? 0 : 25
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 1.2, ease: premiumEase }
    }
  };

  // Zoom/blur variants for story image
  const storyImageVariants = {
    hidden: { scale: 1.15, filter: "blur(4px)" },
    visible: { 
      scale: 1.02, 
      filter: "blur(0px)",
      transition: { duration: 1.8, ease: premiumEase }
    }
  };

  // SVG drawing border for cards
  const borderVariants = {
    hidden: { strokeDashoffset: 1200 },
    visible: { 
      strokeDashoffset: 0,
      transition: { duration: 1.8, ease: premiumEase }
    }
  };

  let charCount = 0;

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-x-hidden">
      
      {/* Header */}
      <section 
        className="relative pt-36 pb-28 bg-[#050d18] text-white overflow-hidden border-b border-outline/10" 
        ref={headerRef}
      >
        <div className="absolute inset-0 z-0 opacity-15">
          <Image 
            src="/about_header_land.png" 
            alt="Philosophy Background" 
            fill 
            className="object-cover scale-105"
            priority
          />
        </div>
        
        {/* Glow ambient background effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tertiary/5 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="container relative z-10 max-w-4xl text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: premiumEase }}
            className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-tertiary mb-6 block"
          >
            Our Philosophy
          </motion.span>
          
          {/* Custom Liquid Metal Letter-by-Letter heading reveal */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight uppercase">
            {headingWords.map((word, wordIdx) => (
              <span key={wordIdx} className="inline-block whitespace-nowrap mr-3 md:mr-4">
                {word.split("").map((char) => {
                  charCount++;
                  return (
                    <motion.span
                      key={charCount}
                      custom={charCount}
                      initial="hidden"
                      animate="visible"
                      variants={letterVariants}
                      className="inline-block select-none"
                      style={{
                        background: "linear-gradient(135deg, #d4af37 0%, #ffffff 25%, #d4af37 50%, #ffffff 75%, #d4af37 100%)",
                        backgroundSize: "200% center",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: premiumEase }}
            className="font-sans text-base sm:text-lg md:text-xl text-neutral/70 leading-relaxed mx-auto max-w-2xl font-light"
          >
            We are a boutique advisory firm providing uncompromising service and strategic insight to the world's most discerning real estate investors.
          </motion.p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-32 bg-[#081322] text-white border-b border-outline/10" ref={storyRef}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            
            {/* Animated Diagonal Reveal Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={storyContainerVariants}
              className="relative h-[550px] w-full bg-[#0c1c30] border border-outline/15 overflow-hidden"
            >
              <motion.img 
                variants={storyImageVariants}
                src="/about_story_land.png"
                alt="Office Interior"
                className="object-cover w-full h-full absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081322] via-transparent to-transparent opacity-40"></div>
            </motion.div>

            {/* Story Text Info */}
            <div className="flex flex-col justify-center gap-8">
              <span className="text-[10px] text-tertiary font-bold tracking-[0.2em] uppercase font-sans">Our History</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                A Legacy of Discretion
              </h2>
              <div className="font-sans text-sm sm:text-base md:text-lg text-neutral/75 leading-relaxed space-y-6 font-light">
                <div className="story-para-wrapper overflow-hidden">
                  <motion.p 
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
                  >
                    Founded on the principles of trust and absolute discretion, Regent Advisory has established itself as the preeminent authority on prime London real estate.
                  </motion.p>
                </div>
                <div className="story-para-wrapper overflow-hidden">
                  <motion.p 
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: premiumEase }}
                  >
                    We recognize that for our clients, real estate is more than a transaction; it is a legacy. Our advisors offer a tailored approach, drawing upon decades of collective experience, rigorous analytical research, and an unrivaled network.
                  </motion.p>
                </div>
                <div className="story-para-wrapper overflow-hidden">
                  <motion.p 
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: premiumEase }}
                  >
                    From strategic acquisitions in Mayfair to portfolio diversification strategies across the UK, our commitment remains singular: protecting and enhancing our clients' wealth through astute real estate decisions.
                  </motion.p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Metrics Section (Dynamic counter animation) */}
      <section 
        ref={statsSectionRef} 
        className="py-24 bg-[#060e18] text-white border-b border-outline/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-15">
          <Image 
            src="/about_metrics_land.png" 
            alt="Farmland Metrics Background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* Stat item 1 */}
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0, ease: premiumEase }}
              className="flex flex-col gap-2"
            >
              <span className="font-serif text-5xl sm:text-6xl font-bold text-tertiary">
                <Counter value={2.5} decimals={1} prefix="£" suffix="B+" />
              </span>
              <span className="text-[11px] font-sans tracking-widest uppercase text-neutral/50 mt-2">Transactions Settled</span>
            </motion.div>

            {/* Stat item 2 */}
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: premiumEase }}
              className="flex flex-col gap-2"
            >
              <span className="font-serif text-5xl sm:text-6xl font-bold text-tertiary">
                <Counter value={40} suffix="+" />
              </span>
              <span className="text-[11px] font-sans tracking-widest uppercase text-neutral/50 mt-2">Years of Advisory Experience</span>
            </motion.div>

            {/* Stat item 3 */}
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: premiumEase }}
              className="flex flex-col gap-2"
            >
              <span className="font-serif text-5xl sm:text-6xl font-bold text-tertiary">
                <Counter value={100} suffix="%" />
              </span>
              <span className="text-[11px] font-sans tracking-widest uppercase text-neutral/50 mt-2">Client Discretion Rate</span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values / Tenets */}
      <section 
        ref={tenetsSectionRef} 
        className="py-32 bg-[#050d18] text-white overflow-hidden relative"
      >
        <div className="absolute inset-0 z-0 opacity-10">
          <Image 
            src="/about_tenets_land.png" 
            alt="Farmland Tenets Background" 
            fill 
            className="object-cover scale-105"
          />
        </div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-tertiary/2 rounded-full filter blur-3xl pointer-events-none z-1"></div>

        <div className="container relative z-10">
          <div className="text-center mb-20">
            <span className="text-[10px] text-tertiary font-bold tracking-[0.2em] uppercase font-sans block mb-3">Our Standards</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white">Core Tenets</h2>
          </div>

          {/* Core Tenets Stack Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            style={{ perspective: "1200px" }}
          >
            {[
              { title: "Discretion", desc: "Absolute confidentiality is the cornerstone of our client relationships. We operate with the utmost privacy at all times." },
              { title: "Expertise", desc: "Our knowledge of the prime market is both broad and granular, supported by industry-leading data analytics." },
              { title: "Integrity", desc: "We provide independent, unvarnished advice. Our interests are perfectly aligned with those of our clients." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40, scale: shouldReduceMotion ? 1 : 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : idx * 0.15, ease: premiumEase }}
                whileHover={shouldReduceMotion ? {} : {
                  scale: 1.03,
                  y: -6,
                  borderColor: "rgba(212, 175, 55, 0.4)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
                }}
                className="tenet-card relative p-10 bg-[#081322]/80 border border-outline/10 text-center transition-all duration-300 transform-gpu overflow-visible select-none"
              >
                {/* Custom animated border SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
                  <motion.rect
                    variants={borderVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="card-svg-rect"
                    x="0" y="0"
                    width="100%" height="100%"
                    fill="none"
                    stroke="#C5A059"
                    strokeWidth="2"
                    strokeDasharray="1200"
                    strokeDashoffset="1200"
                  />
                </svg>

                <div 
                  className="w-14 h-14 bg-[#0a1b30] border border-tertiary/20 mx-auto mb-8 flex items-center justify-center rounded-sm"
                >
                  <span className="text-tertiary font-serif text-2xl font-bold">{idx + 1}</span>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                
                <p className="font-sans text-neutral/70 leading-relaxed text-sm sm:text-base font-light">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
