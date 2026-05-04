import { Phone } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="bg-gold py-20 px-6 text-center text-dark space-y-6">
      <h2 className="font-serif text-4xl">Decisões inteligentes exigem <span className="italic">segurança jurídica.</span></h2>
      <p className="max-w-xl mx-auto">Fale agora com um especialista e descubra as melhores oportunidades.</p>
      <a 
        href="https://wa.me/553173590970"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-dark text-white hover:bg-black px-8 py-4 rounded font-bold transition-all flex items-center gap-2 mx-auto w-fit"
      >
        <Phone className="w-5 h-5" />
        FALAR COM ESPECIALISTA
      </a>
    </section>
  );
};
