import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-[family-name:var(--font-dela-gothic)] text-lg text-[#E63946]/40 tracking-[0.15em] mb-4">
          麦伸ぬーどる
        </p>
        <p className="text-[10px] text-white/15 tracking-[0.2em] mb-1">
          北海道帯広市西一条南10-4 アポロビル 1F
        </p>
        <p className="text-[10px] text-white/15 tracking-[0.2em] mb-6">
          TEL: 0155-20-3939
        </p>
        <div className="flex items-center justify-center gap-6 mb-8">
          <Link href="/menu" className="text-[11px] text-white/20 hover:text-white/40 tracking-wider transition-colors">
            メニュー
          </Link>
          <Link href="/info" className="text-[11px] text-white/20 hover:text-white/40 tracking-wider transition-colors">
            店舗情報
          </Link>
          <Link href="/contact" className="text-[11px] text-white/20 hover:text-white/40 tracking-wider transition-colors">
            お問い合わせ
          </Link>
        </div>
        <p className="text-[10px] text-white/15 tracking-[0.2em] mb-8">
          &copy; {new Date().getFullYear()} 麦伸ぬーどる
        </p>
        <p className="text-[10px] text-white/10 tracking-wide">
          本サイトは
          <a
            href="https://ezoai.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white/25 transition-colors"
          >
            EZOAI
          </a>
          によるデモ制作です
        </p>
        <p className="text-[10px] text-white/10 tracking-wide mt-2">
          ※掲載写真はイメージです。実際の料理・店内とは異なります。
        </p>
      </div>
    </footer>
  );
}
