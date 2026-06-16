"use client";

import React from "react";
import Link from "next/link";
import { Product } from "@/types";
import { useSearchParams } from 'next/navigation';
import { ChevronLeft } from "lucide-react";
import ProductGrid from "@/components/ui/ProductGrid";

const MOCK_CATEGORIES = [
  { id: "frutas", name: "Frutas", image: "🍎" },
  { id: "verduras", name: "Verduras", image: "🥬" },
  { id: "legumes", name: "Legumes", image: "🥕" },
  { id: "organicos", name: "Organicos", image: "🌿" },
  { id: "acougue", name: "Açougue", image: "🥩" },
  { id: "laticinios", name: "Laticínios", image: "🐮" },
  { id: "derivados", name: "Derivados", image: "🧀" },
  { id: "geleias", name: "Geleias", image: "🥫" },
];

const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Tomate Cereja Orgânico",
    description: "Tomates cereja frescos, cultivados organicamente",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1762980622870-07fa4a73785f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG9yZ2FuaWMlMjBvcmFuZ2VzfGVufDF8fHx8MTc3NDQ4OTQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    producer: "Sítio Verde da Maria",
    producerLocation: "Sorocaba, SP",
    category: "hortaliças",
    quantity: 100,
    rating: 4.8,
    reviews: 45,
    inStock: true,
  },
  {
    id: "2",
    name: "Alface Crespa",
    description: "Alface fresca colhida no dia",
    price: 8.5,
    image:
      "https://images.unsplash.com/photo-1757332050958-b797a022c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG9yZ2FuaWMlMjBiYW5hbmFzfGVufDF8fHx8MTc3NDQ4OTQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    producer: "Fazenda do João",
    producerLocation: "Jundiaí, SP",
    category: "hortaliças",
    quantity: 150,
    rating: 4.6,
    reviews: 32,
    inStock: true,
  },
  {
    id: "3",
    name: "Maçã Gala",
    description: "Maçã doce e crocante",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1757332914679-0906a57881e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG9yZ2FuaWMlMjBjYXJyb3RzfGVufDF8fHx8MTc3NDQxOTQxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    producer: "Pomar Familiar",
    producerLocation: "Atibaia, SP",
    category: "frutas",
    quantity: 80,
    rating: 4.9,
    reviews: 67,
    inStock: true,
  },
  {
    id: "4",
    name: "Banana Nanica",
    description: "Banana madura e doce",
    price: 7.99,
    image:
      "https://images.unsplash.com/photo-1762463432101-3be38daf946f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG9yZ2FuaWMlMjBsZXR0dWNlfGVufDF8fHx8MTc3NDQ4OTQwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    producer: "Sítio São Pedro",
    producerLocation: "Tietê, SP",
    category: "frutas",
    quantity: 200,
    rating: 4.7,
    reviews: 89,
    inStock: true,
  },
];

export default function CategoryClient() {
  const searchParams = useSearchParams();
  const categoria = searchParams.get('categoria');

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
            {MOCK_CATEGORIES.find((cat) => cat.id === categoria)?.image} {MOCK_CATEGORIES.find((cat) => cat.id === categoria)?.name}
          </h1>
        </div>
        <div className="py-3">
          <ProductGrid products={MOCK_PRODUCTS} />
        </div>
        <div className="py-3">
          <ProductGrid products={MOCK_PRODUCTS} />
        </div>
        <div className="py-3">
          <ProductGrid products={MOCK_PRODUCTS} />
        </div>
        <div className="py-3">
          <ProductGrid products={MOCK_PRODUCTS} />
        </div>
      </div>
    </div>
  );
}
