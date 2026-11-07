import React from 'react';
import { 
  CheckCircle, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Users, 
  Eye, 
  Clock, 
  ArrowUpRight, 
  FolderLock,
  Wrench,
  HeartHandshake
} from 'lucide-react';
import { AUTOMOTIVE_IMAGES } from '../data/mockData';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Menos Oportunidades Esquecidas",
      desc: "Nenhum orçamento enviado no balcão ou WhatsApp fica perdido no esquecimento. Cada proposta tem monitoramento automatizado de prazos e etapas claras de acompanhamento.",
      badge: "Retenção Contínua"
    },
    {
      icon: Layers,
      title: "Mais Organização para a Oficina",
      desc: "Histórico completo por cliente e placa de veículo em uma interface única. Recepção e mecânicos alinhados, reduzindo o retrabalho e desencontros de comunicação.",
      badge: "Operação Eficiente"
    },
    {
      icon: HeartHandshake,
      title: "Acompanhamento Estruturado e Cordial",
      desc: "Mensagens previamente alinhadas com o tom da John Auto Center, enviadas no momento exato e sempre respeitando a decisão e o tempo de cada motorista.",
      badge: "Contato Humanizado"
    },
    {
      icon: Users,
      title: "Melhor Relacionamento com Clientes",
      desc: "O cliente percebe cuidado genuíno, transparência e profissionalismo no atendimento, transformando orçamentos pontuais em clientes fiéis que voltam todo ano.",
      badge: "Fidelização de Clientes"
    },
    {
      icon: Eye,
      title: "Visibilidade sobre Resultados Comerciais",
      desc: "O proprietário visualiza claramente quais serviços mais vendem, qual a taxa de aprovação real e exatamente quanto faturamento foi resgatado pela ferramenta.",
      badge: "Gestão Baseada em Dados"
    },
    {
      icon: Wrench,
      title: "Otimização da Capacidade dos Boxes",
      desc: "Preenchimento de horários ociosos na oficina através de agendamentos recuperados, garantindo que os elevadores e mecânicos estejam sempre produzindo.",
      badge: "Boxes Cheios"
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-racing-orange/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-orange/10 border border-racing-orange/30 text-racing-orange text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Vantagens Competitivas
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Por que a John Auto Center{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange to-amber-400">
              sai na frente?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Combinar excelência técnica mecânica com uma gestão comercial digitalizada é o segredo das oficinas de maior sucesso no Brasil.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-3xl bg-dark-900 border border-white/10 hover:border-racing-orange/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-glow-orange-sm hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center text-racing-orange group-hover:bg-racing-orange group-hover:text-white transition-all shadow">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-dark-800 text-slate-300 border border-white/5">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-racing-orange transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Impacto imediato</span>
                  <ArrowUpRight className="w-4 h-4 text-racing-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Automotive Visual Showcase Banner */}
        <div className="rounded-3xl bg-dark-900 border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
              <span className="text-xs uppercase font-mono text-racing-orange font-bold tracking-wider">
                Padrão Premium para Planaltina-DF
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Sua oficina com a agilidade das concessionárias e o calor humano da vizinhança.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A tecnologia não substitui a confiança que o cliente tem no mecânico; ela garante que essa confiança seja lembrada com respeito, pontualidade e transparência comercial.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Sem softwares complexos</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Treinamento em menos de 1 hora</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Pronto para celular e computador</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[280px]">
              <img
                src={AUTOMOTIVE_IMAGES.workshopElevator}
                alt="Oficina Mecânica Profissional"
                className="w-full h-full object-cover object-center filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-dark-900 via-transparent to-transparent" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
