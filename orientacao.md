# 🚀 PROMPT COMPLETO – Landing Page Papini Fixadores
> Use este documento como briefing completo para criar a landing page. Leia tudo antes de começar.

---

## 🎯 OBJETIVO DA PÁGINA

Criar uma **landing page de alta conversão** para a **Papini Fixadores**, com foco em **gerar contatos via WhatsApp**. O visitante vem do Google Ads e deve ser conduzido rapidamente a clicar no botão de WhatsApp.

**Ação principal desejada:** Clicar no botão de WhatsApp que abre a conversa com a mensagem pré-preenchida:

> *"Olá! Vi seu site no Google e gostaria de saber mais."*

**Link do WhatsApp:**
```
https://wa.me/5511953744617?text=Ol%C3%A1!%20Vi%20seu%20site%20no%20Google%20e%20gostaria%20de%20saber%20mais.
```

---

## 🏢 DADOS DA EMPRESA

| Campo | Informação |
|---|---|
| Nome | Papini Fixadores |
| Segmento | Distribuidor de fixadores industriais |
| Site original | papinifixadores.com.br |
| E-mail | vendas@papinifixadores.com.br |
| WhatsApp | (11) 95374-4617 |
| Telefone fixo | (11) 2036-1547 |
| Endereço | Av. Casa Grande, nº 275A – Sapopemba, São Paulo – SP, CEP 03260-000 |
| Experiência | Mais de 7 anos no setor de fixadores |

---

## 🎨 IDENTIDADE VISUAL

### Logo
- A logo será fornecida pelo usuário como arquivo de imagem.
- Use-a no topo da página (header) e no rodapé.
- A logo deve ser exibida em tamanho adequado, sem distorção.

### Paleta de Cores (extraída do site original)
| Cor | Código HEX | Uso |
|---|---|---|
| Azul principal | `#03ABD8` | Botões CTA, ícones, destaques |
| Azul escuro | `#1A2A3A` | Fundo do header, footer, textos principais |
| Branco | `#FFFFFF` | Fundo de seções, textos sobre fundo escuro |
| Cinza claro | `#F4F6F8` | Fundo de seções alternadas |
| Cinza médio | `#6B7280` | Textos secundários, legendas |
| Laranja âmbar (acento) | `#F59E0B` | Elemento de urgência/destaque secundário (opcional) |

### Tipografia sugerida
- **Display / Títulos:** `Barlow Condensed` ou `Oswald` (bold, industrial, forte — combina com fixadores)
- **Corpo:** `Source Sans 3` ou `Nunito Sans` (legível, moderno, confiável)
- Carregar via Google Fonts

### Estética
- Tema: **Industrial moderno** — sólido, confiável, profissional
- Clima: Azul escuro + azul vibrante + branco limpo
- Não usar roxo, gradientes genéricos ou visual "startup tech"
- Usar texturas sutis metálicas ou linhas geométricas como elemento decorativo (opcional)

---

## 📄 ESTRUTURA DA LANDING PAGE

A página deve ser um **único arquivo HTML** com CSS e JS embutidos (sem dependências externas além de Google Fonts e Font Awesome via CDN).

---

### SEÇÃO 1 — HERO (Topo / Acima da dobra)

**Objetivo:** Impacto imediato, comunicar o valor em 3 segundos.

- **Logo** da Papini Fixadores (centralizada ou alinhada à esquerda)
- **Headline principal:**
  > `Fixadores de Qualidade para Quem Não Pode Parar`
- **Subheadline:**
  > `Parafusos, porcas, arruelas, barras roscadas, chumbadores e muito mais. Atendimento ágil, orçamento rápido e certificação ASTM, ISO e DIN.`
- **Botão CTA verde WhatsApp (destaque máximo):**
  > 📲 `Falar no WhatsApp agora`
  - Cor: verde WhatsApp `#25D366`, texto branco, borda arredondada, ícone do WhatsApp (Font Awesome)
  - Ao clicar: abre `https://wa.me/5511953744617?text=Ol%C3%A1!%20Vi%20seu%20site%20no%20Google%20e%20gostaria%20de%20saber%20mais.`
  - Deve abrir em nova aba (`target="_blank"`)
- **Badge de confiança abaixo do botão:**
  > 🔒 `Sem compromisso · Resposta rápida · Mais de 7 anos de experiência`
- **Fundo:** Azul escuro `#1A2A3A` com imagem de fundo de parafusos/fixadores em overlay escuro (ou padrão geométrico industrial)

---

### SEÇÃO 2 — PRODUTOS (Linha de Produtos)

**Objetivo:** Mostrar o que a empresa vende de forma rápida e visual.

**Título da seção:**
> `Linha Completa de Fixadores`

**Exibir em grade (3 colunas desktop / 2 tablet / 1 mobile):**

| Ícone | Produto |
|---|---|
| 🔩 | **Parafusos** — Sextavados, Allen, Fendados, Especiais |
| ⚙️ | **Porcas** — Sextavada, Travante, Flangeada |
| 🔘 | **Arruelas** — Lisa, de Pressão, Especial |
| 📏 | **Barras Roscadas** — Zincada, Inox, Galvanizada |
| 🏗️ | **Chumbadores** — Mecânico e Químico |
| 🔧 | **Outros Itens** — Buchas, Abraçadeiras, Bronze, Latão, Inox |

- Cada card: ícone grande, nome em negrito, descrição em 1 linha
- Fundo branco com borda sutil ou sombra leve
- Cor do ícone: azul `#03ABD8`

---

### SEÇÃO 3 — DIFERENCIAIS

**Objetivo:** Construir confiança rapidamente.

**Título:**
> `Por que escolher a Papini Fixadores?`

**4 pilares em linha horizontal (ícone + título + texto curto):**

1. **⚡ Agilidade no Atendimento**
   > Orçamentos rápidos para que seu projeto não pare.

2. **✅ Qualidade Certificada**
   > Produtos com certificação ASTM, ISO e DIN.

3. **📦 Soluções Completas**
   > Linha ampla para construção, indústria e revenda.

4. **🔧 Peças Especiais sob Medida**
   > Fabricamos itens personalizados para necessidades específicas.

- Fundo cinza claro `#F4F6F8`
- Layout: 4 colunas desktop / 2 tablet / 1 mobile

---

### SEÇÃO 4 — SOCIAL PROOF (Credibilidade)

**Objetivo:** Gerar confiança com números e selos.

**Título:**
> `Números que falam por si`

**3 estatísticas em destaque:**

| Número | Descrição |
|---|---|
| +7 anos | de experiência no setor |
| 6 linhas | de produtos especializados |
| ASTM · ISO · DIN | Certificações de qualidade |

- Números grandes, negrito, cor azul `#03ABD8`
- Fundo azul escuro `#1A2A3A`, texto branco
- Efeito de contador animado ao entrar na tela (JS simples com IntersectionObserver)

---

### SEÇÃO 5 — CTA FINAL (Botão de Conversão)

**Objetivo:** Última chamada para ação antes do rodapé.

**Título:**
> `Pronto para fazer seu pedido?`

**Subtítulo:**
> `Entre em contato agora e receba um orçamento personalizado sem compromisso.`

**Botão grande WhatsApp:**
> 📲 `Solicitar orçamento pelo WhatsApp`
- Mesmo link do WhatsApp com mensagem pré-preenchida
- Estilo: grande, verde `#25D366`, ícone WhatsApp, animação de pulso (pulse) para chamar atenção

**Fundo:** Branco ou cinza claro

---

### SEÇÃO 6 — RODAPÉ (Footer)

- Logo da Papini Fixadores
- Endereço: `Av. Casa Grande, nº 275A – Sapopemba, São Paulo – SP – CEP 03260-000`
- WhatsApp: `(11) 95374-4617`
- Telefone: `(11) 2036-1547`
- E-mail: `vendas@papinifixadores.com.br`
- Fundo: azul escuro `#1A2A3A`, texto branco
- Copyright: `© 2025 Papini Fixadores. Todos os direitos reservados.`

---

## 📌 BOTÃO FLUTUANTE DE WHATSAPP

Adicionar um **botão flutuante fixo** no canto inferior direito da tela que aparece em todas as seções ao rolar a página:

- Ícone do WhatsApp (branco em fundo verde `#25D366`)
- Tooltip ao passar o mouse: `"Falar no WhatsApp"`
- Mesmo link com mensagem pré-preenchida
- Efeito de animação de entrada (slide up após 2 segundos)
- Z-index alto para ficar sempre visível

---

## ⚙️ REQUISITOS TÉCNICOS

- **Arquivo único:** `index.html` com CSS e JS embutidos
- **Responsivo:** Mobile-first, funciona perfeitamente em celular (prioridade, pois o tráfego do Google Ads é majoritariamente mobile)
- **Sem frameworks pesados:** Puro HTML, CSS e JS vanilla (sem React, Vue, etc.)
- **Google Fonts:** Carregar via CDN no `<head>`
- **Font Awesome:** Carregar via CDN no `<head>` (para ícones de WhatsApp, check, etc.)
- **Performance:** Mínimo de requests externos, sem imagens pesadas não otimizadas
- **Meta tags:** Incluir título, description e og:image para SEO básico
- **Scroll suave:** `scroll-behavior: smooth` no CSS
- **Analytics ready:** Deixar comentário indicando onde adicionar Google Tag Manager

### Meta tags sugeridas:
```html
<title>Papini Fixadores | Parafusos, Porcas e Fixadores em São Paulo</title>
<meta name="description" content="Fornecedor completo de fixadores industriais em São Paulo. Parafusos, porcas, arruelas, barras roscadas e chumbadores com certificação ASTM, ISO e DIN. Orçamento rápido pelo WhatsApp.">
```

---

## 🔗 LINK DO WHATSAPP (usar em TODOS os botões)

```
https://wa.me/5511953744617?text=Ol%C3%A1!%20Vi%20seu%20site%20no%20Google%20e%20gostaria%20de%20saber%20mais.
```

> ⚠️ **Importante:** Todos os botões de CTA devem usar exatamente este link, com `target="_blank"` e `rel="noopener noreferrer"`.

---

## ✅ CHECKLIST FINAL ANTES DE ENTREGAR

- [ ] Logo exibida corretamente no header e footer
- [ ] Cores da paleta aplicadas corretamente
- [ ] Todos os botões de CTA linkam para o WhatsApp com a mensagem correta
- [ ] Botão flutuante de WhatsApp funcionando
- [ ] Página responsiva em mobile (320px) e desktop (1440px)
- [ ] Animação de contador de números funcionando
- [ ] Seções em ordem: Hero → Produtos → Diferenciais → Social Proof → CTA Final → Footer
- [ ] Meta tags preenchidas
- [ ] Sem erros de console no navegador
- [ ] Arquivo único `index.html` pronto para hospedar

---

## 📎 OBSERVAÇÃO PARA O AGENTE

> A logo será fornecida como imagem pelo usuário. Ao receber a logo:
> 1. Identifique as cores dominantes para confirmar/ajustar a paleta acima
> 2. Use a logo como `<img src="logo.png" alt="Papini Fixadores" ...>` no header e footer
> 3. Garanta que a logo tenha fundo transparente ou combine com o fundo escuro do header

---

*Briefing gerado para o projeto Antigravity · Cliente: Papini Fixadores · Objetivo: Landing Page Google Ads com CTA WhatsApp*