import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Percent,
  Coins
} from 'lucide-react';

export default function RoiCalculator({ onCtaClick }) {
  const [budgetsPerMonth, setBudgetsPerMonth] = useState(120);
  const [averageTicket, setAverageTicket] = useState(1600);
  const [recoveryRate, setRecoveryRate] = useState(20);

  // Dynamic calculations
  const results = useMemo(() => {
    // Estimativa de orçamentos que ficam sem resposta na média de mercado (50%)
    const lostBudgets = Math.round(budgetsPerMonth * 0.50);
    // Quantidade de orçamentos recuperados com a plataforma
    const recoveredPerMonth = Math.round(lostBudgets * (recoveryRate / 100));
    // Faturamento mensal recuperado
    const monthlyRecoveredValue = recoveredPerMonth * averageTicket;
    // Faturamento anual acumulado
    const annualRecoveredValue = monthlyRecoveredValue * 12;

    return {
      lostBudgets,
      recoveredPerMonth,
      monthlyRecoveredValue,
      annualRecoveredValue,
    };
  }, [budgetsPerMonth, averageTicket, recoveryRate]);

  const formatBRL = (val) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="calculadora-retorno" className="py-24 bg-dark-900 relative overflow-hidden border-t border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-racing-orange/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-orange/10 border border-racing-orange/30 text-racing-orange text-xs font-semibold tracking-wider uppercase">
            <Calculator className="w-3.5 h-3.5" />
            Simulador de Impacto Financeiro
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Quanto a John Auto Center pode{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange via-amber-400 to-racing-red">
              resgatar por ano?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Ajuste os parâmetros da rotina da sua oficina para simular o retorno financeiro potencial ao implementar um acompanhamento ativo de orçamentos.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-dark-850 border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Sliders Controls */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Slider 1: Orçamentos por mês */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-medium">Orçamentos emitidos por mês:</span>
                  <span className="text-white font-bold font-mono text-base px-2.5 py-0.5 rounded bg-dark-800 border border-white/5">
                    {budgetsPerMonth} orçamentos
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="350"
                  step="10"
                  value={budgetsPerMonth}
                  onChange={(e) => setBudgetsPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-dark-750 rounded-lg appearance-none cursor-pointer accent-racing-orange"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>30</span>
                  <span>150</span>
                  <span>350+</span>
                </div>
              </div>

              {/* Slider 2: Ticket Médio */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-medium">Ticket médio por serviço:</span>
                  <span className="text-racing-orange font-bold font-mono text-base px-2.5 py-0.5 rounded bg-dark-800 border border-white/5">
                    {formatBRL(averageTicket)}
                  </span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="4000"
                  step="100"
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Number(e.target.value))}
                  className="w-full h-2 bg-dark-750 rounded-lg appearance-none cursor-pointer accent-racing-orange"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>R$ 400</span>
                  <span>R$ 2.000</span>
                  <span>R$ 4.000</span>
                </div>
              </div>

              {/* Slider 3: Taxa de Recuperação */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-medium">Taxa estimada de recuperação:</span>
                  <span className="text-emerald-400 font-bold font-mono text-base px-2.5 py-0.5 rounded bg-dark-800 border border-white/5">
                    {recoveryRate}% (Conservadora)
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="35"
                  step="1"
                  value={recoveryRate}
                  onChange={(e) => setRecoveryRate(Number(e.target.value))}
                  className="w-full h-2 bg-dark-750 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>10% (Baixa)</span>
                  <span>20% (Média)</span>
                  <span>35% (Otimizada)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-dark-900 border border-white/5 text-xs text-slate-400">
                📌 <strong>Cálculo Realista:</strong> Considera que cerca de 50% dos orçamentos ficam inicialmente pendentes, e o sistema recupera {recoveryRate}% deles através do follow-up cordial no WhatsApp.
              </div>

            </div>

            {/* Right Column: Output Result Display Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-gradient-to-br from-dark-900 via-dark-850 to-dark-900 p-6 sm:p-8 border border-racing-orange/30 shadow-glow-orange-sm space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
                    Projeção Financeira Estimada
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Alto Retorno</span>
                  </div>
                </div>

                {/* Output 1: Mensal */}
                <div>
                  <span className="text-xs text-slate-400 block mb-1">
                    Faturamento Adicional Estimado / Mês:
                  </span>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                    {formatBRL(results.monthlyRecoveredValue)}
                  </div>
                  <span className="text-xs text-slate-400 mt-1 block">
                    equivalente a cerca de <strong className="text-white">{results.recoveredPerMonth} ordens de serviço</strong> a mais todo mês.
                  </span>
                </div>

                {/* Output 2: Anual Acumulado (Highlight) */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-racing-orange/20 to-amber-500/15 border border-racing-orange/40">
                  <span className="text-xs text-racing-orange font-bold uppercase tracking-wider block mb-1">
                    Potencial Acumulado em 12 Meses:
                  </span>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-racing-orange via-amber-400 to-white">
                    {formatBRL(results.annualRecoveredValue)}
                  </div>
                  <p className="text-[11px] text-slate-300 mt-2">
                    Receita que hoje pode estar sendo deixada para trás por falta de cadência de contato estruturada.
                  </p>
                </div>

                {/* CTA inside calculator */}
                <button
                  onClick={onCtaClick}
                  className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-racing-orange to-amber-600 hover:from-racing-orange hover:to-racing-red text-white shadow-glow-orange flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <span>Quero aplicar este método na John Auto Center</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
