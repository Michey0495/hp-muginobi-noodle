"use client";

import { useEffect, useRef } from "react";

const INFO_ROWS = [
  { label: "住所", value: "北海道帯広市西一条南10-4 アポロビル 1F" },
  { label: "アクセス", value: "JR帯広駅 徒歩5分" },
  { label: "電話", value: "0155-20-3939", href: "tel:0155203939" },
  { label: "営業時間", value: "月〜木 20:00〜03:00 / 金・土 20:00〜05:00" },
  { label: "定休日", value: "日曜日、第1・第3月曜日" },
  { label: "席数", value: "カウンター10席" },
  { label: "駐車場", value: "なし（近隣コインパーキングをご利用ください）" },
  { label: "支払い", value: "現金のみ" },
];

export default function ShopInfo() {
  const titleRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

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
    [titleRef.current, tableRef.current, mapRef.current].forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-black py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section title */}
        <div ref={titleRef} className="reveal mb-16">
          <p className="text-[10px] text-[#E63946]/60 tracking-[0.5em] uppercase mb-4">
            Information
          </p>
          <h2 className="font-[family-name:var(--font-dela-gothic)] text-2xl md:text-3xl text-[#E63946] tracking-[0.1em] neon-glow">
            店舗情報
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Info table */}
          <div ref={tableRef} className="reveal">
            <dl className="space-y-0">
              {INFO_ROWS.map((row, i) => (
                <div
                  key={i}
                  className="py-4 border-b border-white/5 flex items-baseline gap-6"
                >
                  <dt className="text-xs text-[#FFD166]/60 tracking-[0.2em] w-20 shrink-0">
                    {row.label}
                  </dt>
                  <dd className="text-sm text-white/80 tracking-wide">
                    {row.href ? (
                      <a
                        href={row.href}
                        className="hover:text-[#E63946] transition-colors underline underline-offset-4 decoration-[#E63946]/20"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Google Map */}
          <div ref={mapRef} className="reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="aspect-square md:aspect-[4/5] w-full rounded-sm overflow-hidden border border-white/5">
              <iframe
                src="https://maps.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E5%B8%AF%E5%BA%83%E5%B8%82%E8%A5%BF%E4%B8%80%E6%9D%A1%E5%8D%9710-4+%E3%82%A2%E3%83%9D%E3%83%AD%E3%83%93%E3%83%AB&output=embed&hl=ja"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.2) brightness(0.7)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="麦伸ぬーどる Google Maps"
              />
            </div>
            <p className="text-[10px] text-white/20 mt-3 tracking-wide">
              JR帯広駅から徒歩約5分。西一条通り沿い。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
