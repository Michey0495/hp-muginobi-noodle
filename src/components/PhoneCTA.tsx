"use client";

import { useEffect, useRef } from "react";

export default function PhoneCTA() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelector(".cta-inner")?.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-[#0A0A0A] to-[#141414] py-24 md:py-32"
    >
      <div className="cta-inner reveal max-w-2xl mx-auto px-6 text-center">
        {/* Accent */}
        <div className="flex justify-center gap-2 mb-10">
          <div className="w-12 h-[1px] bg-[#E63946]/20 self-center" />
          <span className="text-[10px] text-[#E63946]/40 tracking-[0.5em]">CONTACT</span>
          <div className="w-12 h-[1px] bg-[#E63946]/20 self-center" />
        </div>

        <h2 className="font-[family-name:var(--font-shippori-antique)] text-xl md:text-2xl text-white/80 tracking-[0.15em] mb-4 leading-relaxed">
          今夜も、やってます。
        </h2>

        <p className="text-xs text-white/30 tracking-wide mb-10">
          月〜木 20:00〜03:00 / 金・土 20:00〜05:00
        </p>

        {/* Phone button */}
        <a
          href="tel:0155203939"
          className="cta-pulse inline-flex items-center gap-3 bg-[#E63946] hover:bg-[#B82D38] text-white px-10 py-4 rounded-sm tracking-[0.15em] transition-colors duration-300 min-h-[48px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm font-medium">
            0155-20-3939
          </span>
        </a>

        <p className="text-[10px] text-white/20 mt-6 tracking-wide">
          定休日: 日曜日、第1・第3月曜日
        </p>
      </div>
    </section>
  );
}
