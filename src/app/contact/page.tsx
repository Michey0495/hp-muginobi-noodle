import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PhoneCTA from "@/components/PhoneCTA";
import ShopInfo from "@/components/ShopInfo";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "お問い合わせ | 麦伸ぬーどる",
  description: "麦伸ぬーどるへのお問い合わせ。お電話は 0155-20-3939 まで。",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <div className="pt-24" />
        <PhoneCTA />
        <ShopInfo />
      </main>
      <Footer />
    </>
  );
}
