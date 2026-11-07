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
  AlertCircle
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { DASHBOARD_STATS } from '../data/mockData';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

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
        barThickness: 20,
      },
      {
        type: 'line',
        label: 'Serviços Recuperados',
        data: stats.budgetsRecovered,
        borderColor: '#FF5500',
        backgroundColor: 'rgba(255, 85, 0, 0.2)',
        borderWidth: 3,
        pointBackgroundColor: '#FF5500',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 5,
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
          font: { family: 'Plus Jakarta Sans', size: 11 },
          usePointStyle: true,
          pointStyle: 'circle',
        }
      },
      tooltip: {
        backgroundColor: '#161920',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        titleColor: '#ffffff',
        bodyColor: '#cbd5e1',
        padding: 12,
        cornerRadius: 8,
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 11 } }
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 11 } }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: { drawOnChartArea: false },
        ticks: { color: '#FF5500', font: { family: 'Plus Jakarta Sans', size: 11 } }
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
        borderWidth: 2,
        borderColor: '#13161c',
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
          font: { family: 'Plus Jakarta Sans', size: 10 },
          boxWidth: 10,
          padding: 12,
        }
      },
      tooltip: {
        backgroundColor: '#161920',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        titleColor: '#ffffff',
        bodyColor: '#cbd5e1',
        padding: 10,
        cornerRadius: 8,
      }
    },
    cutout: '68%',
  };

  // Format currency helper
  const formatBRL = (val) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  return (
    <section id="dashboard" className="py-24 bg-dark-900 relative overflow-hidden border-t border-b border-white/5">
      {/* Background Atmosphere */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-racing-orange/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header and Period Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-racing-orange/10 border border-racing-orange/30 text-racing-orange text-xs font-semibold tracking-wider uppercase">
              <BarChart3 className="w-3.5 h-3.5" />
              Cockpit Gerencial Automotivo
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Dashboard{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-orange to-amber-400">
                Demonstrativo
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
              Visão consolidada em tempo real sobre orçamentos emitidos, contatos realizados, engajamento e faturamento recuperado para a John Auto Center.
            </p>
          </div>

          {/* Period Selector Buttons */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-dark-850 border border-white/10 self-start md:self-auto shadow-inner">
            {[
              { id: '7d', label: '7 Dias' },
              { id: '30d', label: '30 Dias' },
              { id: '90d', label: '90 Dias' },
              { id: 'year', label: 'Ano 2026' },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPeriod(p.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
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
        <div className="mb-8 p-3.5 rounded-xl bg-dark-850 border border-amber-500/20 text-amber-300 text-xs flex items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Ambiente de Demonstração Comercial:</strong> Todos os números, orçamentos e métricas abaixo são fictícios e ilustram o potencial de controle da ferramenta.
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
            Período: {stats.periodLabel}
          </span>
        </div>

        {/* 6 Key Performance Indicator Cards (KPIs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-10">
          
          {/* Card 1: Orçamentos Registrados */}
          <div className="p-5 rounded-2xl bg-dark-850 border border-white/10 shadow-lg hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-medium">Orçamentos Totais</span>
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-display font-extrabold text-white">
                {stats.totalBudgets}
              </div>
              <div className="text-xs text-slate-400 font-mono mt-1">
                {formatBRL(stats.totalBudgetValue)}
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-slate-400">
              Registrados no balcão
            </div>
          </div>

          {/* Card 2: Orçamentos Pendentes */}
          <div className="p-5 rounded-2xl bg-dark-850 border border-white/10 shadow-lg hover:border-amber-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-medium">Pendentes</span>
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-display font-extrabold text-amber-400">
                {stats.pendingBudgets}
              </div>
              <div className="text-xs text-slate-400 font-mono mt-1">
                {formatBRL(stats.pendingValue)}
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-amber-400/80">
              Sob monitoramento ativo
            </div>
          </div>

          {/* Card 3: Clientes Contatados */}
          <div className="p-5 rounded-2xl bg-dark-850 border border-white/10 shadow-lg hover:border-blue-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-medium">Contatados</span>
                <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-display font-extrabold text-white">
                {stats.contactedClients}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Follow-up WhatsApp
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-sky-400/80">
              Cadência respeitosa
            </div>
          </div>

          {/* Card 4: Clientes Interessados */}
          <div className="p-5 rounded-2xl bg-dark-850 border border-white/10 shadow-lg hover:border-purple-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-medium">Interessados</span>
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-display font-extrabold text-purple-300">
                {stats.interestedClients}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Respostas positivas
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-purple-400/80">
              Em negociação ativa
            </div>
          </div>

          {/* Card 5: Serviços Recuperados */}
          <div className="p-5 rounded-2xl bg-dark-850 border border-emerald-500/30 shadow-lg hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-medium">Recuperados</span>
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-display font-extrabold text-emerald-400">
                {stats.recoveredCount}
              </div>
              <div className="text-xs text-emerald-400/90 font-medium mt-1">
                Taxa de {stats.conversionRate}
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-emerald-400">
              Ordens de serviço salvas
            </div>
          </div>

          {/* Card 6: Valor Potencial Recuperado (Highlight) */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-racing-orange/20 to-dark-850 border border-racing-orange/40 shadow-glow-orange-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-bold text-white">Receita Recuperada</span>
                <div className="w-7 h-7 rounded-lg bg-racing-orange/20 text-racing-orange flex items-center justify-center">
                  <DollarSign className="w-4 h-4" />
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-display font-extrabold text-racing-orange">
                {formatBRL(stats.recoveredValue)}
              </div>
              <div className="text-[11px] text-slate-300 mt-1">
                Faturamento resgatado
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10 text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
              <ArrowUpRight className="w-3.5 h-3.5" />
              Retorno direto na oficina
            </div>
          </div>

        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Chart: Evolution & Recovered */}
          <div className="lg:col-span-8 p-6 rounded-3xl bg-dark-850 border border-white/10 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Evolução de Orçamentos vs. Recuperação</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-racing-orange/15 text-racing-orange font-mono">
                    {stats.periodLabel}
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Comparação entre o volume total emitido e os serviços que fecharam após o acompanhamento.
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-3 h-3 rounded bg-white/20" />
                  <span>Emitidos</span>
                </div>
                <div className="flex items-center gap-1.5 text-racing-orange">
                  <span className="w-3 h-3 rounded bg-racing-orange" />
                  <span>Recuperados</span>
                </div>
              </div>
            </div>

            <div className="h-72 w-full">
              <Bar data={evolutionChartData} options={evolutionChartOptions} />
            </div>
          </div>

          {/* Secondary Chart: Category Breakdown Donut */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-dark-850 border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">
                  Oportunidades por Serviço
                </h3>
                <PieIcon className="w-5 h-5 text-slate-400" />
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Distribuição dos orçamentos cadastrados de acordo com a especialidade mecânica.
              </p>
            </div>

            <div className="h-60 w-full relative">
              <Doughnut data={categoryChartData} options={categoryChartOptions} />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-6">
                <span className="text-2xl font-extrabold text-white font-display">
                  {stats.conversionRate}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                  Conversão Média
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Maior volume:</span>
              <span className="text-white font-semibold">Revisão Preventiva & Freios</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
