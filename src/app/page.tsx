"use client";

import { useState } from "react";
import Link from "next/link";
import { Producers, Product } from "@/types/index";
import { Search, Leaf, ArrowRight } from "lucide-react";
import ProductGrid from "@/components/ui/ProductGrid";
import ProducersGrid from "@/components/ui/ProducersGrid";

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

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8">
      <div className="bg-[#F3F8F5] w-full h-[60vh] p-8 sm:p-12 flex flex-col items-center justify-center text-center">
        <p className="text-lg max-w-2xl flex items-center gap-2 mb-3 text-[#009966] font-semibold">
          <Leaf /> 100% Frescos e Naturais
        </p>
        <h1 className="section-title mb-4 text-[48px] text-[#314058]">
          Produtos direto do campo para sua mesa
        </h1>
        <p className="text-[16px] text-[#606a79]">
          Compre direto de pequenos produtores rurais. Frescor, qualidade e
          apoio ao produtor local.
        </p>

        {/* Campo de Busca */}
        <div className="flex items-center gap-3 w-full max-w-lg mt-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Encontre frutas, verduras e mais..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-base pl-10"
            />
          </div>
          <button
            onClick={() => {}}
            className="btn-primary flex items-center justify-center gap-2"
          >
            Buscar
          </button>
        </div>
      </div>

      {/* Categorias */}
      <div className="space-y-4 w-[90%] mx-auto py-4">
        <div className="border-b border-neutral-200">
          <h1 className="text-[24px] w-full max-w-200px py-4 font-light">
            Categorias
          </h1>
        </div>
        <div className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2`}>
          {MOCK_CATEGORIES.map((category, key) => (
            <Link href={`/category?categoria=${category.id}`} key={key}>
              <button
                key={category.id}
                className={`w-full px-4 py-2 rounded-lg font-medium transition-colors flex flex-col items-center gap-2 bg-gradient-to-b from-[#EAFEF6] via-[#F8FEE6] to-[#D0FAE4] text-neutral-700 hover:from-[#E1F9E9] hover:via-[#F2FBEB] hover:to-[#C8F4DE]"
              }`}
              >
                <span className="text-4xl">{category.image}</span>
                {category.name}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Produtores */}
      <div className="w-[90%] mx-auto py-4">
        <div className="border-b border-neutral-200 justify-between flex items-center">
          <h1 className="text-[24px] w-full max-w-200px py-4 font-light">
            Conheça nossos produtores
          </h1>
          <Link href="/producers" className="w-full">
            <p className="flex items-center gap-2 text-primary-600 font-medium w-full cursor-pointer justify-end text-[14px]">
              Ver todos <ArrowRight size={16} />
            </p>
          </Link>
        </div>
        <ProducersGrid producers={MOCK_PRODUCERS} />
      </div>

      {/* Produtos */}
      <div className="w-[90%] mx-auto py-4 pb-16">
        <div className="border-b border-neutral-200 justify-between flex items-center">
          <h1 className="text-[24px] w-full max-w-200px py-4 font-light">
            Da horta para a sua mesa
          </h1>
          <Link href="/products" className="w-full">
            <p className="flex items-center gap-2 text-primary-600 font-medium w-full cursor-pointer justify-end text-[14px]">
              Ver todos <ArrowRight size={16} />
            </p>
          </Link>
        </div>
        <ProductGrid products={MOCK_PRODUCTS} />
      </div>
    </div>
  );
}
