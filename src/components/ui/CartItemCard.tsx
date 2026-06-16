"use client";

import React from "react";
import { CartItem } from "@/types/index";
import { useCart } from "@/hooks/useCart";
import { Trash2, Plus, Minus } from "lucide-react";
import { formatCurrency } from "@/utils/formatters";

interface CartItemCardProps {
  item: CartItem;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.id, item.cartQuantity + 1);
  };

  const handleDecrement = () => {
    if (item.cartQuantity > 1) {
      updateQuantity(item.id, item.cartQuantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const itemTotal = item.price * item.cartQuantity;

  return (
    <div className="p-2 flex gap-4 items-center">
      {/* Imagem do produto */}
      <div className="w-16 h-16 rounded-lg flex-shrink-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-[100%]"
        />
      </div>

      {/* Informações do produto */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-neutral-900">{item.name}</h3>
          <p className="text-[12px] text-neutral-600">{item.producer}</p>
          <p className="text-[12px] text-neutral-400">
            {item.category} / {item.quantity}
          </p>
        </div>
      </div>

      {/* Quantidade e ações */}
      <div className="flex flex-col items-end justify-between gap-2">
        {/* Controlador de quantidade */}
        <div className="flex items-center gap-3">
          <p className="text-primary-600">{formatCurrency(itemTotal)}</p>
          <div className="flex items-center border border-neutral-300 rounded-lg">
            <button
              onClick={handleDecrement}
              className="p-1 hover:bg-neutral-100 transition-colors disabled:opacity-50"
              aria-label="Diminuir quantidade"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-3 py-1 text-center w-10 font-semibold">
              {item.cartQuantity}
            </span>
            <button
              onClick={handleIncrement}
              className="p-1 hover:bg-neutral-100 transition-colors"
              aria-label="Aumentar quantidade"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleRemove}
            className="text-red-600 hover:text-red-700 transition-colors text-xs"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
