import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import DashboardSection from './components/DashboardSection';
import BudgetManager from './components/BudgetManager';
import WhatsAppSimulator from './components/WhatsAppSimulator';
import RoiCalculator from './components/RoiCalculator';
import ReportsSection from './components/ReportsSection';
import BenefitsSection from './components/BenefitsSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import QuoteDetailModal from './components/QuoteDetailModal';
import NewQuoteModal from './components/NewQuoteModal';
import ContactModal from './components/ContactModal';
import { INITIAL_BUDGETS } from './data/mockData';
import { CheckCircle2, Bell, Sparkles } from 'lucide-react';

export default function App() {
  const [budgets, setBudgets] = useState(INITIAL_BUDGETS);
  const [selectedBudgetForModal, setSelectedBudgetForModal] = useState(null);
  const [isNewBudgetModalOpen, setIsNewBudgetModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Show temporary toast notification
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Approve Budget handler
  const handleApproveBudget = (budgetId) => {
    setBudgets(prev => prev.map(b => {
      if (b.id === budgetId) {
        showToast(`Orçamento ${b.id} (${b.clientName}) aprovado com sucesso! +R$ ${b.value.toFixed(2)} contabilizados.`);
        return {
          ...b,
          status: 'Aprovado',
          nextAction: 'Ordem de Serviço em Execução'
        };
      }
      return b;
    }));

    if (selectedBudgetForModal && selectedBudgetForModal.id === budgetId) {
      setSelectedBudgetForModal(prev => ({
        ...prev,
        status: 'Aprovado',
        nextAction: 'Ordem de Serviço em Execução'
      }));
    }
  };

  // Add new Budget handler
  const handleAddBudget = (newBudget) => {
    setBudgets(prev => [newBudget, ...prev]);
    showToast(`Novo orçamento ${newBudget.id} registrado para ${newBudget.clientName}!`);
  };

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSimulateChat = (budget) => {
    scrollToSection('#recuperacao-whatsapp');
    showToast(`Simulador de WhatsApp preparado para ${budget.clientName} (${budget.vehicle})!`);
  };

  return (
    <div className="bg-dark-950 text-slate-100 min-h-screen selection:bg-racing-orange selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-dark-900/95 border border-racing-orange text-white text-xs shadow-glow-orange backdrop-blur-md">
            <div className="w-7 h-7 rounded-lg bg-racing-orange/20 flex items-center justify-center text-racing-orange shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar onOpenDemoModal={() => setIsContactModalOpen(true)} />

      {/* Hero Section */}
      <Hero 
        onExploreClick={() => scrollToSection('#dashboard')}
        onLearnMoreClick={() => scrollToSection('#como-funciona')}
      />

      {/* The Problem / Opportunities */}
      <ProblemSection />

      {/* How it Works */}
      <HowItWorks />

      {/* Interactive Dashboard with Chart.js */}
      <DashboardSection />

      {/* Budget Management Interactive Table */}
      <BudgetManager 
        budgets={budgets}
        onViewDetails={(b) => setSelectedBudgetForModal(b)}
        onSimulateChat={handleSimulateChat}
        onApproveBudget={handleApproveBudget}
        onOpenNewBudgetModal={() => setIsNewBudgetModalOpen(true)}
      />

      {/* WhatsApp Recovery Simulator */}
      <WhatsAppSimulator />

      {/* ROI / Revenue Calculator */}
      <RoiCalculator onCtaClick={() => setIsContactModalOpen(true)} />

      {/* Reports & Intelligence */}
      <ReportsSection />

      {/* Benefits */}
      <BenefitsSection />

      {/* Final Call to Action */}
      <FinalCta onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Footer & Transparency */}
      <Footer />

      {/* Modals */}
      <QuoteDetailModal 
        budget={selectedBudgetForModal}
        onClose={() => setSelectedBudgetForModal(null)}
        onApprove={handleApproveBudget}
        onSimulateChat={handleSimulateChat}
      />

      <NewQuoteModal 
        isOpen={isNewBudgetModalOpen}
        onClose={() => setIsNewBudgetModalOpen(false)}
        onAddBudget={handleAddBudget}
      />

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
