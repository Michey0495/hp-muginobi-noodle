import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ShopInfo from "@/components/ShopInfo";
import Hours from "@/components/Hours";
import PhoneCTA from "@/components/PhoneCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "店舗情報 | 麦伸ぬーどる",
  description: "麦伸ぬーどるの店舗情報。北海道帯広市西一条南10-4 アポロビル 1F。帯広駅徒歩5分。",
};

export default function InfoPage() {
  return (
    <>
      <Navigation />
      <main>
        <div className="pt-24" />
        <h1 className="sr-only">麦伸ぬーどる 店舗情報</h1>
        <ShopInfo />
        <Hours />
        <PhoneCTA />
      </main>
      <Footer />
    </>
  );
}
