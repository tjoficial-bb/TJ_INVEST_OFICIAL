export const StatsBar = () => {
  const stats = [
    { value: '+120', label: 'IMÓVEIS ARREMATADOS' },
    { value: '+80', label: 'CLIENTES ATENDIDOS' },
    { value: '100%', label: 'ACOMPANHAMENTO JURÍDICO' },
    { value: '+5', label: 'ANOS DE MERCADO' },
  ];

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center space-y-1">
            <div className="font-serif text-3xl md:text-4xl text-dark font-bold">{stat.value}</div>
            <div className="font-sans text-xs text-gray-500 tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
