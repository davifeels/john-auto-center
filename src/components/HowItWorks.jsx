import React, { useState } from 'react';
import { 
  FileEdit, 
  Search, 
  MessageCircle, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Smartphone,
  ChevronRight,
  Database,
  BarChart,
  UserCheck
} from 'lucide-react';
import { AUTOMOTIVE_IMAGES } from '../data/mockData';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      badge: "Entrada Ágil",
      title: "Registro do Orçamento",
      icon: FileEdit,
      summary: "A oficina registra o orçamento solicitado pelo cliente em poucos segundos.",
      description: "Durante a recepção ou após a inspeção mecânica no elevador, o consultor cadastra os dados essenciais: dados do cliente, modelo e placa do veículo, serviços sugeridos e valores discriminados de peças e mão de obra.",
      highlights: [
        "Cadastro rápido e intuitivo em menos de 1 minuto",
        "Discriminação clara entre peças originais e mão de obra",
        "Disparo imediato de PDF com identidade visual profissional"
      ],
      previewBadge: "Fase 1: Entrada de Dados",
      previewData: {
        cliente: "Marcos Vinícius Silva",
        carro: "Toyota Corolla 2.0 (2021)",
        servico: "Revisão 60.000km + Velas Iridium",
        valor: "R$ 2.380,00",
        status: "Cadastrado no Sistema"
      }
    },
    {
      number: "02",
      badge: "Monitoramento Inteligente",
      title: "Acompanhamento Ativo",
      icon: Search,
      summary: "O sistema identifica orçamentos ainda não aprovados e monitora prazos.",
      description: "A plataforma acompanha automaticamente a contagem de horas desde o envio do orçamento. Se o cliente não confirmou o serviço em 24h ou 48h, o sistema classifica a oportunidade e prepara uma ação personalizada sem exigir trabalho manual da recepção.",
      highlights: [
        "Filtro inteligente por criticidade do serviço (segurança vs rotina)",
        "Notificação para a equipe sobre orçamentos com alto ticket",
        "Visão em linha do tempo de cada interação realizada"
      ],
      previewBadge: "Fase 2: Monitoramento 48 Horas",
      previewData: {
        cliente: "Marcos Vinícius Silva",
        carro: "Toyota Corolla 2.0 (2021)",
        servico: "Revisão 60.000km",
        valor: "R$ 2.380,00",
        status: "Sem retorno há 48h • Preparando Contato"
      }
    },
    {
      number: "03",
      badge: "Cadência Respeitosa",
      title: "Recuperação Automatizada",
      icon: MessageCircle,
      summary: "Após um período configurado, o sistema pode iniciar um contato pelo WhatsApp.",
      description: "Mediante autorização e consentimento aplicáveis, o sistema envia uma mensagem cordial e altamente personalizada, lembrando da importância da manutenção, oferecendo condições de parcelamento ou abrindo canal direto com o consultor.",
      highlights: [
        "Mensagens previamente aprovadas pelo dono da John Auto Center",
        "Disparo exclusivamente em horário comercial respeitoso",
        "Pausa imediata quando o cliente responde ou pede para cancelar"
      ],
      previewBadge: "Fase 3: Contato Cordial Disparado",
      previewData: {
        cliente: "Marcos Vinícius Silva",
        carro: "Toyota Corolla 2.0",
        servico: "WhatsApp enviado às 09:02",
        valor: "Opção em até 6x sem juros",
        status: "Aguardando Resposta do Cliente"
      }
    },
    {
      number: "04",
      badge: "Receita Resgatada",
      title: "Conversão & Agendamento",
      icon: CheckCircle,
      summary: "A oficina acompanha os retornos e identifica os serviços recuperados.",
      description: "Ao responder à mensagem, o cliente é direcionado para a confirmação de horário na oficina. A vaga no box correspondente é reservada e a plataforma registra o valor como faturamento recuperado, alimentando os relatórios em tempo real.",
      highlights: [
        "Reserva do box e peças com antecedência",
        "Contabilização exata do faturamento salvo pela ferramenta",
        "Fidelização e percepção de atendimento VIP e organizado"
      ],
      previewBadge: "Fase 4: Box Agendado",
      previewData: {
        cliente: "Marcos Vinícius Silva",
        carro: "Toyota Corolla 2.0",
        servico: "Revisão Confirmada para Sexta 08h",
        valor: "+ R$ 2.380,00 Recuperados",
        status: "✅ Ordem de Serviço Gerada"
      }
    }
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section id="como-funciona" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-racing-orange/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-orange/10 border border-racing-orange/30 text-racing-orange text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Fluxo Operacional Simples e Eficiente
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Como funciona a recuperação na{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange to-amber-400">
              John Auto Center
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Quatro etapas pensadas para não sobrecarregar a rotina da sua equipe e garantir que nenhum orçamento com potencial de fechamento caia no esquecimento.
          </p>
        </div>

        {/* 4 Interactive Step Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative text-left p-5 rounded-2xl transition-all duration-300 border ${
                  isActive
                    ? 'bg-dark-850 border-racing-orange shadow-glow-orange-sm'
                    : 'bg-dark-900 border-white/5 hover:border-white/20 hover:bg-dark-850/60'
                }`}
              >
                {/* Active Indicator Top Line */}
                {isActive && (
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-racing-orange to-amber-500 rounded-full" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isActive ? 'bg-racing-orange text-white' : 'bg-dark-800 text-slate-400'
                  }`}>
                    ETAPA {step.number}
                  </span>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-racing-orange' : 'text-slate-500'}`} />
                </div>

                <h3 className="font-bold text-white text-base mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {step.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Active Step Panel */}
        <div className="rounded-3xl bg-dark-900 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Step Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-dark-800 text-xs font-semibold text-racing-orange border border-white/10">
                <span>{current.badge}</span>
                <span>•</span>
                <span className="text-slate-300">Etapa {current.number} de 04</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {current.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {current.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold block">
                  Vantagens desta etapa:
                </span>
                {current.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-racing-orange/15 border border-racing-orange/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-racing-orange" />
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-4 flex items-center gap-3">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-medium bg-dark-800 text-slate-300 hover:text-white border border-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Etapa Anterior
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-racing-orange hover:bg-racing-orange/90 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1.5"
                >
                  <span>Próxima Etapa</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Dynamic Mockup Preview Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-dark-850 border border-white/15 p-6 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-racing-orange/20 flex items-center justify-center text-racing-orange">
                      <CurrentIcon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide">
                      {current.previewBadge}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    Simulação
                  </span>
                </div>

                {/* Simulated Order Card */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-dark-900 border border-white/5 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Cliente</span>
                      <span className="font-semibold text-white">{current.previewData.cliente}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Veículo</span>
                      <span className="font-medium text-slate-200">{current.previewData.carro}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Serviço</span>
                      <span className="font-medium text-slate-200">{current.previewData.servico}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-2 border-t border-white/5">
                      <span className="text-slate-400">Valor / Condição</span>
                      <span className="font-bold text-racing-orange text-sm">{current.previewData.valor}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-dark-800/80 border border-white/10 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-racing-orange animate-ping" />
                    <span className="text-xs font-medium text-slate-200">
                      {current.previewData.status}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                  <span>John Auto Center • Planaltina-DF</span>
                  <span>Ambiente Demonstrativo</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
