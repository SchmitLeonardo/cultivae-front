export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  producer: string;
  producerLocation: string;
  category: "hortaliças" | "frutas" | "grãos" | "laticínios" | "outros";
  quantity: number;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export interface Producers {
  id: string;
  producer: string;
  producerLocation: string;
  image: string;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  cartQuantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  userType: "consumer" | "producer";
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: "pending" | "confirmed" | "shipped" | "delivered";
  createdAt: Date;
  estimatedDelivery: Date;
}

export interface AuthFormData {
  email: string;
  password: string;
  name?: string;
  userType?: "consumer" | "producer";
}

export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  paymentMethod: "credit_card" | "debit_card" | "pix" | "transfer";
}
