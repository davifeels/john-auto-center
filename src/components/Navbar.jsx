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
  Sparkles
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
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark-950/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl' 
            : 'bg-gradient-to-b from-dark-950/95 via-dark-950/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Identity */}
            <a 
              href="#hero" 
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-br from-racing-orange via-white to-racing-red shadow-glow-orange-sm group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                <img 
                  src={logoImg} 
                  alt="John Auto Center" 
                  className="w-full h-full object-cover rounded-full bg-dark-950"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg tracking-wider text-white">
                    JOHN <span className="text-racing-orange">AUTO CENTER</span>
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-racing-orange/15 text-racing-orange border border-racing-orange/30">
                    Conceito
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium tracking-tight">
                  Gestão & Recuperação Inteligente • Planaltina-DF
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-1 bg-dark-900/60 p-1 rounded-full border border-white/5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Actions / CTA */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Simulador Ativo</span>
              </div>
              <button
                onClick={() => {
                  const el = document.querySelector('#dashboard');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-racing-orange to-amber-600 hover:from-racing-orange hover:to-racing-red text-white shadow-glow-orange-sm hover:shadow-glow-orange transition-all duration-200 flex items-center gap-1.5 active:scale-95"
              >
                <span>Explorar Demonstração</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-dark-800 text-slate-300 hover:text-white border border-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-80 max-w-full bg-dark-900 border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full p-0.5 bg-gradient-to-br from-racing-orange to-racing-red flex items-center justify-center shrink-0">
                    <img 
                      src={logoImg} 
                      alt="John Auto Center Logo" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="font-bold text-sm tracking-wide text-white">
                    JOHN AUTO CENTER
                  </span>
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
                    className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-racing-orange/10 hover:border-racing-orange/30 border border-transparent transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldAlert className="w-4 h-4 text-racing-orange" />
                <span>Demonstração Conceitual</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.querySelector('#dashboard');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl text-sm font-semibold bg-racing-orange text-white text-center shadow-glow-orange-sm flex items-center justify-center gap-2"
              >
                <span>Ver Demonstração Interativa</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
