"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import SafeImage from "@/components/ui/SafeImage";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useMotionConfig, premiumEase, fadeInUpVariants } from "@/lib/animations";

export default function Portfolio() {
  const { shouldReduceMotion, staggerContainer } = useMotionConfig();
  const [dbProperties, setDbProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("price-desc");

  const categories = ["All", "Villas", "Apartments", "Commercial", "Land & Farms"];

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("/api/properties/portfolio");
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.properties) {
            setDbProperties(data.properties);
          }
        }
      } catch (err) {
        console.error("Failed to load portfolio assets:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const getPropertyCategory = (title: string): string => {
    const t = title.toLowerCase();
    if (t.includes("villa") || t.includes("bungalow") || t.includes("row house") || t.includes("duplex") || t.includes("independent house") || t.includes("farmhouse")) {
      return "Villas";
    }
    if (t.includes("apartment") || t.includes("penthouse")) {
      return "Apartments";
    }
    if (t.includes("office") || t.includes("retail") || t.includes("business center") || t.includes("coworking") || t.includes("showroom") || t.includes("commercial building") || t.includes("factory") || t.includes("logistics center") || t.includes("warehouse") || t.includes("industrial shed")) {
      return "Commercial";
    }
    if (t.includes("land") || t.includes("farm") || t.includes("plot")) {
      return "Land & Farms";
    }
    return "Other";
  };

  const parsePrice = (priceStr: string): number => {
    const clean = priceStr.replace(/[£,\s]/g, "");
    if (clean.endsWith("M")) {
      return parseFloat(clean.replace("M", "")) * 1000000;
    }
    if (clean.endsWith("K")) {
      return parseFloat(clean.replace("K", "")) * 1000;
    }
    return parseFloat(clean) || 0;
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(12);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setVisibleCount(12);
  };

  const filteredProperties = dbProperties.filter((prop) => {
    if (selectedCategory === "All") return true;
    return getPropertyCategory(prop.title) === selectedCategory;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === "price-desc") {
      return parsePrice(b.price) - parsePrice(a.price);
    }
    if (sortBy === "price-asc") {
      return parsePrice(a.price) - parsePrice(b.price);
    }
    if (sortBy === "newest") {
      const aId = parseInt(a.id.replace("prop-", "")) || 0;
      const bId = parseInt(b.id.replace("prop-", "")) || 0;
      return bId - aId;
    }
    return 0;
  });

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, sortedProperties.length));
  };

  const visibleProperties = sortedProperties.slice(0, visibleCount);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 bg-primary text-white overflow-hidden">
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
            <span className="font-sans text-xs font-semibold tracking-[0.1em] uppercase text-tertiary mb-4 block">Exclusive Collection</span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="font-sans text-lg text-white/80 leading-relaxed mx-auto max-w-2xl">
              A curated selection of the finest prime real estate across London. From historic Mayfair townhouses to contemporary penthouses.
            </p>
          </div>
        </section>

        {/* Loading Skeletons */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 border-b border-outline/10 pb-6">
              <div className="h-4 w-48 bg-outline/20 animate-pulse rounded"></div>
              <div className="flex flex-wrap justify-center gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-9 w-24 bg-outline/15 animate-pulse rounded-none"></div>
                ))}
              </div>
              <div className="h-9 w-40 bg-outline/15 animate-pulse rounded-none"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-16">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="h-[280px] sm:h-[380px] md:h-[450px] w-full bg-outline/15 animate-pulse"></div>
                  <div className="h-6 w-3/4 bg-outline/20 animate-pulse rounded"></div>
                  <div className="h-4 w-full bg-outline/15 animate-pulse rounded"></div>
                  <div className="h-4 w-5/6 bg-[#e2e8f0]/10 animate-pulse rounded"></div>
                  <div className="flex justify-between items-center border-t border-outline/10 pt-4 mt-auto">
                    <div className="h-5 w-20 bg-outline/20 animate-pulse rounded"></div>
                    <div className="h-4 w-28 bg-outline/15 animate-pulse rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 bg-primary text-white overflow-hidden">
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
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="font-sans text-lg text-white/80 leading-relaxed mx-auto max-w-2xl">
            A curated selection of the finest prime real estate across London. From historic Mayfair townhouses to contemporary penthouses.
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 border-b border-outline/10 pb-6">
            <p className="font-sans text-sm text-secondary font-semibold uppercase tracking-widest">
              Showing {visibleProperties.length} of {sortedProperties.length} Properties
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`font-sans text-xs font-semibold uppercase tracking-widest px-5 py-2.5 transition-all duration-300 border cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-tertiary border-tertiary text-primary font-bold shadow-sm"
                      : "bg-transparent border-outline/10 text-secondary hover:text-tertiary hover:border-tertiary/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex gap-4 font-sans text-sm shrink-0">
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="bg-transparent border border-outline/20 px-4 py-2 text-primary focus:outline-none focus:border-tertiary cursor-pointer font-semibold"
              >
                <option value="price-desc">Sort by Price: High to Low</option>
                <option value="price-asc">Sort by Price: Low to High</option>
                <option value="newest">Sort by Newest</option>
              </select>
            </div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-16"
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
                    <div className="relative h-[280px] sm:h-[380px] md:h-[450px] w-full mb-6 overflow-hidden bg-surface-dim flex items-center justify-center">
                      <SafeImage
                        src={prop.images[0]}
                        alt={prop.title}
                        className="object-cover transition-transform duration-700 group-hover:scale-105 w-full h-full"
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

          {sortedProperties.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-secondary/70">No properties found in this category.</p>
            </div>
          )}

          {visibleCount < sortedProperties.length && (
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
