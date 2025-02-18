
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
    business: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically handle the form submission
  };

  return (
    <section className="py-20 px-4 bg-background/50" id="contact-form">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Form Side */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Nome</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telegram" className="text-white">Usuário do Telegram(@)</Label>
                <Input
                  id="telegram"
                  value={formData.telegram}
                  onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="business" className="text-white">Breve descrição do negócio</Label>
                <Textarea
                  id="business"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Mensagem</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full bg-[#8B5CF6] hover:bg-[#7c3aed] text-white">
                Enviar mensagem
              </Button>
            </form>
          </div>

          {/* Text Side */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Contato</h2>
            <p className="text-gray-400 text-lg">
              Para mais informações sobre parceria e dúvidas, preencha o formulário que entraremos em contato o mais breve possível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
