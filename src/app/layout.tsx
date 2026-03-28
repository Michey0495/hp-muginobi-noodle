import type { Metadata } from "next";
import { Dela_Gothic_One, Zen_Maru_Gothic, Shippori_Antique } from "next/font/google";
import "./globals.css";

const delaGothic = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dela-gothic",
  display: "swap",
});

const zenMaru = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
  display: "swap",
});

const shipporiAntique = Shippori_Antique({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-shippori-antique",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muginobi-noodle.ezoai.jp"),
  title: "麦伸ぬーどる | 帯広の深夜〆ラーメン",
  description:
    "帯広駅徒歩5分。札幌麦伸堂直送の麺を使った深夜営業のラーメン・餃子店。月〜木 20:00〜03:00、金・土 20:00〜05:00。カウンター10席の隠れ家。",
  keywords: ["麦伸ぬーどる", "帯広", "ラーメン", "餃子", "深夜", "〆ラーメン", "鉄ぺい"],
  openGraph: {
    title: "麦伸ぬーどる | 帯広の深夜〆ラーメン",
    description:
      "帯広駅徒歩5分。札幌麦伸堂直送の麺。深夜営業のラーメン・餃子店。カウンター10席の隠れ家。",
    type: "website",
    locale: "ja_JP",
    siteName: "麦伸ぬーどる",
  },
  twitter: {
    card: "summary_large_image",
    title: "麦伸ぬーどる | 帯広の深夜〆ラーメン",
    description: "帯広駅徒歩5分。深夜営業のラーメン・餃子店。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${delaGothic.variable} ${zenMaru.variable} ${shipporiAntique.variable}`}
    >
      <body className="font-[family-name:var(--font-zen-maru)] bg-[#0A0A0A] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
