"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/utils/formatters";
import { ChevronLeft, ArrowRight } from "lucide-react";
import LogoCartao from "../../../public/images/misc/master-card-logo.png";

export default function CheckoutSummary() {
  const { items, itemCount, total } = useCart();

  return (
    <div className="space-y-8 bg-[#F8FAFC] h-full py-8">
      <div className="w-[90%] mx-auto py-4 gap-3">
        <Link href="/checkout">
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
          <div className="bg-white rounded-lg shadow-md p-4 w-full">
            <div className="flex items-center gap-2 mb-4 border-b border-neutral-200 pb-2">
              <h2>Método de pagamento</h2>
            </div>
            <div className="w-full flex justify-between items-center gap-8 pb-2 pt-3">
              <div className="flex items-center justify-start gap-2 text-neutral-600">
                <Image src={LogoCartao} alt="Nubank" width={20} height={20} />
                <p className="text-[14px]">Banco Nubank ******1234</p>
              </div>
              <p className="text-blue-500 underline cursor-pointer text-[14px]">
                Alterar
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 w-full">
            <div className="flex items-center gap-2 mb-4 border-b border-neutral-200 pb-2">
              <h2>Sacola</h2>
              <p className="text-neutral-300 text-[14px]">
                ({itemCount} itens)
              </p>
            </div>
            <div className="gap-8">
              <div className="space-y-4">
                {items.map((item, key) => (
                  <div className="p-2 flex gap-4 items-center" key={key}>
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
                        <h3 className="font-semibold text-neutral-900">
                          {item.name}
                        </h3>
                        <p className="text-[12px] text-neutral-600">
                          {item.producer}
                        </p>
                        <p className="text-[12px] text-neutral-400">
                          {item.category} / {item.quantity}
                        </p>
                      </div>
                    </div>

                    {/* Quantidade e ações */}
                    <div className="flex flex-col items-end justify-between gap-2">
                      {/* Controlador de quantidade */}
                      <div className="flex items-center gap-3">
                        <p className="text-primary-600">
                          {formatCurrency(item.price)}
                        </p>
                        <div className="flex items-center border border-neutral-300 rounded-lg">
                          <span className="px-3 py-1 text-center w-10 font-semibold">
                            {item.cartQuantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
            <Link href="/success">
              <button className="btn-primary">Finalizar compra</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
