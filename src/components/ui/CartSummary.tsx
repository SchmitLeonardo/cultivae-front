"use client";

import React from "react";
import { useCart } from "@/hooks/useCart";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";

export const CartSummary: React.FC = () => {
  const { total, itemCount } = useCart();

  return (
    <div className="card p-6 bg-primary-50 border-primary-200">
      <h3 className="subsection-title mb-4">Resumo do Pedido</h3>

      <div className="space-y-3 mb-6">
        {/* Total de itens */}
        <div className="flex justify-between items-center">
          <span className="text-neutral-700">Itens ({itemCount})</span>
          <span className="font-semibold text-neutral-900">
            R$ {total.toFixed(2)}
          </span>
        </div>

        {/* Frete (simulado como gratuito) */}
        <div className="flex justify-between items-center">
          <span className="text-neutral-700">Frete</span>
          <span className="font-semibold text-green-600">Grátis</span>
        </div>

        {/* Desconto (opcional) */}
        <div className="flex justify-between items-center">
          <span className="text-neutral-700">Desconto</span>
          <span className="font-semibold text-neutral-900">-</span>
        </div>

        <div className="border-t border-primary-200"></div>

        {/* Total final */}
        <div className="flex justify-between items-center text-lg">
          <span className="font-bold text-neutral-900">Total</span>
          <span className="font-bold text-primary-600">
            R$ {total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Botão de checkout */}
      {itemCount > 0 ? (
        <Link href="/checkout">
          <button className="btn-primary w-full flex items-center justify-center gap-2">
            <span>Ir para Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      ) : (
        <button
          disabled
          className="btn-primary w-full flex items-center justify-center gap-2 opacity-50 cursor-not-allowed"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Carrinho Vazio</span>
        </button>
      )}

      {/* Link para continuar comprando */}
      <Link href="/">
        <button className="btn-secondary w-full mt-2">
          Continuar Comprando
        </button>
      </Link>
    </div>
  );
};

export default CartSummary;
