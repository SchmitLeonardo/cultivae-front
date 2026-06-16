# 🌱 Cultivaê - Plataforma de Agricultura Familiar

> Conectando pequenos produtores rurais diretamente aos consumidores finais

**Projeto de TCC - Análise e Desenvolvimento de Sistemas (ADS)**

---

## 📋 Sobre o Projeto

Cultivaê é uma plataforma digital inovadora que fortalece a agricultura familiar, permitindo que pequenos produtores rurais conectem-se diretamente aos consumidores finais, eliminando intermediários e garantindo qualidade, frescor e justiça de preços.

### Objetivo Principal
Criar um ecossistema digital que facilite a comercialização de produtos da agricultura familiar, promovendo:
- ✅ Acesso direto entre produtor e consumidor
- ✅ Produtos frescos e de qualidade
- ✅ Preços justos
- ✅ Fortalecimento da agricultura familiar

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Ícones**: Lucide React
- **Gerenciamento de Estado**: React Context API

### Configuração
- **Node.js**: v18+
- **Package Manager**: npm ou yarn

---

## 📁 Estrutura de Pastas

```
src/
├── app/                          # App Router do Next.js
│   ├── layout.tsx               # Layout raiz com CartProvider
│   ├── globals.css              # Estilos globais e Tailwind
│   ├── page.tsx                 # Página inicial (Feed/Vitrine)
│   ├── cart/
│   │   └── page.tsx             # Página do Carrinho
│   ├── category/
│   │   └── page.tsx             # Página da categoria selecionada
│   ├── login/
│   │   └── page.tsx             # Página de Login
│   ├── producers/
│   │   └── page.tsx             # Página de listar todos os produtores
│   ├── products/
│   │   └── page.tsx             # Página de listar todos os produtos
│   ├── register/
│   │   └── page.tsx             # Página de Cadastro
│   ├── success/
│   │   └── page.tsx             # Página de Sucesso após pagamento
│   ├── summary/
│   │   └── page.tsx             # Página de resumo da compra
│   └── checkout/
│       └── page.tsx             # Página de Checkout/Pagamento

│
├── components/
│   ├── common/                  # Componentes compartilhados globais
│   │   ├── Header.tsx           # Navbar com logo e menu
│   │   ├── Footer.tsx           # Rodapé com informações
│   │   └── Layout.tsx           # Layout global (Header + Footer)
│   │
│   └── ui/                      # Componentes reutilizáveis específicos do fluxo
│       ├── ProductCard.tsx      # Card individual de produto
│       ├── ProductGrid.tsx      # Grid responsiva de produtos
│       ├── CartItemCard.tsx     # Card de item no carrinho
│       └── CartSummary.tsx      # Resumo do carrinho/pedido
│
├── context/
│   └── CartContext.tsx          # Context API para gerenciar estado do carrinho
│
├── hooks/
│   └── useCart.ts              # Hook customizado para usar o CartContext
│
├── types/
│   └── index.ts                # Tipos TypeScript globais do projeto
│
└── utils/
    └── (helpers e utilitários - a implementar conforme necessário)
```

---

## 🚀 Como Executar o Projeto

### 1️⃣ Pré-requisitos
```bash
# Node.js v18 ou superior
node --version

# npm ou yarn
npm --version
```

### 2️⃣ Instalação de Dependências
```bash
cd "Cultivaê"
npm install
# ou
yarn install
```

### 3️⃣ Executar em Desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em: **http://localhost:3000**

### 4️⃣ Build para Produção
```bash
npm run build
npm start
# ou
yarn build
yarn start
```

### 5️⃣ Verificação de Tipos
```bash
npm run type-check
```

---

## 🔄 Gerenciamento de Estado Global

### Context API - CartContext

O projeto utiliza **React Context API** para gerenciar o estado do carrinho globalmente:

```typescript
// Uso do hook
const { items, total, itemCount, addToCart, removeFromCart } = useCart();

// Adicionar ao carrinho
addToCart(product, quantity);

// Remover do carrinho
removeFromCart(productId);

// Atualizar quantidade
updateQuantity(productId, newQuantity);

// Limpar carrinho
clearCart();
```

---

## 📱 Responsividade

Todos os componentes foram desenvolvidos com mobile-first e são totalmente responsivos:
- ✅ Mobile (< 640px)
- ✅ Tablet (640px - 1024px)
- ✅ Desktop (> 1024px)

---

## 📚 Padrões de Código Utilizados

### 1. Component Pattern
- Componentes funcionais com hooks
- Separação clara de responsabilidades
- Props bem tipadas

### 2. Context API Pattern
- CartContext para estado global
- Custom hook useCart para acesso simplificado
- Provider no layout raiz

### 3. Naming Conventions
- PascalCase para componentes
- camelCase para variáveis e funções
- UPPER_CASE para constantes

### 4. TypeScript Best Practices
- Interfaces bem definidas
- Type safety em todo o projeto
- Evitar `any`

---

## 📄 Licença

Projeto desenvolvido como Trabalho de Conclusão de Curso do curso de Análise e Desenvolvimento de Sistemas.

---

## 👨‍💼 Desenvolvedor

**Leonardo Schmidt Borges**  
Análise e Desenvolvimento de Sistemas (ADS)

---

**Última atualização**: Junho 2026
