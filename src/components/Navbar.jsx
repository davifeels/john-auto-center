import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import { 
  Wrench, 
  Menu, 
  X, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  CheckCircle2, 
  ChevronRight,
  ShieldAlert,
  Sparkles,
  Activity,
  Layers,
  MapPin,
  Clock
} from 'lucide-react';

export default function Navbar({ onOpenDemoModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Visão Geral', href: '#hero' },
    { label: 'O Desafio', href: '#desafio' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Orçamentos', href: '#gestao-orcamentos' },
    { label: 'Recuperação WhatsApp', href: '#recuperacao-whatsapp' },
    { label: 'Calculadora ROI', href: '#calculadora-retorno' },
    { label: 'Benefícios', href: '#beneficios' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Enterprise Ticker Bar (Hidden on Mobile) */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1.5 bg-dark-950 border-b border-white/5 text-[11px] text-slate-400 font-mono tracking-tight z-50 relative">
        <div className="w-[92%] max-w-[1720px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              SISTEMA EM PRODUÇÃO • MÓDULO DE RECUPERAÇÃO ATIVO
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-racing-orange" />
              John Auto Center — Planaltina - DF
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">
              Boxes Operacionais: <strong className="text-white">6 Ativos</strong>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Conversão Média: <strong className="text-emerald-400">29.4%</strong>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-500" />
              Tempo Médio Follow-up: <strong className="text-white">48 Horas</strong>
            </span>
            <span className="text-slate-600">|</span>
            <span className="px-2 py-0.5 rounded bg-racing-orange/15 text-racing-orange font-bold text-[10px] border border-racing-orange/30">
              v2.6 Enterprise
            </span>
          </div>
        </div>
      </div>

      <nav 
        className={`fixed top-0 lg:top-7 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark-950/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' 
            : 'bg-gradient-to-b from-dark-950/95 via-dark-950/80 to-transparent py-4'
        }`}
      >
        <div className="w-[92%] max-w-[1720px] mx-auto">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo & Identity */}
            <a 
              href="#hero" 
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-3.5 group focus:outline-none shrink-0"
            >
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-racing-orange via-white to-racing-red shadow-glow-orange-sm group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                <img 
                  src={logoImg} 
                  alt="John Auto Center" 
                  className="w-full h-full object-cover rounded-full bg-dark-950"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-extrabold text-xl tracking-wider text-white">
                    JOHN <span className="text-racing-orange">AUTO CENTER</span>
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-racing-orange/15 text-racing-orange border border-racing-orange/30">
                    Cockpit Enterprise
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-medium tracking-tight">
                  Plataforma Integrada de Gestão & Recuperação • Planaltina-DF
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-1 bg-dark-900/80 p-1.5 rounded-full border border-white/10 shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Actions / CTA */}
            <div className="hidden md:flex items-center gap-3.5 shrink-0">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Simulador Conectado</span>
              </div>
              <button
                onClick={() => {
                  const el = document.querySelector('#dashboard');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-racing-orange to-amber-600 hover:from-racing-orange hover:to-racing-red text-white shadow-glow-orange-sm hover:shadow-glow-orange transition-all duration-200 flex items-center gap-2 active:scale-95"
              >
                <span>Explorar Cockpit</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-dark-850 text-slate-300 hover:text-white border border-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-84 max-w-full bg-dark-900 border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-br from-racing-orange to-racing-red flex items-center justify-center shrink-0">
                    <img 
                      src={logoImg} 
                      alt="John Auto Center Logo" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <span className="font-bold text-sm tracking-wide text-white block">
                      JOHN AUTO CENTER
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Planaltina - DF</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-dark-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-racing-orange/15 hover:border-racing-orange/30 border border-transparent transition-all flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldAlert className="w-4 h-4 text-racing-orange" />
                <span>Demonstração Conceitual Oficial</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.querySelector('#dashboard');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3.5 rounded-xl text-sm font-bold bg-racing-orange text-white text-center shadow-glow-orange-sm flex items-center justify-center gap-2"
              >
                <span>Acessar Cockpit Interativo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
