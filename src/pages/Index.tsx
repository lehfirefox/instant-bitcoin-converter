
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Hero />
      <Benefits />
      <HowItWorks />
      <div className="py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Já imaginou dobrar seu número de transações sem precisar trabalhar mais por isso?
        </h2>
        <CTA />
      </div>
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
