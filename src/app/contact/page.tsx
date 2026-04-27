"use client";

import { useRef } from "react";
import { useFadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Contact() {
  const headerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  useFadeIn(headerRef, 0.1);
  useFadeIn(contentRef, 0.2);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-20 bg-surface-container-low" ref={headerRef}>
        <div className="container max-w-4xl">
          <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-tertiary mb-6">Connect With Us</h4>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Contact
          </h1>
          <p className="font-sans text-xl text-secondary/80 leading-relaxed max-w-2xl">
            Our advisory team is available to discuss your specific requirements with absolute discretion.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24" ref={contentRef}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-primary mb-8">Make an Enquiry</h2>
              <form className="flex flex-col gap-8 font-sans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">First Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-outline/30 pb-3 focus:outline-none focus:border-tertiary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Last Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-outline/30 pb-3 focus:outline-none focus:border-tertiary transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-outline/30 pb-3 focus:outline-none focus:border-tertiary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Phone Number</label>
                    <input type="tel" className="w-full bg-transparent border-b border-outline/30 pb-3 focus:outline-none focus:border-tertiary transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Nature of Enquiry</label>
                  <select className="w-full bg-transparent border-b border-outline/30 pb-3 focus:outline-none focus:border-tertiary transition-colors appearance-none rounded-none text-primary">
                    <option>Strategic Acquisitions</option>
                    <option>Sales Advisory</option>
                    <option>Portfolio Management</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-outline/30 pb-3 focus:outline-none focus:border-tertiary transition-colors resize-none"></textarea>
                </div>

                <div className="pt-4">
                  <Button variant="primary">Submit Enquiry</Button>
                </div>
              </form>
            </div>

            {/* Office Information */}
            <div className="lg:pl-12">
              <div className="relative h-[300px] w-full bg-surface-dim mb-12">
                <Image 
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Mayfair London"
                  fill
                  className="object-cover grayscale"
                />
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-4">London Headquarters</h3>
                  <address className="font-sans text-secondary/80 not-italic leading-relaxed">
                    Regent Estate Advisory<br/>
                    1 Berkeley Square<br/>
                    Mayfair, London<br/>
                    W1J 6EA
                  </address>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-outline/10">
                  <div>
                    <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-secondary/60 mb-2">Telephone</h4>
                    <p className="font-serif text-lg text-primary">+44 (0) 20 7499 9000</p>
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-secondary/60 mb-2">Email</h4>
                    <p className="font-sans text-primary">enquiries@regentadvisory.co.uk</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
