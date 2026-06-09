"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: string;
  decay: number;
}

export default function GoldParticleCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0, speed: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Gold color palette for luxury feel
    const goldColors = [
      "rgba(212, 175, 55, ", // Gold
      "rgba(229, 193, 88, ", // Light Gold
      "rgba(170, 124, 17, ", // Dark Bronze Gold
      "rgba(255, 223, 0, ",  // Golden Yellow
      "rgba(243, 219, 116, " // Pale Gold
    ];

    // Create particles based on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const mouse = mouseRef.current;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Calculate speed/velocity of mouse movement
      const dx = mouse.x - mouse.lastX;
      const dy = mouse.y - mouse.lastY;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);

      // Generate particles based on speed
      const particleCount = Math.min(Math.floor(mouse.speed / 2) + 1, 6);
      
      for (let i = 0; i < particleCount; i++) {
        // Spread particles slightly from mouse cursor position
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * mouse.speed * 0.15 + 0.5;
        
        particlesRef.current.push({
          x: mouse.x,
          y: mouse.y,
          vx: Math.cos(angle) * velocity + (Math.random() - 0.5) * 0.5,
          vy: Math.sin(angle) * velocity + (Math.random() - 0.5) * 0.5 - 0.2, // slight upward drift
          alpha: 1.0,
          size: Math.random() * 2.5 + 1.0,
          color: goldColors[Math.floor(Math.random() * goldColors.length)],
          decay: Math.random() * 0.015 + 0.01
        });
      }

      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
    };

    // Burst particles on click
    const handleMouseDown = (e: MouseEvent) => {
      const burstCount = 18;
      for (let i = 0; i < burstCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 4 + 2;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          alpha: 1.0,
          size: Math.random() * 3.5 + 1.5,
          color: goldColors[Math.floor(Math.random() * goldColors.length)],
          decay: Math.random() * 0.02 + 0.01
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        // Apply slight friction and gravity/drift
        p.vx *= 0.98;
        p.vy *= 0.98;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle with glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        
        // Add subtle gold bloom glow for larger particles
        if (p.size > 2.0) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = "rgba(212, 175, 55, 0.4)";
        }

        ctx.fill();
        ctx.restore();
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    // Clean up listeners
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
