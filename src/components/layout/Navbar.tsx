"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="w-full bg-background/90 backdrop-blur-md border-b border-outline/10 relative z-10">
        <div className="container flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">Regent</span>
            <span className="font-serif text-2xl tracking-tight text-primary/70">Advisory</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-widest uppercase font-sans text-secondary hover:text-tertiary transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-tertiary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
 
      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-background/80 backdrop-blur-2xl border-l border-white/20 z-50 shadow-2xl md:hidden"
            >
              <div className="flex justify-end p-6 border-b border-outline/10">
                <button
                  className="w-11 h-11 flex items-center justify-center text-primary focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col py-8 px-6 h-full"
              >
                <motion.span 
                  variants={itemVariants} 
                  className="font-serif text-2xl font-bold tracking-tight text-primary mb-10 block"
                >
                  Regent<span className="text-primary/70 font-normal">Advisory</span>
                </motion.span>

                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      href={link.href}
                      className="py-4 text-sm font-semibold tracking-widest uppercase font-sans text-secondary border-b border-outline/10 hover:text-tertiary transition-colors block"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div variants={itemVariants} className="mt-auto pt-12 pb-8">
                  <p className="font-sans text-xs uppercase tracking-widest text-secondary/60 mb-2">Contact</p>
                  <p className="font-serif text-primary text-lg">+44 (0) 20 7499 9000</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
