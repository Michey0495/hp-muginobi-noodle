"use client";

import { useEffect, useRef } from "react";

export default function Hours() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#141414] py-20 md:py-24">
      <div ref={ref} className="reveal max-w-2xl mx-auto px-6 text-center">
        <p className="text-[10px] text-[#FFD166]/50 tracking-[0.5em] uppercase mb-6">
          Hours
        </p>
        <h2 className="font-[family-name:var(--font-dela-gothic)] text-xl md:text-2xl text-[#FFD166] tracking-[0.1em] mb-10 neon-glow-gold">
          営業時間
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-white/5">
            <span className="text-sm text-white/50 tracking-wide">月曜〜木曜</span>
            <span className="font-[family-name:var(--font-shippori-antique)] text-base text-white/80 tracking-wider">
              20:00 — 03:00
            </span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-white/5">
            <span className="text-sm text-white/50 tracking-wide">金曜・土曜</span>
            <span className="font-[family-name:var(--font-shippori-antique)] text-base text-white/80 tracking-wider">
              20:00 — 05:00
            </span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-white/5">
            <span className="text-sm text-white/50 tracking-wide">定休日</span>
            <span className="text-sm text-[#E63946]/70 tracking-wider">
              日曜日、第1・第3月曜日
            </span>
          </div>
        </div>

        <p className="text-xs text-white/20 mt-8 tracking-wide">
          ※深夜営業のため、ラストオーダーは閉店30分前となります
        </p>
      </div>
    </section>
  );
}
