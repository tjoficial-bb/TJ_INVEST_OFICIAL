import { Star } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Ricardo S.', text: 'Excelente assessoria! Me acompanharam em todas as etapas e o imóvel foi entregue sem nenhuma dor de cabeça.', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 2, name: 'Juliana M.', text: 'Profissionais extremamente competentes e transparentes. Recomendo para quem quer investir com segurança.', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 3, name: 'Fernando T.', text: 'Consegui arrematar meu primeiro imóvel com a TJ Invest. Todo o processo foi muito tranquilo.', avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
  { id: 4, name: 'Marina L.', text: 'A análise técnica deles me deu a segurança que eu precisava para investir.', avatar: 'https://randomuser.me/api/portraits/women/21.jpg' },
  { id: 5, name: 'Pedro B.', text: 'Eficiência total. O suporte na reforma foi o diferencial para meu lucro.', avatar: 'https://randomuser.me/api/portraits/men/67.jpg' },
  { id: 6, name: 'Cláudia F.', text: 'Investimento rentável. A TJ Invest cuida de todos os detalhes burocráticos.', avatar: 'https://randomuser.me/api/portraits/women/88.jpg' },
];

export const TestimonialsCarousel = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto space-y-12">
                <h2 className="font-serif text-4xl text-dark text-center">Quem investe com <span className="text-gold italic">segurança, recomenda.</span></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white p-6 border border-gray-100 rounded-lg shadow-md flex flex-col items-center text-center space-y-4">
                            <div className="flex text-yellow-400">
                                 {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16}/>)}
                            </div>
                            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-gold object-cover" />
                            <p className="font-sans text-gray-600 text-sm italic">"{t.text}"</p>
                            <div className="font-bold text-dark">{t.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
