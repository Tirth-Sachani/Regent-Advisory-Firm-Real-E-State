"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

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
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebarRef.current) {
      if (isOpen) {
        // Animate the sidebar sliding in with a premium curve
        gsap.to(sidebarRef.current, {
          x: "0%",
          duration: 0.8,
          ease: "power4.out"
        });

        // Stagger the links
        gsap.fromTo(
          ".mobile-nav-item",
          { y: 40, opacity: 0, rotateX: -15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.2)",
            delay: 0.3
          }
        );
        
        gsap.fromTo(
          ".mobile-contact-item",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.8 }
        );
      } else {
        // Close animation
        gsap.to(sidebarRef.current, {
          x: "100%",
          duration: 0.6,
          ease: "power3.in"
        });
      }
    }
  }, [isOpen]);

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
            className="md:hidden p-2 text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Sidebar */}
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-primary/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Drawer */}
      <div 
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-background/80 backdrop-blur-2xl border-l border-white/20 z-50 shadow-2xl md:hidden translate-x-full"
      >
        <div className="flex justify-end p-6 border-b border-outline/10">
          <button
            className="text-primary focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col py-8 px-6 h-full">
          <span className="font-serif text-2xl font-bold tracking-tight text-primary mb-10 mobile-nav-item opacity-0">Regent<span className="text-primary/70 font-normal">Advisory</span></span>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="mobile-nav-item opacity-0 py-4 text-sm font-semibold tracking-widest uppercase font-sans text-secondary border-b border-outline/10 hover:text-tertiary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="mt-auto pt-12 pb-8 mobile-contact-item opacity-0">
            <p className="font-sans text-xs uppercase tracking-widest text-secondary/60 mb-2">Contact</p>
            <p className="font-serif text-primary text-lg">+44 (0) 20 7499 9000</p>
          </div>
        </div>
      </div>
    </header>
  );
}
