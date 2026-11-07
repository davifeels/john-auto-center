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
  Activity
} from 'lucide-react';
import { AUTOMOTIVE_IMAGES } from '../data/mockData';

export default function Hero({ onExploreClick, onLearnMoreClick }) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      {/* Radial Gradient Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-racing-orange/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800/80 border border-white/10 text-xs text-slate-300 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-racing-orange animate-pulse" />
              <span className="font-medium text-white tracking-wide">Inovação Comercial Automotiva</span>
              <span className="text-slate-500">•</span>
              <span className="text-racing-orange font-semibold">Planaltina - DF</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
              Mais controle sobre seus serviços.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange via-amber-400 to-racing-red">
                Mais oportunidades
              </span>{' '}
              para sua oficina.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Uma solução inteligente para organizar orçamentos, acompanhar clientes e recuperar oportunidades que poderiam ficar esquecidas.
            </p>

            {/* Key Value Micro-pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900/80 border border-white/5">
                <CheckCircle className="w-3.5 h-3.5 text-racing-orange" />
                <span>Zero orçamentos esquecidos</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900/80 border border-white/5">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Follow-up cordial no WhatsApp</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900/80 border border-white/5">
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                <span>+25% a 35% de conversão</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onLearnMoreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-dark-800 hover:bg-dark-750 text-white border border-white/15 hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg"
              >
                <span>Conhecer a solução</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-racing-orange to-amber-600 hover:from-racing-orange hover:to-racing-red text-white shadow-glow-orange transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-95 group"
              >
                <span>Explorar demonstração</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Fictional Concept Disclaimer Pill */}
            <div className="pt-2">
              <p className="text-[11px] text-slate-500">
                * Demonstração conceitual de alto nível preparada sob medida para a John Auto Center.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Composition with Automotive Depth */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-racing-orange/30 to-amber-500/20 rounded-3xl blur-xl opacity-75" />

              {/* Main Container Card */}
              <div className="relative rounded-2xl overflow-hidden bg-dark-900 border border-white/15 shadow-2xl">
                
                {/* Header Window Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-dark-850 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <img src={logoImg} alt="John Auto Center Logo" className="w-6 h-6 rounded-full object-cover border border-white/20" />
                    <span className="ml-1 text-xs font-mono text-slate-300 font-semibold">
                      JOHN AUTO CENTER • Recovery Cockpit
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-racing-orange/15 text-racing-orange font-semibold border border-racing-orange/30">
                    Live Demo
                  </span>
                </div>

                {/* Automotive Hero Image with Overlay */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={AUTOMOTIVE_IMAGES.hero}
                    alt="Oficina Automotiva Moderna"
                    className="w-full h-full object-cover object-center filter brightness-75 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent" />
                  
                  {/* Workshop Badge inside Image */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 bg-dark-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 shadow-lg">
                    <img src={logoImg} alt="Logo" className="w-5 h-5 rounded-full object-cover" />
                    <span className="text-xs font-semibold text-white">Boxes 01 a 06 Ativos</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">Capacidade de Box Otimizada</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" /> +28% de Ocupação
                    </span>
                  </div>
                </div>

                {/* Floating Interactive Micro-cards */}
                <div className="p-4 space-y-3 bg-dark-900">
                  
                  {/* Micro-card 1: Recovered Quote Realtime Simulation */}
                  <div className="p-3 rounded-xl bg-dark-800/90 border border-emerald-500/30 flex items-center justify-between gap-3 shadow-md hover:border-emerald-500/60 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">Orçamento Recuperado</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                            + R$ 2.380,00
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Toyota Corolla 2.0 • Revisão 60k km confirmada
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 whitespace-nowrap">Há 12 min</span>
                  </div>

                  {/* Micro-card 2: Pending Follow-up Trigger */}
                  <div className="p-3 rounded-xl bg-dark-800/90 border border-racing-orange/30 flex items-center justify-between gap-3 shadow-md hover:border-racing-orange/60 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-racing-orange/15 flex items-center justify-center text-racing-orange shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">Cadência Automática</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-racing-orange/20 text-racing-orange font-mono">
                            48h Sem Retorno
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Jeep Compass • Disparo cordial WhatsApp ativado
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 whitespace-nowrap">Em fila</span>
                  </div>

                  {/* Micro-card 3: Month Summary Pill */}
                  <div className="pt-1 flex items-center justify-between text-xs px-2 text-slate-400 border-t border-white/5">
                    <span className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-racing-orange" />
                      Oportunidades Salvas Este Mês:
                    </span>
                    <span className="font-bold text-racing-orange text-sm font-mono">
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
