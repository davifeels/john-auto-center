import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Eye, 
  MessageCircle, 
  CheckCircle, 
  Clock, 
  User, 
  Car, 
  Wrench, 
  Plus, 
  FileText, 
  Check, 
  X, 
  ChevronRight,
  Sparkles,
  ArrowUpDown,
  Download
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BudgetManager({ 
  budgets, 
  onViewDetails, 
  onSimulateChat, 
  onApproveBudget,
  onOpenNewBudgetModal 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('Todos');
  const [sortField, setSortField] = useState('date'); // 'date' | 'value' | 'client'
  const [sortAsc, setSortAsc] = useState(false);

  const statusList = [
    'Todos',
    'Aguardando Aprovação',
    'Em Acompanhamento',
    'Cliente Interessado',
    'Aprovado',
    'Não Aprovado'
  ];

  // Filtering and Searching
  const filteredBudgets = useMemo(() => {
    return budgets.filter((b) => {
      const matchesStatus = selectedStatus === 'Todos' || b.status === selectedStatus;
      const term = searchTerm.toLowerCase();
      const matchesSearch = 
        b.clientName.toLowerCase().includes(term) ||
        b.vehicle.toLowerCase().includes(term) ||
        b.service.toLowerCase().includes(term) ||
        b.plate.toLowerCase().includes(term) ||
        b.id.toLowerCase().includes(term);
      return matchesStatus && matchesSearch;
    }).sort((a, b) => {
      if (sortField === 'value') {
        return sortAsc ? a.value - b.value : b.value - a.value;
      }
      if (sortField === 'client') {
        return sortAsc 
          ? a.clientName.localeCompare(b.clientName) 
          : b.clientName.localeCompare(a.clientName);
      }
      // default: date
      return sortAsc 
        ? new Date(a.createdAt) - new Date(b.createdAt)
        : new Date(b.createdAt) - new Date(a.createdAt);
    });
  }, [budgets, searchTerm, selectedStatus, sortField, sortAsc]);

  // Status badge styling helper
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Aprovado':
        return {
          bg: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
          dot: 'bg-emerald-500',
          label: 'Aprovado'
        };
      case 'Cliente Interessado':
        return {
          bg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
          dot: 'bg-purple-400',
          label: 'Cliente Interessado'
        };
      case 'Em Acompanhamento':
        return {
          bg: 'bg-racing-orange/15 text-racing-orange border-racing-orange/30',
          dot: 'bg-racing-orange animate-pulse',
          label: 'Em Acompanhamento'
        };
      case 'Aguardando Aprovação':
        return {
          bg: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
          dot: 'bg-amber-400',
          label: 'Aguardando Aprovação'
        };
      case 'Não Aprovado':
        return {
          bg: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
          dot: 'bg-rose-500',
          label: 'Não Aprovado'
        };
      default:
        return {
          bg: 'bg-slate-700/20 text-slate-300 border-slate-600',
          dot: 'bg-slate-400',
          label: status
        };
    }
  };

  const handleApprove = (id, clientName) => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF5500', '#10B981', '#ffffff']
    });
    onApproveBudget(id);
  };

  const formatBRL = (val) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  return (
    <section id="gestao-orcamentos" className="py-24 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-orange/10 border border-racing-orange/30 text-racing-orange text-xs font-semibold tracking-wider uppercase">
              <Wrench className="w-3.5 h-3.5" />
              Gestão de Orçamentos da Oficina
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Acompanhamento{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange to-amber-400">
                Centralizado
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
              Tabela interativa com filtros, pesquisa e ações diretas. Visualize o status de cada cliente, agende mensagens de recuperação e aprove orçamentos com 1 clique.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenNewBudgetModal}
              className="px-4 py-2.5 rounded-xl font-semibold text-xs bg-racing-orange hover:bg-racing-orange/90 text-white shadow-glow-orange-sm flex items-center gap-2 active:scale-95 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Novo Orçamento (Simulação)</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-2xl bg-dark-900 border border-white/10 mb-6 space-y-4 shadow-lg">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Pesquisar por cliente, veículo, placa (ex: Corolla, Marcos, JAC-3F88)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-racing-orange transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Controls */}
            <div className="flex items-center gap-2 text-xs text-slate-400 self-end lg:self-auto">
              <span>Ordenar por:</span>
              <button
                onClick={() => {
                  if (sortField === 'value') setSortAsc(!sortAsc);
                  else { setSortField('value'); setSortAsc(false); }
                }}
                className={`px-3 py-1.5 rounded-lg border text-xs flex items-center gap-1 transition-all ${
                  sortField === 'value'
                    ? 'bg-racing-orange/15 text-racing-orange border-racing-orange/40 font-semibold'
                    : 'bg-dark-850 text-slate-300 border-white/10 hover:border-white/20'
                }`}
              >
                <span>Valor</span>
                <ArrowUpDown className="w-3 h-3" />
              </button>

              <button
                onClick={() => {
                  if (sortField === 'date') setSortAsc(!sortAsc);
                  else { setSortField('date'); setSortAsc(false); }
                }}
                className={`px-3 py-1.5 rounded-lg border text-xs flex items-center gap-1 transition-all ${
                  sortField === 'date'
                    ? 'bg-racing-orange/15 text-racing-orange border-racing-orange/40 font-semibold'
                    : 'bg-dark-850 text-slate-300 border-white/10 hover:border-white/20'
                }`}
              >
                <span>Data</span>
                <ArrowUpDown className="w-3 h-3" />
              </button>
            </div>

          </div>

          {/* Status Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
            <span className="text-xs text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-racing-orange" /> Status:
            </span>
            {statusList.map((status) => {
              const isSelected = selectedStatus === status;
              const count = status === 'Todos' 
                ? budgets.length 
                : budgets.filter(b => b.status === status).length;

              return (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-racing-orange text-white shadow-glow-orange-sm'
                      : 'bg-dark-850 text-slate-400 hover:text-white hover:bg-dark-800 border border-white/5'
                  }`}
                >
                  <span>{status}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-black/30 text-white' : 'bg-dark-750 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Budgets Table */}
        <div className="rounded-2xl bg-dark-900 border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-dark-850 text-slate-400 uppercase tracking-wider font-mono border-b border-white/10">
                <tr>
                  <th className="py-4 px-4 font-semibold">Cliente & Contato</th>
                  <th className="py-4 px-4 font-semibold">Veículo</th>
                  <th className="py-4 px-4 font-semibold">Serviço Solicitado</th>
                  <th className="py-4 px-4 font-semibold">Valor</th>
                  <th className="py-4 px-4 font-semibold">Data</th>
                  <th className="py-4 px-4 font-semibold">Status</th>
                  <th className="py-4 px-4 font-semibold">Próxima Ação</th>
                  <th className="py-4 px-4 font-semibold text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredBudgets.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="py-12 text-center text-slate-400">
                      Nenhum orçamento encontrado com os filtros selecionados.
                    </td>
                  </tr>
                ) : (
                  filteredBudgets.map((budget) => {
                    const badge = getStatusBadge(budget.status);
                    return (
                      <tr 
                        key={budget.id}
                        className="hover:bg-dark-850/60 transition-colors group"
                      >
                        {/* Cliente */}
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-white group-hover:text-racing-orange transition-colors">
                            {budget.clientName}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {budget.phone}
                          </div>
                        </td>

                        {/* Veículo */}
                        <td className="py-3.5 px-4">
                          <div className="font-medium text-slate-200">
                            {budget.vehicle}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                            <span className="bg-dark-800 px-1.5 py-0.5 rounded border border-white/5">
                              {budget.plate}
                            </span>
                            <span>• {budget.year}</span>
                          </div>
                        </td>

                        {/* Serviço */}
                        <td className="py-3.5 px-4 max-w-xs">
                          <div className="text-slate-200 truncate" title={budget.service}>
                            {budget.service}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {budget.category}
                          </div>
                        </td>

                        {/* Valor */}
                        <td className="py-3.5 px-4">
                          <div className="font-bold font-mono text-white text-sm">
                            {formatBRL(budget.value)}
                          </div>
                          <div className="text-[10px] text-slate-500">
                            Peças: {formatBRL(budget.partsValue)}
                          </div>
                        </td>

                        {/* Data */}
                        <td className="py-3.5 px-4 text-slate-400 font-mono text-[11px] whitespace-nowrap">
                          {budget.createdAt}
                        </td>

                        {/* Status */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border ${badge.bg}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                            <span>{badge.label}</span>
                          </span>
                        </td>

                        {/* Próxima Ação */}
                        <td className="py-3.5 px-4 max-w-xs text-[11px] text-slate-300">
                          <span className="line-clamp-2">
                            {budget.nextAction}
                          </span>
                        </td>

                        {/* Ações */}
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            
                            {/* Ver Detalhes */}
                            <button
                              onClick={() => onViewDetails(budget)}
                              title="Visualizar Orçamento Completo"
                              className="p-1.5 rounded-lg bg-dark-800 hover:bg-dark-750 text-slate-300 hover:text-white border border-white/10 transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                            </button>

                            {/* Simular WhatsApp */}
                            <button
                              onClick={() => onSimulateChat(budget)}
                              title="Simular Recuperação WhatsApp"
                              className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-colors"
                            >
                              <MessageCircle className="w-4 h-4" />
                            </button>

                            {/* Aprovar Orçamento */}
                            {budget.status !== 'Aprovado' && (
                              <button
                                onClick={() => handleApprove(budget.id, budget.clientName)}
                                title="Marcar como Aprovado"
                                className="p-1.5 rounded-lg bg-racing-orange/15 hover:bg-racing-orange text-racing-orange hover:text-white border border-racing-orange/30 transition-all"
                              >
                                <Check className="w-4 h-4" />
                              </button>
                            )}

                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="px-6 py-4 bg-dark-850 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              Mostrando <strong className="text-white">{filteredBudgets.length}</strong> de <strong className="text-white">{budgets.length}</strong> orçamentos demonstrativos.
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>John Auto Center • Módulo de Gestão de Ordens de Serviço</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
