"use client";

import React from "react";
import { Star } from "lucide-react";
import { Producers } from "@/types/index";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";

interface ProducersCardProps {
  producer: Producers;
}

export const ProducersCard: React.FC<ProducersCardProps> = ({ producer }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="card p-0 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer">
      {/* Imagem do produto */}
      <div className="relative w-full h-48 bg-gradient-to-br from-primary-100 to-earth-100 overflow-hidden">
        <img
          src={producer.image}
          alt={producer.producer}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Informações do produto */}
      <div className="p-4 flex flex-col flex-1">
        {/* Nome e categoria */}
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-neutral-900 line-clamp-2">
            {producer.producer}
          </h3>
        </div>

        {/* Produtor */}
        <div className="text-xs text-neutral-500 mb-3">
          <p>{producer.producerLocation}</p>
        </div>

        {/* Avaliação */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(producer.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-neutral-300"
              }`}
            />
          ))}
          <span className="text-xs text-neutral-600">
            ({producer.reviews} avaliações)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProducersCard;
