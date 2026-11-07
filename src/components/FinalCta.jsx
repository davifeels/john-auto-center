import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Wrench } from 'lucide-react';

export default function FinalCta({ onOpenContactModal }) {
  return (
    <section className="py-28 bg-dark-900 relative overflow-hidden border-t border-white/5">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-racing-orange/20 to-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      {/* 90% Wide Container */}
      <div className="w-[92%] max-w-[1720px] mx-auto relative z-10 text-center">
        
        <div className="p-10 sm:p-20 rounded-3xl bg-dark-850/90 border border-racing-orange/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-racing-orange to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-racing-orange/15 border border-racing-orange/30 text-racing-orange text-xs font-bold tracking-wider uppercase mb-8">
            <Sparkles className="w-4 h-4" />
            Próximo Passo Estratégico para a Oficina
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-7">
            Sua oficina pode aproveitar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange via-amber-400 to-white">
              melhor cada oportunidade.
            </span>
          </h2>

          {/* Text */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Conheça como uma plataforma de acompanhamento e recuperação de orçamentos pode transformar a gestão comercial da sua oficina.
          </p>

          {/* Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={onOpenContactModal}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-base bg-gradient-to-r from-racing-orange to-amber-600 hover:from-racing-orange hover:to-racing-red text-white shadow-glow-orange hover:shadow-glow-orange-sm active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 group"
            >
              <span>Quero conhecer a solução</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Micro Trust Points */}
          <div className="pt-10 mt-10 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Apresentação prática e sem compromisso
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Adaptação rápida à rotina da recepção
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Foco direto em faturamento recuperado no caixa
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
