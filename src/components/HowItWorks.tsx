
import { Card } from "./ui/card";

const steps = [
  {
    number: "1",
    title: "Cobre via PIX",
    description: "Gere um QR Code que seu cliente pagará via PIX",
  },
  {
    number: "2",
    title: "Conversão automática",
    description: "O valor será convertido para Depix e em seguida, para Bitcoin pela cotação do momento, via Lightning Network.",
  },
  {
    number: "3",
    title: "Transferências simultâneas",
    description: "Transferimos o valor que irá para você e o que irá para a carteira do cliente (no caso do P2P)",
  },
  {
    number: "4",
    title: "Pronto!",
    description: "O saldo estará seguro na carteira que você indicou. Não temos contato direto com seus fundos.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona?</h2>
        <p className="text-xl text-gray-600 mb-16">Do PIX para Bitcoin em menos de 5 minutos</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-left relative backdrop-blur-sm bg-white/90">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
