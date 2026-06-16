"use client";

import Link from "next/link";
import { Producers } from "@/types";
import { ChevronLeft } from "lucide-react";
import ProducersGrid from "@/components/ui/ProducersGrid";

const MOCK_PRODUCERS: Producers[] = [
  {
    id: "1",
    producer: "Sítio Verde da Maria",
    producerLocation: "Sorocaba, SP",
    image:
      "https://images.unsplash.com/photo-1613757668274-4275abb83673?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: "2",
    producer: "Fazenda do João",
    producerLocation: "Jundiaí, SP",
    image:
      "https://images.unsplash.com/photo-1625023723594-02b8ea4d24fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: "3",
    producer: "Pomar Familiar",
    producerLocation: "Atibaia, SP",
    image:
      "https://images.unsplash.com/photo-1597094113089-6975be94df01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: "4",
    producer: "Sítio São Pedro",
    producerLocation: "Tietê, SP",
    image:
      "https://plus.unsplash.com/premium_photo-1734272644243-38972e977258?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviews: 89,
  },
];

export default function Products() {
  return (
    <div className="space-y-8 bg-[#F8FAFC] h-full py-8">
      <div className="w-[90%] mx-auto py-2 gap-3">
        <Link href="/">
          <p className="text-green-500 hover:text-green-600 text-[14px] flex items-center justify-start gap-1">
            <ChevronLeft />
            Voltar
          </p>
        </Link>
      </div>
      <div className="w-[90%] mx-auto gap-3">
        <div className="flex items-center gap-2 mb-3 border-b border-neutral-200 pb-2">
          <h1 className="text-[24px] w-full max-w-200px font-light">
            Todos os nossos produtores
          </h1>
        </div>
        <div className="py-3">
          <ProducersGrid producers={MOCK_PRODUCERS} />
        </div>
        <div className="py-3">
          <ProducersGrid producers={MOCK_PRODUCERS} />
        </div>
        <div className="py-3">
          <ProducersGrid producers={MOCK_PRODUCERS} />
        </div>
        <div className="py-3">
          <ProducersGrid producers={MOCK_PRODUCERS} />
        </div>
      </div>
    </div>
  );
}
