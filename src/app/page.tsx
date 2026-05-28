import BackgroundElements from "@/components/BackgroundElements";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import FounderSection from "@/components/FounderSection";
import TrustFooter from "@/components/TrustFooter";

export default function Home() {
  return (
    <>
      <BackgroundElements />
      <Navbar />
      <Hero />
      <StatsStrip />
      <FounderSection />
      <TrustFooter />
    </>
  );
}
