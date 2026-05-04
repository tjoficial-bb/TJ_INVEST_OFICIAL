export const FAQSection = () => {
  const faqs = [
    { q: 'Qual o valor mínimo para investir?', a: 'O valor mínimo varia conforme o edital, mas existem excelentes oportunidades a partir de R$ 150 mil.' },
    { q: 'Como é feita a análise jurídica?', a: 'Analisamos minuciosamente o edital, o processo judicial, dívidas do espólio e histórico dos proprietários.' },
    { q: 'Quais são os custos envolvidos?', a: '...' },
    { q: 'Em quanto tempo recebo o imóvel?', a: '...' },
    { q: 'O imóvel pode estar ocupado?', a: '...' },
    { q: 'Vocês atuam em todo o Brasil?', a: '...' },
    { q: 'Posso financiar um imóvel de leilão?', a: '...' },
    { q: 'Como funciona o pagamento?', a: '...' },
  ];

  return (
    <section className="bg-dark py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="font-serif text-4xl text-white text-center">Perguntas <span className="text-gold italic">mais comuns</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10 pb-6">
              <h4 className="text-white font-serif text-lg">{faq.q}</h4>
              <p className="text-white/60 font-sans text-sm mt-3">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
