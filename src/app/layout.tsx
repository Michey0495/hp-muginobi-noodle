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
      <body className="font-[family-name:var(--font-zen-maru)] bg-black text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "麦伸ぬーどる",
              description: "帯広駅徒歩5分。札幌麦伸堂直送の麺を使った深夜営業のラーメン・餃子店。",
              url: "https://muginobi-noodle.ezoai.jp",
              telephone: "0155-20-3939",
              address: {
                "@type": "PostalAddress",
                streetAddress: "西一条南10-4 アポロビル 1F",
                addressLocality: "帯広市",
                addressRegion: "北海道",
                postalCode: "080-0011",
                addressCountry: "JP",
              },
              servesCuisine: ["ラーメン", "餃子"],
              priceRange: "~999",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "20:00",
                  closes: "03:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday", "Saturday"],
                  opens: "20:00",
                  closes: "05:00",
                },
              ],
              paymentAccepted: "Cash",
              currenciesAccepted: "JPY",
              numberOfEmployees: { "@type": "QuantitativeValue" },
              hasMap: "https://www.google.com/maps/search/麦伸ぬーどる+帯広市西一条南10-4",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
