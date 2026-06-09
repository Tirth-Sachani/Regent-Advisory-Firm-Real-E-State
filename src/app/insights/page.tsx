"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, FormEvent } from "react";
import { insights } from "@/data/insights";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useMotionConfig, premiumEase, fadeInUpVariants } from "@/lib/animations";

export default function Insights() {
  const { shouldReduceMotion, staggerContainer } = useMotionConfig();
  
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to subscribe.");
      }

      setStatus("success");
      setEmail("");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Failed to subscribe. Please check and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 bg-[#081322] text-white overflow-hidden border-b border-outline/10">
        {/* Background Farmland Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/insights_header_land.png" 
            alt="Insights Background" 
            fill 
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-[#081322]/40" />
        </div>
        
        {/* Glow ambient background effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tertiary/5 rounded-full filter blur-3xl pointer-events-none z-0"></div>

        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="container max-w-4xl text-center relative z-10"
        >
          <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-tertiary mb-6 block">Research & Analysis</span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-[#FFF5E6] via-[#E6C687] to-[#C5A059] bg-clip-text text-transparent">
            Market Insights
          </h1>
          <p className="font-sans text-xl text-[#E8DDD0]/85 leading-relaxed mx-auto max-w-2xl font-light">
            Our proprietary research provides clients with the data-driven clarity required to navigate prime real estate markets effectively.
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-x-12 md:gap-y-16"
          >
            {insights.map((insight) => (
              <motion.div
                key={insight.id}
                variants={fadeInUpVariants}
                className="insight-card block"
              >
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }}
                  transition={{ duration: 0.4, ease: premiumEase }}
                  className="group cursor-pointer h-full"
                >
                  <Link href="#" className="block">
                    <div className="relative h-[220px] sm:h-[350px] w-full mb-6 overflow-hidden">
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
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Subscribe Block */}
          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="mt-16 sm:mt-24 bg-surface-container-low p-6 sm:p-12 text-center border border-outline/10"
          >
            <h3 className="font-serif text-3xl font-semibold text-primary mb-4">Subscribe to our Intelligence</h3>
            <p className="font-sans text-secondary/80 mb-8 max-w-xl mx-auto">
              Receive our quarterly market reports and exclusive investment analysis directly to your inbox.
            </p>
            
            {status === "success" ? (
              <div className="bg-surface-dim border border-tertiary/20 p-6 rounded max-w-md mx-auto">
                <p className="font-serif text-lg font-semibold text-primary mb-2">Subscription Confirmed</p>
                <p className="font-sans text-sm text-secondary/80">
                  Welcome to Regent Intelligence. You will receive our next quarterly brief directly in your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address" 
                  className="flex-1 bg-white border border-outline/20 px-6 py-4 font-sans focus:outline-none focus:border-tertiary text-primary"
                />
                <Button type="submit" variant="primary" disabled={status === "submitting"}>
                  {status === "submitting" ? "Submitting..." : "Subscribe"}
                </Button>
              </form>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
