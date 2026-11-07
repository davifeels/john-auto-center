import React, { useState } from 'react';
import logoImg from '../assets/logo.png';
import { X, Send, CheckCircle2, Sparkles, Wrench, Phone, User, Building, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [workshop, setWorkshop] = useState('John Auto Center');
  const [whatsapp, setWhatsapp] = useState('');
  const [interest, setInterest] = useState('Recuperação de orçamentos parados no WhatsApp');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF5500', '#10B981', '#38BDF8']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg rounded-3xl bg-dark-900 border border-white/15 shadow-2xl overflow-hidden my-8 z-10">
        
        {/* Header */}
        <div className="px-6 py-5 bg-dark-850 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-br from-racing-orange to-racing-red flex items-center justify-center shrink-0 shadow-glow-orange-sm">
              <img 
                src={logoImg} 
                alt="John Auto Center Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Apresentação Comercial & Demonstração
              </h3>
              <p className="text-xs text-slate-400">
                Solução Comercial para John Auto Center
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-dark-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-xl font-bold text-white font-display">
              Solicitação Registrada na Simulação!
            </h4>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              Esta é uma simulação de captação comercial. Em um cenário real, Davi Anderson agendaria uma demonstração presencial na John Auto Center em Planaltina-DF.
            </p>

            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-dark-800 hover:bg-dark-750 text-white border border-white/10"
              >
                Concluir e Voltar à Demonstração
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="p-3.5 rounded-xl bg-racing-orange/10 border border-racing-orange/20 text-xs text-slate-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-racing-orange shrink-0" />
              <span>
                Demonstre o interesse na implantação da plataforma na oficina.
              </span>
            </div>

            <div>
              <label className="text-xs text-slate-300 font-medium block mb-1">
                Nome do Responsável
              </label>
              <input
                type="text"
                required
                placeholder="Ex: John / Proprietário"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-racing-orange"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  Oficina
                </label>
                <input
                  type="text"
                  required
                  value={workshop}
                  onChange={(e) => setWorkshop(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-dark-850 border border-white/10 text-white text-xs focus:outline-none focus:border-racing-orange"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  WhatsApp para Contato
                </label>
                <input
                  type="text"
                  required
                  placeholder="(61) 9...."
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-racing-orange"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-300 font-medium block mb-1">
                Principal Foco Desejado
              </label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-dark-850 border border-white/10 text-white text-xs focus:outline-none focus:border-racing-orange"
              >
                <option value="Recuperação de orçamentos parados no WhatsApp">
                  Recuperação de orçamentos parados no WhatsApp
                </option>
                <option value="Organização do histórico de veículos e clientes">
                  Organização do histórico de veículos e clientes
                </option>
                <option value="Visibilidade de relatórios e faturamento">
                  Visibilidade de relatórios e faturamento
                </option>
                <option value="Preenchimento de horários ociosos nos boxes">
                  Preenchimento de horários ociosos nos boxes
                </option>
              </select>
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
              >
                Voltar
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-racing-orange to-amber-600 hover:from-racing-orange hover:to-racing-red text-white shadow-glow-orange-sm flex items-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                <span>Simular Envio de Solicitação</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
