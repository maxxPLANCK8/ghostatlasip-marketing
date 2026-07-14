import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <Products />
      <HowItWorks />
      <Pricing />
      <CtaBand />
      <Footer />
    </div>
  );
}
