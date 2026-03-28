import Loading from "@/components/Loading";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Divider from "@/components/Divider";
import Hours from "@/components/Hours";
import MenuSection from "@/components/MenuSection";
import ShopInfo from "@/components/ShopInfo";
import PhoneCTA from "@/components/PhoneCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loading />
      <Navigation />
      <main>
        <Hero />
        <Divider />
        <Concept />
        <Divider />
        <Hours />
        <Divider />
        <MenuSection />
        <Divider />
        <ShopInfo />
        <PhoneCTA />
      </main>
      <Footer />
    </>
  );
}
