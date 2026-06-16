"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/utils/formatters";
import { ChevronLeft, ArrowRight } from "lucide-react";
import LogoCartao from "../../../public/images/misc/master-card-logo.png";

export default function CheckoutPage() {
  const { items, itemCount, total } = useCart();

  // Valida se há itens no carrinho
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <h2 className="subsection-title mb-4">Carrinho Vazio</h2>
        <p className="text-neutral-600 mb-8">
          Você precisa adicionar produtos ao carrinho antes de fazer checkout.
        </p>
        <Link href="/">
          <button className="btn-primary">Voltar para Produtos</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 bg-[#F8FAFC] h-full py-8">
      <div className="w-[90%] mx-auto py-4 gap-3">
        <Link href="/cart">
          <p className="text-green-500 hover:text-green-600 text-[14px] flex items-center justify-start gap-1">
            <ChevronLeft />
            Voltar
          </p>
        </Link>
      </div>
      <div className="space-y-4 w-[90%] mx-auto py-4 flex items-start justify-between gap-3">
        {/* Formas de pagamento */}
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="bg-white rounded-lg shadow-md p-4 w-full">
            <div className="mb-4 border-b border-neutral-200 pb-2">
              <h2>Método de pagamento</h2>
            </div>
            <div className="w-full flex justify-between items-center gap-8 pb-2 pt-3 text-green-500 hover:text-green-600">
              <div className="flex items-center justify-start gap-2">
                <Image src={LogoCartao} alt="Nubank" width={20} height={20} />
                <p className="text-[14px]">Banco Nubank ******1234</p>
              </div>
              <Link href="/summary">
                <p className=" text-[14px] cursor-pointer">
                  <ArrowRight />
                </p>
              </Link>
            </div>
            <div className="w-full flex justify-between items-center gap-8 pb-2 pt-3 text-green-500 hover:text-green-600">
              <p className="text-[14px]">Pix</p>
              <Link href="/summary">
                <p className=" text-[14px] cursor-pointer">
                  <ArrowRight />
                </p>
              </Link>
            </div>
            <div className="w-full flex justify-between items-center gap-8 pb-2 pt-3 text-green-500 hover:text-green-600">
              <p className="text-[14px]">Cartão de Crédito</p>
              <Link href="/summary">
                <p className=" text-[14px] cursor-pointer">
                  <ArrowRight />
                </p>
              </Link>
            </div>
            <div className="w-full flex justify-between items-center gap-8 pb-2 pt-3 text-green-500 hover:text-green-600">
              <p className="text-[14px]">Google Pay</p>
              <Link href="/summary">
                <p className=" text-[14px] cursor-pointer">
                  <ArrowRight />
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Resumo de valores */}
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
            <Link href="/summary">
              <button className="btn-primary">Continuar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
