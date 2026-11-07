import React from 'react';
import { 
  AlertTriangle, 
  XCircle, 
  CheckCircle2, 
  HelpCircle, 
  FileQuestion, 
  UserMinus, 
  TrendingDown, 
  ArrowRight,
  TrendingUp,
  DollarSign,
  Clock,
  Layers,
  ShieldX,
  ShieldCheck
} from 'lucide-react';
import { AUTOMOTIVE_IMAGES } from '../data/mockData';

export default function ProblemSection() {
  const problems = [
    {
      icon: FileQuestion,
      title: "Orçamentos Enviados Sem Aprovação",
      desc: "O cliente solicita orçamento no balcão ou WhatsApp, a recepção gasta tempo cotando peças e mão de obra, mas o cliente não responde e a proposta se perde no histórico.",
      impact: "Média de 40% a 60% dos orçamentos ficam sem retorno formal na rotina convencional."
    },
    {
      icon: UserMinus,
      title: "Clientes Interessados Que Não Retornam",
      desc: "O motorista demonstra intenção genuína, mas na correria diária acaba adiando a manutenção preventiva ou de freios até que o problema agrave.",
      impact: "Sem lembrete cordial da oficina, a oportunidade é perdida definitivamente."
    },
    {
      icon: AlertTriangle,
      title: "Serviços Críticos Diagnosticados Pendentes",
      desc: "Troca de correia dentada, pastilhas gastas e revisão de amortecedores já apontadas no checklist mecânico deixam de ser executadas por falta de reengajamento.",
      impact: "Risco para a segurança do motorista e perda de faturamento para a oficina."
    },
    {
      icon: Clock,
      title: "Falta de Tempo para Cobrança Manual",
      desc: "Recepcionistas e consultores técnicos sobrecarregados com atendimento presencial não conseguem ligar manualmente para cada orçamento pendente.",
      impact: "A oficina fica refém apenas dos clientes que decidem voltar por conta própria."
    },
    {
      icon: TrendingDown,
      title: "Cegueira sobre Números Comerciais",
      desc: "Sem um painel centralizado, a gestão não tem visibilidade de quantos orçamentos foram emitidos no mês, quantos fecharam e quanto dinheiro ficou parado.",
      impact: "Incapacidade de prever faturamento e medir a eficiência comercial da recepção."
    }
  ];

  return (
    <section id="desafio" className="py-28 bg-dark-900 relative overflow-hidden border-t border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-racing-red/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-racing-orange/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="w-[90%] max-w-[1850px] mx-auto relative z-10">
        
        {/* Section Header: Wide, Left-Aligned, Modern Auto Center */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-racing-red/10 border border-racing-red/30 text-racing-red text-xs font-bold tracking-wider uppercase">
              <AlertTriangle className="w-3.5 h-3.5" />
              O Gargalo Oculto do Setor Automotivo
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Onde o faturamento da oficina costuma escapar{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange to-racing-red">
                sem ninguém perceber?
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl">
              Em oficinas movimentadas, a equipe técnica e a recepção trabalham no limite. O maior desafio comercial não é atrair clientes novos, mas sim <strong className="text-white">acompanhar aqueles que já solicitaram um orçamento</strong>.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto text-xs font-mono text-slate-400 bg-dark-850 px-4 py-2 rounded-xl border border-white/5">
            <span className="w-2 h-2 rounded-full bg-racing-red animate-pulse" />
            <span>Diagnóstico Comercial Automotivo</span>
          </div>
        </div>

        {/* Problems Grid - 90% wide view */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative rounded-3xl bg-dark-850 p-7 border border-white/10 hover:border-racing-orange/40 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-glow-orange-sm hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-dark-800 border border-white/10 flex items-center justify-center text-racing-orange mb-6 group-hover:scale-105 group-hover:bg-racing-orange/15 transition-all shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-racing-orange transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-2.5 text-xs font-semibold text-amber-400/90">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{item.impact}</span>
                </div>
              </div>
            );
          })}

          {/* Special Visual Callout Card */}
          <div className="rounded-3xl bg-gradient-to-br from-racing-orange/20 via-dark-850 to-dark-850 p-7 border border-racing-orange/40 flex flex-col justify-between shadow-glow-orange-sm">
            <div>
              <span className="text-xs font-mono text-racing-orange uppercase tracking-wider font-bold block mb-2">
                Impacto Real na John Auto Center
              </span>
              <h3 className="text-3xl font-display font-black text-white mb-3">
                R$ 35.000 a R$ 65.000
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                É a estimativa mensal de orçamentos emitidos que adormecem em mensagens de WhatsApp ou blocos de papel sem um sistema de follow-up automatizado.
              </p>
            </div>
            
            <div className="p-4 rounded-2xl bg-racing-orange/15 border border-racing-orange/30 text-xs text-slate-200 flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-racing-orange shrink-0" />
              <span className="font-medium">Recuperar apenas 20% a 30% disso já gera de R$ 7.000 a R$ 19.000 a mais por mês no caixa da oficina.</span>
            </div>
          </div>
        </div>

        {/* Contrast Comparison Banner: Manual vs Platform */}
        <div className="rounded-3xl bg-dark-850 border border-white/10 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* The Old Way */}
            <div className="space-y-5 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0">
              <div className="flex items-center gap-2.5 text-rose-400 font-bold text-sm tracking-wide">
                <ShieldX className="w-5 h-5 text-rose-500" />
                <span>Rotina Manual Convencional (Sem Plataforma)</span>
              </div>
              <h4 className="text-2xl font-bold text-white font-display">
                Como muitas oficinas ainda perdem receita diariamente:
              </h4>
              <ul className="space-y-3.5 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                  <span>Orçamentos anotados em papel ou perdidos no fluxo interminável de conversas do WhatsApp da recepção.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                  <span>Nenhum lembrete quando um cliente de revisão de freios ou troca de correia não responde após 48 horas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                  <span>O gestor não sabe qual é a real taxa de aprovação dos orçamentos da semana nem quais mecânicos convertem mais.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                  <span>Sensação de sobrecarga constante na recepção enquanto os elevadores ficam ociosos em determinados horários.</span>
                </li>
              </ul>
            </div>

            {/* The Smart Platform Way */}
            <div className="space-y-5 pl-0 lg:pl-8">
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm tracking-wide">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Com o Cockpit John Auto Center</span>
              </div>
              <h4 className="text-2xl font-bold text-white font-display">
                Gestão proativa, automatizada e 100% humanizada:
              </h4>
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  <span>Registro centralizado com histórico completo do veículo, modelo, placa Mercosul e peças cotadas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  <span>Follow-up automatizado e educado disparado no momento estratégico (24h/48h) com consentimento.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  <span>Painel em tempo real indicando valores recuperados, clientes interessados e agendamento direto no box.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  <span>Previsibilidade financeira com fluxo constante de veículos ocupando a capacidade produtiva da oficina.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
