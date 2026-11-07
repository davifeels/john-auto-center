import React from 'react';
import logoImg from '../assets/logo.png';
import { Wrench, Shield, ExternalLink, Code2, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 text-slate-400 border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-racing-orange to-racing-red flex items-center justify-center shrink-0 shadow-glow-orange-sm">
                <img 
                  src={logoImg} 
                  alt="John Auto Center Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white tracking-wider">
                  JOHN <span className="text-racing-orange">AUTO CENTER</span>
                </span>
                <p className="text-[11px] text-slate-400">
                  Planaltina-DF • Conceito Demonstrativo de Plataforma
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Demonstração conceitual de uma plataforma digital para organização de orçamentos, acompanhamento de clientes e recuperação inteligente de oportunidades automotivas.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Ambiente Interativo de Apresentação Comercial</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-white font-bold">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-racing-orange transition-colors">Visão Geral</a>
              </li>
              <li>
                <a href="#desafio" className="hover:text-racing-orange transition-colors">O Desafio Comercial</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-racing-orange transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-racing-orange transition-colors">Dashboard Interativo</a>
              </li>
              <li>
                <a href="#gestao-orcamentos" className="hover:text-racing-orange transition-colors">Gestão de Orçamentos</a>
              </li>
              <li>
                <a href="#recuperacao-whatsapp" className="hover:text-racing-orange transition-colors">Simulador WhatsApp</a>
              </li>
              <li>
                <a href="#calculadora-retorno" className="hover:text-racing-orange transition-colors">Calculadora de Retorno</a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-racing-orange transition-colors">Benefícios da Solução</a>
              </li>
            </ul>
          </div>

          {/* Tech & Context */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-white font-bold">
              Ficha Técnica da Demonstração
            </h4>
            <div className="p-4 rounded-2xl bg-dark-900 border border-white/5 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Desenvolvido para:</span>
                <span className="text-white font-medium">John Auto Center (Planaltina-DF)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Finalidade:</span>
                <span className="text-white font-medium">Demonstração Visual e Comercial</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Tecnologias:</span>
                <span className="text-white font-medium">React • Tailwind • Chart.js</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Autor do Protótipo:</span>
                <span className="text-racing-orange font-semibold">Davi Anderson</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full py-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 text-xs text-slate-300 hover:text-white border border-white/5 flex items-center justify-center gap-2 transition-colors"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Mandatory Transparency Notice Box */}
        <div className="mt-8 p-4 rounded-2xl bg-dark-900/90 border border-white/10 text-xs text-slate-400 space-y-2 text-center md:text-left shadow-inner">
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-300 font-semibold text-xs">
            <Shield className="w-4 h-4 text-racing-orange" />
            <span>Nota de Transparência e Responsabilidade</span>
          </div>
          <p className="leading-relaxed text-[11px] text-slate-400">
            <strong>Projeto demonstrativo desenvolvido por Davi Anderson. Esta apresentação é conceitual e não representa um sistema oficial da John Auto Center.</strong> Todos os dados de clientes, veículos, placas, orçamentos, valores financeiros, gráficos, históricos de mensagens e fluxos apresentados nesta página são estritamente fictícios e foram elaborados exclusivamente para fins de ilustração do potencial da solução digital proposta.
          </p>
        </div>

        {/* Bottom Credits Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} John Auto Center — Protótipo Conceitual. Todos os direitos de criação reservados a Davi Anderson.
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Demonstração de Interface Automotiva</span>
            <span>•</span>
            <span>Planaltina - DF</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
