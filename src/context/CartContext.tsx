"use client";

import React, { createContext, useCallback, useState, ReactNode, useEffect } from "react";
import { CartItem, Product } from "@/types/index";

/**
 * Interface do contexto do carrinho
 * Define todas as operações disponíveis para manipular o carrinho
 */
export interface CartContextType {
  items: CartItem[];
  total: number;
  itemCount: number;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

/**
 * Contexto do Carrinho
 * Fornece estado global para o carrinho de compras
 */
export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "cultivavee_cart";

/**
 * Provider do Carrinho
 * Gerencia o estado global do carrinho e disponibiliza
 * métodos para manipulação através do contexto
 */
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Recuperar carrinho do localStorage ao montar
  useEffect(() => {
    const savedCart = localStorage.getItem(STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setItems(parsedCart);
      } catch (error) {
        console.error("Erro ao recuperar carrinho:", error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // Salvar carrinho no localStorage sempre que mudar
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [items]);

  /**
   * Calcula o total do carrinho
   * Soma (preço × quantidade) de todos os itens
   */
  const getCartTotal = useCallback((): number => {
    return items.reduce((sum, item) => sum + item.price * item.cartQuantity, 0);
  }, [items]);

  /**
   * Adiciona um produto ao carrinho
   * Se o produto já existe, incrementa a quantidade
   */
  const addToCart = useCallback((product: Product, quantity: number) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Produto já existe: incrementa quantidade
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, cartQuantity: item.cartQuantity + quantity }
            : item
        );
      }

      // Novo produto: adiciona ao carrinho
      return [
        ...prevItems,
        {
          ...product,
          cartQuantity: quantity,
        },
      ];
    });
  }, []);

  /**
   * Remove um produto do carrinho
   */
  const removeFromCart = useCallback((productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  }, []);

  /**
   * Atualiza a quantidade de um produto no carrinho
   * Se a quantidade for 0, remove o produto
   */
  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, cartQuantity: quantity } : item
      )
    );
  }, [removeFromCart]);

  /**
   * Limpa todo o carrinho
   */
  const clearCart = useCallback(() => {
    setItems([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const total = getCartTotal();
  const itemCount = items.reduce((sum, item) => sum + item.cartQuantity, 0);

  const value: CartContextType = {
    items,
    total,
    itemCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
