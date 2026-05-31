import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/homepage/HeroSection";
import { FeatureStrip } from "@/components/homepage/FeatureStrip";
import { FeatureCards } from "@/components/homepage/FeatureCards";
import { WhyAcademiqSection } from "@/components/homepage/WhyAcademiqSection";
import { ProblemSolveSection } from "@/components/homepage/ProblemSolveSection";
import { TrustBadgesSection } from "@/components/homepage/TrustBadgesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 space-y-16">
        <HeroSection />
        <FeatureStrip />
        <FeatureCards />
        <WhyAcademiqSection />
        <ProblemSolveSection />
        <TrustBadgesSection />
      </main>
      <Footer />
    </>
  );
}
