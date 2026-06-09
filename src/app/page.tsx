"use client";

import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { properties } from "@/data/properties";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useMotionConfig, premiumEase, fadeInUpVariants, scaleRevealVariants } from "@/lib/animations";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const philosophySectionRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { shouldReduceMotion } = useMotionConfig();

  // Scroll tracking for philosophy vertical drawing line
  const { scrollYProgress } = useScroll({
    target: philosophySectionRef,
    offset: ["start end", "end start"]
  });
  
  // Maps scroll progress to dash offset (from fully hidden to fully drawn)
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.8], [1000, 0]);
  const lineSpring = useSpring(lineProgress, { stiffness: 80, damping: 25 });

  // Floating geometries breathing animations configurations
  const floatingAnimation = (yRange: number, xRange: number, duration: number) => ({
    y: shouldReduceMotion ? 0 : [0, yRange, 0],
    x: shouldReduceMotion ? 0 : [0, xRange, 0],
    rotate: shouldReduceMotion ? 0 : [0, yRange / 2, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  });

  const featuredProperties = properties.slice(0, 3);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-[#081322] text-white overflow-x-hidden">
      
      {/* Immersive Split-Gate Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen w-full flex items-center justify-center bg-[#081322] overflow-hidden"
      >
        {/* Background Image underneath the sliding gate */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/luxury_land_estate.png" 
            alt="Luxury Land Estate Background" 
            fill 
            priority
            className="object-cover opacity-25 select-none pointer-events-none"
          />
          {/* Subtle gradient overlay to tie it to the dark aesthetic */}
          <div className="absolute inset-0 bg-[#081322]/50 z-1" />
        </div>

        {/* Split Gate Panel Overlay */}
        <div className="absolute inset-0 z-10 flex pointer-events-none">
          {/* Left Column Panel */}
          <motion.div 
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
            className="relative w-1/3 h-full overflow-hidden select-none"
          >
            <Image 
              src="/luxury_land_estate.png" 
              alt="Luxury Land Estate Left" 
              fill 
              priority
              className="object-cover scale-110 opacity-30 select-none pointer-events-none"
              style={{ objectPosition: "left" }}
            />
          </motion.div>
          
          {/* Center Column Panel */}
          <motion.div 
            initial={{ y: "0%" }}
            animate={{ y: "100%" }}
            transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
            className="relative w-1/3 h-full overflow-hidden select-none border-x border-tertiary/10"
          >
            <Image 
              src="/luxury_land_estate.png" 
              alt="Luxury Land Estate Center" 
              fill 
              priority
              className="object-cover scale-110 opacity-30 select-none pointer-events-none"
              style={{ objectPosition: "center" }}
            />
          </motion.div>
          
          {/* Right Column Panel */}
          <motion.div 
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
            className="relative w-1/3 h-full overflow-hidden select-none"
          >
            <Image 
              src="/luxury_land_estate.png" 
              alt="Luxury Land Estate Right" 
              fill 
              priority
              className="object-cover scale-110 opacity-30 select-none pointer-events-none"
              style={{ objectPosition: "right" }}
            />
          </motion.div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081322] via-transparent to-transparent z-15"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tertiary/5 rounded-full filter blur-3xl pointer-events-none z-15"></div>

        {/* 3D Floating Gold Geometries */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {/* Floating Ring 1 */}
          <motion.div 
            animate={floatingAnimation(-20, 10, 8)}
            className="absolute top-[20%] left-[12%] w-28 h-28 opacity-25 border border-tertiary/40 rounded-full" 
          />
          {/* Floating Square 2 */}
          <motion.div 
            animate={floatingAnimation(15, -15, 10)}
            className="absolute top-[30%] right-[15%] w-36 h-36 opacity-15 border border-tertiary/30 rotate-45" 
          />
          {/* Floating Diamond 3 */}
          <motion.div 
            animate={floatingAnimation(-12, -8, 7)}
            className="absolute bottom-[25%] left-[20%] w-24 h-24 opacity-20 border border-tertiary/50 rotate-12" 
          />
          {/* Floating Circle 4 */}
          <motion.div 
            animate={floatingAnimation(22, 12, 9)}
            className="absolute bottom-[15%] right-[22%] w-16 h-16 opacity-30 border border-tertiary/40 rounded-full" 
          />
        </div>

        {/* Hero Content */}
        <div className="container relative z-30 px-6 sm:px-12 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: premiumEase }}
            className="font-serif text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 max-w-5xl tracking-tight uppercase bg-gradient-to-b from-[#FFF5E6] via-[#E6C687] to-[#C5A059] bg-clip-text text-transparent"
          >
            Timeless Authority in British Real Estate
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: premiumEase }}
            className="font-sans text-base sm:text-lg md:text-xl text-[#E8DDD0]/85 mb-12 max-w-2xl leading-relaxed font-light"
          >
            Discreet, expert advisory for high-net-worth individuals and institutional investors navigating the prime London market.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: premiumEase }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/portfolio" variant="primary" className="px-8 py-3 text-xs tracking-widest font-semibold uppercase">
              Explore Portfolio
            </Button>
            <Button href="/contact" variant="secondary" className="px-8 py-3 text-xs tracking-widest font-semibold uppercase border-tertiary/30 hover:border-tertiary hover:bg-tertiary/10 text-tertiary">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section 
        ref={philosophySectionRef} 
        className="relative py-16 sm:py-24 md:py-32 bg-[#081322] overflow-hidden border-t border-outline/10"
      >
        {/* Golden SVG Drawing Divider Line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] hidden md:block opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 2 1000" preserveAspectRatio="none">
            <motion.line 
              style={{ strokeDashoffset: shouldReduceMotion ? 0 : lineSpring }}
              x1="1" y1="0" x2="1" y2="1000" 
              stroke="#d4af37" 
              strokeWidth="2" 
              strokeDasharray="1000" 
            />
          </svg>
        </div>

        <div className="container px-6 sm:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            {/* Philosophy Text Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-6"
            >
              <motion.span 
                variants={fadeInUpVariants}
                custom={{ delay: 0 }}
                className="text-[10px] text-tertiary font-bold tracking-[0.2em] uppercase font-sans"
              >
                Advisory Tenet
              </motion.span>
              
              <motion.h2 
                variants={fadeInUpVariants}
                custom={{ delay: 0.15 }}
                className="font-serif text-4xl sm:text-5xl font-semibold text-white leading-tight"
              >
                A Legacy of Trust
              </motion.h2>
              
              <motion.p 
                variants={fadeInUpVariants}
                custom={{ delay: 0.3 }}
                className="font-sans text-neutral/70 leading-relaxed text-base sm:text-lg font-light"
              >
                At Regent Advisory, we believe that exceptional real estate requires an equally exceptional level of service. Our approach is founded on discretion, deep market knowledge, and an unwavering commitment to our clients' long-term success.
              </motion.p>
              
              <motion.div 
                variants={fadeInUpVariants}
                custom={{ delay: 0.45 }}
              >
                <Button href="/about" variant="ghost" className="font-sans text-xs tracking-widest font-semibold border-b border-tertiary pb-1.5 uppercase hover:text-tertiary transition-colors">
                  Our Philosophy
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Philosophy Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleRevealVariants}
              custom={{ delay: 0.3, duration: 1.0 }}
              className="relative h-[280px] sm:h-[400px] md:h-[480px] w-full border border-outline/10 group overflow-hidden bg-[#0a182b]"
            >
              <Image 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Corporate Architecture"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081322] via-transparent to-transparent opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section 
        ref={featuredRef} 
        className="py-16 sm:py-24 md:py-32 bg-[#060e18] border-y border-outline/10 relative overflow-hidden"
      >
        <div className="absolute top-10 right-10 w-72 h-72 bg-tertiary/2 rounded-full filter blur-3xl pointer-events-none"></div>

        {/* Background Constellation SVG Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle className="constell-dot" cx="10%" cy="15%" r="3" fill="#d4af37" />
            <circle className="constell-dot" cx="25%" cy="40%" r="4" fill="#d4af37" />
            <circle className="constell-dot" cx="40%" cy="20%" r="3" fill="#d4af37" />
            <circle className="constell-dot" cx="60%" cy="45%" r="4" fill="#d4af37" />
            <circle className="constell-dot" cx="75%" cy="15%" r="3" fill="#d4af37" />
            <circle className="constell-dot" cx="90%" cy="35%" r="5" fill="#d4af37" />
            
            <circle className="constell-dot" cx="15%" cy="75%" r="4" fill="#d4af37" />
            <circle className="constell-dot" cx="35%" cy="85%" r="3" fill="#d4af37" />
            <circle className="constell-dot" cx="50%" cy="65%" r="5" fill="#d4af37" />
            <circle className="constell-dot" cx="70%" cy="80%" r="3" fill="#d4af37" />
            <circle className="constell-dot" cx="85%" cy="70%" r="4" fill="#d4af37" />
            
            <line className="constell-line" x1="10%" y1="15%" x2="25%" y2="40%" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="300" strokeDashoffset="300" opacity="0.4" />
            <line className="constell-line" x1="25%" y1="40%" x2="40%" y2="20%" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="300" strokeDashoffset="300" opacity="0.4" />
            <line className="constell-line" x1="40%" y1="20%" x2="60%" y2="45%" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="300" strokeDashoffset="300" opacity="0.4" />
            <line className="constell-line" x1="60%" y1="45%" x2="75%" y2="15%" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="300" strokeDashoffset="300" opacity="0.4" />
            <line className="constell-line" x1="75%" y1="15%" x2="90%" y2="35%" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="300" strokeDashoffset="300" opacity="0.4" />
            
            <line className="constell-line" x1="15%" y1="75%" x2="35%" y2="85%" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="300" strokeDashoffset="300" opacity="0.4" />
            <line className="constell-line" x1="35%" y1="85%" x2="50%" y2="65%" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="300" strokeDashoffset="300" opacity="0.4" />
            <line className="constell-line" x1="50%" y1="65%" x2="70%" y2="80%" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="300" strokeDashoffset="300" opacity="0.4" />
            <line className="constell-line" x1="70%" y1="80%" x2="85%" y2="70%" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="300" strokeDashoffset="300" opacity="0.4" />
            
            <line className="constell-line" x1="25%" y1="40%" x2="35%" y2="85%" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="300" strokeDashoffset="300" opacity="0.4" />
            <line className="constell-line" x1="60%" y1="45%" x2="50%" y2="65%" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="300" strokeDashoffset="300" opacity="0.4" />
          </svg>
        </div>

        <div className="container px-6 sm:px-12 relative z-10">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-20 gap-4"
          >
            <motion.div variants={fadeInUpVariants} custom={{ delay: 0 }}>
              <span className="text-[10px] text-tertiary font-bold tracking-[0.2em] uppercase font-sans block mb-3">Curated Collection</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white">Featured Properties</h2>
            </motion.div>
            
            <motion.div variants={fadeInUpVariants} custom={{ delay: 0.15 }}>
              <Button href="/portfolio" variant="ghost" className="border-b border-white/20 pb-1 hover:border-tertiary text-xs uppercase tracking-wider font-semibold">
                View All Assets
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((prop, idx) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : idx * 0.15, ease: premiumEase }}
              >
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.01, borderColor: "rgba(212, 175, 55, 0.4)" }}
                  transition={{ duration: 0.4, ease: premiumEase }}
                  className="group cursor-pointer bg-[#081322] border border-outline/10 p-4 block h-full"
                >
                  <Link href={`/portfolio/${prop.id}`} className="block">
                    <div className="relative h-[320px] w-full mb-6 overflow-hidden bg-[#0c1c30]">
                      <Image 
                        src={prop.images[0]} 
                        alt={prop.title}
                        fill
                        className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-[10px] tracking-widest font-semibold uppercase px-4 py-2 border border-tertiary/30">
                        {prop.location}
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-2 group-hover:text-tertiary transition-colors">
                      {prop.title}
                    </h3>
                    
                    <div className="flex justify-between items-center text-neutral/60 font-sans text-xs sm:text-sm border-t border-outline/10 pt-4 mt-4">
                      <span className="text-tertiary font-semibold font-serif text-base">{prop.price}</span>
                      <span className="flex items-center gap-4">
                        <span>{prop.bedrooms} Bed</span>
                        <span>{prop.bathrooms} Bath</span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef} 
        className="relative py-16 sm:py-24 md:py-32 bg-[#081322] text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tertiary/5 via-transparent to-transparent pointer-events-none"></div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleRevealVariants}
          custom={{ delay: 0, duration: 0.8 }}
          className="container px-6 sm:px-12 max-w-4xl relative z-10"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">Begin Your Journey</h2>
          <p className="font-sans text-base sm:text-lg text-neutral/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Whether you are acquiring a flagship residence or expanding your investment portfolio, our advisors are ready to guide you with unparalleled precision.
          </p>
          <Button href="/contact" variant="secondary" className="px-8 py-3 text-xs tracking-widest font-semibold uppercase border-tertiary text-tertiary hover:bg-tertiary hover:text-white">
            Schedule a Consultation
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
