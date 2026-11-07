import React from 'react';
import logoImg from '../assets/logo.png';
import { 
  X, 
  Car, 
  User, 
  Phone, 
  Wrench, 
  Calendar, 
  CheckCircle, 
  Clock, 
  MessageCircle, 
  Printer, 
  ShieldCheck, 
  FileText,
  DollarSign
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteDetailModal({ 
  budget, 
  onClose, 
  onApprove, 
  onSimulateChat 
}) {
  if (!budget) return null;

  const handleApproveClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF5500', '#10B981', '#ffffff']
    });
    onApprove(budget.id);
  };

  const formatBRL = (val) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-dark-900 border border-white/15 shadow-2xl overflow-hidden my-8 z-10">
        
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
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">
                  Orçamento {budget.id}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-800 text-slate-300 border border-white/10">
                  {budget.createdAt}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                John Auto Center • Planaltina-DF
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-dark-800 text-slate-400 hover:text-white hover:bg-dark-750 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Top Client & Vehicle Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Client Info */}
            <div className="p-4 rounded-2xl bg-dark-850 border border-white/5 space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">
                Dados do Cliente
              </span>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <User className="w-4 h-4 text-racing-orange" />
                <span>{budget.clientName}</span>
              </div>
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>{budget.phone}</span>
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="p-4 rounded-2xl bg-dark-850 border border-white/5 space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">
                Veículo Registrado
              </span>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <Car className="w-4 h-4 text-racing-orange" />
                <span>{budget.vehicle}</span>
              </div>
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <span className="bg-dark-900 px-2 py-0.5 rounded text-[11px] font-mono border border-white/5">
                  Placa: {budget.plate}
                </span>
                <span>• {budget.year}</span>
                <span>• {budget.mileage}</span>
              </div>
            </div>

          </div>

          {/* Service & Category Bar */}
          <div className="p-4 rounded-2xl bg-dark-850 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">
                Serviço Solicitado
              </span>
              <div className="text-sm font-bold text-white">
                {budget.service}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Categoria: {budget.category}
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">
                Status Atual
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-racing-orange/20 text-racing-orange border border-racing-orange/30">
                {budget.status}
              </span>
            </div>
          </div>

          {/* Items Table (Parts & Labor) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Discriminação de Peças e Mão de Obra
            </h4>
            
            <div className="rounded-xl border border-white/10 overflow-hidden bg-dark-950">
              <table className="w-full text-xs text-left">
                <thead className="bg-dark-800 text-slate-400 uppercase font-mono text-[10px] border-b border-white/10">
                  <tr>
                    <th className="py-2.5 px-3">Item / Peça / Serviço</th>
                    <th className="py-2.5 px-3 text-center">Qtd</th>
                    <th className="py-2.5 px-3 text-right">Unitário</th>
                    <th className="py-2.5 px-3 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {budget.items ? (
                    budget.items.map((item, idx) => (
                      <tr key={idx} className="hover:bg-dark-850/50">
                        <td className="py-2.5 px-3 text-slate-200">{item.name}</td>
                        <td className="py-2.5 px-3 text-center text-slate-400">{item.qty}</td>
                        <td className="py-2.5 px-3 text-right text-slate-300 font-mono">{formatBRL(item.unitPrice)}</td>
                        <td className="py-2.5 px-3 text-right font-bold text-white font-mono">{formatBRL(item.total)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="py-3 px-3 text-slate-400">
                        Serviço fechado conforme pacote.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Total Financial Summary */}
            <div className="p-4 rounded-xl bg-dark-850 border border-white/10 flex flex-col sm:flex-row justify-between items-end gap-4">
              <div className="text-xs text-slate-400 space-y-1">
                <div>Peças Originais: <strong className="text-slate-200">{formatBRL(budget.partsValue || budget.value * 0.7)}</strong></div>
                <div>Mão de Obra Especializada: <strong className="text-slate-200">{formatBRL(budget.laborValue || budget.value * 0.3)}</strong></div>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-slate-400 block">Valor Total do Orçamento</span>
                <span className="text-2xl font-display font-extrabold text-racing-orange font-mono">
                  {formatBRL(budget.value)}
                </span>
                <span className="text-[10px] text-slate-500 block">Condição: Em até 6x no cartão</span>
              </div>
            </div>
          </div>

          {/* Follow-up Timeline */}
          {budget.timeline && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Histórico & Linha do Tempo de Acompanhamento
              </h4>
              <div className="space-y-2 border-l-2 border-racing-orange/40 pl-4 ml-2">
                {budget.timeline.map((step, idx) => (
                  <div key={idx} className="relative text-xs space-y-0.5">
                    <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-racing-orange" />
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{step.title}</span>
                      <span className="text-[10px] text-slate-400 font-mono">({step.date})</span>
                    </div>
                    <p className="text-slate-400 text-[11px]">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mechanic notes */}
          {budget.notes && (
            <div className="p-3.5 rounded-xl bg-dark-950 border border-white/5 text-xs text-slate-300">
              <span className="font-bold text-slate-200 block mb-1">Notas da Recepção / Mecânico:</span>
              <p className="text-slate-400 leading-relaxed">{budget.notes}</p>
            </div>
          )}

        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 sm:p-6 bg-dark-850 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onSimulateChat(budget);
            }}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 flex items-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Simular Disparo WhatsApp</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-dark-800 hover:bg-dark-750 transition-colors"
            >
              Fechar
            </button>

            {budget.status !== 'Aprovado' && (
              <button
                onClick={handleApproveClick}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-racing-orange to-amber-600 hover:from-racing-orange hover:to-racing-red text-white shadow-glow-orange-sm flex items-center gap-2 transition-all active:scale-95"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Marcar como Aprovado</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
