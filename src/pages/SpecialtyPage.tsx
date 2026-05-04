import { Layout } from '../components/Layout';

export const SpecialtyPage = () => {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-6 py-20 space-y-8">
                <h1 className="font-serif text-5xl text-gold">Nossa Especialidade</h1>
                <p>Especialistas em leilões judiciais e extrajudiciais, oferecendo segurança jurídica e máxima performance.</p>
                <div className="grid md:grid-cols-2 gap-8 mt-10">
                    <div className="border border-white/10 p-6">
                        <h3 className="text-xl font-bold mb-4">Leilão Judicial</h3>
                        <p>Processos determinado pelo juiz para quitar dívidas.</p>
                    </div>
                    <div className="border border-white/10 p-6">
                        <h3 className="text-xl font-bold mb-4">Leilão Extrajudicial</h3>
                        <p>Promovido por credores como bancos, baseado em contrato de alienação fiduciária.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
