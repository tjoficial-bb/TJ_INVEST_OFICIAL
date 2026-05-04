export const JuridicalAssistance = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-6 text-dark font-sans">
      <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
        <h2 className="font-serif text-3xl md:text-4xl text-center">Nossa Especialidade: A Diferença TJ Invest</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
                <h3 className="font-serif text-xl md:text-2xl text-gold">Assessoria Jurídica em Leilões</h3>
                <p className="leading-relaxed text-sm md:text-base">Nosso foco é a blindagem do seu investimento. Analisamos minuciosamente o edital e todo o processo judicial/extrajudicial para garantir que a oportunidade seja real e segura.</p>
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                    <li>Análise documental e jurídica de riscos</li>
                    <li>Verificação de débitos (IPTU, condomínio)</li>
                    <li>Monitoramento rigoroso do edital</li>
                </ul>
            </div>
            <div className="space-y-4">
                <h3 className="font-serif text-xl md:text-2xl text-gold">Gestão de Arrematação</h3>
                <p className="leading-relaxed text-sm md:text-base">Não somos apenas mediadores; somos gestores do seu patrimônio. Cuidamos de todo o trâmite, da regularização documental até a desocupação e reforma.</p>
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                    <li>Condução estratégica do leilão</li>
                    <li>Regularização documental (ITBI, Registro)</li>
                    <li>Gestão de desocupação e reforma (remota)</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};
