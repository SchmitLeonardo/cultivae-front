"use client";

import React from "react";
import { Star, ShoppingCart, Truck } from "lucide-react";
import { Product } from "@/types/index";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { formatCurrency } from "@/utils/formatters";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);

    // Reseta o feedback visual após 2 segundos
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="card p-0 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
      {/* Imagem do produto */}
      <div className="relative w-full h-48 bg-gradient-to-br from-primary-100 to-earth-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold">Indisponível</span>
          </div>
        )}
      </div>

      {/* Informações do produto */}
      <div className="p-4 flex flex-col flex-1">
        {/* Nome e categoria */}
        <div className="mb-2">
          <div className="flex items-start justify-between mb-1">
            <h3 className="font-semibold text-neutral-900 line-clamp-2">
              {product.name}
            </h3>
          </div>
          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Descrição */}
        <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Produtor */}
        <div className="text-xs text-neutral-500 mb-3">
          <p className="font-medium text-neutral-700">{product.producer}</p>
          <p>{product.producerLocation}</p>
        </div>

        {/* Avaliação */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-neutral-300"
              }`}
            />
          ))}
          <span className="text-xs text-neutral-600">
            ({product.reviews} avaliações)
          </span>
        </div>

        {/* Preço e ação */}
        <div className="mt-auto space-y-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-neutral-500">Preço</p>
              <p className="text-2xl font-bold text-primary-600">
                {formatCurrency(product.price)}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-neutral-100 px-2 py-1 rounded">
              <Truck className="w-4 h-4 text-earth-600" />
              <span className="text-xs text-neutral-700">Entrega</span>
            </div>
          </div>

          {/* Seleção de quantidade e botão */}
          <div className="flex gap-2">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              disabled={!product.inStock}
              className="input-base w-16 text-center"
              aria-label="Quantidade"
            />
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-1 btn-primary flex items-center justify-center gap-2 ${
                isAdded ? "bg-primary-700" : ""
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">
                {isAdded ? "Adicionado!" : "Adicionar"}
              </span>
              <span className="sm:hidden">{isAdded ? "✓" : "+"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
