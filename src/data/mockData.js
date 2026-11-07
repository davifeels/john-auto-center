// Dados de demonstração para a John Auto Center - Planaltina-DF
// Todos os dados abaixo são fictícios e criados estritamente para apresentação conceitual.

export const INITIAL_BUDGETS = [
  {
    id: "ORC-1048",
    clientName: "Marcos Vinícius Silva",
    phone: "(61) 98421-4412",
    vehicle: "Toyota Corolla 2.0 XEi",
    plate: "JAC-3F88",
    year: "2021",
    mileage: "62.400 km",
    service: "Revisão 60k km + Troca de Correia e Velas Iridium",
    category: "Revisão Preventiva",
    value: 2380.00,
    laborValue: 750.00,
    partsValue: 1630.00,
    createdAt: "2026-11-04",
    status: "Em Acompanhamento", // "Aguardando Aprovação", "Em Acompanhamento", "Cliente Interessado", "Aprovado", "Não Aprovado"
    lastFollowUp: "2026-11-06 (Há 1 dia)",
    followUpStep: 2,
    nextAction: "Follow-up WhatsApp 48h (Condição Especial)",
    notes: "Cliente relatou leve oscilação na marcha lenta. Orçamento enviado por PDF. Aguardando aprovação das peças originais Denso/Toyota.",
    items: [
      { name: "Jogo de Velas Iridium Denso Original", qty: 4, unitPrice: 195.00, total: 780.00 },
      { name: "Correia de Acessórios Contitech", qty: 1, unitPrice: 240.00, total: 240.00 },
      { name: "Tensor Automático da Correia", qty: 1, unitPrice: 380.00, total: 380.00 },
      { name: "Filtro de Ar do Motor & Cabine", qty: 2, unitPrice: 115.00, total: 230.00 },
      { name: "Mão de Obra Especializada Toyota", qty: 1, unitPrice: 750.00, total: 750.00 },
    ],
    timeline: [
      { date: "04/11 - 10:15", title: "Orçamento Criado", desc: "Veículo recepcionado para inspeção de 60.000km." },
      { date: "04/11 - 14:30", title: "Orçamento Enviado", desc: "PDF enviado ao cliente via WhatsApp." },
      { date: "06/11 - 09:00", title: "1º Lembrete Automático", desc: "Mensagem cordial de checagem disparada com sucesso." },
    ]
  },
  {
    id: "ORC-1049",
    clientName: "Renata Oliveira Alencar",
    phone: "(61) 99182-7744",
    vehicle: "Jeep Compass Longitude 1.3 Turbo",
    plate: "PLN-9D12",
    year: "2022",
    mileage: "48.200 km",
    service: "Substituição Pastilhas e Discos Dianteiros + Fluido DOT4",
    category: "Freios",
    value: 1850.00,
    laborValue: 480.00,
    partsValue: 1370.00,
    createdAt: "2026-11-05",
    status: "Cliente Interessado",
    lastFollowUp: "2026-11-06 (Hoje cedo)",
    followUpStep: 1,
    nextAction: "Confirmar agendamento do box 02",
    notes: "Cliente respondeu ao WhatsApp querendo saber se é possível parcelar em 6x sem juros no cartão.",
    items: [
      { name: "Par de Discos Dianteiros Ventilados Fremax", qty: 2, unitPrice: 420.00, total: 840.00 },
      { name: "Jogo de Pastilhas Dianteiras Cerâmica Bosch", qty: 1, unitPrice: 410.00, total: 410.00 },
      { name: "Fluido de Freio Motul DOT 5.1", qty: 2, unitPrice: 60.00, total: 120.00 },
      { name: "Serviço de Sangria e Troca Completa", qty: 1, unitPrice: 480.00, total: 480.00 },
    ],
    timeline: [
      { date: "05/11 - 11:20", title: "Orçamento Gerado", desc: "Diagnóstico acusou desgaste crítico na pastilha interna." },
      { date: "05/11 - 15:45", title: "Contato Inicial", desc: "Orçamento transmitido via sistema." },
      { date: "06/11 - 08:30", title: "Resposta do Cliente", desc: "Cliente perguntou opções de parcelamento." },
    ]
  },
  {
    id: "ORC-1050",
    clientName: "Carlos Eduardo Mendes",
    phone: "(61) 98112-9023",
    vehicle: "Honda Civic G10 2.0 Flex",
    plate: "BSB-4A77",
    year: "2020",
    mileage: "78.900 km",
    service: "Troca Total de Óleo do Câmbio CVT por Diálise",
    category: "Câmbio Automático",
    value: 1980.00,
    laborValue: 500.00,
    partsValue: 1480.00,
    createdAt: "2026-11-01",
    status: "Aprovado",
    lastFollowUp: "2026-11-03 (Recuperado)",
    followUpStep: 3,
    nextAction: "Serviço Concluído / Entrega do Carro",
    notes: "Orçamento estava parado há 48h. Recuperado após envio de vídeo explicativo da máquina de diálise.",
    items: [
      { name: "Óleo Fluido Câmbio Honda HCF-2 Original", qty: 8, unitPrice: 145.00, total: 1160.00 },
      { name: "Filtro de Câmbio Interno & Trocador", qty: 1, unitPrice: 320.00, total: 320.00 },
      { name: "Mão de Obra com Máquina de Diálise", qty: 1, unitPrice: 500.00, total: 500.00 },
    ],
    timeline: [
      { date: "01/11 - 09:30", title: "Orçamento Criado", desc: "Cliente solicitou cotação preventiva." },
      { date: "02/11 - 14:00", title: "Lembrete Automático", desc: "Mensagem educativa sobre preservação do CVT." },
      { date: "03/11 - 10:15", title: "Aprovado pelo Cliente", desc: "Cliente confirmou agendamento após esclarecimento." },
    ]
  },
  {
    id: "ORC-1051",
    clientName: "Dra. Juliana Guimarães",
    phone: "(61) 98765-1100",
    vehicle: "Volkswagen T-Cross 1.4 TSI Highline",
    plate: "BRA-8K50",
    year: "2023",
    mileage: "35.000 km",
    service: "Higienização Ar-Condicionado + Troca Filtro de Carvão + Ozonização",
    category: "Ar-Condicionado",
    value: 680.00,
    laborValue: 280.00,
    partsValue: 400.00,
    createdAt: "2026-11-06",
    status: "Aguardando Aprovação",
    lastFollowUp: "Hoje às 11:15",
    followUpStep: 0,
    nextAction: "Aguardar 24h para 1º follow-up automático",
    notes: "Cliente reclamou de odor de umidade no ar. Aguardando aprovação.",
    items: [
      { name: "Filtro de Cabine Antipólen Carvão Ativado", qty: 1, unitPrice: 160.00, total: 160.00 },
      { name: "Higienizante Bactericida Profissional Wurth", qty: 1, unitPrice: 120.00, total: 120.00 },
      { name: "Carga de Gás Ecológico R134a", qty: 1, unitPrice: 120.00, total: 120.00 },
      { name: "Serviço de Ozonização e Limpeza dos Dutos", qty: 1, unitPrice: 280.00, total: 280.00 },
    ],
    timeline: [
      { date: "06/11 - 11:15", title: "Orçamento Registrado", desc: "Recepcionista emitiu checklist." }
    ]
  },
  {
    id: "ORC-1052",
    clientName: "Fabiano Pires Rodrigues",
    phone: "(61) 99344-8899",
    vehicle: "Toyota Hilux SRX 2.8 Diesel 4x4",
    plate: "PLN-5C34",
    year: "2021",
    mileage: "115.000 km",
    service: "Revisão de Suspensão: 4 Amortecedores + Buchas e Bieletas",
    category: "Suspensão",
    value: 5450.00,
    laborValue: 1200.00,
    partsValue: 4250.00,
    createdAt: "2026-11-02",
    status: "Em Acompanhamento",
    lastFollowUp: "2026-11-05 (Há 2 dias)",
    followUpStep: 2,
    nextAction: "Oferecer parcelamento em 10x ou agendamento prioritário",
    notes: "Valor elevado devido aos amortecedores originais pressurizados. Oportunidade crítica de fechamento.",
    items: [
      { name: "Par de Amortecedores Dianteiros Monroe OESpectrum", qty: 2, unitPrice: 1250.00, total: 2500.00 },
      { name: "Par de Amortecedores Traseiros Monroe Heavy Duty", qty: 2, unitPrice: 650.00, total: 1300.00 },
      { name: "Kit Batentes e Coifas Axios", qty: 2, unitPrice: 225.00, total: 450.00 },
      { name: "Geometria 3D + Alinhamento Técnico de Eixos", qty: 1, unitPrice: 350.00, total: 350.00 },
      { name: "Mão de Obra Especializada Pick-up", qty: 1, unitPrice: 850.00, total: 850.00 },
    ],
    timeline: [
      { date: "02/11 - 16:00", title: "Orçamento Criado", desc: "Cliente faz viagens frequentes na região de Planaltina." },
      { date: "03/11 - 11:00", title: "1º Contato WhatsApp", desc: "Envio de cotação com opções de peças." },
      { date: "05/11 - 16:30", title: "2º Contato Realizado", desc: "Consulta sobre disponibilidade para fim de semana." }
    ]
  },
  {
    id: "ORC-1053",
    clientName: "Patrícia Fernandes da Silva",
    phone: "(61) 98231-5566",
    vehicle: "Hyundai HB20 1.0 TGDI Evolution",
    plate: "RCO-2E44",
    year: "2022",
    mileage: "42.000 km",
    service: "Troca de Óleo 5W30 Sintético + Todos os Filtros + Checkup",
    category: "Revisão Preventiva",
    value: 590.00,
    laborValue: 150.00,
    partsValue: 440.00,
    createdAt: "2026-11-03",
    status: "Aprovado",
    lastFollowUp: "2026-11-04 (Recuperado)",
    followUpStep: 1,
    nextAction: "Ordem de Serviço em Execução",
    notes: "Cliente estava indecisa entre concessionária e oficina independente. Fechou após mensagem sobre agilidade e óleo homologado.",
    items: [
      { name: "Óleo 5W30 Shell Helix Ultra Sintético", qty: 4, unitPrice: 65.00, total: 260.00 },
      { name: "Filtro de Óleo Mann", qty: 1, unitPrice: 55.00, total: 55.00 },
      { name: "Filtro de Combustível", qty: 1, unitPrice: 45.00, total: 45.00 },
      { name: "Filtro de Ar do Motor", qty: 1, unitPrice: 80.00, total: 80.00 },
      { name: "Checklist de 30 Pontos + Mão de Obra", qty: 1, unitPrice: 150.00, total: 150.00 },
    ],
    timeline: [
      { date: "03/11 - 08:30", title: "Orçamento Solicitado", desc: "Cotação via balcão." },
      { date: "04/11 - 09:15", title: "Disparo Automático", desc: "Mensagem destacando garantia de 1 ano nas peças." },
      { date: "04/11 - 11:40", title: "Aprovação Registrada", desc: "Cliente agendou para a manhã seguinte." }
    ]
  },
  {
    id: "ORC-1054",
    clientName: "Rodrigo Antunes Costa",
    phone: "(61) 99654-3321",
    vehicle: "Chevrolet Tracker Premier 1.2 Turbo",
    plate: "JHN-7B91",
    year: "2021",
    mileage: "58.000 km",
    service: "Descarbonização de Válvulas + Limpeza de Bicos de Injeção Direta",
    category: "Motor & Injeção",
    value: 1720.00,
    laborValue: 700.00,
    partsValue: 1020.00,
    createdAt: "2026-10-30",
    status: "Não Aprovado",
    lastFollowUp: "2026-11-04 (Arquivado)",
    followUpStep: 3,
    nextAction: "Cadastrar para recall de campanha em 60 dias",
    notes: "Cliente optou por adiar o serviço por questões financeiras temporárias. Reengajar no início do próximo mês.",
    items: [
      { name: "Kit de Juntas do Coletor de Admissão Sabó", qty: 1, unitPrice: 220.00, total: 220.00 },
      { name: "Produtos Químicos Descarbonizantes Wurth", qty: 3, unitPrice: 120.00, total: 360.00 },
      { name: "Reparos dos Bicos Injetores GDI", qty: 3, unitPrice: 146.66, total: 440.00 },
      { name: "Mão de Obra Descarbonização Manual", qty: 1, unitPrice: 700.00, total: 700.00 },
    ],
    timeline: [
      { date: "30/10 - 14:00", title: "Orçamento Criado", desc: "Sintoma: Falha em aceleração forte." },
      { date: "02/11 - 10:00", title: "1º Lembrete", desc: "Contato via WhatsApp." },
      { date: "04/11 - 15:00", title: "Retorno do Cliente", desc: "Cliente informou adiamento para dezembro." }
    ]
  },
  {
    id: "ORC-1055",
    clientName: "Luciana Vasconcelos",
    phone: "(61) 98555-7788",
    vehicle: "Fiat Toro Volcano 2.0 Turbo Diesel",
    plate: "PLN-1A19",
    year: "2020",
    mileage: "89.000 km",
    service: "Troca Kit Correia Dentada + Bomba d'Água + Válvula Termostática",
    category: "Motor & Injeção",
    value: 3290.00,
    laborValue: 950.00,
    partsValue: 2340.00,
    createdAt: "2026-11-05",
    status: "Cliente Interessado",
    lastFollowUp: "2026-11-06 (Há 3 horas)",
    followUpStep: 1,
    nextAction: "Enviar opções de parcelamento 10x sem juros",
    notes: "Serviço preventivo vital para motor diesel multijet. Cliente teme quebra da correia e quer fechar esta semana.",
    items: [
      { name: "Kit Correia Dentada e Tensores Gates Original", qty: 1, unitPrice: 1150.00, total: 1150.00 },
      { name: "Bomba d'Água Urba Original", qty: 1, unitPrice: 480.00, total: 480.00 },
      { name: "Válvula Termostática com Carcaça", qty: 1, unitPrice: 430.00, total: 430.00 },
      { name: "Aditivo Orgânico de Radiador Tirreno", qty: 4, unitPrice: 70.00, total: 280.00 },
      { name: "Mão de Obra Especializada Motor Diesel", qty: 1, unitPrice: 950.00, total: 950.00 },
    ],
    timeline: [
      { date: "05/11 - 10:00", title: "Orçamento Gerado", desc: "Quilometragem próxima do limite seguro de troca." },
      { date: "06/11 - 09:30", title: "Disparo WhatsApp", desc: "Envio de alerta técnico sobre risco de ruptura." },
      { date: "06/11 - 10:15", title: "Cliente Respondeu", desc: "Pediu simulação de cartão em 10 parcelas." }
    ]
  }
];

// Dados dos gráficos por período (Últimos 7 dias, 30 dias, 90 dias, Este ano)
export const DASHBOARD_STATS = {
  "30d": {
    periodLabel: "Últimos 30 Dias",
    totalBudgets: 142,
    totalBudgetValue: 214300,
    pendingBudgets: 28,
    pendingValue: 48200,
    contactedClients: 46,
    interestedClients: 31,
    recoveredCount: 23,
    recoveredValue: 38650,
    conversionRate: "29.4%",
    avgResponseTime: "4.2h",
    chartLabels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
    budgetsCreated: [32, 38, 34, 38],
    budgetsRecovered: [4, 6, 6, 7],
    recoveredValues: [6800, 10200, 9900, 11750],
    categories: {
      labels: ["Revisão Preventiva", "Freios e Segurança", "Suspensão", "Câmbio Automático", "Motor & Injeção", "Ar-Condicionado"],
      data: [35, 25, 18, 12, 16, 8]
    }
  },
  "7d": {
    periodLabel: "Últimos 7 Dias",
    totalBudgets: 36,
    totalBudgetValue: 54800,
    pendingBudgets: 8,
    pendingValue: 14100,
    contactedClients: 14,
    interestedClients: 9,
    recoveredCount: 7,
    recoveredValue: 11750,
    conversionRate: "31.8%",
    avgResponseTime: "3.5h",
    chartLabels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Hoje"],
    budgetsCreated: [6, 7, 5, 6, 8, 3, 1],
    budgetsRecovered: [1, 2, 1, 1, 2, 0, 0],
    recoveredValues: [1850, 3200, 1980, 1480, 3240, 0, 0],
    categories: {
      labels: ["Revisão Preventiva", "Freios e Segurança", "Suspensão", "Câmbio Automático", "Motor & Injeção", "Ar-Condicionado"],
      data: [10, 8, 5, 4, 6, 3]
    }
  },
  "90d": {
    periodLabel: "Últimos 90 Dias",
    totalBudgets: 418,
    totalBudgetValue: 628900,
    pendingBudgets: 35,
    pendingValue: 59400,
    contactedClients: 138,
    interestedClients: 94,
    recoveredCount: 68,
    recoveredValue: 114200,
    conversionRate: "28.1%",
    avgResponseTime: "4.8h",
    chartLabels: ["Setembro", "Outubro", "Novembro"],
    budgetsCreated: [136, 140, 142],
    budgetsRecovered: [21, 24, 23],
    recoveredValues: [35200, 40350, 38650],
    categories: {
      labels: ["Revisão Preventiva", "Freios e Segurança", "Suspensão", "Câmbio Automático", "Motor & Injeção", "Ar-Condicionado"],
      data: [110, 80, 58, 42, 54, 28]
    }
  },
  "year": {
    periodLabel: "Ano Atual (2026)",
    totalBudgets: 1640,
    totalBudgetValue: 2460000,
    pendingBudgets: 42,
    pendingValue: 71200,
    contactedClients: 540,
    interestedClients: 382,
    recoveredCount: 274,
    recoveredValue: 462800,
    conversionRate: "28.9%",
    avgResponseTime: "4.4h",
    chartLabels: ["Jan-Fev", "Mar-Abr", "Mai-Jun", "Jul-Ago", "Set-Out", "Nov-Dez"],
    budgetsCreated: [260, 280, 275, 290, 285, 250],
    budgetsRecovered: [42, 48, 46, 50, 49, 39],
    recoveredValues: [68500, 81200, 78400, 84300, 82900, 67500],
    categories: {
      labels: ["Revisão Preventiva", "Freios e Segurança", "Suspensão", "Câmbio Automático", "Motor & Injeção", "Ar-Condicionado"],
      data: [420, 320, 230, 160, 220, 110]
    }
  }
};

// Exemplos de fluxos e mensagens simuladas de WhatsApp
export const WHATSAPP_FLOWS = [
  {
    id: "freios",
    clientName: "Renata Oliveira",
    vehicle: "Jeep Compass Longitude",
    service: "Substituição de Pastilhas e Discos de Freio",
    value: "R$ 1.850,00",
    messages: [
      {
        sender: "system",
        time: "10:14",
        text: "Olá, Renata! Tudo bem? Aqui é da John Auto Center de Planaltina. Passando para checar se você conseguiu avaliar o orçamento das pastilhas e discos do seu Compass.",
      },
      {
        sender: "system",
        time: "10:14",
        text: "Como as pastilhas dianteiras já estão na espessura de segurança mínima, preparamos uma condição especial em até 6x sem juros no cartão ou 5% à vista para você garantir a segurança da sua família neste fim de semana.",
      },
      {
        sender: "client",
        time: "10:32",
        text: "Oi! Estava justamente olhando isso. Vocês conseguem fazer em 6x no cartão de crédito sem juros mesmo?",
      },
      {
        sender: "system",
        time: "10:33",
        text: "Com certeza, Renata! Ficam 6 parcelas de R$ 308,33. Já temos as peças originais em nosso estoque e podemos reservar o Box 2 para você nesta quinta-feira às 08h30. Podemos confirmar o agendamento?",
      },
      {
        sender: "client",
        time: "10:36",
        text: "Perfeito! Pode agendar para quinta às 08h30 sim. Muito obrigada pela atenção!",
      },
      {
        sender: "system",
        time: "10:37",
        text: "Excelente! Agendamento confirmado para quinta às 08h30. Já geramos sua ordem de serviço prévia. Esperamos por você aqui na John Auto Center!",
        badge: "✅ Orçamento Convertido com Sucesso"
      }
    ]
  },
  {
    id: "revisao",
    clientName: "Marcos Vinícius",
    vehicle: "Toyota Corolla 2.0",
    service: "Revisão 60.000 km Completa",
    value: "R$ 2.380,00",
    messages: [
      {
        sender: "system",
        time: "09:02",
        text: "Olá Marcos, bom dia! Aqui é o consultor técnico da John Auto Center em Planaltina. Espero que esteja tudo bem com você e com a família.",
      },
      {
        sender: "system",
        time: "09:02",
        text: "Gostaria de saber se ficou alguma dúvida sobre a proposta técnica de revisão dos 60.000km do seu Corolla 2.0. As velas Iridium e a correia que cotamos são originais com garantia de 1 ano.",
      },
      {
        sender: "client",
        time: "09:45",
        text: "Bom dia! Ficou bem claro sim. Vocês teriam carro reserva ou levam e trazem o cliente em Planaltina?",
      },
      {
        sender: "system",
        time: "09:47",
        text: "Temos sim! Oferecemos o serviço de Leva & Traz gratuito para clientes de Planaltina e região, ou você pode deixar o carro e nós providenciamos um Uber para o seu trabalho.",
      },
      {
        sender: "client",
        time: "10:05",
        text: "Que bacana, isso me ajuda muito. Vou querer fechar sim. Pode me colocar na sexta de manhã?",
      },
      {
        sender: "system",
        time: "10:06",
        text: "Show de bola, Marcos! Já reservamos a sua vaga para sexta às 08h com o serviço de Leva & Traz ativado. Te esperamos!",
        badge: "✅ Orçamento Convertido com Sucesso"
      }
    ]
  },
  {
    id: "cambio",
    clientName: "Carlos Eduardo",
    vehicle: "Honda Civic G10 CVT",
    service: "Troca de Óleo Câmbio CVT por Diálise",
    value: "R$ 1.980,00",
    messages: [
      {
        sender: "system",
        time: "14:10",
        text: "Olá Carlos! Aqui é da John Auto Center. Notamos que você cotou a troca de óleo do câmbio CVT do Civic. Como esse procedimento exige equipamento especial, gravamos um vídeo rápido de 40s mostrando como funciona a nossa máquina de diálise computadorizada que substitui 100% do óleo velho.",
      },
      {
        sender: "client",
        time: "14:38",
        text: "Vi o vídeo aqui, muito interessante. Em outra oficina falaram que trocavam só por gravidade, mas vi que fica quase metade do óleo velho dentro.",
      },
      {
        sender: "system",
        time: "14:40",
        text: "Exatamente! Por gravidade sai apenas cerca de 45% do fluido. Aqui na John Auto Center trocamos 100% com o fluido original Honda HCF-2 e emitimos certificado de conformidade da transmissão.",
      },
      {
        sender: "client",
        time: "15:02",
        text: "Muito mais seguro. Vou fazer com vocês com certeza. Podem agendar para o próximo sábado cedo?",
      },
      {
        sender: "system",
        time: "15:04",
        text: "Sábado às 08h confirmado! Sua vaga está reservada na bancada especializada de transmissões. Até breve!",
        badge: "✅ Orçamento Convertido com Sucesso"
      }
    ]
  }
];

// Imagens automotivas profissionais curadas do Unsplash
export const AUTOMOTIVE_IMAGES = {
  hero: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1600&q=80", // Modern workshop hoist
  engineDiagnosis: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1000&q=80", // Mechanic inspecting engine
  brakesTires: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80", // Brake & wheel
  workshopElevator: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1000&q=80", // Clean modern workshop
  toolsInspection: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80", // Sports car detail
  mechanicTablet: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80", // Technician at work
};
