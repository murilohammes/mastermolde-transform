import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import TransformationSection from "@/components/TransformationSection";
import CourseModules from "@/components/CourseModules";
import BonusSection from "@/components/BonusSection";
import InvestmentSection from "@/components/InvestmentSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Hero />
      <PainSection />
      <SolutionSection />
      <TransformationSection />
      <CourseModules />
      <BonusSection />
      <InvestmentSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
