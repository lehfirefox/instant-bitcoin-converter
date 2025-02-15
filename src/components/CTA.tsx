
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "./ui/button";

export const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Está pronto para escalar seu negócio P2P?
        </h2>
        <p className="text-xl text-gray-600">
          Junte-se a centenas de parceiros que já automatizaram recebimentos em cripto com agilidade e segurança.
        </p>
        <Button size="lg" className="bg-bitcoin hover:bg-bitcoin-dark text-white text-lg px-8 h-14">
          <Rocket className="mr-2 w-5 h-5" />
          Quero ser parceiro agora
        </Button>
      </div>
    </section>
  );
};
