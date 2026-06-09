"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMotionConfig, premiumEase, fadeInUpVariants } from "@/lib/animations";

export default function Contact() {
  const { shouldReduceMotion } = useMotionConfig();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    natureOfInquiry: "Strategic Acquisitions",
    message: ""
  });
  
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit enquiry.");
      }

      setSubmitStatus("success");
    } catch (err: any) {
      console.error(err);
      setSubmitStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-20 bg-surface-container-low">
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="container max-w-4xl"
        >
          <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-tertiary mb-6 block">Connect With Us</span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Contact
          </h1>
          <p className="font-sans text-xl text-secondary/80 leading-relaxed max-w-2xl">
            Our advisory team is available to discuss your specific requirements with absolute discretion.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
            >
              <h2 className="font-serif text-3xl font-semibold text-primary mb-8">Make an Enquiry</h2>
              {submitStatus === "success" ? (
                <div className="bg-surface-container-low border border-tertiary/30 p-8 rounded-lg text-center max-w-lg">
                  <div className="w-16 h-16 bg-tertiary/10 text-tertiary flex items-center justify-center rounded-full mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-3">Enquiry Received</h3>
                  <p className="font-sans text-secondary/80 leading-relaxed mb-6">
                    Thank you. Your request has been logged securely in our systems. A private advisor will contact you with absolute discretion within 24 hours.
                  </p>
                  <Button variant="primary" onClick={() => {
                    setFormData({ firstName: "", lastName: "", email: "", phone: "", natureOfInquiry: "Strategic Acquisitions", message: "" });
                    setSubmitStatus("idle");
                  }}>Submit Another Enquiry</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 font-sans">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">First Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-transparent border-b border-outline/30 pb-3 focus:outline-none focus:border-tertiary transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Last Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-transparent border-b border-outline/30 pb-3 focus:outline-none focus:border-tertiary transition-colors" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-outline/30 pb-3 focus:outline-none focus:border-tertiary transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Phone Number</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-outline/30 pb-3 focus:outline-none focus:border-tertiary transition-colors" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Nature of Enquiry</label>
                    <select 
                      value={formData.natureOfInquiry}
                      onChange={(e) => setFormData({ ...formData, natureOfInquiry: e.target.value })}
                      className="w-full bg-transparent border-b border-outline/30 pb-3 focus:outline-none focus:border-tertiary transition-colors appearance-none rounded-none text-primary"
                    >
                      <option value="Strategic Acquisitions">Strategic Acquisitions</option>
                      <option value="Sales Advisory">Sales Advisory</option>
                      <option value="Portfolio Management">Portfolio Management</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Message</label>
                    <textarea 
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-outline/30 pb-3 focus:outline-none focus:border-tertiary transition-colors resize-none"
                    ></textarea>
                  </div>

                  {submitStatus === "error" && (
                    <p className="text-red-500 text-sm font-semibold">{errorMessage || "Failed to submit enquiry. Please try again."}</p>
                  )}

                  <div className="pt-4">
                    <Button variant="primary" disabled={submitStatus === "submitting"}>
                      {submitStatus === "submitting" ? "Submitting..." : "Submit Enquiry"}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Office Information */}
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: premiumEase }}
              className="lg:pl-12"
            >
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
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
