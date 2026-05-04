import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center pt-16 lg:pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hero_background_1777909996340.png" 
          alt="Luxury House" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <h1 className="text-4xl lg:text-7xl font-serif text-white tracking-tight leading-tight">
          Arremate imóveis com <span className="text-gold">até 70% de desconto</span><br className="md:hidden"/>
          com total segurança.
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto font-sans">
          Assessoria especializada em leilões de imóveis. Nós cuidamos de toda a análise jurídica e estratégica para você.
        </p>

        <a 
          href="https://wa.me/553173590970"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold hover:bg-gold/90 text-dark px-8 py-4 rounded font-bold text-lg transition-all shadow-xl shadow-gold/20 flex items-center gap-2 mx-auto w-fit"
        >
          FALAR AGORA COM UM ESPECIALISTA
          <ArrowRight className="w-5 h-5" />
        </a>

        <p className="text-white/60 text-sm font-sans">+80 clientes já arremataram conosco</p>
      </div>
    </section>
  );
};
