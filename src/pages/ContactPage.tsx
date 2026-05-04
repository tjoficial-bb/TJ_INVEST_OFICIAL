import { Layout } from '../components/Layout';
import { Phone, MessageSquare } from 'lucide-react';

export const ContactPage = () => {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-8">
                <h1 className="font-serif text-5xl text-gold">Contato</h1>
                <div className="space-y-4">
                    <p className="flex items-center justify-center gap-2"><Phone /> (31) 7359-0970</p>
                    <p>contato@tjinvest.com.br</p>
                </div>
                <a 
                    href="https://wa.me/553173590970"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold text-dark px-8 py-4 rounded font-bold transition-all flex items-center gap-2 mx-auto w-fit"
                >
                    <MessageSquare className="w-5 h-5"/>
                    FALAR NO WHATSAPP
                </a>
            </div>
        </Layout>
    );
};
