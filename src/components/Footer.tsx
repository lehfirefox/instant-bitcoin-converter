
import { Github, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">DePIX</h3>
            <p className="text-gray-400">
              Convertendo PIX para Bitcoin instantaneamente
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Suporte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Certificações</h3>
            <div className="flex flex-wrap gap-4">
              <img src="/placeholder.svg" alt="SSL" className="h-12" />
              <img src="/placeholder.svg" alt="Lightning Network Certified" className="h-12" />
              <img src="/placeholder.svg" alt="DePIX" className="h-12" />
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DePIX. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
