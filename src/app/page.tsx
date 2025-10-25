import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HomeSection from "@/components/sections/home-section";
import SpecsSection from "@/components/sections/specs-section";
import HistorySection from "@/components/sections/history-section";
import EvolutionSection from "@/components/sections/evolution-section";
import TracksSection from "@/components/sections/tracks-section";
import ModsSection from "@/components/sections/mods-section";
import GallerySection from "@/components/sections/gallery-section";
import VideoSection from "@/components/sections/video-section";
import ContentSummarySection from "@/components/sections/content-summary-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HomeSection />
        <SpecsSection />
        <HistorySection />
        <EvolutionSection />
        <TracksSection />
        <ModsSection />
        <GallerySection />
        <VideoSection />
        <ContentSummarySection />
      </main>
      <Footer />
    </div>
  );
}
