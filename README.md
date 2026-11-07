# John Auto Center — Plataforma de Gestão e Recuperação de Orçamentos
### Demonstração Conceitual & Apresentação Comercial

> **Transparência e Responsabilidade:**
> Projeto demonstrativo desenvolvido por **Davi Anderson**. Esta apresentação é conceitual e não representa um sistema oficial da John Auto Center. Todos os clientes, veículos, orçamentos, valores, gráficos e conversas são fictícios e foram criados estritamente para ilustrar o potencial da solução.

---

## 1. Visão Geral da Solução

A **Plataforma John Auto Center** é um conceito de software SaaS desenhado sob medida para oficinas mecânicas automotivas de alto movimento, especificamente contextualizada para a **John Auto Center** em **Planaltina - DF**.

O objetivo da solução é atacar a maior fonte invisível de perda de faturamento do setor: **orçamentos emitidos que adormecem sem acompanhamento**.

### Pilares Principais:
1. **Centralização e Controle de Orçamentos:** Registro rápido de ordens, peças e serviços com separação clara de custos.
2. **Acompanhamento Ativo & Cadência Inteligente:** Identificação em tempo real de clientes que não responderam após 24h ou 48h.
3. **Simulador de Recuperação WhatsApp:** Disparos cordiais pré-configurados, com a logomarca oficial e respeitando o consentimento do cliente.
4. **Calculadora de ROI:** Estimativa dinâmica de receita anual resgatada com base no volume e ticket médio da oficina.
5. **Painel Gerencial (Dashboard):** KPIs e gráficos analíticos (Chart.js) de conversão por categoria de serviço.

---

## 2. Publicação no GitHub Pages (100% Configurado e Acessível)

O projeto está configurado com caminhos relativos (`base: './'`) e empacotamento otimizado para funcionar perfeitamente em qualquer repositório ou subdomínio do **GitHub Pages** sem erros de tela preta ou links quebrados (404).

### Como Publicar no GitHub Pages:

#### Opção A: Deploy Automático via GitHub Actions (Recomendada)
1. Crie um repositório no seu GitHub (ex: `john-auto-center`).
2. No seu terminal local, inicialize o Git e envie os arquivos:
   ```bash
   git init
   git add .
   git commit -m "feat: John Auto Center demo platform"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/john-auto-center.git
   git push -u origin main
   ```
3. No GitHub, acesse seu repositório -> **Settings** -> **Pages**:
   - Em **Source**, selecione **GitHub Actions**.
4. O workflow já configurado em `.github/workflows/deploy.yml` fará o build e a publicação automática em instantes. Seu site estará acessível em:
   `https://SEU-USUARIO.github.io/john-auto-center/`

#### Opção B: Deploy com 1 Comando (`gh-pages`)
Caso prefira enviar direto pela branch `gh-pages`:
```bash
npm run deploy
```
Em **Settings** -> **Pages**, selecione a branch `gh-pages` e a pasta `/ (root)`.

---

## 3. Tecnologias Utilizadas

- **React 18** (Interface declarativa, estado reativo)
- **Vite 6** (Build tool ultrarrápido com split chunking e caminhos relativos)
- **Tailwind CSS 3** (Estilização atomizada e paleta automotiva sob medida)
- **Chart.js 4 + React-Chartjs-2** (Gráficos interativos responsivos)
- **Lucide React** (Ícones modernos e consistentes)
- **Canvas-Confetti** (Feedback visual comemorativo para conversões)
- **gh-pages** (Deploy facilitado para GitHub Pages)

---

## 4. Como Executar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor local
npm run dev

# Gerar build de produção
npm run build

# Pré-visualizar build localmente
npm run preview
```
