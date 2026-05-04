import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-dark text-white border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-8">
            <h2 className="font-serif text-4xl">Pronto para expandir seus <span className="italic text-gold">horizontes?</span></h2>
            <p className="text-white/70">Entre em contato com nossa equipe de especialistas e descubra como podemos potencializar seus resultados.</p>
            <a 
                href="https://wa.me/553173590970"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-dark px-8 py-4 rounded font-bold transition-all flex items-center gap-2 mx-auto w-fit"
            >
                <MessageSquare className="w-5 h-5"/>
                FALAR NO WHATSAPP
            </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-sans text-sm">
            <div className="space-y-4">
                <img src="https://i.ibb.co/1YkbVmS7/1773162517590-removebg-preview.png" alt="TJ INVEST" className="h-24" />
                <p className="text-white/60">ASSESSORIA ESPECIALIZADA EM LEILÕES DE IMÓVEIS.</p>
            </div>
            
            <div className="space-y-4">
                <h5 className="font-bold">NAVEGAÇÃO</h5>
                <div className="space-y-2 text-white/70">
                    <Link to="/">Início</Link>
                    <Link to="/sobre">Sobre</Link>
                    <Link to="/contato">Contato</Link>
                </div>
            </div>
            <div className="space-y-4">
                <h5 className="font-bold">SERVIÇOS</h5>
                <div className="space-y-2 text-white/70">
                    <div>Análise de editais</div>
                    <div>Assessoria jurídica</div>
                    <div>Arrematação & Desocupação</div>
                </div>
            </div>
            <div className="space-y-4 text-white/70">
                <h5 className="font-bold text-white">CONTATO</h5>
                <div>(31) 7359-0970</div>
                <div>contato@tjinvest.com.br</div>
                <address className="not-italic">Av. do Contorno, 6283 - Sala 1602<br/>Savassi, BH/MG</address>
            </div>
        </div>
        
        <div className="text-center pt-10 border-t border-white/10 text-white/50 text-xs">
            © 2024 TJ INVEST. TODOS OS DIREITOS RESERVADOS.
        </div>
      </div>
    </footer>
  );
};
