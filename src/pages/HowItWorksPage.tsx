import { Layout } from '../components/Layout';

export const HowItWorksPage = () => {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-6 py-20 space-y-8">
                <h1 className="font-serif text-5xl text-gold">Como Funciona</h1>
                <p>Nossa assessoria é estruturada em uma Gestão de Arrematação completa, dividida em quatro etapas fundamentais:</p>
                <div className="space-y-8">
                    <section>
                        <h3 className="text-2xl font-bold text-gold mb-3">1. Captação e Análise de Oportunidades</h3>
                        <p className="leading-relaxed">Iniciamos com uma busca ativa por imóveis com potencial. Realizamos uma análise aprofundada em três pilares: <br/> 
                        • <strong>Análise Mercadológica:</strong> Avaliamos o valor real de mercado e o potencial de desconto.<br/>
                        • <strong>Análise Documental e Jurídica:</strong> blindamos você contra problemas jurídicos, analisando o edital e débito pendentes.<br/>
                        • <strong>Análise Financeira:</strong> Entregamos uma planilha transparente de todos os custos da operação.</p>
                    </section>
                    <section>
                        <h3 className="text-2xl font-bold text-gold mb-3">2. Arrematação e Transferência</h3>
                        <p className="leading-relaxed">Assumimos a condução estratégica do leilão em seu nome. Após o sucesso no arremate, cuidamos de toda a burocracia para a transferência e regularização documental no cartório de registro de imóveis, garantindo que o imóvel seja seu sem complicações.</p>
                    </section>
                    <section>
                        <h3 className="text-2xl font-bold text-gold mb-3">3. Gestão de Desocupação</h3>
                        <p className="leading-relaxed">Caso o imóvel esteja ocupado, nossa equipe especializada assume a gestão de desocupação. Priorizamos a via extrajudicial para uma resolução rápida, permitindo que você tenha a posse do imóvel o mais breve possível (em cerca de 90% dos casos em 15 a 30 dias).</p>
                    </section>
                    <section>
                        <h3 className="text-2xl font-bold text-gold mb-3">4. Gestão de Reforma e Preparação</h3>
                        <p className="leading-relaxed">Se necessário, coordenamos a reforma de forma remota. Trabalhamos com uma rede de equipes terceirizadas verificadas, realizando orçamentos detalhados, diligências para confirmar as informações e acompanhamento rigoroso do serviço por etapas, garantindo que o imóvel esteja pronto para morar, vender ou alugar.</p>
                    </section>
                </div>
            </div>
        </Layout>
    );
};
