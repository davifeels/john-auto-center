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
  Download,
  Activity
} from 'lucide-react';

export default function ReportsSection() {
  const topServices = [
    { name: "Revisão Preventiva & Troca de Óleo Homologado", count: 48, rate: "38% de conversão", revenue: "R$ 44.160", progress: 85 },
    { name: "Sistema de Freios (Pastilhas & Discos Cerâmica)", count: 36, rate: "34% de conversão", revenue: "R$ 51.840", progress: 72 },
    { name: "Suspensão & Amortecedores Pressurizados 3D", count: 24, rate: "26% de conversão", revenue: "R$ 68.400", progress: 58 },
    { name: "Transmissão & Câmbio Automático / CVT", count: 18, rate: "31% de conversão", revenue: "R$ 39.600", progress: 44 },
    { name: "Diagnóstico Eletrônico & Injeção Direta", count: 16, rate: "22% de conversão", revenue: "R$ 24.320", progress: 38 },
  ];

  const followUpVelocity = [
    { time: "Até 24h", conversion: "38.2%", label: "Mais alto índice de fechamento imediato no balcão" },
    { time: "Entre 24h e 48h", conversion: "31.5%", label: "Equilíbrio ideal (cadência recomendada pela plataforma)" },
    { time: "Entre 48h e 72h", conversion: "19.4%", label: "Recuperação com condição especial de parcelamento" },
    { time: "Após 7 dias", conversion: "8.1%", label: "Campanhas sazonais de reengajamento pontual" },
  ];

  return (
    <section id="relatorios" className="py-28 bg-dark-950 relative overflow-hidden">
      {/* 90% Wide Container */}
      <div className="w-[92%] max-w-[1720px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-racing-orange/10 border border-racing-orange/30 text-racing-orange text-xs font-bold tracking-wider uppercase">
              <BarChart2 className="w-3.5 h-3.5" />
              Inteligência Comercial & Relatórios Gerenciais
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Visibilidade Completa sobre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange to-amber-400">
                seus Resultados
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl">
              Métricas detalhadas sobre conversão por categoria mecânica, tempos de resposta e histórico de acompanhamento para orientar a tomada de decisão da John Auto Center.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => alert("Demonstração: Função de exportação para PDF e Excel disponível no produto final.")}
              className="px-5 py-3 rounded-xl text-xs font-bold bg-dark-850 hover:bg-dark-800 text-slate-300 hover:text-white border border-white/10 flex items-center gap-2 transition-all shadow"
            >
              <Download className="w-4 h-4 text-racing-orange" />
              <span>Exportar Relatório Mensal</span>
            </button>
          </div>
        </div>

        {/* Reports Content Grid - 90% wide view */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Top Services Breakdown (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-dark-900 border border-white/10 shadow-2xl space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-racing-orange" />
                  Serviços Mais Procurados na Oficina
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Volume de orçamentos emitidos e receita gerada por especialidade mecânica
                </p>
              </div>
              <span className="text-xs font-mono bg-dark-800 text-slate-300 px-3.5 py-1 rounded-full border border-white/5 font-bold">
                Ranking Top 5
              </span>
            </div>

            <div className="space-y-4 pt-2">
              {topServices.map((service, index) => (
                <div key={index} className="p-4.5 rounded-2xl bg-dark-850 border border-white/5 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white text-sm">
                      {index + 1}. {service.name}
                    </span>
                    <span className="font-mono text-racing-orange font-black text-sm">
                      {service.revenue}
                    </span>
                  </div>

                  <div className="w-full h-2.5 rounded-full bg-dark-900 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-racing-orange via-amber-400 to-racing-red" 
                      style={{ width: `${service.progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                    <span>{service.count} orçamentos emitidos</span>
                    <span className="text-emerald-400 font-bold">{service.rate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timing & Conversion Velocity (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Velocity Card */}
            <div className="p-8 rounded-3xl bg-dark-900 border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-emerald-400" />
                Janela Ideal de Acompanhamento
              </h3>
              <p className="text-xs text-slate-400">
                Relação entre o tempo decorrido após o envio do orçamento e a probabilidade de aprovação pelo cliente.
              </p>

              <div className="space-y-3.5">
                {followUpVelocity.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-dark-850 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">
                        {item.time}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {item.label}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-black font-mono text-emerald-400">
                        {item.conversion}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-xs text-slate-200 leading-relaxed">
                💡 <strong>Conclusão Técnica:</strong> Clientes contatados entre 24h e 48h têm 3x mais probabilidade de fechar o serviço do que se a oficina esperar mais de uma semana para retomar o contato.
              </div>
            </div>

            {/* Quick KPI Snapshot */}
            <div className="p-6 rounded-3xl bg-dark-900 border border-white/10 shadow-2xl">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-2xl bg-dark-850 border border-white/5">
                  <div className="text-3xl font-black text-white font-display">
                    23
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-bold">
                    Orçamentos Salvos
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-dark-850 border border-white/5">
                  <div className="text-3xl font-black text-racing-orange font-display">
                    R$ 38.650
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-bold">
                    Recuperados no Mês
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
