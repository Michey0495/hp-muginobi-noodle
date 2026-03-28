import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import MenuSection from "@/components/MenuSection";
import PhoneCTA from "@/components/PhoneCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "メニュー | 麦伸ぬーどる",
  description: "麦伸ぬーどるのメニュー。札幌麦伸堂直送の麺を使ったラーメン各種と餃子。",
};

export default function MenuPage() {
  return (
    <>
      <Navigation />
      <main>
        <div className="pt-24" />
        <MenuSection />
        <PhoneCTA />
      </main>
      <Footer />
    </>
  );
}
