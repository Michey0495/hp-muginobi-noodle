"use client";

export default function Loading() {
  return (
    <div className="loading-screen-exit fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center">
      {/* Steam animation */}
      <div className="flex gap-3 mb-8">
        <div className="steam-line w-1 h-8 bg-[#E63946]/60 rounded-full" />
        <div className="steam-line w-1 h-6 bg-[#E63946]/40 rounded-full" />
        <div className="steam-line w-1 h-10 bg-[#E63946]/50 rounded-full" />
      </div>

      {/* Shop name */}
      <p className="loading-name font-[family-name:var(--font-dela-gothic)] text-2xl sm:text-3xl text-[#E63946] tracking-[0.2em]">
        麦伸ぬーどる
      </p>
    </div>
  );
}
