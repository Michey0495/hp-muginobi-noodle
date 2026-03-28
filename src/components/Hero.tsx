"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function SteamCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      drift: number;
      driftSpeed: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.05,
        drift: Math.random() * Math.PI * 2,
        driftSpeed: Math.random() * 0.015 + 0.005,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speed;
        p.drift += p.driftSpeed;
        p.x += Math.sin(p.drift) * 0.4;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 57, 70, ${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1920&h=1080&fit=crop&q=80"
        alt="ラーメン"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Red ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(230,57,70,0.08)_0%,_transparent_60%)] z-10" />

      {/* Grain */}
      <div className="absolute inset-0 grain-overlay opacity-40 z-10" />

      {/* Particles */}
      <SteamCanvas />

      {/* Content */}
      <div className="relative z-30 text-center px-6">
        {/* Accent line */}
        <div
          className="w-10 h-[2px] bg-[#E63946]/60 mx-auto mb-8"
          style={{
            opacity: 0,
            animation: "reveal-up 1s ease-out forwards",
            animationDelay: "0.3s",
          }}
        />

        {/* Shop name */}
        <h1
          className="font-[family-name:var(--font-dela-gothic)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E63946] tracking-[0.08em] mb-4 select-none neon-glow"
          style={{
            opacity: 0,
            animation: "reveal-up 1.2s ease-out forwards",
            animationDelay: "0.3s",
          }}
        >
          麦伸ぬーどる
        </h1>

        {/* Tagline */}
        <p
          className="font-[family-name:var(--font-shippori-antique)] text-sm sm:text-base md:text-lg text-white/50 tracking-[0.3em] mb-8"
          style={{
            opacity: 0,
            animation: "reveal-up 1.2s ease-out forwards",
            animationDelay: "0.8s",
          }}
        >
          深夜の一杯、ここにあり。
        </p>

        {/* Badges */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
          style={{
            opacity: 0,
            animation: "reveal-up 1.2s ease-out forwards",
            animationDelay: "1.2s",
          }}
        >
          {["麦伸堂直送麺", "深夜営業", "〆の一杯"].map((label) => (
            <span
              key={label}
              className="px-4 py-1.5 text-xs sm:text-sm tracking-[0.15em] text-[#FFD166] border border-[#FFD166]/30 bg-[#FFD166]/5 backdrop-blur-sm"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Accent line */}
        <div
          className="w-10 h-[2px] bg-[#E63946]/60 mx-auto mb-12"
          style={{
            opacity: 0,
            animation: "reveal-up 1s ease-out forwards",
            animationDelay: "1.5s",
          }}
        />

        {/* Location */}
        <p
          className="text-xs text-white/25 tracking-[0.2em] uppercase"
          style={{
            opacity: 0,
            animation: "reveal-up 1s ease-out forwards",
            animationDelay: "1.8s",
          }}
        >
          Obihiro, Hokkaido
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
        style={{
          opacity: 0,
          animation: "reveal-up 1s ease-out forwards",
          animationDelay: "2.2s",
        }}
      >
        <span className="text-[10px] text-white/20 tracking-[0.3em]">SCROLL</span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="animate-bounce"
          aria-hidden="true"
        >
          <path
            d="M8 4L8 18M8 18L2 12M8 18L14 12"
            stroke="#E63946"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
