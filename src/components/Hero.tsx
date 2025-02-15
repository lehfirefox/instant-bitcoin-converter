
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-20">
      <div className="relative w-full max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight animate-fadeIn">
          Converta valores para Bitcoin instantaneamente pela{" "}
          <span className="text-bitcoin inline-flex items-center">
            Lightning
            <Zap className="w-8 h-8 md:w-12 md:h-12 ml-2" />
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          Foque no que importa: Expandir seu negócio
        </p>
        <div className="animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="bg-bitcoin hover:bg-bitcoin-dark text-white text-lg px-8 h-14">
            Seja nosso parceiro
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
