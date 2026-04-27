"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useFadeIn = <T extends HTMLElement = HTMLElement>(ref: RefObject<T | null>, delay: number = 0) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [ref, delay]);
};

export const useStaggerFadeIn = <T extends HTMLElement = HTMLElement>(ref: RefObject<T | null>, selector: string) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const elements = el.querySelectorAll(selector);
    
    if (elements.length === 0) return;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [ref, selector]);
};
