"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "メニュー", href: "/menu" },
  { label: "店舗情報", href: "/info" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-dela-gothic)] text-lg text-[#E63946] tracking-widest hover:opacity-80 transition-opacity neon-glow"
        >
          麦伸
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm tracking-wider text-white/70 hover:text-[#FFD166] transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="tel:0155203939"
              className="text-sm tracking-wider text-[#E63946] hover:text-[#FFD166] font-medium transition-colors duration-300"
            >
              電話する
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-[60]"
          aria-label="メニューを開く"
        >
          <span
            className={`block w-6 h-[1.5px] bg-[#E63946] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[4.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[#E63946] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[#E63946] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-[#0A0A0A]/98 backdrop-blur-lg z-50 flex flex-col items-center justify-center gap-10"
          style={{ animation: "slide-in 0.3s ease-out" }}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-[family-name:var(--font-shippori-antique)] text-2xl text-white/90 tracking-[0.2em] hover:text-[#FFD166] transition-colors"
          >
            トップ
          </Link>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-shippori-antique)] text-2xl text-white/90 tracking-[0.2em] hover:text-[#FFD166] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:0155203939"
            onClick={() => setMenuOpen(false)}
            className="font-[family-name:var(--font-shippori-antique)] text-2xl text-[#E63946] tracking-[0.2em] hover:text-[#FFD166] transition-colors"
          >
            電話する
          </a>
        </div>
      )}
    </nav>
  );
}
