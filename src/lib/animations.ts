"use client";

import { useReducedMotion } from "framer-motion";

export const viewportConfig = {
  once: true,
  amount: 0.3
};

// Easing curve similar to Apple/Sotheby's premium feel
export const premiumEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

export const premiumTransition = (delay = 0, duration = 0.8) => ({
  duration,
  delay,
  ease: premiumEase
});

// Helper variants
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? 0.8,
      delay: custom.delay ?? 0,
      ease: premiumEase
    }
  })
};

export const scaleRevealVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? 0.8,
      delay: custom.delay ?? 0,
      ease: premiumEase
    }
  })
};

// Custom React hook to respect accessibility rules (prefers-reduced-motion)
export function useMotionConfig() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: (custom: { delay?: number; duration?: number } = {}) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: custom.duration ?? 0.8,
        delay: custom.delay ?? 0,
        ease: premiumEase
      }
    })
  };

  const scaleReveal = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom: { delay?: number; duration?: number } = {}) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: custom.duration ?? 0.8,
        delay: custom.delay ?? 0,
        ease: premiumEase
      }
    })
  };

  const staggerContainer = {
    hidden: {},
    visible: (delay = 0) => ({
      transition: {
        delayChildren: delay,
        staggerChildren: 0.15
      }
    })
  };

  return {
    fadeInUp,
    scaleReveal,
    staggerContainer,
    shouldReduceMotion,
    viewport: viewportConfig
  };
}

// Dummy backward compatibility hooks to prevent compile errors if old references exist
export const useFadeIn = (ref: any, delay = 0) => {};
export const useStaggerFadeIn = (ref: any, selector: string) => {};
