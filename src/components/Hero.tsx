
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  onCTAClick?: () => void;
}

export const Hero = ({ onCTAClick }: HeroProps) => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Technology-inspired background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at center, black, transparent)',
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 20}s linear infinite`,
              animationDelay: `-${Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 backdrop-blur-[100px]" />
      
      {/* Content */}
      <div className="relative w-full max-w-4xl mx-auto text-center space-y-8 z-10">
        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight animate-fadeIn">
          Converta PIX em Bitcoin Instantaneamente pela{" "}
          <span className="text-[#8B5CF6] inline-flex items-center">
            Lightning
            <Zap className="w-8 h-8 md:w-12 md:h-12 ml-2" />
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          Foque no que importa: Expandir seu negócio
        </p>
        <div className="animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-lg px-8 h-14"
            onClick={onCTAClick}
          >
            Seja nosso parceiro
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
