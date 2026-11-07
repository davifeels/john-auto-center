import React from 'react';
import { 
  FileText, 
  TrendingUp, 
  Award, 
  BarChart2, 
  Clock, 
  Calendar, 
  Percent, 
  CheckCircle, 
  ArrowUpRight,
  ShieldCheck,
  Wrench,
  Download
} from 'lucide-react';

export default function ReportsSection() {
  const topServices = [
    { name: "Revisão Preventiva & Troca de Óleo", count: 48, rate: "38% de conversão", revenue: "R$ 44.160", progress: 85 },
    { name: "Sistema de Freios (Pastilhas & Discos)", count: 36, rate: "34% de conversão", revenue: "R$ 51.840", progress: 72 },
    { name: "Suspensão & Amortecedores 3D", count: 24, rate: "26% de conversão", revenue: "R$ 68.400", progress: 58 },
    { name: "Transmissão & Câmbio Automático", count: 18, rate: "31% de conversão", revenue: "R$ 39.600", progress: 44 },
    { name: "Diagnóstico Eletrônico & Injeção", count: 16, rate: "22% de conversão", revenue: "R$ 24.320", progress: 38 },
  ];

  const followUpVelocity = [
    { time: "Até 24h", conversion: "38.2%", label: "Mais alto índice de fechamento imediato" },
    { time: "Entre 24h e 48h", conversion: "31.5%", label: "Melhor equilíbrio (cadência recomendada)" },
    { time: "Entre 48h e 72h", conversion: "19.4%", label: "Recuperação com oferta de condição especial" },
    { time: "Após 7 dias", conversion: "8.1%", label: "Campanhas de reengajamento pontual" },
  ];

  return (
    <section id="relatorios" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-orange/10 border border-racing-orange/30 text-racing-orange text-xs font-semibold tracking-wider uppercase">
              <BarChart2 className="w-3.5 h-3.5" />
              Inteligência & Relatórios Gerenciais
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Visibilidade Completa sobre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange to-amber-400">
                seus Resultados
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
              Métricas detalhadas sobre conversão por categoria mecânica, tempos de resposta e histórico de acompanhamento para orientar a tomada de decisão da John Auto Center.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => alert("Demonstração: Função de exportação para PDF / Excel disponível no produto final.")}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-dark-850 hover:bg-dark-800 text-slate-300 hover:text-white border border-white/10 flex items-center gap-2 transition-all shadow"
            >
              <Download className="w-4 h-4 text-racing-orange" />
              <span>Exportar Relatório Mensal</span>
            </button>
          </div>
        </div>

        {/* Reports Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Top Services Breakdown */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-dark-900 border border-white/10 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-racing-orange" />
                  Serviços Mais Procurados na Oficina
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Volume de orçamentos e receita gerada por especialidade mecânica
                </p>
              </div>
              <span className="text-xs font-mono bg-dark-800 text-slate-300 px-3 py-1 rounded-full border border-white/5">
                Top 5
              </span>
            </div>

            <div className="space-y-4 pt-2">
              {topServices.map((service, index) => (
                <div key={index} className="p-4 rounded-2xl bg-dark-850 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white text-sm">
                      {index + 1}. {service.name}
                    </span>
                    <span className="font-mono text-racing-orange font-bold text-sm">
                      {service.revenue}
                    </span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-dark-900 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-racing-orange to-amber-500" 
                      style={{ width: `${service.progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>{service.count} orçamentos emitidos</span>
                    <span className="text-emerald-400 font-medium">{service.rate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timing & Conversion Velocity */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Velocity Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-white/10 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                Janela Ideal de Acompanhamento
              </h3>
              <p className="text-xs text-slate-400">
                Relação entre o tempo decorrido após o envio do orçamento e a probabilidade de aprovação pelo cliente.
              </p>

              <div className="space-y-3">
                {followUpVelocity.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-dark-850 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">
                        {item.time}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {item.label}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold font-mono text-emerald-400">
                        {item.conversion}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-200">
                💡 <strong>Conclusão Técnica:</strong> Clientes contatados entre 24h e 48h têm 3x mais probabilidade de fechar o serviço do que se esperarmos mais de 7 dias.
              </div>
            </div>

            {/* Quick KPI Snapshot */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-dark-850 to-dark-900 border border-white/10 shadow-xl">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-2xl bg-dark-800/80 border border-white/5">
                  <div className="text-2xl font-extrabold text-white font-display">
                    23
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Orçamentos Salvos
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-dark-800/80 border border-white/5">
                  <div className="text-2xl font-extrabold text-racing-orange font-display">
                    R$ 38.650
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Recuperados (Mês)
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
