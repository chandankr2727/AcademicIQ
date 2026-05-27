import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/homepage/HeroSection";
import { FeatureStrip } from "@/components/homepage/FeatureStrip";
import { FeatureCards } from "@/components/homepage/FeatureCards";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeatureStrip />
        <FeatureCards />
      </main>
      <Footer />
    </>
  );
}
