
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
    answer: "Não. Apenas cobramos o percentual de 5% em cima do montante total do valor transacionado.",
  },
  {
    question: "Funciona para outras criptomoedas além do Bitcoin?",
    answer: "Por enquanto não. Mas em breve, adicionaremos outras redes.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Perguntas Frequentes (FAQ)
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Tudo o que você precisa saber
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
