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
  Layers
} from 'lucide-react';
import { AUTOMOTIVE_IMAGES } from '../data/mockData';

export default function ProblemSection() {
  const problems = [
    {
      icon: FileQuestion,
      title: "Orçamentos Enviados Sem Aprovação",
      desc: "O cliente solicita o orçamento no balcão ou WhatsApp, a recepção gasta tempo levantando peças, mas a mensagem se perde e nunca mais é respondida.",
      impact: "Média de 40% a 60% dos orçamentos ficam sem resposta formal."
    },
    {
      icon: UserMinus,
      title: "Clientes Interessados Que Não Retornam",
      desc: "O motorista demonstra intenção genuína de executar o serviço, pede para 'pensar' ou 'ver o cartão', e na correria da semana acaba adiando indefinidamente.",
      impact: "Esquecimento mútuo resulta em perda definitiva da ordem de serviço."
    },
    {
      icon: AlertTriangle,
      title: "Serviços Críticos e Preventivos Pendentes",
      desc: "Correias, pastilhas de freio e trocas de óleo preventivas detectadas no checklist deixam de ser realizadas, prejudicando a segurança do cliente e o fluxo da oficina.",
      impact: "Deixa-se de faturar manutenções já diagnosticadas pelo mecânico."
    },
    {
      icon: Clock,
      title: "Falta de Acompanhamento Organizado",
      desc: "A rotina corrida da oficina impede o recepcionista ou gerente de ligar manualmente para cada orçamento que ficou pendente nos últimos dias.",
      impact: "A oficina fica refém apenas de clientes que decidem retornar espontaneamente."
    },
    {
      icon: TrendingDown,
      title: "Dificuldade de Visualizar Oportunidades",
      desc: "Sem um painel centralizado, o proprietário não tem clareza de quanto dinheiro está parado na mesa esperando uma simples mensagem cordial de acompanhamento.",
      impact: "Perda invisível de dezenas de milhares de reais todos os meses."
    }
  ];

  return (
    <section id="desafio" className="py-24 bg-dark-900 relative overflow-hidden border-t border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-racing-red/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-racing-orange/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-red/10 border border-racing-red/30 text-racing-red text-xs font-semibold tracking-wider uppercase">
            <AlertTriangle className="w-3.5 h-3.5" />
            Oportunidades Que Não Podem Ser Perdidas
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Onde o faturamento da oficina costuma escapar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange to-racing-red">
              sem ninguém perceber?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Em oficinas movimentadas, a equipe técnica e a recepção trabalham no limite. O maior desafio comercial não é atrair clientes, mas sim acompanhar aqueles que já demonstraram interesse.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative rounded-2xl bg-dark-850 p-6 border border-white/10 hover:border-racing-orange/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-glow-orange-sm hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-racing-orange mb-5 group-hover:scale-110 group-hover:bg-racing-orange/15 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-racing-orange transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-amber-400/90">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.impact}</span>
                </div>
              </div>
            );
          })}

          {/* Special Visual Callout Card */}
          <div className="rounded-2xl bg-gradient-to-br from-racing-orange/20 via-dark-850 to-dark-850 p-6 border border-racing-orange/30 flex flex-col justify-between shadow-glow-orange-sm">
            <div>
              <span className="text-xs font-mono text-racing-orange uppercase tracking-wider font-bold">
                Estimativa Real de Mercado
              </span>
              <h3 className="text-2xl font-display font-extrabold text-white mt-2 mb-3">
                R$ 30.000 a R$ 60.000
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                É o volume médio mensal de orçamentos emitidos que adormecem em planilhas ou conversas de WhatsApp em oficinas mecânicas do porte da John Auto Center.
              </p>
            </div>
            
            <div className="p-3 rounded-xl bg-racing-orange/10 border border-racing-orange/20 text-xs text-slate-200 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-racing-orange shrink-0" />
              <span>Recuperar apenas 20% disso já gera um retorno financeiro expressivo.</span>
            </div>
          </div>
        </div>

        {/* Contrast Comparison Banner: Manual vs Platform */}
        <div className="rounded-3xl bg-dark-800/90 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* The Old Way */}
            <div className="space-y-4 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                <XCircle className="w-5 h-5" />
                <span>Rotina Manual Convencional</span>
              </div>
              <h4 className="text-xl font-bold text-white">
                Como muitas oficinas ainda operam:
              </h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Orçamentos anotados em papel ou perdidos no histórico do WhatsApp da recepção.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Nenhum lembrete quando um cliente de revisão de freios ou troca de correia não retorna.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>O gestor não sabe qual é a real taxa de aprovação dos orçamentos da semana.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Sensação constante de que a oficina poderia faturar mais com a clientela existente.</span>
                </li>
              </ul>
            </div>

            {/* The Smart Platform Way */}
            <div className="space-y-4 pl-0 lg:pl-6">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>Com a Solução John Auto Center</span>
              </div>
              <h4 className="text-xl font-bold text-white">
                Gestão proativa, automatizada e humana:
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Registro centralizado com histórico completo do veículo, peças e mão de obra.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Follow-up automatizado e respeitoso disparado no momento exato (24h/48h).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Painel em tempo real indicando valores recuperados e status de cada cliente.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Previsibilidade de faturamento e boxes de trabalho com fluxo constante.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
