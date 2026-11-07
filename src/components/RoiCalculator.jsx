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
  Coins,
  BarChart,
  PieChart,
  Calendar
} from 'lucide-react';

export default function RoiCalculator({ onCtaClick }) {
  const [budgetsPerMonth, setBudgetsPerMonth] = useState(120);
  const [averageTicket, setAverageTicket] = useState(1600);
  const [recoveryRate, setRecoveryRate] = useState(20);

  // Dynamic calculations
  const results = useMemo(() => {
    // Estimativa de orçamentos que ficam sem resposta na média do setor (50%)
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
    <section id="calculadora-retorno" className="py-28 bg-dark-900 relative overflow-hidden border-t border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-racing-orange/15 rounded-full blur-[190px] pointer-events-none" />

      {/* 90% Wide Container */}
      <div className="w-[90%] max-w-[1850px] mx-auto relative z-10">
        
        {/* Section Header: Wide, Left-Aligned, Modern Auto Center */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-racing-orange/10 border border-racing-orange/30 text-racing-orange text-xs font-bold tracking-wider uppercase">
              <Calculator className="w-3.5 h-3.5" />
              Simulador de Impacto Financeiro Comercial
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Quanto a John Auto Center pode{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange via-amber-400 to-racing-red">
                resgatar por ano?
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl">
              Ajuste os parâmetros da rotina da sua oficina para simular o retorno financeiro potencial ao implementar um acompanhamento ativo e estruturado de orçamentos.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto text-xs font-mono text-slate-300 bg-dark-850 px-4 py-2 rounded-xl border border-white/5">
            <span className="text-emerald-400 font-bold">ROI Estimado</span>
            <span className="text-slate-600">•</span>
            <span>Alta Rentabilidade</span>
          </div>
        </div>

        {/* Calculator Main Box - 90% wide view */}
        <div className="rounded-3xl bg-dark-850 border border-white/10 p-8 sm:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Sliders Controls (6 cols) */}
            <div className="lg:col-span-6 space-y-9">
              
              {/* Slider 1: Orçamentos por mês */}
              <div className="space-y-3.5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-200 font-bold">Orçamentos emitidos por mês na oficina:</span>
                  <span className="text-white font-black font-mono text-lg px-3 py-1 rounded-xl bg-dark-800 border border-white/10">
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
                  className="w-full h-2.5 bg-dark-750 rounded-lg appearance-none cursor-pointer accent-racing-orange"
                />
                <div className="flex justify-between text-xs text-slate-500 font-mono">
                  <span>30/mês</span>
                  <span>150/mês</span>
                  <span>350+/mês</span>
                </div>
              </div>

              {/* Slider 2: Ticket Médio */}
              <div className="space-y-3.5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-200 font-bold">Ticket médio por serviço mecânico:</span>
                  <span className="text-racing-orange font-black font-mono text-lg px-3 py-1 rounded-xl bg-dark-800 border border-white/10">
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
                  className="w-full h-2.5 bg-dark-750 rounded-lg appearance-none cursor-pointer accent-racing-orange"
                />
                <div className="flex justify-between text-xs text-slate-500 font-mono">
                  <span>R$ 400</span>
                  <span>R$ 2.000</span>
                  <span>R$ 4.000</span>
                </div>
              </div>

              {/* Slider 3: Taxa de Recuperação */}
              <div className="space-y-3.5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-200 font-bold">Taxa estimada de recuperação com a plataforma:</span>
                  <span className="text-emerald-400 font-black font-mono text-lg px-3 py-1 rounded-xl bg-dark-800 border border-white/10">
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
                  className="w-full h-2.5 bg-dark-750 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs text-slate-500 font-mono">
                  <span>10% (Baixa)</span>
                  <span>20% (Padrão)</span>
                  <span>35% (Otimizada)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-900 border border-white/5 text-xs text-slate-300 leading-relaxed">
                📌 <strong>Cálculo Realista:</strong> Considera que cerca de 50% dos orçamentos ficam inicialmente pendentes sem aprovação formal, e o sistema recupera {recoveryRate}% deles através da cadência humanizada no WhatsApp.
              </div>

            </div>

            {/* Right Column: Output Result Display Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-gradient-to-br from-dark-900 via-dark-850 to-dark-900 p-8 sm:p-10 border border-racing-orange/40 shadow-glow-orange-sm space-y-8">
                
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-300 font-bold">
                    Projeção de Faturamento Recuperado
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/15 px-3 py-1.5 rounded-full border border-emerald-500/30">
                    <TrendingUp className="w-4 h-4" />
                    <span>Alto Retorno sobre Investimento</span>
                  </div>
                </div>

                {/* Output 1: Mensal */}
                <div>
                  <span className="text-xs text-slate-400 block mb-1.5 font-bold uppercase tracking-wider">
                    Faturamento Adicional Estimado / Mês:
                  </span>
                  <div className="text-4xl sm:text-5xl font-display font-black text-white">
                    {formatBRL(results.monthlyRecoveredValue)}
                  </div>
                  <span className="text-xs text-slate-300 mt-2 block">
                    representando cerca de <strong className="text-white font-bold">{results.recoveredPerMonth} ordens de serviço</strong> a mais todo mês na John Auto Center.
                  </span>
                </div>

                {/* Output 2: Anual Acumulado (Highlight) */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-racing-orange/20 to-amber-500/15 border border-racing-orange/40 space-y-2">
                  <span className="text-xs text-racing-orange font-black uppercase tracking-wider block">
                    Potencial Acumulado em 12 Meses:
                  </span>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-racing-orange via-amber-400 to-white">
                    {formatBRL(results.annualRecoveredValue)}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    Receita legítima que hoje pode estar escapando por falta de acompanhamento no tempo certo.
                  </p>
                </div>

                {/* CTA inside calculator */}
                <button
                  onClick={onCtaClick}
                  className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-racing-orange to-amber-600 hover:from-racing-orange hover:to-racing-red text-white shadow-glow-orange flex items-center justify-center gap-2.5 active:scale-95 transition-all"
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
