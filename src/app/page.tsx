import IntroductionSection from "@/components/home/IntroductionSection";
import HeroSection from "@/components/home/HeroSection";
import ConceptGrid from "@/components/home/ConceptGrid";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <IntroductionSection />
        <ConceptGrid />
      </main>
      <Footer />
    </>
  );
}
