import { Layout } from '../components/Layout';

export const FAQPage = () => {
    const faqs = [
        { q: 'O que é um leilão de imóveis?', a: 'Um leilão de imóveis é um evento público de venda de propriedades, geralmente por um preço abaixo do valor de mercado, que pode ser judicial (determinado pela justiça) ou extrajudicial (promovido por instituições financeiras ou empresas).' },
        { q: 'Quem pode participar de um leilão de imóveis?', a: 'Qualquer pessoa física ou jurídica, maior de idade e capaz, pode participar, desde que não esteja impedida por lei.' },
        { q: 'É seguro comprar imóveis em leilão?', a: 'Sim, é seguro, desde que se faça uma análise criteriosa do edital e do processo. A assessoria especializada da TJ Invest é fundamental para garantir essa segurança jurídica, avaliando todos os riscos possíveis.' },
        { q: 'O imóvel pode estar ocupado?', a: 'Sim. Em caso de imóvel ocupado, a TJ Invest oferece a Gestão de Desocupação, priorizando a via extrajudicial para agilizar o processo e garantir a posse do imóvel ao arrematante.' },
        { q: 'Como a TJ Invest garante a segurança jurídica?', a: 'Realizamos uma análise documental e jurídica aprofundada do edital e do processo, verificando débitos, penhoras, hipotecas e quaisquer problemas que possam comprometer a arrematação.' },
        { q: 'Existe consulta inicial paga?', a: 'Não, a consulta inicial para entender suas necessidades e apresentar nossa assessoria é gratuita.' },
    ];
    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="font-serif text-5xl text-gold mb-12">Perguntas Frequentes</h1>
                <div className="space-y-8">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-white/10 pb-6">
                            <h4 className="text-xl font-bold">{faq.q}</h4>
                            <p className="text-white/70 mt-2">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};
