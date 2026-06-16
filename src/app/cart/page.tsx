"use client";

import { useCart } from "@/hooks/useCart";
import CartItemCard from "@/components/ui/CartItemCard";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Product } from "@/types";
import { ProductGrid } from "@/index";
import { formatCurrency } from "@/utils/formatters";

export default function CartPage() {
  const { items, itemCount, total } = useCart();

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

  return (
    <>
      <div className="space-y-8 bg-[#F8FAFC] h-full py-8">
        <div className="space-y-4 w-[90%] mx-auto py-4 flex items-start justify-between gap-3">
          {/* Itens do carrinho de compras */}
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="bg-white rounded-lg shadow-md p-4 w-full">
              <div className="flex items-center gap-2 mb-4 border-b border-neutral-200 pb-2">
                <h2>Sacola</h2>
                <p className="text-neutral-300 text-[14px]">
                  ({itemCount} itens)
                </p>
              </div>
              {items.length > 0 ? (
                <div className="gap-8">
                  <div className="space-y-4">
                    {items.map((item) => (
                      <CartItemCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="bg-neutral-100 p-8 rounded-full mb-6">
                    <ShoppingCart className="w-12 h-12 text-neutral-400" />
                  </div>

                  <h2 className="subsection-title mb-2">Carrinho Vazio</h2>
                  <p className="text-neutral-600 mb-8 max-w-md">
                    Parece que você ainda não adicionou nenhum produto ao seu
                    carrinho. Explore nossos produtos e comece a comprar!
                  </p>
                </div>
              )}
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-full">
              <div className="flex items-center gap-2 mb-4 border-b border-neutral-200 pb-2">
                <h2>Informações de entrega</h2>
              </div>
              <div className="flex justify-between items-center gap-8 pb-3">
                <p className="text-neutral-600 text-[16px]">Nome usuário</p>
                <p className="text-blue-500 underline cursor-pointer text-[14px]">
                  Alterar
                </p>
              </div>
              <p className="text-neutral-500 text-[14px]">
                Rua Amora 28, apto 43, Abobrinha, RS, 99999-999, Brasil
              </p>
            </div>
          </div>

          {/* Dados da compra */}
          <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-[400px] mt-0">
            <h2>Resumo de valores</h2>
            <div className="flex justify-between items-center gap-8 pb-2 pt-3">
              <p className="text-neutral-400 text-[14px]">Subtotal</p>
              <p className="text-neutral-700 text-[14px]">
                {formatCurrency(total)}
              </p>
            </div>
            <div className="flex justify-between items-center gap-8 pb-2">
              <p className="text-neutral-400 text-[14px]">Taxa de entrega</p>
              <p className="text-neutral-700 text-[14px]">R$ 12,99</p>
            </div>
            <div className="flex justify-between items-center gap-8 pb-2">
              <p className="text-neutral-400 text-[14px]">Taxa de serviço</p>
              <p className="text-neutral-700 text-[14px]">R$ 0,99</p>
            </div>
            <div className="flex justify-between items-center gap-8 pb-4 border-b border-neutral-200">
              <p className="text-neutral-400 text-[14px]">Descontos</p>
              <p className="text-green-500 text-[14px]">- R$ 4,99</p>
            </div>
            <div className="flex justify-between items-center gap-8 pt-4">
              <div className="flex flex-col items-start">
                <p className="text-neutral-400 text-[14px]">
                  Total com a entrega
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-neutral-600 text-[16px]">
                    {formatCurrency(
                      Number(
                        itemCount > 0
                          ? (total + 12.99 + 0.99 - 4.99).toFixed(2)
                          : 0,
                      ),
                    )}
                  </p>
                  <p className="text-neutral-400 text-[14px]">
                    / {itemCount} itens
                  </p>
                </div>
              </div>
              <Link href="/checkout">
                <button className="btn-primary">Continuar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Produtos */}
      <div className="space-y-8 bg-white h-full">
        <div className="space-y-4  w-[90%] mx-auto py-4">
          <div className="border-b border-neutral-200 justify-between flex items-center">
            <h1 className="text-[24px] w-full max-w-200px py-4 font-light">
              Peça também
            </h1>
            <p className="flex items-center gap-2 text-primary-600 font-medium w-full cursor-pointer justify-end text-[14px]">
              Ver todos <ArrowRight size={16} />
            </p>
          </div>
          <ProductGrid products={MOCK_PRODUCTS} />
        </div>
      </div>
    </>
  );
}
