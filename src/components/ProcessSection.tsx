export const ProcessSection = () => {
  const steps = [
    { id: '01', title: 'Captação e análise', description: 'Selecionamos os melhores imóveis e analisamos toda a documentação e riscos.' },
    { id: '02', title: 'Arrematação', description: 'Representamos você no leilão e garantimos a melhor estratégia para arrematar.' },
    { id: '03', title: 'Desocupação', description: 'Cuidamos de toda a parte jurídica para posse limpa do imóvel.' },
    { id: '04', title: 'Reforma e preparação', description: 'Indicamos os melhores profissionais para valorizar e rentabilizar o imóvel.' },
  ];

  return (
    <section className="bg-dark py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="font-serif text-4xl text-white text-center">
          Do edital à <span className="text-gold italic">entrega das chaves</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(step => (
            <div key={step.id} className="border border-white/10 p-8 space-y-4 hover:border-gold transition-colors">
              <div className="text-gold font-serif text-lg">{step.id}</div>
              <h3 className="text-white font-serif text-xl">{step.title}</h3>
              <p className="text-white/70 font-sans text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
