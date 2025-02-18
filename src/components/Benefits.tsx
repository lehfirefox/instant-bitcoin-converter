
import { Clock, Bell, Shield, Briefcase } from "lucide-react";
import { Card } from "./ui/card";

const benefits = [
  {
    icon: Clock,
    title: "Economize tempo (e evite dor de cabeça)",
    description: "Não perca horas checando transações ou calculando cotações. Nossa plataforma faz a conversão automática de PIX para Bitcoin pela cotação em tempo real.",
  },
  {
    icon: Bell,
    title: "Notificações instantâneas",
    description: "Saiba exatamente quando o pagamento chegar. Alertas em tempo real via e-mail, SMS ou integração com seu sistema preferido.",
  },
  {
    icon: Shield,
    title: "Segurança em primeiro lugar",
    description: "Transações criptografadas e auditoria 24/7. Utilizamos tecnologia Lightning Network para transações rápidas e baixas taxas, com compliance antifraude.",
  },
  {
    icon: Briefcase,
    title: "Parceiro, não concorrente",
    description: "Não queremos seus clientes — queremos seu sucesso. Oferecemos ferramentas para você atender mais pessoas sem complicações.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Por que escolher a nossa plataforma?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 glass-morphism">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-[#8B5CF6]/10">
                  <benefit.icon className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
