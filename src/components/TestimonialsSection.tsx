export const TestimonialsSection = () => {
  const testimonials = [
    { text: 'Excelente assessoria! Me acompanharam em todas as etapas e o imóvel foi entregue sem nenhuma dor de cabeça.', author: 'Ricardo S.', location: 'SÃO PAULO - SP' },
    { text: 'Profissionais extremamente competentes e transparentes. Recomendo para quem quer investir com segurança.', author: 'Juliana M.', location: 'CURITIBA - PR' },
    { text: 'Consegui arrematar meu primeiro imóvel com a TJ Invest. Todo o processo foi muito tranquilo.', author: 'Fernando T.', location: 'BELO HORIZONTE - MG' },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="font-serif text-4xl text-dark text-center">Quem investe com <span className="text-gold italic">segurança, recomenda.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-dark p-8 space-y-6 text-white">
              <p className="font-sans italic">"{t.text}"</p>
              <div>
                <div className="font-bold">{t.author}</div>
                <div className="text-gold text-xs">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
