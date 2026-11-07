import React, { useState } from 'react';
import logoImg from '../assets/logo.png';
import { 
  MessageSquare, 
  Send, 
  Phone, 
  Video, 
  MoreVertical, 
  CheckCheck, 
  Clock, 
  Sliders, 
  ShieldCheck, 
  Sparkles, 
  UserCheck, 
  CornerDownRight, 
  Check, 
  Smile, 
  Paperclip,
  Wrench,
  AlertCircle,
  HelpCircle,
  PauseCircle,
  PlayCircle,
  Car,
  User,
  Shield,
  Zap,
  Tag
} from 'lucide-react';
import { WHATSAPP_FLOWS } from '../data/mockData';

export default function WhatsAppSimulator({ activeBudgetForChat }) {
  const [selectedFlowIndex, setSelectedFlowIndex] = useState(0);
  const [delayInterval, setDelayInterval] = useState('48h'); // 24h, 48h, 72h
  const [templateTone, setTemplateTone] = useState('cordial'); // cordial, seguranca, condicao
  const [pauseOnReply, setPauseOnReply] = useState(true);
  const [onlyBusinessHours, setOnlyBusinessHours] = useState(true);
  const [isForwardedToHuman, setIsForwardedToHuman] = useState(false);

  // Custom user interactive reply in chat
  const [interactiveMessages, setInteractiveMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const currentFlow = WHATSAPP_FLOWS[selectedFlowIndex];

  // Combined messages to display
  const allMessages = [...currentFlow.messages, ...interactiveMessages];

  const handleSendCustomMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = {
      sender: 'client',
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      text: text
    };

    setInteractiveMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Trigger simulated intelligent response after 1s
    setTimeout(() => {
      let botResponse = "";
      if (text.toLowerCase().includes('desconto') || text.toLowerCase().includes('parcel') || text.toLowerCase().includes('cart')) {
        botResponse = "Conseguimos parcelar em até 6x sem juros no cartão ou conceder 5% de desconto à vista via Pix! Posso reservar as peças no estoque para o seu veículo agora mesmo?";
      } else if (text.toLowerCase().includes('horario') || text.toLowerCase().includes('dia') || text.toLowerCase().includes('agend')) {
        botResponse = "Temos vagas disponíveis nesta quinta e sexta a partir das 08h30. Qual turno fica mais prático para você deixar o carro na John Auto Center?";
      } else {
        botResponse = "Com certeza! Registrei sua observação e estou encaminhando esta conversa agora mesmo para o nosso Consultor Técnico de plantão na oficina. Em instantes ele complementará os detalhes!";
        setIsForwardedToHuman(true);
      }

      setInteractiveMessages(prev => [
        ...prev,
        {
          sender: 'system',
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
          text: botResponse,
          badge: isForwardedToHuman ? "👨‍🔧 Consultor Conectado" : undefined
        }
      ]);
    }, 1000);
  };

  const handleQuickOption = (optionText) => {
    handleSendCustomMessage(optionText);
  };

  const handleResetChat = (index) => {
    setSelectedFlowIndex(index);
    setInteractiveMessages([]);
    setIsForwardedToHuman(false);
  };

  return (
    <section id="recuperacao-whatsapp" className="py-28 bg-dark-900 relative overflow-hidden border-t border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-racing-orange/10 rounded-full blur-[180px] pointer-events-none" />

      {/* 90% Wide Container */}
      <div className="w-[90%] max-w-[1850px] mx-auto relative z-10">
        
        {/* Section Header: Wide, Left-Aligned, Modern Auto Center */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
              <MessageSquare className="w-3.5 h-3.5" />
              Recuperação Automatizada & Humanizada
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Acompanhamento Inteligente via{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                WhatsApp Oficial
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl">
              Veja na prática como a plataforma aborda clientes que solicitaram orçamento com mensagens educadas, personalizadas e no momento certo, transformando orçamentos parados em serviços agendados no elevador.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto text-xs font-mono text-emerald-400 bg-dark-850 px-4 py-2 rounded-xl border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Simulador Conversacional Ativo</span>
          </div>
        </div>

        {/* Simulator Grid - 90% wide view */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: CRM Dossier & Rules Panel (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Scenarios / Flows Selector */}
            <div className="p-7 rounded-3xl bg-dark-850 border border-white/10 shadow-2xl space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-white text-lg flex items-center gap-2.5">
                  <Sliders className="w-5 h-5 text-racing-orange" />
                  Cenários Reais de Acompanhamento
                </h3>
                <span className="text-xs font-mono text-slate-300 bg-dark-800 px-3 py-1 rounded-full border border-white/5 font-bold">
                  Selecione o Caso
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {WHATSAPP_FLOWS.map((flow, idx) => (
                  <button
                    key={flow.id}
                    onClick={() => handleResetChat(idx)}
                    className={`text-left p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                      selectedFlowIndex === idx
                        ? 'bg-racing-orange/15 border-racing-orange shadow-glow-orange-sm text-white'
                        : 'bg-dark-900 border-white/5 hover:border-white/20 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-black text-white">
                        {flow.clientName}
                      </div>
                      <div className="text-[11px] text-racing-orange font-bold font-mono mt-0.5">
                        {flow.vehicle}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                        {flow.service}
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white font-bold">
                      <span>{flow.value}</span>
                      <CornerDownRight className={`w-3.5 h-3.5 ${selectedFlowIndex === idx ? 'text-racing-orange' : 'text-slate-600'}`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Automation Parameters & Engine Settings */}
            <div className="p-7 rounded-3xl bg-dark-850 border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-white text-lg flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  Parâmetros da Cadência Automática
                </h3>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 font-bold">
                  Inteligência Ativa
                </span>
              </div>

              {/* Interval Setting */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-2.5 uppercase tracking-wider">
                  Intervalo para 1º Acompanhamento:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: '24h', label: '24 Horas' },
                    { id: '48h', label: '48 Horas (Ideal)' },
                    { id: '72h', label: '72 Horas' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setDelayInterval(item.id)}
                      className={`py-3 px-3 rounded-2xl text-xs font-bold border text-center transition-all ${
                        delayInterval === item.id
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm'
                          : 'bg-dark-900 text-slate-400 border-white/5 hover:border-white/15'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Template Tone */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-2.5 uppercase tracking-wider">
                  Tom da Abordagem Pré-Aprovado:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'cordial', label: 'Cordial & Amigável' },
                    { id: 'seguranca', label: 'Foco em Segurança' },
                    { id: 'condicao', label: 'Parcelamento 6x' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setTemplateTone(item.id)}
                      className={`py-3 px-3 rounded-2xl text-xs font-bold border text-center transition-all ${
                        templateTone === item.id
                          ? 'bg-racing-orange/20 text-racing-orange border-racing-orange/40 shadow-sm'
                          : 'bg-dark-900 text-slate-400 border-white/5 hover:border-white/15'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="space-y-4 pt-2 border-t border-white/5">
                <div className="flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="text-white font-bold block text-sm">Interromper contatos ao receber resposta</span>
                    <span className="text-slate-400 text-xs">Pausa imediatamente a automação para que o atendente humano assuma</span>
                  </div>
                  <button
                    onClick={() => setPauseOnReply(!pauseOnReply)}
                    className={`w-12 h-6 rounded-full transition-colors relative shrink-0 ${
                      pauseOnReply ? 'bg-emerald-500' : 'bg-dark-700'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                      pauseOnReply ? 'left-7' : 'left-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="text-white font-bold block text-sm">Disparar apenas em horário comercial</span>
                    <span className="text-slate-400 text-xs">Das 08h às 18h (Segunda a Sábado) — sem mensagens invasivas</span>
                  </div>
                  <button
                    onClick={() => setOnlyBusinessHours(!onlyBusinessHours)}
                    className={`w-12 h-6 rounded-full transition-colors relative shrink-0 ${
                      onlyBusinessHours ? 'bg-emerald-500' : 'bg-dark-700'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                      onlyBusinessHours ? 'left-7' : 'left-1'
                    }`} />
                  </button>
                </div>
              </div>

              {/* Forward to Human Status */}
              <div className="p-4 rounded-2xl bg-dark-900 border border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Estado do Atendimento:</span>
                <span className={`font-bold flex items-center gap-2 ${
                  isForwardedToHuman ? 'text-emerald-400' : 'text-slate-300'
                }`}>
                  <UserCheck className="w-4 h-4" />
                  {isForwardedToHuman ? 'Consultor Técnico Conectado' : 'Automação Cordial Ativa'}
                </span>
              </div>
            </div>

            {/* Legal Notice */}
            <div className="p-4 rounded-2xl bg-dark-850/60 border border-white/5 text-xs text-slate-400 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Privacidade & Consentimento:</strong> A cadência é projetada conforme a LGPD e boas práticas comerciais, priorizando a segurança e a confiança que o motorista de Planaltina deposita na oficina.
              </span>
            </div>

          </div>

          {/* Right Column: Realistic Smartphone Mockup (6 cols) */}
          <div className="lg:col-span-6 flex justify-center">
            
            {/* Phone Bezel */}
            <div className="w-full max-w-lg rounded-[48px] bg-dark-950 p-4 sm:p-5 border-4 border-slate-700 shadow-2xl relative">
              
              {/* Phone Speaker Notch */}
              <div className="w-28 h-4.5 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-700 rounded-full" />
              </div>

              {/* WhatsApp Screen */}
              <div className="rounded-[36px] overflow-hidden bg-[#0B141A] border border-white/5 flex flex-col h-[650px]">
                
                {/* WhatsApp Header */}
                <div className="bg-[#202C33] px-5 py-3.5 flex items-center justify-between text-white shrink-0 shadow-md">
                  <div className="flex items-center gap-3.5">
                    <div className="relative">
                      <img 
                        src={logoImg} 
                        alt="John Auto Center" 
                        className="w-11 h-11 rounded-full object-cover bg-dark-950 p-0.5 shadow border border-white/10"
                      />
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#202C33]" />
                    </div>

                    <div>
                      <div className="font-bold text-sm flex items-center gap-1.5 text-white">
                        <span>John Auto Center</span>
                        <CheckCheck className="w-4 h-4 text-emerald-400" />
                      </div>
                      <p className="text-[11px] text-emerald-400 font-medium">
                        {isForwardedToHuman ? 'Consultor Técnico Digitando...' : 'Conta Comercial Oficial • Online'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 text-slate-300">
                    <Phone className="w-4 h-4 cursor-pointer hover:text-white" />
                    <Video className="w-4 h-4 cursor-pointer hover:text-white" />
                    <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white" />
                  </div>
                </div>

                {/* Chat Messages Area */}
                <div className="flex-1 p-5 overflow-y-auto space-y-3.5 bg-[#0B141A] text-xs">
                  
                  {/* Date Pill */}
                  <div className="text-center my-2">
                    <span className="bg-[#182229] text-slate-400 text-[10px] px-3.5 py-1.5 rounded-md shadow-sm font-mono">
                      Hoje • John Auto Center (Planaltina-DF)
                    </span>
                  </div>

                  {/* Bubble Loop */}
                  {allMessages.map((msg, index) => {
                    const isSystem = msg.sender === 'system';
                    return (
                      <div
                        key={index}
                        className={`flex flex-col ${isSystem ? 'items-start' : 'items-end'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl p-3.5 shadow-md relative ${
                            isSystem
                              ? 'bg-[#202C33] text-slate-100 rounded-tl-sm'
                              : 'bg-[#005C4B] text-white rounded-tr-sm'
                          }`}
                        >
                          <p className="leading-relaxed whitespace-pre-line text-xs sm:text-[13px]">
                            {msg.text}
                          </p>

                          {msg.badge && (
                            <div className="mt-2.5 pt-2 border-t border-white/10 text-[11px] font-bold text-emerald-300 flex items-center gap-1">
                              <span>{msg.badge}</span>
                            </div>
                          )}

                          <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-400 font-mono">
                            <span>{msg.time}</span>
                            {isSystem ? (
                              <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
                            ) : (
                              <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Quick Simulation Response Buttons */}
                <div className="p-2.5 bg-[#111B21] border-t border-white/5 flex flex-wrap gap-2 shrink-0">
                  <span className="text-[11px] text-slate-400 w-full pl-1 font-medium">
                    Simular resposta do motorista:
                  </span>
                  <button
                    onClick={() => handleQuickOption("Consegue fazer em 6x sem juros no cartão de crédito?")}
                    className="text-xs px-3 py-1.5 rounded-xl bg-[#202C33] hover:bg-emerald-600/30 text-emerald-300 border border-white/10 transition-colors font-medium"
                  >
                    💳 Parcelar em 6x?
                  </button>
                  <button
                    onClick={() => handleQuickOption("Perfeito! Pode agendar para quinta às 08h30.")}
                    className="text-xs px-3 py-1.5 rounded-xl bg-[#202C33] hover:bg-emerald-600/30 text-emerald-300 border border-white/10 transition-colors font-medium"
                  >
                    📅 Confirmar quinta 08h30
                  </button>
                  <button
                    onClick={() => handleQuickOption("Tenho uma dúvida sobre a marca das peças cotadas.")}
                    className="text-xs px-3 py-1.5 rounded-xl bg-[#202C33] hover:bg-racing-orange/30 text-racing-orange border border-white/10 transition-colors font-medium"
                  >
                    ❓ Dúvida sobre peças
                  </button>
                </div>

                {/* WhatsApp Chat Input Bar */}
                <div className="bg-[#202C33] p-2.5 flex items-center gap-2.5 shrink-0">
                  <Smile className="w-5 h-5 text-slate-400 ml-1 cursor-pointer hover:text-white" />
                  <Paperclip className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white" />
                  <input
                    type="text"
                    placeholder="Digite uma mensagem para testar a IA..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSendCustomMessage(inputText);
                    }}
                    className="flex-1 bg-[#2A3942] text-white placeholder-slate-400 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none"
                  />
                  <button
                    onClick={() => handleSendCustomMessage(inputText)}
                    className="w-9 h-9 rounded-full bg-[#00A884] hover:bg-[#008f6f] text-white flex items-center justify-center shrink-0 transition-colors shadow"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Phone Home Bar */}
              <div className="w-36 h-1 bg-slate-600 rounded-full mx-auto mt-2.5" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
