import React from 'react';
import logoImg from '../assets/logo.png';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  MessageCircle, 
  ShieldCheck, 
  Wrench, 
  Car,
  ChevronDown,
  Layers,
  Activity,
  CheckCircle2,
  Gauge,
  Zap,
  PhoneCall
} from 'lucide-react';
import { AUTOMOTIVE_IMAGES } from '../data/mockData';

export default function Hero({ onExploreClick, onLearnMoreClick }) {
  const workshopBays = [
    { id: "Box 01", status: "Em Serviço", car: "Toyota Corolla 2.0", type: "busy" },
    { id: "Box 02", status: "Vaga Disponível", car: "Aguardando Agendamento", type: "free" },
    { id: "Box 03", status: "Em Serviço", car: "Jeep Compass Turbo", type: "busy" },
    { id: "Box 04", status: "Vaga Disponível", car: "Reservado p/ Recuperação", type: "free" },
    { id: "Box 05", status: "Em Serviço", car: "Honda Civic G10 CVT", type: "busy" },
    { id: "Box 06", status: "Alinhamento 3D", car: "Toyota Hilux SRX", type: "busy" },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-36 lg:pt-40 pb-20 flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-racing-orange/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/6 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-[92%] max-w-[1720px] mx-auto z-10">
        
        {/* Main Grid: 90% wide expansive view */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Value Proposition & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-850/90 border border-white/10 text-xs text-slate-200 shadow-xl">
              <span className="flex h-2.5 w-2.5 rounded-full bg-racing-orange animate-pulse" />
              <span className="font-bold tracking-wide uppercase text-[11px] text-white">Plataforma Automotiva de Alta Retenção</span>
              <span className="text-slate-600">•</span>
              <span className="text-racing-orange font-bold font-mono">Planaltina - DF</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
              Mais controle sobre seus serviços.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange via-amber-400 to-racing-red">
                Mais oportunidades
              </span>{' '}
              para sua oficina.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg xl:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed mx-auto lg:mx-0">
              Uma solução inteligente para organizar orçamentos, acompanhar clientes e recuperar oportunidades que poderiam ficar esquecidas na rotina da oficina.
            </p>

            {/* Key Value Micro-pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-900/90 border border-white/10 shadow-sm">
                <CheckCircle className="w-4 h-4 text-racing-orange" />
                <span className="font-medium">Zero orçamentos esquecidos</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-900/90 border border-white/10 shadow-sm">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="font-medium">Follow-up humanizado no WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-900/90 border border-white/10 shadow-sm">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                <span className="font-medium">+25% a 35% de conversão real</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onLearnMoreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-dark-850 hover:bg-dark-800 text-white border border-white/15 hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-2 group shadow-xl active:scale-95"
              >
                <span>Conhecer a solução</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-racing-orange to-amber-600 hover:from-racing-orange hover:to-racing-red text-white shadow-glow-orange transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-95 group"
              >
                <span>Explorar demonstração completa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Workshop Bay Live Grid Preview */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-xs mb-3 text-slate-400">
                <span className="font-mono uppercase font-bold text-slate-300 flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-racing-orange" />
                  Status dos Boxes • John Auto Center (Planaltina-DF)
                </span>
                <span className="text-emerald-400 font-semibold font-mono">4 de 6 Ocupados</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2">
                {workshopBays.map((bay) => (
                  <div 
                    key={bay.id} 
                    className={`p-2.5 rounded-xl border text-xs transition-all ${
                      bay.type === 'busy' 
                        ? 'bg-dark-900 border-white/10' 
                        : 'bg-emerald-500/10 border-emerald-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                      <span className="font-bold text-white">{bay.id}</span>
                      <span className={`w-1.5 h-1.5 rounded-full ${bay.type === 'busy' ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`} />
                    </div>
                    <div className="font-semibold text-[11px] text-slate-200 truncate">{bay.car}</div>
                    <div className={`text-[10px] ${bay.type === 'busy' ? 'text-slate-400' : 'text-emerald-300 font-medium'}`}>
                      {bay.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Visual Cockpit Window (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-racing-orange/30 to-amber-500/20 rounded-3xl blur-2xl opacity-75" />

              {/* Main Container Card */}
              <div className="relative rounded-3xl overflow-hidden bg-dark-900 border border-white/15 shadow-2xl">
                
                {/* Header Window Bar */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-dark-850 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <img 
                      src={logoImg} 
                      alt="John Auto Center Logo" 
                      className="w-7 h-7 rounded-full object-cover border border-white/20 shadow" 
                    />
                    <div>
                      <span className="text-xs font-mono text-white font-bold block leading-none">
                        JOHN AUTO CENTER
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Cockpit Operacional • Planaltina-DF
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded bg-racing-orange/15 text-racing-orange font-bold border border-racing-orange/30">
                    Ao Vivo
                  </span>
                </div>

                {/* Automotive Hero Image with Overlay */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <img
                    src={AUTOMOTIVE_IMAGES.hero}
                    alt="Oficina Automotiva Moderna John Auto Center"
                    className="w-full h-full object-cover object-center filter brightness-80 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                  
                  {/* Workshop Badge inside Image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2.5 bg-dark-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-xl">
                    <img src={logoImg} alt="Logo" className="w-5 h-5 rounded-full object-cover" />
                    <span className="text-xs font-bold text-white">Elevadores Hidráulicos Operando</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs bg-dark-950/80 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                    <span className="text-slate-200 font-medium">Ocupação da Oficina Hoje:</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1 font-mono">
                      <TrendingUp className="w-3.5 h-3.5" /> 82% de Produtividade
                    </span>
                  </div>
                </div>

                {/* Floating Interactive Micro-cards */}
                <div className="p-5 space-y-3 bg-dark-900">
                  
                  {/* Micro-card 1: Recovered Quote Realtime Simulation */}
                  <div className="p-3.5 rounded-2xl bg-dark-850/90 border border-emerald-500/30 flex items-center justify-between gap-3 shadow-md hover:border-emerald-500/60 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">Orçamento Recuperado</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                            + R$ 2.380,00
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Toyota Corolla 2.0 • Revisão 60k km confirmada via WhatsApp
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono whitespace-nowrap">Há 12 min</span>
                  </div>

                  {/* Micro-card 2: Pending Follow-up Trigger */}
                  <div className="p-3.5 rounded-2xl bg-dark-850/90 border border-racing-orange/30 flex items-center justify-between gap-3 shadow-md hover:border-racing-orange/60 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-racing-orange/15 flex items-center justify-center text-racing-orange shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">Cadência Automática Disparada</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-racing-orange/20 text-racing-orange font-mono font-bold">
                            48h Sem Resposta
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Jeep Compass • Disparo cordial enviado às 09:30
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono whitespace-nowrap">Em fila</span>
                  </div>

                  {/* Micro-card 3: Month Summary Banner */}
                  <div className="pt-2 flex items-center justify-between text-xs px-2 text-slate-300 border-t border-white/5">
                    <span className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-racing-orange" />
                      Faturamento Resgatado no Mês:
                    </span>
                    <span className="font-extrabold text-racing-orange text-base font-mono">
                      R$ 38.650,00
                    </span>
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
