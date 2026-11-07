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
  UserCheck,
  Zap,
  CalendarCheck
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
      description: "Durante a recepção ou logo após a inspeção do mecânico no elevador, o consultor cadastra os dados essenciais: cliente, veículo, placa Mercosul, peças cotadas e mão de obra discriminada. A proposta técnica é gerada instantaneamente.",
      highlights: [
        "Cadastro rápido e intuitivo em menos de 1 minuto pelo celular ou computador",
        "Discriminação clara entre peças originais e mão de obra especializada",
        "Disparo imediato de PDF com a identidade visual oficial da John Auto Center"
      ],
      previewBadge: "Fase 1: Entrada de Dados",
      previewData: {
        cliente: "Marcos Vinícius Silva",
        carro: "Toyota Corolla 2.0 (2021) • Placa JAC-3F88",
        servico: "Revisão 60.000km + Velas Iridium e Correia",
        valor: "R$ 2.380,00 (Peças: R$ 1.630 | Mão de Obra: R$ 750)",
        status: "Cadastrado no Sistema • PDF Transmitido"
      }
    },
    {
      number: "02",
      badge: "Monitoramento Inteligente",
      title: "Acompanhamento Ativo",
      icon: Search,
      summary: "O sistema identifica orçamentos ainda não aprovados e monitora prazos.",
      description: "A plataforma acompanha automaticamente a contagem de horas desde a emissão. Se o cliente não confirmou o serviço em 24h ou 48h, o sistema classifica a oportunidade e prepara uma ação cordial sem exigir nenhum esforço manual da equipe.",
      highlights: [
        "Filtro inteligente por criticidade do serviço (segurança vs rotina preventiva)",
        "Notificação direta para o gerente sobre orçamentos com alto ticket médio",
        "Visão em linha do tempo de cada interação e retorno do motorista"
      ],
      previewBadge: "Fase 2: Monitoramento 48 Horas",
      previewData: {
        cliente: "Marcos Vinícius Silva",
        carro: "Toyota Corolla 2.0 (2021)",
        servico: "Revisão 60.000km",
        valor: "R$ 2.380,00",
        status: "Sem retorno há 48h • Preparando Disparo Estratégico"
      }
    },
    {
      number: "03",
      badge: "Cadência Respeitosa",
      title: "Recuperação Automatizada",
      icon: MessageCircle,
      summary: "Após o período configurado, o sistema inicia um contato educado pelo WhatsApp.",
      description: "Mediante autorização prévia, o sistema envia uma mensagem cordial e personalizada em horário comercial, lembrando da importância da manutenção, oferecendo opções de parcelamento ou abrindo canal direto com o consultor.",
      highlights: [
        "Modelos de mensagem previamente aprovados pelo gestor da John Auto Center",
        "Disparo exclusivo em horário comercial (08h às 18h de segunda a sábado)",
        "Pausa automática imediata quando o cliente responde ou solicita cancelamento"
      ],
      previewBadge: "Fase 3: Contato Cordial Disparado",
      previewData: {
        cliente: "Marcos Vinícius Silva",
        carro: "Toyota Corolla 2.0",
        servico: "WhatsApp enviado às 09:02",
        valor: "Opção em até 6x sem juros no cartão",
        status: "Mensagem Entregue e Lida • Aguardando Escolha"
      }
    },
    {
      number: "04",
      badge: "Receita Resgatada",
      title: "Conversão & Agendamento",
      icon: CheckCircle,
      summary: "A oficina acompanha os retornos e identifica os serviços recuperados.",
      description: "Ao responder, o cliente é direcionado para a confirmação de horário na oficina. A vaga no box correspondente é reservada e a plataforma registra o valor como faturamento recuperado, alimentando os relatórios em tempo real.",
      highlights: [
        "Reserva antecipada do box mecânico e separação prévia das peças no estoque",
        "Contabilização exata do faturamento salvo pela ferramenta no painel gerencial",
        "Percepção de atendimento VIP, organizado e pontual pelo cliente de Planaltina"
      ],
      previewBadge: "Fase 4: Box Reservado",
      previewData: {
        cliente: "Marcos Vinícius Silva",
        carro: "Toyota Corolla 2.0",
        servico: "Revisão Confirmada para Sexta às 08h",
        valor: "+ R$ 2.380,00 Recuperados no Caixa",
        status: "✅ Box 01 Reservado • Ordem de Serviço Emitida"
      }
    }
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section id="como-funciona" className="py-28 bg-dark-950 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-racing-orange/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="w-[92%] max-w-[1720px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-racing-orange/10 border border-racing-orange/30 text-racing-orange text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Fluxo Operacional Simples e Eficiente
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Como funciona a recuperação na{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange to-amber-400">
              John Auto Center
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            Quatro etapas desenhadas para não atrapalhar a correria da equipe técnica e assegurar que nenhuma oportunidade comercial adormeça no esquecimento.
          </p>
        </div>

        {/* 4 Interactive Step Selector Tabs - 90% wide view */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative text-left p-6 rounded-3xl transition-all duration-300 border ${
                  isActive
                    ? 'bg-dark-850 border-racing-orange shadow-glow-orange-sm -translate-y-1'
                    : 'bg-dark-900 border-white/10 hover:border-white/25 hover:bg-dark-850/60'
                }`}
              >
                {/* Active Indicator Top Line */}
                {isActive && (
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-racing-orange via-amber-400 to-racing-red rounded-full" />
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-black px-2.5 py-1 rounded-md ${
                    isActive ? 'bg-racing-orange text-white' : 'bg-dark-800 text-slate-400'
                  }`}>
                    ETAPA {step.number}
                  </span>
                  <Icon className={`w-6 h-6 ${isActive ? 'text-racing-orange' : 'text-slate-500'}`} />
                </div>

                <h3 className="font-bold text-white text-lg mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Active Step Panel - 90% wide view */}
        <div className="rounded-3xl bg-dark-900 border border-white/10 p-8 sm:p-12 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Step Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-dark-850 text-xs font-bold text-racing-orange border border-white/10 shadow-sm">
                <span>{current.badge}</span>
                <span>•</span>
                <span className="text-slate-300">Etapa {current.number} de 04</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                {current.title}
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {current.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-3.5 pt-2">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold block">
                  Destaques desta etapa:
                </span>
                {current.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-racing-orange/15 border border-racing-orange/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-racing-orange" />
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-dark-850 text-slate-300 hover:text-white border border-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Etapa Anterior
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-racing-orange hover:bg-racing-orange/90 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-glow-orange-sm"
                >
                  <span>Próxima Etapa</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Dynamic Mockup Preview Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-dark-850 border border-white/15 p-7 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-racing-orange/20 flex items-center justify-center text-racing-orange shadow-inner">
                      <CurrentIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block">
                        {current.previewBadge}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">John Auto Center • Matriz Planaltina</span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10 font-bold">
                    Simulação Ativa
                  </span>
                </div>

                {/* Simulated Order Card */}
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-dark-900 border border-white/5 space-y-3.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Cliente</span>
                      <span className="font-bold text-white">{current.previewData.cliente}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Veículo & Placa</span>
                      <span className="font-medium text-slate-200">{current.previewData.carro}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Serviço Técnico</span>
                      <span className="font-medium text-slate-200">{current.previewData.servico}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-3 border-t border-white/5">
                      <span className="text-slate-400">Condição Comercial</span>
                      <span className="font-bold text-racing-orange text-sm font-mono">{current.previewData.valor}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-dark-800/90 border border-white/10 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-racing-orange animate-ping" />
                    <span className="text-xs font-semibold text-slate-200">
                      {current.previewData.status}
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Plataforma Digital de Acompanhamento</span>
                  <span className="text-emerald-400 font-semibold font-mono">Status: Em Operação</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
