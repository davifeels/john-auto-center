import React, { useState } from 'react';
import logoImg from '../assets/logo.png';
import { X, Plus, Wrench, Car, User, DollarSign, FileText, Check } from 'lucide-react';

export default function NewQuoteModal({ isOpen, onClose, onAddBudget }) {
  if (!isOpen) return null;

  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [plate, setPlate] = useState('');
  const [service, setService] = useState('');
  const [category, setCategory] = useState('Revisão Preventiva');
  const [value, setValue] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clientName || !vehicle || !value) {
      alert("Por favor, preencha ao menos o nome do cliente, veículo e valor.");
      return;
    }

    const numValue = parseFloat(value.replace(/\D/g, '')) / 100 || 1200;

    const newEntry = {
      id: `ORC-${Math.floor(1000 + Math.random() * 9000)}`,
      clientName: clientName.trim(),
      phone: phone || "(61) 98888-0000",
      vehicle: vehicle.trim(),
      plate: plate.toUpperCase() || "BRA-2026",
      year: "2022",
      mileage: "50.000 km",
      service: service.trim() || "Manutenção Preventiva Geral",
      category: category,
      value: numValue,
      laborValue: Math.round(numValue * 0.35),
      partsValue: Math.round(numValue * 0.65),
      createdAt: new Date().toISOString().split('T')[0],
      status: "Aguardando Aprovação",
      lastFollowUp: "Recém-registrado",
      followUpStep: 0,
      nextAction: "Aguardar 24h para follow-up automático",
      notes: notes || "Orçamento inserido para demonstração do fluxo da oficina.",
      items: [
        { name: "Peças de Reposição e Fluidos", qty: 1, unitPrice: Math.round(numValue * 0.65), total: Math.round(numValue * 0.65) },
        { name: "Mão de Obra Mecânica Especializada", qty: 1, unitPrice: Math.round(numValue * 0.35), total: Math.round(numValue * 0.35) },
      ],
      timeline: [
        { date: "Hoje - Agora", title: "Orçamento Criado", desc: "Cadastrado no balcão da oficina." }
      ]
    };

    onAddBudget(newEntry);
    onClose();
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
                Cadastrar Novo Orçamento
              </h3>
              <p className="text-xs text-slate-400">
                Simulação de Registro de O.S. • John Auto Center
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

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-300 font-medium block mb-1">
                Nome do Cliente *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Gustavo Henrique"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-racing-orange"
              />
            </div>

            <div>
              <label className="text-xs text-slate-300 font-medium block mb-1">
                Telefone / WhatsApp
              </label>
              <input
                type="text"
                placeholder="(61) 98765-4321"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-racing-orange"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-300 font-medium block mb-1">
                Veículo (Modelo e Versão) *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Volkswagen Nivus 1.0 TSI"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-racing-orange"
              />
            </div>

            <div>
              <label className="text-xs text-slate-300 font-medium block mb-1">
                Placa
              </label>
              <input
                type="text"
                placeholder="Ex: BRA-9A12"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 text-xs uppercase focus:outline-none focus:border-racing-orange"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-300 font-medium block mb-1">
              Serviço Solicitado
            </label>
            <input
              type="text"
              placeholder="Ex: Troca de pastilhas dianteiras + retífica de discos"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-racing-orange"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-300 font-medium block mb-1">
                Categoria Mecânica
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-dark-850 border border-white/10 text-white text-xs focus:outline-none focus:border-racing-orange"
              >
                <option value="Revisão Preventiva">Revisão Preventiva</option>
                <option value="Freios">Freios e Segurança</option>
                <option value="Suspensão">Suspensão</option>
                <option value="Câmbio Automático">Câmbio Automático</option>
                <option value="Motor & Injeção">Motor & Injeção</option>
                <option value="Ar-Condicionado">Ar-Condicionado</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-slate-300 font-medium block mb-1">
                Valor Total (R$) *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: 1450,00"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-dark-850 border border-white/10 text-white font-mono placeholder-slate-500 text-xs focus:outline-none focus:border-racing-orange"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-300 font-medium block mb-1">
              Observações do Diagnóstico
            </label>
            <textarea
              rows={2}
              placeholder="Observações do mecânico ou detalhes sobre peças..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-racing-orange resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-racing-orange hover:bg-racing-orange/90 text-white shadow-glow-orange-sm flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Salvar Orçamento na Demonstração</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
