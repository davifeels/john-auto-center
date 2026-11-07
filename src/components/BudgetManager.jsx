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
  Download,
  Printer,
  ShieldCheck,
  TrendingUp,
  Tag
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
      return sortAsc 
        ? new Date(a.createdAt) - new Date(b.createdAt)
        : new Date(b.createdAt) - new Date(a.createdAt);
    });
  }, [budgets, searchTerm, selectedStatus, sortField, sortAsc]);

  // Aggregate stats for filtered items
  const totalValueFiltered = useMemo(() => {
    return filteredBudgets.reduce((acc, curr) => acc + curr.value, 0);
  }, [filteredBudgets]);

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
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#FF5500', '#10B981', '#ffffff']
    });
    onApproveBudget(id);
  };

  const formatBRL = (val) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  // Avatar initials helper
  const getInitials = (name) => {
    const parts = name.split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section id="gestao-orcamentos" className="py-28 bg-dark-950 relative">
      {/* 90% Wide Container */}
      <div className="w-[90%] max-w-[1850px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-racing-orange/10 border border-racing-orange/30 text-racing-orange text-xs font-bold tracking-wider uppercase">
              <Wrench className="w-3.5 h-3.5" />
              Gestão Centralizada de Ordens & Orçamentos
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Acompanhamento{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange to-amber-400">
                Operacional & Comercial
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl">
              Grade interativa em tempo real com filtros por estágio, pesquisa instantânea, detalhamento de peças/mão de obra e disparo de cadência de recuperação.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => alert("Demonstração: Exportação de planilha em formato Excel (.xlsx) disponível no produto final.")}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-dark-850 hover:bg-dark-800 text-slate-300 hover:text-white border border-white/10 flex items-center gap-2 transition-all shadow"
            >
              <Download className="w-4 h-4 text-racing-orange" />
              <span>Exportar Excel</span>
            </button>

            <button
              onClick={onOpenNewBudgetModal}
              className="px-5 py-2.5 rounded-xl font-bold text-xs bg-racing-orange hover:bg-racing-orange/90 text-white shadow-glow-orange-sm flex items-center gap-2 active:scale-95 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Novo Orçamento (Simulação)</span>
            </button>
          </div>
        </div>

        {/* Quick KPI Strip Above Table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-slate-400 text-xs block">Orçamentos no Filtro</span>
              <span className="text-xl font-black text-white font-mono">{filteredBudgets.length} de {budgets.length}</span>
            </div>
            <Tag className="w-5 h-5 text-slate-500" />
          </div>

          <div className="p-4 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-slate-400 text-xs block">Valor Total sob Gestão</span>
              <span className="text-xl font-black text-racing-orange font-mono">{formatBRL(totalValueFiltered)}</span>
            </div>
            <TrendingUp className="w-5 h-5 text-racing-orange" />
          </div>

          <div className="p-4 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-slate-400 text-xs block">Aprovados com Sucesso</span>
              <span className="text-xl font-black text-emerald-400 font-mono">
                {budgets.filter(b => b.status === 'Aprovado').length} ordens
              </span>
            </div>
            <CheckCircle className="w-5 h-5 text-emerald-400" />
          </div>

          <div className="p-4 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-slate-400 text-xs block">Cadência WhatsApp</span>
              <span className="text-xl font-black text-sky-400 font-mono">Automática (48h)</span>
            </div>
            <MessageCircle className="w-5 h-5 text-sky-400" />
          </div>
        </div>

        {/* Filter & Search Bar - 90% wide view */}
        <div className="p-5 rounded-3xl bg-dark-900 border border-white/10 mb-6 space-y-4 shadow-xl">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Pesquisar por cliente, veículo, placa Mercosul (ex: Corolla, Marcos, JAC-3F88, freios)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-racing-orange transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 rounded-full hover:bg-dark-750"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Controls */}
            <div className="flex items-center gap-2.5 text-xs text-slate-400 self-end lg:self-auto">
              <span className="font-medium">Ordenar por:</span>
              <button
                onClick={() => {
                  if (sortField === 'value') setSortAsc(!sortAsc);
                  else { setSortField('value'); setSortAsc(false); }
                }}
                className={`px-3.5 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  sortField === 'value'
                    ? 'bg-racing-orange/15 text-racing-orange border-racing-orange/40'
                    : 'bg-dark-850 text-slate-300 border-white/10 hover:border-white/20'
                }`}
              >
                <span>Valor R$</span>
                <ArrowUpDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  if (sortField === 'date') setSortAsc(!sortAsc);
                  else { setSortField('date'); setSortAsc(false); }
                }}
                className={`px-3.5 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  sortField === 'date'
                    ? 'bg-racing-orange/15 text-racing-orange border-racing-orange/40'
                    : 'bg-dark-850 text-slate-300 border-white/10 hover:border-white/20'
                }`}
              >
                <span>Data</span>
                <ArrowUpDown className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Status Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/5">
            <span className="text-xs text-slate-400 mr-2 flex items-center gap-1.5 font-bold">
              <Filter className="w-3.5 h-3.5 text-racing-orange" /> Filtrar Status:
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
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-racing-orange text-white shadow-glow-orange-sm'
                      : 'bg-dark-850 text-slate-400 hover:text-white hover:bg-dark-800 border border-white/5'
                  }`}
                >
                  <span>{status}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-black/35 text-white' : 'bg-dark-750 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Enterprise Data Table - 90% wide view */}
        <div className="rounded-3xl bg-dark-900 border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-dark-850 text-slate-400 uppercase tracking-wider font-mono text-[11px] border-b border-white/10">
                <tr>
                  <th className="py-4.5 px-5 font-bold">Cliente & Contato</th>
                  <th className="py-4.5 px-5 font-bold">Veículo & Placa</th>
                  <th className="py-4.5 px-5 font-bold">Serviço Técnico</th>
                  <th className="py-4.5 px-5 font-bold">Valor (R$)</th>
                  <th className="py-4.5 px-5 font-bold">Data Emissão</th>
                  <th className="py-4.5 px-5 font-bold">Status Atual</th>
                  <th className="py-4.5 px-5 font-bold">Próxima Ação do Sistema</th>
                  <th className="py-4.5 px-5 font-bold text-right">Ações Rápidas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredBudgets.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="py-16 text-center text-slate-400">
                      Nenhum orçamento encontrado com os termos pesquisados.
                    </td>
                  </tr>
                ) : (
                  filteredBudgets.map((budget) => {
                    const badge = getStatusBadge(budget.status);
                    return (
                      <tr 
                        key={budget.id}
                        className="hover:bg-dark-850/70 transition-colors group"
                      >
                        {/* Cliente */}
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center font-bold text-xs text-white shrink-0 shadow-sm">
                              {getInitials(budget.clientName)}
                            </div>
                            <div>
                              <div className="font-bold text-white text-sm group-hover:text-racing-orange transition-colors">
                                {budget.clientName}
                              </div>
                              <div className="text-[11px] text-slate-400 font-mono">
                                {budget.phone}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Veículo */}
                        <td className="py-4 px-5">
                          <div className="font-bold text-slate-200 text-sm">
                            {budget.vehicle}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            {/* Mercosul Placa Badge */}
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-dark-800 border border-blue-500/40 text-[10px] font-mono text-white font-bold">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              {budget.plate}
                            </span>
                            <span className="text-[11px] text-slate-500 font-mono">{budget.year} • {budget.mileage}</span>
                          </div>
                        </td>

                        {/* Serviço */}
                        <td className="py-4 px-5 max-w-sm">
                          <div className="text-slate-200 font-medium text-xs truncate" title={budget.service}>
                            {budget.service}
                          </div>
                          <div className="text-[10px] text-racing-orange font-semibold uppercase tracking-wider mt-0.5">
                            {budget.category}
                          </div>
                        </td>

                        {/* Valor */}
                        <td className="py-4 px-5">
                          <div className="font-black font-mono text-white text-base">
                            {formatBRL(budget.value)}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            Peças: {formatBRL(budget.partsValue)}
                          </div>
                        </td>

                        {/* Data */}
                        <td className="py-4 px-5 text-slate-400 font-mono text-xs whitespace-nowrap">
                          {budget.createdAt}
                        </td>

                        {/* Status */}
                        <td className="py-4 px-5 whitespace-nowrap">
                          <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border ${badge.bg}`}>
                            <span className={`w-2 h-2 rounded-full ${badge.dot}`} />
                            <span>{badge.label}</span>
                          </span>
                        </td>

                        {/* Próxima Ação */}
                        <td className="py-4 px-5 max-w-xs text-xs text-slate-300">
                          <span className="line-clamp-2">
                            {budget.nextAction}
                          </span>
                        </td>

                        {/* Ações */}
                        <td className="py-4 px-5 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-2">
                            
                            {/* Ver Detalhes */}
                            <button
                              onClick={() => onViewDetails(budget)}
                              title="Visualizar Orçamento Técnico Completo"
                              className="p-2 rounded-xl bg-dark-800 hover:bg-dark-750 text-slate-300 hover:text-white border border-white/10 transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                            </button>

                            {/* Simular WhatsApp */}
                            <button
                              onClick={() => onSimulateChat(budget)}
                              title="Simular Recuperação no WhatsApp"
                              className="p-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 transition-colors"
                            >
                              <MessageCircle className="w-4 h-4" />
                            </button>

                            {/* Aprovar Orçamento */}
                            {budget.status !== 'Aprovado' && (
                              <button
                                onClick={() => handleApprove(budget.id, budget.clientName)}
                                title="Marcar como Aprovado (Resgatar Receita)"
                                className="px-2.5 py-2 rounded-xl bg-racing-orange hover:bg-racing-orange/90 text-white shadow-glow-orange-sm transition-all flex items-center gap-1 active:scale-95 text-xs font-bold"
                              >
                                <Check className="w-3.5 h-3.5" />
                                <span>Aprovar</span>
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
          <div className="px-8 py-5 bg-dark-850 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              Mostrando <strong className="text-white">{filteredBudgets.length}</strong> de <strong className="text-white">{budgets.length}</strong> ordens de serviço demonstrativas da John Auto Center.
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-300 font-mono">John Auto Center • Banco de Dados Sincronizado</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
