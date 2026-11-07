import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Wrench } from 'lucide-react';

export default function FinalCta({ onOpenContactModal }) {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden border-t border-white/5">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-racing-orange/20 to-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="p-8 sm:p-14 rounded-3xl bg-dark-850/90 border border-racing-orange/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-racing-orange to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-orange/15 border border-racing-orange/30 text-racing-orange text-xs font-semibold tracking-wider uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Próximo Passo Estratégico
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            Sua oficina pode aproveitar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange via-amber-400 to-white">
              melhor cada oportunidade.
            </span>
          </h2>

          {/* Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Conheça como uma plataforma de acompanhamento e recuperação de orçamentos pode transformar a gestão comercial da sua oficina.
          </p>

          {/* Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContactModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-racing-orange to-amber-600 hover:from-racing-orange hover:to-racing-red text-white shadow-glow-orange hover:shadow-glow-orange-sm active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 group"
            >
              <span>Quero conhecer a solução</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Micro Trust Points */}
          <div className="pt-8 mt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Apresentação sem compromisso
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Adaptação à rotina da sua equipe
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Foco direto em faturamento recuperado
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
