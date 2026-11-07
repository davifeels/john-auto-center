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
  PhoneCall,
  Calendar,
  Cpu
} from 'lucide-react';
import { AUTOMOTIVE_IMAGES } from '../data/mockData';

export default function Hero({ onExploreClick, onLearnMoreClick }) {
  const workshopBays = [
    { id: "Box 01", name: "Elevador 01", status: "Em Serviço", car: "Toyota Corolla 2.0", plate: "JAC-3F88", type: "busy", service: "Revisão 60k km" },
    { id: "Box 02", name: "Elevador 02", status: "Vaga Livre", car: "Reservado p/ Recuperação", plate: "BOX LIVRE", type: "free", service: "Agendamento Aberto" },
    { id: "Box 03", name: "Elevador 03", status: "Em Serviço", car: "Jeep Compass Turbo", plate: "PLN-9D12", type: "busy", service: "Freios Cerâmica" },
    { id: "Box 04", name: "Elevador 04", status: "Vaga Livre", car: "Disponível", plate: "DISPONÍVEL", type: "free", service: "Checkup Rápido" },
    { id: "Box 05", name: "Bancada CVT", status: "Em Serviço", car: "Honda Civic G10 CVT", plate: "BSB-4A77", type: "busy", service: "Diálise de Câmbio" },
    { id: "Box 06", name: "Rampa 3D", status: "Alinhamento", car: "Toyota Hilux SRX Diesel", plate: "PLN-5C34", type: "busy", service: "Suspensão & Geometria" },
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] pt-28 lg:pt-32 pb-16 flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Background Precision Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-racing-orange/12 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* 90% Screen Width Container (descentralizado e amplo) */}
      <div className="relative w-[90%] max-w-[1850px] mx-auto z-10">
        
        {/* Main Split Cockpit Grid: 90% Expansive Width */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Value Proposition & Copy (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-850 border border-white/10 text-xs text-slate-200 shadow-md">
              <span className="flex h-2.5 w-2.5 rounded-full bg-racing-orange animate-pulse" />
              <span className="font-bold tracking-wider uppercase text-[11px] text-white">Centro Automotivo Moderno & Alta Tecnologia</span>
              <span className="text-slate-600">•</span>
              <span className="text-racing-orange font-bold font-mono">Planaltina - DF</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
              Mais controle sobre seus serviços.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange via-amber-400 to-racing-red">
                Mais oportunidades
              </span>{' '}
              para sua oficina.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg xl:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Uma solução inteligente para organizar orçamentos, acompanhar clientes e recuperar oportunidades que poderiam ficar esquecidas na rotina da oficina.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
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

            {/* 3 Telemetry Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <div className="p-3.5 rounded-2xl bg-dark-900 border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-racing-orange/15 text-racing-orange flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Zero Esquecimento</div>
                  <div className="text-[11px] text-slate-400">Rastreamento total</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-dark-900 border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">WhatsApp Cordial</div>
                  <div className="text-[11px] text-slate-400">Cadência em 48h</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-dark-900 border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">+25% a 35%</div>
                  <div className="text-[11px] text-slate-400">Conversão recuperada</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Cockpit Window & Real-time Bays (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-racing-orange/30 to-amber-500/20 rounded-3xl blur-2xl opacity-75" />

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
                        JOHN AUTO CENTER • PAINEL OPERACIONAL
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Unidade Matriz • Planaltina-DF
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30">
                      Oficina Aberta
                    </span>
                  </div>
                </div>

                {/* Automotive Hero Image with Overlay */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={AUTOMOTIVE_IMAGES.hero}
                    alt="Centro Automotivo Moderno John Auto Center"
                    className="w-full h-full object-cover object-center filter brightness-85 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
                  
                  {/* Workshop Badge inside Image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2.5 bg-dark-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-xl">
                    <Wrench className="w-4 h-4 text-racing-orange" />
                    <span className="text-xs font-bold text-white">Boxes 01 a 06 Operando</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs bg-dark-950/85 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <span className="text-slate-200 font-medium flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-racing-orange" />
                      Ocupação Produtiva Hoje:
                    </span>
                    <span className="text-emerald-400 font-black flex items-center gap-1 font-mono">
                      <TrendingUp className="w-3.5 h-3.5" /> 83.3% dos Elevadores
                    </span>
                  </div>
                </div>

                {/* Real-time Workshop Hoist Bays Grid */}
                <div className="p-5 bg-dark-850/80 border-t border-white/5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300 font-bold">
                    <span className="flex items-center gap-1.5">
                      <Gauge className="w-4 h-4 text-racing-orange" />
                      Status dos Elevadores / Boxes em Tempo Real
                    </span>
                    <span className="text-racing-orange">4 Ocupados • 2 Livres</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {workshopBays.map((bay) => (
                      <div 
                        key={bay.id} 
                        className={`p-3 rounded-2xl border text-xs transition-all ${
                          bay.type === 'busy' 
                            ? 'bg-dark-900/90 border-white/10 shadow-sm' 
                            : 'bg-emerald-500/10 border-emerald-500/30'
                        }`}
                      >
                        <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                          <span className="font-bold text-white">{bay.name}</span>
                          <span className={`w-2 h-2 rounded-full ${bay.type === 'busy' ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`} />
                        </div>
                        <div className="font-bold text-[12px] text-slate-200 truncate">{bay.car}</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">{bay.service}</div>
                        <div className="mt-1.5 pt-1.5 border-t border-white/5 flex items-center justify-between text-[10px]">
                          <span className={`font-semibold ${bay.type === 'busy' ? 'text-amber-400' : 'text-emerald-300'}`}>
                            {bay.status}
                          </span>
                          <span className="text-slate-500 font-mono">{bay.plate}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Realtime Recovered Banner */}
                  <div className="p-3.5 rounded-2xl bg-dark-900 border border-emerald-500/30 flex items-center justify-between gap-3 shadow-md mt-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">Último Orçamento Recuperado</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                            + R$ 2.380,00
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Toyota Corolla 2.0 • Revisão confirmada após lembrete cordial
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono whitespace-nowrap">Há 12 min</span>
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
