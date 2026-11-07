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
  Clock,
  Gauge
} from 'lucide-react';

export default function Navbar({ onOpenDemoModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    { label: 'Simulador WhatsApp', href: '#recuperacao-whatsapp' },
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
      {/* Header colado exatamente no topo (top-0), cobrindo 100% da largura, com conteúdo ocupando 90% da tela */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
          isScrolled 
            ? 'bg-dark-950/98 backdrop-blur-xl border-white/10 shadow-2xl py-2.5' 
            : 'bg-dark-950/90 backdrop-blur-lg border-white/10 py-3'
        }`}
      >
        <div className="w-[90%] max-w-[1850px] mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Identity */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none shrink-0"
          >
            <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-br from-racing-orange via-white to-racing-red shadow-glow-orange-sm group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
              <img 
                src={logoImg} 
                alt="John Auto Center Logo" 
                className="w-full h-full object-cover rounded-full bg-dark-950"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-lg lg:text-xl tracking-wider text-white">
                  JOHN <span className="text-racing-orange">AUTO CENTER</span>
                </span>
                <span className="hidden sm:inline-block text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-racing-orange/15 text-racing-orange border border-racing-orange/30">
                  Planaltina-DF
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-tight">
                Centro Automotivo Especializado • Plataforma de Gestão Comercial
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-dark-900/90 px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
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
          </nav>

          {/* Actions / Live Status Bar */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Boxes Operando (6 Ativos)</span>
            </div>
            
            <button
              onClick={() => {
                const el = document.querySelector('#dashboard');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-racing-orange to-amber-600 hover:from-racing-orange hover:to-racing-red text-white shadow-glow-orange-sm hover:shadow-glow-orange transition-all duration-200 flex items-center gap-2 active:scale-95"
            >
              <span>Acessar Cockpit</span>
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
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-80 max-w-full bg-dark-900 border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto">
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
