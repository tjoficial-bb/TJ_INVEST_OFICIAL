export const SpecialtySection = () => {
    return (
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-white/10 p-10 space-y-6">
            <h4 className="text-gold font-sans text-xs tracking-widest uppercase">Segurança Jurídica</h4>
            <h3 className="font-serif text-3xl text-white">Imóveis de leilão podem ter riscos.<br/> <span className="italic">Nós eliminamos todos eles.</span></h3>
            <p className="text-white/70 font-sans leading-relaxed">Riscos como dívidas, ocupações, pendências judiciais e vícios ocultos podem transformar um bom negócio em um grande problema.</p>
            <p className="text-white/70 font-sans leading-relaxed">Nossa assessoria jurídica especializada atua para blindar seu investimento e garantir tranquilidade do início ao fim.</p>
            <button className="border border-gold text-gold hover:bg-gold hover:text-dark px-6 py-3 transition-all font-bold">
              SAIBA COMO GARANTIMOS SUA SEGURANÇA
            </button>
          </div>
          <div className="border border-white/10 p-10 space-y-6">
            <h4 className="text-gold font-sans text-xs tracking-widest uppercase">Nossa Especialidade</h4>
            <h3 className="font-serif text-3xl text-white">Especialistas em <br/> <span className="italic">leilões de imóveis.</span></h3>
            <p className="text-white/70 font-sans leading-relaxed">Não atuamos com compra e venda tradicional. Nosso foco é 100% em leilões, o que nos torna referência em identificar oportunidades reais e entregar resultados consistentes.</p>
            <div className="grid grid-cols-2 gap-4">
                <div className="text-gold">+10 ANOS<br/><span className="text-white text-xs">DE EXPERIÊNCIA</span></div>
                <div className="text-gold">ATUAÇÃO<br/><span className="text-white text-xs">EM TODO BRASIL</span></div>
                <div className="text-gold">+500 IMÓVEIS<br/><span className="text-white text-xs">ARREMATADOS</span></div>
            </div>
          </div>
        </div>
      </section>
    );
  };
