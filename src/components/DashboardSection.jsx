import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  DollarSign, 
  Calendar, 
  Filter, 
  ArrowUpRight, 
  Sparkles,
  PieChart as PieIcon,
  HelpCircle,
  FileSpreadsheet,
  AlertCircle,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import {
  Chart as ChartJS,
  registerables
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { DASHBOARD_STATS } from '../data/mockData';

// Register all Chart.js controllers, scales and plugins
ChartJS.register(...registerables);

export default function DashboardSection() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const stats = DASHBOARD_STATS[selectedPeriod] || DASHBOARD_STATS['30d'];

  // Bar / Line Chart Data: Evolution of Budgets vs Recovered
  const evolutionChartData = {
    labels: stats.chartLabels,
    datasets: [
      {
        type: 'bar',
        label: 'Orçamentos Emitidos',
        data: stats.budgetsCreated,
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        borderColor: 'rgba(255, 255, 255, 0.25)',
        borderWidth: 1,
        borderRadius: 8,
        barThickness: 28,
      },
      {
        type: 'line',
        label: 'Serviços Recuperados',
        data: stats.budgetsRecovered,
        borderColor: '#FF5500',
        backgroundColor: 'rgba(255, 85, 0, 0.22)',
        borderWidth: 3.5,
        pointBackgroundColor: '#FF5500',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.35,
        fill: true,
        yAxisID: 'y1',
      }
    ]
  };

  const evolutionChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#cbd5e1',
          font: { family: 'Plus Jakarta Sans', size: 12, weight: 600 },
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: '#161920',
        borderColor: 'rgba(255, 255, 255, 0.15)',
        borderWidth: 1,
        titleColor: '#ffffff',
        titleFont: { size: 13, weight: 700 },
        bodyColor: '#cbd5e1',
        padding: 14,
        cornerRadius: 10,
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 12 } }
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 12 } }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: { drawOnChartArea: false },
        ticks: { color: '#FF5500', font: { family: 'Plus Jakarta Sans', size: 12 } }
      }
    }
  };

  // Doughnut Chart Data: Distribution by service category
  const categoryChartData = {
    labels: stats.categories.labels,
    datasets: [
      {
        data: stats.categories.data,
        backgroundColor: [
          '#FF5500', // Racing Orange
          '#3B82F6', // Blue
          '#10B981', // Green
          '#F59E0B', // Amber
          '#8B5CF6', // Purple
          '#EC4899', // Pink
        ],
        borderWidth: 3,
        borderColor: '#13161c',
        hoverOffset: 6
      }
    ]
  };

  const categoryChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#cbd5e1',
          font: { family: 'Plus Jakarta Sans', size: 11, weight: 500 },
          boxWidth: 12,
          padding: 14,
        }
      },
      tooltip: {
        backgroundColor: '#161920',
        borderColor: 'rgba(255, 255, 255, 0.15)',
        borderWidth: 1,
        titleColor: '#ffffff',
        bodyColor: '#cbd5e1',
        padding: 12,
        cornerRadius: 10,
      }
    },
    cutout: '70%',
  };

  const formatBRL = (val) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  return (
    <section id="dashboard" className="py-28 bg-dark-900 relative overflow-hidden border-t border-b border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-racing-orange/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      {/* 90% Wide Container */}
      <div className="w-[92%] max-w-[1720px] mx-auto relative z-10">
        
        {/* Header and Period Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-racing-orange/10 border border-racing-orange/30 text-racing-orange text-xs font-bold tracking-wider uppercase">
              <BarChart3 className="w-3.5 h-3.5" />
              Cockpit Gerencial Automotivo • Tempo Real
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Dashboard{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange to-amber-400">
                Demonstrativo
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl">
              Visão consolidada de alta precisão sobre orçamentos emitidos, contatos realizados, engajamento e faturamento recuperado para a John Auto Center em Planaltina-DF.
            </p>
          </div>

          {/* Period Selector Buttons */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-dark-850 border border-white/10 self-start lg:self-auto shadow-xl">
            {[
              { id: '7d', label: 'Últimos 7 Dias' },
              { id: '30d', label: 'Últimos 30 Dias' },
              { id: '90d', label: 'Últimos 90 Dias' },
              { id: 'year', label: 'Ano Atual (2026)' },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPeriod(p.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedPeriod === p.id
                    ? 'bg-racing-orange text-white shadow-glow-orange-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Data Disclaimer Banner */}
        <div className="mb-10 p-4 rounded-2xl bg-dark-850 border border-amber-500/25 text-amber-300 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              <strong>Ambiente de Demonstração Comercial:</strong> Todos os números, orçamentos e gráficos abaixo são fictícios e ilustram o potencial de controle da ferramenta para apresentação à John Auto Center.
            </span>
          </div>
          <span className="font-mono text-xs bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/30 font-bold whitespace-nowrap">
            Filtro Ativo: {stats.periodLabel}
          </span>
        </div>

        {/* 6 Key Performance Indicator Cards (KPIs) - 90% wide view */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 mb-12">
          
          {/* Card 1: Orçamentos Registrados */}
          <div className="p-6 rounded-3xl bg-dark-850 border border-white/10 shadow-xl hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider">Orçamentos Totais</span>
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-display font-extrabold text-white">
                {stats.totalBudgets}
              </div>
              <div className="text-xs text-slate-400 font-mono mt-1.5 font-bold">
                {formatBRL(stats.totalBudgetValue)}
              </div>
            </div>
            <div className="mt-4 pt-3.5 border-t border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Registrados</span>
              <span className="text-blue-400 font-semibold font-mono">100% Rastreados</span>
            </div>
          </div>

          {/* Card 2: Orçamentos Pendentes */}
          <div className="p-6 rounded-3xl bg-dark-850 border border-white/10 shadow-xl hover:border-amber-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider">Pendentes</span>
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-display font-extrabold text-amber-400">
                {stats.pendingBudgets}
              </div>
              <div className="text-xs text-slate-400 font-mono mt-1.5 font-bold">
                {formatBRL(stats.pendingValue)}
              </div>
            </div>
            <div className="mt-4 pt-3.5 border-t border-white/5 text-[11px] text-amber-400/90 flex items-center justify-between">
              <span>Sem resposta ainda</span>
              <span className="font-semibold font-mono">Cadência Ativa</span>
            </div>
          </div>

          {/* Card 3: Clientes Contatados */}
          <div className="p-6 rounded-3xl bg-dark-850 border border-white/10 shadow-xl hover:border-sky-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider">Contatados</span>
                <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-display font-extrabold text-white">
                {stats.contactedClients}
              </div>
              <div className="text-xs text-slate-400 mt-1.5 font-medium">
                Follow-up WhatsApp
              </div>
            </div>
            <div className="mt-4 pt-3.5 border-t border-white/5 text-[11px] text-sky-400/90 flex items-center justify-between">
              <span>Janela de 48h</span>
              <span className="font-semibold font-mono">100% Cordial</span>
            </div>
          </div>

          {/* Card 4: Clientes Interessados */}
          <div className="p-6 rounded-3xl bg-dark-850 border border-white/10 shadow-xl hover:border-purple-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider">Interessados</span>
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-display font-extrabold text-purple-300">
                {stats.interestedClients}
              </div>
              <div className="text-xs text-slate-400 mt-1.5 font-medium">
                Respostas positivas
              </div>
            </div>
            <div className="mt-4 pt-3.5 border-t border-white/5 text-[11px] text-purple-400/90 flex items-center justify-between">
              <span>Em negociação</span>
              <span className="font-semibold font-mono">67% do contatado</span>
            </div>
          </div>

          {/* Card 5: Serviços Recuperados */}
          <div className="p-6 rounded-3xl bg-dark-850 border border-emerald-500/30 shadow-xl hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider">Recuperados</span>
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-display font-extrabold text-emerald-400">
                {stats.recoveredCount}
              </div>
              <div className="text-xs text-emerald-400 font-bold mt-1.5">
                Taxa de {stats.conversionRate}
              </div>
            </div>
            <div className="mt-4 pt-3.5 border-t border-white/5 text-[11px] text-emerald-400 flex items-center justify-between">
              <span>Ordens fechadas</span>
              <span className="font-semibold font-mono">Boxes Cheios</span>
            </div>
          </div>

          {/* Card 6: Valor Potencial Recuperado (Highlight) */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-racing-orange/25 to-dark-850 border border-racing-orange/50 shadow-glow-orange-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-3">
                <span className="text-xs font-black text-white uppercase tracking-wider">Receita Resgatada</span>
                <div className="w-8 h-8 rounded-xl bg-racing-orange/20 text-racing-orange flex items-center justify-center shadow">
                  <DollarSign className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-display font-black text-racing-orange font-mono">
                {formatBRL(stats.recoveredValue)}
              </div>
              <div className="text-xs text-slate-300 mt-1.5 font-medium">
                Faturamento salvo no período
              </div>
            </div>
            <div className="mt-4 pt-3.5 border-t border-white/10 text-[11px] font-bold text-emerald-400 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <ArrowUpRight className="w-3.5 h-3.5" />
                +31.8% vs período ant.
              </span>
              <span className="font-mono text-white">Caixa Real</span>
            </div>
          </div>

        </div>

        {/* Charts Grid - 90% wide view */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Chart: Evolution & Recovered (8 cols) */}
          <div className="lg:col-span-8 p-8 rounded-3xl bg-dark-850 border border-white/10 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <span>Evolução de Orçamentos vs. Recuperação</span>
                  <span className="text-xs px-2.5 py-1 rounded bg-racing-orange/15 text-racing-orange font-mono font-bold">
                    {stats.periodLabel}
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Comparação entre o volume de orçamentos emitidos e os serviços que fecharam após o acompanhamento automatizado.
                </p>
              </div>

              <div className="flex items-center gap-5 text-xs font-semibold">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-3.5 h-3.5 rounded bg-white/20" />
                  <span>Emitidos</span>
                </div>
                <div className="flex items-center gap-2 text-racing-orange">
                  <span className="w-3.5 h-3.5 rounded bg-racing-orange" />
                  <span>Recuperados</span>
                </div>
              </div>
            </div>

            <div className="h-80 w-full">
              <Bar data={evolutionChartData} options={evolutionChartOptions} />
            </div>
          </div>

          {/* Secondary Chart: Category Breakdown Donut (4 cols) */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-dark-850 border border-white/10 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">
                  Oportunidades por Categoria
                </h3>
                <PieIcon className="w-5 h-5 text-slate-400" />
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Distribuição dos orçamentos cadastrados de acordo com a especialidade mecânica na oficina.
              </p>
            </div>

            <div className="h-64 w-full relative">
              <Doughnut data={categoryChartData} options={categoryChartOptions} />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-6">
                <span className="text-3xl font-black text-white font-display">
                  {stats.conversionRate}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                  Conversão Média
                </span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Maior taxa de fechamento:</span>
              <span className="text-emerald-400 font-bold">Freios & Revisão 60k km</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
