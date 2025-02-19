
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Como a plataforma faz a cotação?",
    answer: "Usamos dados de exchanges globais para garantir a melhor taxa PIX/BTC do mercado.",
  },
  {
    question: "Meus dados financeiros estão protegidos?",
    answer: "Sim! Não exigimos KYC, ou seja, só pedimos informações básicas para identificar o seu perfil e o do seu cliente, sem coletarmos informações sensíveis.",
  },
  {
    question: "Há custos para ser parceiro?",
    answer: "Não. Apenas cobramos o valor de R$2,00 + 1.5% do montante total do valor transacionado.",
  },
  {
    question: "Funciona para outras criptomoedas além do Bitcoin?",
    answer: "Por enquanto não. Mas em breve, adicionaremos outras redes.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Perguntas Frequentes (FAQ)
        </h2>
        <p className="text-xl text-gray-400 text-center mb-12">
          Tudo o que você precisa saber
        </p>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-morphism px-6 rounded-lg border-white/10"
            >
              <AccordionTrigger className="text-left text-white hover:text-white/90 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
