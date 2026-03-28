"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const MENU_DATA: MenuCategory[] = [
  {
    category: "ラーメン",
    items: [
      { name: "醤油ラーメン", desc: "麦伸堂直送の麺に、コク深い醤油スープ", price: "750" },
      { name: "味噌ラーメン", desc: "北海道味噌の濃厚スープ。寒い夜に染みる", price: "800" },
      { name: "塩ラーメン", desc: "あっさり澄んだ塩味。飲んだ後にちょうどいい", price: "750" },
    ],
  },
  {
    category: "餃子",
    items: [
      { name: "焼き餃子", desc: "パリッと焼き上げた定番。ビールのお供に", price: "400" },
    ],
  },
  {
    category: "トッピング・サイド",
    items: [
      { name: "味玉", desc: "", price: "100" },
      { name: "チャーシュー増し", desc: "", price: "200" },
      { name: "バター", desc: "", price: "100" },
      { name: "コーン", desc: "", price: "100" },
      { name: "ライス", desc: "", price: "150" },
    ],
  },
];

function CategorySection({ category, items, index }: MenuCategory & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
      <h3 className="font-[family-name:var(--font-dela-gothic)] text-xl md:text-2xl text-[#FFD166] tracking-[0.1em] mb-8">
        {category}
      </h3>
      <div className="space-y-0">
        {items.map((item, i) => (
          <div
            key={i}
            className="menu-item py-5 border-b border-white/5 flex items-baseline justify-between gap-4"
          >
            <div className="flex-1 min-w-0">
              <span className="font-[family-name:var(--font-shippori-antique)] text-base md:text-lg text-white/90 tracking-wider">
                {item.name}
              </span>
              {item.desc && (
                <p className="text-xs md:text-sm text-white/30 mt-1 tracking-wide">
                  {item.desc}
                </p>
              )}
            </div>
            <span className="font-[family-name:var(--font-zen-maru)] text-sm text-[#FFD166]/70 whitespace-nowrap tabular-nums">
              ¥{item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenuSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current?.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#141414]/60 py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        {/* Section title */}
        <div ref={titleRef} className="reveal mb-16">
          <p className="text-[10px] text-[#E63946]/60 tracking-[0.5em] uppercase mb-4">
            Menu
          </p>
          <h2 className="font-[family-name:var(--font-dela-gothic)] text-2xl md:text-3xl text-[#E63946] tracking-[0.1em] neon-glow">
            品書き
          </h2>
          <p className="text-xs text-white/30 mt-3 tracking-wide">
            ※価格は税込です。仕入れ状況により内容が変わる場合がございます。
          </p>
        </div>

        {/* Menu photos */}
        <div className="grid grid-cols-3 gap-3 mb-16">
          <div className="relative aspect-square overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=640&h=640&fit=crop&q=80"
              alt="イメージ写真"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 256px"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1552611052-33e04de8127b?w=640&h=640&fit=crop&q=80"
              alt="イメージ写真"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 256px"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=640&h=640&fit=crop&q=80"
              alt="イメージ写真"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 256px"
            />
          </div>
        </div>

        {/* Menu categories */}
        <div className="space-y-16">
          {MENU_DATA.map((cat, i) => (
            <CategorySection key={cat.category} {...cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
