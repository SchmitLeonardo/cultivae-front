"use client";

import React from "react";
import { Producers } from "@/types/index";
import ProducersCard from "@/components/ui/ProducersCard";

interface ProducersGridProps {
  producers: Producers[];
  isLoading?: boolean;
}

export const ProducersGrid: React.FC<ProducersGridProps> = ({
  producers,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="card h-96 animate-pulse bg-neutral-200"
          ></div>
        ))}
      </div>
    );
  }

  if (producers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-600">Nenhum produto disponível no momento.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {producers.map((product) => (
        <ProducersCard key={product.id} producer={product} />
      ))}
    </div>
  );
};

export default ProducersGrid;
