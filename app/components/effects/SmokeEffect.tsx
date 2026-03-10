"use client";

import { useEffect, useRef } from "react";
import type { Particle } from "@/app/types";

const MAX_PARTICLES = 250;

export default function SmokeEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];
    let mouseX = -100;
    let mouseY = -100;
    let lastMouseX = -100;
    let lastMouseY = -100;
    let isMoving = false;
    let moveTimeout: ReturnType<typeof setTimeout>;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnParticles = (x: number, y: number, dx: number, dy: number) => {
      const speed = Math.sqrt(dx * dx + dy * dy);
      const count = Math.min(Math.floor(speed * 0.4) + 2, 5);

      for (let i = 0; i < count; i++) {
        const moveAngle = Math.atan2(dy, dx);
        const spread = (Math.random() - 0.5) * 2.5;
        const velocity = speed * 0.04 + Math.random() * 0.3;

        particles.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: Math.cos(moveAngle + spread) * velocity * 0.3,
          vy: -Math.random() * 0.8 - 0.2,
          size: Math.random() * 20 + 12,
          alpha: Math.random() * 0.1 + 0.05,
          decay: Math.random() * 0.0012 + 0.0008,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.015,
          growRate: Math.random() * 1.0 + 0.4,
          waveOffset: Math.random() * Math.PI * 2,
          waveSpeed: Math.random() * 0.03 + 0.01,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        isMoving = false;
      }, 80);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;

      const dx = mouseX - lastMouseX;
      const dy = mouseY - lastMouseY;

      if (isMoving && (Math.abs(dx) > 1 || Math.abs(dy) > 1)) {
        spawnParticles(mouseX, mouseY, dx, dy);
      }

      lastMouseX = mouseX;
      lastMouseY = mouseY;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        const wave = Math.sin(time * p.waveSpeed + p.waveOffset) * 0.4;
        p.x += p.vx + wave;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.99;
        p.size += p.growRate;
        p.alpha -= p.decay;
        p.rotation += p.rotationSpeed;
        p.growRate *= 0.997;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.alpha;

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
        gradient.addColorStop(0, "rgba(210, 210, 215, 0.9)");
        gradient.addColorStop(0.3, "rgba(195, 195, 200, 0.5)");
        gradient.addColorStop(0.6, "rgba(180, 180, 185, 0.2)");
        gradient.addColorStop(1, "rgba(160, 160, 165, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.75, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      if (particles.length > MAX_PARTICLES) {
        particles.splice(0, particles.length - MAX_PARTICLES);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      clearTimeout(moveTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
    />
  );
}
