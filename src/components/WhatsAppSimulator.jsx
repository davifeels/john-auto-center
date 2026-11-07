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
  PlayCircle
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

    // Trigger simulated intelligent response after 1.2s
    setTimeout(() => {
      let botResponse = "";
      if (text.toLowerCase().includes('desconto') || text.toLowerCase().includes('parcel')) {
        botResponse = "Conseguimos parcelar em até 6x sem juros no cartão ou conceder 5% de desconto à vista via Pix! Posso reservar as peças para o seu carro?";
      } else if (text.toLowerCase().includes('horario') || text.toLowerCase().includes('dia') || text.toLowerCase().includes('agend')) {
        botResponse = "Temos horários disponíveis nesta quinta e sexta a partir das 08h30. Qual turno fica melhor para você deixar o veículo na John Auto Center?";
      } else {
        botResponse = "Com certeza! Registrei sua observação e estou encaminhando esta conversa agora mesmo para o nosso Consultor Técnico de plantão na oficina. Em instantes ele complementará os detalhes técnicos!";
        setIsForwardedToHuman(true);
      }

      setInteractiveMessages(prev => [
        ...prev,
        {
          sender: 'system',
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
          text: botResponse,
          badge: isForwardedToHuman ? "👨‍🔧 Atendente Conectado" : undefined
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
    <section id="recuperacao-whatsapp" className="py-24 bg-dark-900 relative overflow-hidden border-t border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-racing-orange/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            Recuperação Automatizada & Humanizada
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Acompanhamento Inteligente via{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              WhatsApp
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Veja na prática como o sistema aborda clientes que solicitaram orçamento com mensagens educadas, personalizadas e no momento certo, transformando orçamentos parados em serviços agendados.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Rules & Configuration Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Scenarios / Flows Selector */}
            <div className="p-6 rounded-3xl bg-dark-850 border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-racing-orange" />
                  Cenários de Demonstração
                </h3>
                <span className="text-[10px] uppercase font-mono text-slate-400 bg-dark-800 px-2 py-0.5 rounded">
                  Selecione
                </span>
              </div>

              <div className="space-y-2">
                {WHATSAPP_FLOWS.map((flow, idx) => (
                  <button
                    key={flow.id}
                    onClick={() => handleResetChat(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      selectedFlowIndex === idx
                        ? 'bg-racing-orange/15 border-racing-orange shadow-glow-orange-sm text-white'
                        : 'bg-dark-900 border-white/5 hover:border-white/15 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-white">
                        {flow.clientName} • {flow.vehicle}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {flow.service} ({flow.value})
                      </div>
                    </div>
                    <CornerDownRight className={`w-4 h-4 ${selectedFlowIndex === idx ? 'text-racing-orange' : 'text-slate-600'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Automation Parameters & Engine Settings */}
            <div className="p-6 rounded-3xl bg-dark-850 border border-white/10 shadow-xl space-y-5">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                Configurações da Cadência
              </h3>

              {/* Interval Setting */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-2">
                  Intervalo para 1º Acompanhamento:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '24h', label: '24 Horas' },
                    { id: '48h', label: '48 Horas (Ideal)' },
                    { id: '72h', label: '72 Horas' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setDelayInterval(item.id)}
                      className={`py-2 px-2 rounded-xl text-xs font-medium border text-center transition-all ${
                        delayInterval === item.id
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold'
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
                <label className="text-xs font-semibold text-slate-300 block mb-2">
                  Modelo de Abordagem Pré-Aprovado:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'cordial', label: 'Cordial' },
                    { id: 'seguranca', label: 'Segurança' },
                    { id: 'condicao', label: 'Parcelamento' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setTemplateTone(item.id)}
                      className={`py-2 px-2 rounded-xl text-xs font-medium border text-center transition-all ${
                        templateTone === item.id
                          ? 'bg-racing-orange/20 text-racing-orange border-racing-orange/40 font-semibold'
                          : 'bg-dark-900 text-slate-400 border-white/5 hover:border-white/15'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="space-y-3 pt-2 border-t border-white/5">
                <div className="flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="text-white font-medium block">Interromper ao receber resposta</span>
                    <span className="text-[11px] text-slate-400">Pausa contatos automáticos para assumir o humano</span>
                  </div>
                  <button
                    onClick={() => setPauseOnReply(!pauseOnReply)}
                    className={`w-11 h-6 rounded-full transition-colors relative ${
                      pauseOnReply ? 'bg-emerald-500' : 'bg-dark-700'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                      pauseOnReply ? 'left-6' : 'left-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="text-white font-medium block">Apenas em horário comercial</span>
                    <span className="text-[11px] text-slate-400">Das 08h às 18h (Segunda a Sábado)</span>
                  </div>
                  <button
                    onClick={() => setOnlyBusinessHours(!onlyBusinessHours)}
                    className={`w-11 h-6 rounded-full transition-colors relative ${
                      onlyBusinessHours ? 'bg-emerald-500' : 'bg-dark-700'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                      onlyBusinessHours ? 'left-6' : 'left-1'
                    }`} />
                  </button>
                </div>
              </div>

              {/* Forward to Human Status */}
              <div className="p-3 rounded-xl bg-dark-900 border border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400">Encaminhamento Humano:</span>
                <span className={`font-semibold flex items-center gap-1.5 ${
                  isForwardedToHuman ? 'text-emerald-400' : 'text-slate-300'
                }`}>
                  <UserCheck className="w-4 h-4" />
                  {isForwardedToHuman ? 'Consultor John Conectado' : 'Modo Automático Ativo'}
                </span>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-4 rounded-2xl bg-dark-850/60 border border-white/5 text-[11px] text-slate-400 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Privacidade & Boas Práticas:</strong> O sistema respeita as diretrizes de consentimento do cliente e as políticas de comunicação comercial, sem mensagens invasivas ou insistentes.
              </span>
            </div>

          </div>

          {/* Right Column: Realistic Smartphone Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            
            {/* Phone Bezel */}
            <div className="w-full max-w-md rounded-[40px] bg-dark-950 p-3 sm:p-4 border-4 border-slate-700 shadow-2xl relative">
              
              {/* Phone Speaker Notch */}
              <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-10 h-1 bg-slate-700 rounded-full" />
              </div>

              {/* WhatsApp Screen */}
              <div className="rounded-[30px] overflow-hidden bg-[#0B141A] border border-white/5 flex flex-col h-[580px]">
                
                {/* WhatsApp Header */}
                <div className="bg-[#202C33] px-4 py-3 flex items-center justify-between text-white shrink-0 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img 
                        src={logoImg} 
                        alt="John Auto Center" 
                        className="w-10 h-10 rounded-full object-cover bg-dark-950 p-0.5 shadow border border-white/10"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#202C33]" />
                    </div>

                    <div>
                      <div className="font-semibold text-sm flex items-center gap-1.5 text-white">
                        <span>John Auto Center</span>
                        <CheckCheck className="w-4 h-4 text-emerald-400" />
                      </div>
                      <p className="text-[11px] text-emerald-400 font-medium">
                        {isForwardedToHuman ? 'Consultor Técnico Digitando...' : 'Conta Comercial Oficial • Online'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="w-4 h-4 cursor-pointer hover:text-white" />
                    <Video className="w-4 h-4 cursor-pointer hover:text-white" />
                    <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white" />
                  </div>
                </div>

                {/* Chat Messages Area */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0B141A] bg-opacity-95 text-xs">
                  
                  {/* Date Pill */}
                  <div className="text-center my-2">
                    <span className="bg-[#182229] text-slate-400 text-[10px] px-3 py-1 rounded-md shadow-sm">
                      Hoje • Planaltina-DF
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
                          className={`max-w-[85%] rounded-2xl p-3 shadow-md relative ${
                            isSystem
                              ? 'bg-[#202C33] text-slate-100 rounded-tl-sm'
                              : 'bg-[#005C4B] text-white rounded-tr-sm'
                          }`}
                        >
                          <p className="leading-relaxed whitespace-pre-line text-xs">
                            {msg.text}
                          </p>

                          {msg.badge && (
                            <div className="mt-2 pt-2 border-t border-white/10 text-[10px] font-semibold text-emerald-300 flex items-center gap-1">
                              <span>{msg.badge}</span>
                            </div>
                          )}

                          <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-400">
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
                <div className="p-2 bg-[#111B21] border-t border-white/5 flex flex-wrap gap-1.5 shrink-0">
                  <span className="text-[10px] text-slate-400 w-full pl-1">
                    Simular resposta do cliente:
                  </span>
                  <button
                    onClick={() => handleQuickOption("Consegue fazer em 6x sem juros no cartão?")}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-[#202C33] hover:bg-emerald-600/30 text-emerald-300 border border-white/10 transition-colors"
                  >
                    💳 Parcelar em 6x?
                  </button>
                  <button
                    onClick={() => handleQuickOption("Gostaria de agendar para esta quinta às 08h30!")}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-[#202C33] hover:bg-emerald-600/30 text-emerald-300 border border-white/10 transition-colors"
                  >
                    📅 Confirmar quinta 08h30
                  </button>
                  <button
                    onClick={() => handleQuickOption("Tenho uma dúvida sobre a marca da correia.")}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-[#202C33] hover:bg-racing-orange/30 text-racing-orange border border-white/10 transition-colors"
                  >
                    ❓ Falar com consultor
                  </button>
                </div>

                {/* WhatsApp Chat Input Bar */}
                <div className="bg-[#202C33] p-2 flex items-center gap-2 shrink-0">
                  <Smile className="w-5 h-5 text-slate-400 ml-1 cursor-pointer" />
                  <Paperclip className="w-5 h-5 text-slate-400 cursor-pointer" />
                  <input
                    type="text"
                    placeholder="Digite uma mensagem para testar..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSendCustomMessage(inputText);
                    }}
                    className="flex-1 bg-[#2A3942] text-white placeholder-slate-400 text-xs rounded-lg px-3 py-2 focus:outline-none"
                  />
                  <button
                    onClick={() => handleSendCustomMessage(inputText)}
                    className="w-8 h-8 rounded-full bg-[#00A884] hover:bg-[#008f6f] text-white flex items-center justify-center shrink-0 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Phone Home Bar */}
              <div className="w-32 h-1 bg-slate-600 rounded-full mx-auto mt-2" />
            </div>

          </div>

        </div>

        {/* Fictional simulation note */}
        <div className="mt-8 text-center text-xs text-slate-500">
          * A demonstração acima simula o comportamento da automação conversacional sem conexão direta com APIs em produção.
        </div>

      </div>
    </section>
  );
}
