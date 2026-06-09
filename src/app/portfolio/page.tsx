"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useMotionConfig, premiumEase, fadeInUpVariants } from "@/lib/animations";

export default function Portfolio() {
  const { shouldReduceMotion, staggerContainer } = useMotionConfig();
  const [visibleCount, setVisibleCount] = useState(12);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, properties.length));
  };

  const visibleProperties = properties.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Portfolio Background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="container relative z-10 max-w-4xl text-center"
        >
          <span className="font-sans text-xs font-semibold tracking-[0.1em] uppercase text-tertiary mb-4 block">Exclusive Collection</span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="font-sans text-lg text-white/80 leading-relaxed mx-auto max-w-2xl">
            A curated selection of the finest prime real estate across London. From historic Mayfair townhouses to contemporary penthouses.
          </p>
        </motion.div>
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

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            {visibleProperties.map((prop, idx) => (
              <motion.div
                key={prop.id}
                variants={fadeInUpVariants}
                className="property-card block"
              >
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.01 }}
                  transition={{ duration: 0.4, ease: premiumEase }}
                  className="group cursor-pointer h-full"
                >
                  <Link href={`/portfolio/${prop.id}`} className="block">
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
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {visibleCount < properties.length && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <Button variant="secondary" onClick={loadMore}>Load More Properties</Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
