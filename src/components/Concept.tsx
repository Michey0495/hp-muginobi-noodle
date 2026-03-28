"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Concept() {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    [titleRef.current, contentRef.current].forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#0A0A0A] py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section title */}
        <div ref={titleRef} className="reveal mb-16 text-center">
          <p className="text-[10px] text-[#E63946]/60 tracking-[0.5em] uppercase mb-4">
            Concept
          </p>
          <h2 className="font-[family-name:var(--font-dela-gothic)] text-2xl md:text-3xl text-[#E63946] tracking-[0.1em] neon-glow">
            飲んだ夜の、最後の一杯
          </h2>
        </div>

        <div ref={contentRef} className="reveal grid md:grid-cols-2 gap-12 items-center" style={{ transitionDelay: "0.2s" }}>
          {/* Photo */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/5">
            <Image
              src="https://images.unsplash.com/photo-1614563637806-1d0e645e0940?w=800&h=600&fit=crop&q=80"
              alt="イメージ写真"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="font-[family-name:var(--font-shippori-antique)] text-base md:text-lg text-white/70 leading-[1.9] tracking-wide">
              帯広の繁華街、夜がいちばん深くなる頃。
              <br />
              カウンター10席だけの小さな店に、
              <br />
              今夜も常連たちが吸い込まれていく。
            </p>
            <p className="text-sm text-white/40 leading-[1.9] tracking-wide">
              札幌「麦伸堂」から直送される麺は、
              小麦の香りがしっかり残るストレート麺。
              熱々のスープと絡み合う瞬間が、
              この店の真骨頂。
            </p>
            <p className="text-sm text-white/40 leading-[1.9] tracking-wide">
              ラーメンと餃子。
              シンプルだけど、それでいい。
              飲んだ夜の最後を、ここで締めくくる。
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#FFD166]/30" />
                <span className="text-xs text-[#FFD166]/60 tracking-[0.2em]">
                  旧「鉄ぺい」
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
