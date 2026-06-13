"use client";

import { useState, FormEvent, useEffect } from "react";
import { Button } from "@/components/ui/Button";

interface PropertyEnquiryFormProps {
  propertyId: string;
  propertyTitle: string;
}

export function PropertyEnquiryForm({ propertyId, propertyTitle }: PropertyEnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[280px] w-full flex items-center justify-center bg-surface-container-low/20 border border-outline/10 animate-pulse">
        <span className="text-xs text-white/30 tracking-widest uppercase">Loading Enquiry Form...</span>
      </div>
    );
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          natureOfInquiry: `Property Inquiry: ${propertyTitle}`,
          propertyId: propertyId,
          message: `Interested in registering interest for ${propertyTitle} (ID: ${propertyId}). Please send brochure and arrangement details.`,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit interest.");
      }

      setSubmitStatus("success");
    } catch (err: any) {
      console.error(err);
      setSubmitStatus("error");
      setErrorMessage(err.message || "Failed to submit. Please try again.");
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-surface-container-low border border-tertiary/30 p-6 rounded text-center">
        <div className="w-12 h-12 bg-tertiary/10 text-tertiary flex items-center justify-center rounded-full mx-auto mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h4 className="font-serif text-xl font-semibold text-primary mb-2">Interest Registered</h4>
        <p className="font-sans text-xs text-secondary/80 leading-relaxed mb-4">
          An exclusive brochure and viewing protocol has been dispatched to your email address.
        </p>
        <Button 
          variant="secondary" 
          onClick={() => {
            setFormData({ name: "", email: "", phone: "" });
            setSubmitStatus("idle");
          }}
        >
          Reset
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-sans">
      <div>
        <label className="block text-xs font-semibold tracking-widest uppercase text-tertiary mb-2">Name</label>
        <input 
          type="text" 
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-transparent border-b border-outline/30 pb-2 focus:outline-none focus:border-tertiary transition-colors text-white" 
          placeholder="Full Name" 
        />
      </div>
      <div>
        <label className="block text-xs font-semibold tracking-widest uppercase text-tertiary mb-2 mt-4">Email</label>
        <input 
          type="email" 
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-transparent border-b border-outline/30 pb-2 focus:outline-none focus:border-tertiary transition-colors text-white" 
          placeholder="Email Address" 
        />
      </div>
      <div>
        <label className="block text-xs font-semibold tracking-widest uppercase text-tertiary mb-2 mt-4">Phone</label>
        <input 
          type="tel" 
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full bg-transparent border-b border-outline/30 pb-2 focus:outline-none focus:border-tertiary transition-colors text-white" 
          placeholder="Phone Number" 
        />
      </div>

      {submitStatus === "error" && (
        <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
      )}

      <Button type="submit" variant="primary" className="w-full mt-8" disabled={submitStatus === "submitting"}>
        {submitStatus === "submitting" ? "Registering..." : "Enquire Now"}
      </Button>
    </form>
  );
}
