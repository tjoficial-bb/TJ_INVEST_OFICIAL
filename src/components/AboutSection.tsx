export const AboutSection = () => {
  return (
    <section className="bg-dark py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <img 
            src="/src/assets/images/hero_background_1777909996340.png" 
            alt="Office" 
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="font-serif text-4xl text-white">
            Assessoria completa.<br/>
            <span className="text-gold">Resultados reais.</span>
          </h2>
          <p className="text-white/80 font-sans leading-relaxed">
            A TJ Invest é uma assessoria especializada em leilões de imóveis, com foco em segurança jurídica, transparência e alta performance.
          </p>
          <p className="text-white/80 font-sans leading-relaxed">
            Nossa equipe multidisciplinar acompanha todas as etapas do processo, desde a análise do edital até a entrega das chaves.
          </p>
          <button className="text-gold font-bold hover:underline underline-offset-4">
            SAIBA MAIS SOBRE NÓS
          </button>
        </div>
      </div>
    </section>
  );
};
