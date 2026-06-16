
// URLs da aplicação
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  CART: "/cart",
  CHECKOUT: "/checkout",
  SUMMARY: "/summary",
  SUCCESS: "/success",
  PRODUCTS: "/products",
  PRODUCERS: "/producers",
  CATEGORY: "/category",
} as const;

// Categorias de produtos
export const PRODUCT_CATEGORIES = {
  VEGETABLES: "hortaliças",
  FRUITS: "frutas",
  GRAINS: "grãos",
  DAIRY: "laticínios",
  OTHER: "outros",
} as const;

// Métodos de pagamento
export const PAYMENT_METHODS = {
  CREDIT_CARD: "credit_card",
  DEBIT_CARD: "debit_card",
  PIX: "pix",
  TRANSFER: "transfer",
} as const;

// Tipos de usuário
export const USER_TYPES = {
  CONSUMER: "consumer",
  PRODUCER: "producer",
} as const;

// Status de pedido
export const ORDER_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
} as const;

// Mensagens
export const MESSAGES = {
  ADD_TO_CART_SUCCESS: "Produto adicionado ao carrinho com sucesso!",
  REMOVE_FROM_CART_SUCCESS: "Produto removido do carrinho",
  CART_CLEARED: "Carrinho limpo com sucesso",
  ORDER_CONFIRMED: "Seu pedido foi confirmado com sucesso!",
  LOADING: "Carregando...",
  ERROR: "Ocorreu um erro. Tente novamente.",
} as const;

// Limites e validações
export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 6,
  MAX_PRODUCT_QUANTITY: 999,
  MIN_PRODUCT_QUANTITY: 1,
  DELIVERY_DAYS_MIN: 3,
  DELIVERY_DAYS_MAX: 5,
} as const;

// Durações de animações
export const DURATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  FEEDBACK: 2000,
} as const;
