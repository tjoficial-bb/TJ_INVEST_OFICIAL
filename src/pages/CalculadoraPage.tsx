import { Layout } from '../components/Layout';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const CalculadoraPage = () => {
  const [formData, setFormData] = useState({
    valorArrematacao: '',
    precoVenda: '',
    periodoRevenda: 12,
    modalidadePagamento: 'À Vista',
    comissaoPercentual: 5,
    itbiPercentual: 3,
    assessoriaPercentual: 6,
    dividaPropterRem: 0,
    valorRegistro: 0,
    reformaMaodeObra: 0,
    reformaMaterial: 0,
    outrosCustos: 0,
  });

  const [showResults, setShowResults] = useState(false);

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  const calcular = () => {
    setShowResults(true);
  };

  const arrematacao = Number(formData.valorArrematacao) || 0;
  const venda = Number(formData.precoVenda) || 0;
  
  const custosFixosAquisicao = Number(formData.dividaPropterRem) + Number(formData.valorRegistro) + Number(formData.reformaMaodeObra) + Number(formData.reformaMaterial) + Number(formData.outrosCustos);
  const custosPercentuaisAquisicao = arrematacao * (formData.comissaoPercentual + formData.itbiPercentual + formData.assessoriaPercentual) / 100;
  const custosAquisicao = custosFixosAquisicao + custosPercentuaisAquisicao;
  
  const lucroBruto = venda - arrematacao - custosAquisicao;
  const roi = (arrematacao > 0) ? (lucroBruto / (arrematacao + custosAquisicao)) * 100 : 0;

  const chartData = [
    { name: 'Arrematação', value: arrematacao },
    { name: 'Custos', value: custosAquisicao },
    { name: 'Venda', value: venda },
  ];

  return (
    <Layout>
      <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="leading-tight font-serif text-4xl md:text-6xl text-white mb-6">
                Calculadora de Viabilidade <br className="hidden md:block"/>
                para Investimentos em <br className="hidden md:block"/>
                Leilões Imobiliários
            </h1>
            <p className="text-white/70 font-sans text-lg max-w-2xl mx-auto">
                Simule seus custos, impostos e o potencial de lucro em arrematações de imóveis com a precisão da TJ Invest.
            </p>
            <div className="w-20 h-px bg-gold mx-auto mt-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-8">
                <div className="bg-dark-lighter p-6 rounded-lg border border-white/10 space-y-6">
                    <h2 className="text-xl text-white font-serif border-b border-white/10 pb-4">Premissas</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-white/70 mb-1">Valor da Arrematação (R$)</label>
                            <input type="number" placeholder="0,00" value={formData.valorArrematacao} onChange={(e) => updateField('valorArrematacao', e.target.value)} className="w-full bg-dark border border-white/20 rounded p-2 text-white focus:border-gold outline-none"/>
                        </div>
                        <div>
                            <label className="block text-sm text-white/70 mb-1">Preço de Venda (R$)</label>
                            <input type="number" placeholder="0,00" value={formData.precoVenda} onChange={(e) => updateField('precoVenda', e.target.value)} className="w-full bg-dark border border-white/20 rounded p-2 text-white focus:border-gold outline-none"/>
                        </div>
                        <div>
                            <label className="block text-sm text-white/70 mb-1">Modalidade de Pagamento</label>
                            <div className="flex gap-4">
                                {['À Vista', 'Financiado', 'Parcelado'].map(m => (
                                    <label key={m} className="flex items-center gap-2 text-white/80 cursor-pointer">
                                        <input type="radio" name="modalidade" value={m} checked={formData.modalidadePagamento === m} onChange={(e) => updateField('modalidadePagamento', e.target.value)}/>
                                        {m}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={calcular} className="w-full bg-gold text-dark font-bold py-3 rounded hover:bg-gold/90 transition-colors">
                    CALCULAR INVESTIMENTO
                </button>
            </div>

            {showResults && (
                <div className="lg:col-span-2 space-y-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
                            <div className="text-white/70 text-sm mb-2">Lucro Estimado</div>
                            <div className="text-gold text-2xl font-bold">{formatCurrency(lucroBruto)}</div>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
                            <div className="text-white/70 text-sm mb-2">ROI</div>
                            <div className="text-gold text-2xl font-bold">{roi.toFixed(1)}%</div>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
                            <div className="text-white/70 text-sm mb-2">Exposição de Caixa</div>
                            <div className="text-white text-2xl font-bold">{formatCurrency(arrematacao + custosAquisicao)}</div>
                        </div>
                    </div>

                    <div className="bg-white/5 p-6 rounded-lg border border-white/10 h-80">
                        <h2 className="text-xl text-white font-serif mb-6">Projeção do Investimento</h2>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <XAxis dataKey="name" stroke="#ffffff80" />
                                <YAxis stroke="#ffffff80" tickFormatter={(value) => `R$ ${value / 1000}k`} />
                                <Tooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff20' }} />
                                <Bar dataKey="value" fill="#c5a059" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}
        </div>
      </div>
    </Layout>
  );
};
