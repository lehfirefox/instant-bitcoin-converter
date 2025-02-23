
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleCTAClick = () => {
    setShowContactForm(true);
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onCTAClick={handleCTAClick} />
      <Benefits />
      <HowItWorks />
      <div className="py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Já imaginou dobrar seu número de transações sem precisar trabalhar mais por isso?
        </h2>
        <Button 
          size="lg" 
          className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-lg px-8 h-14"
          onClick={handleCTAClick}
        >
          Quero ser um parceiro
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
      <FAQ />
      <CTA onClick={handleCTAClick} />
      {showContactForm && <ContactForm />}
      <Footer />
    </div>
  );
};

export default Index;
