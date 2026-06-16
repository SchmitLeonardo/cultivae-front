"use client";

import { useContext } from "react";
import { CartContext, CartContextType } from "@/context/CartContext";

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart deve ser usado dentro de um CartProvider. " +
      "Verifique se o seu componente está envolvido pelo CartProvider."
    );
  }

  return context;
};
