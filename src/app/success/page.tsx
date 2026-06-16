"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/utils/formatters";
import { ChevronLeft, ArrowRight } from "lucide-react";
import LogoCartao from "../../../public/images/misc/master-card-logo.png";
import moment from "moment";
import OrderStatus from "@/components/ui/OrderStatus";

export default function CheckoutSuccess() {
  const { items, itemCount, total } = useCart();

  return (
    <div className="space-y-8 bg-[#F8FAFC] h-full py-8">
      <div className="w-[90%] mx-auto py-4 gap-3 text-center">
        <h1 className="text-[28px] font-bold">Pedido confirmado!</h1>
        <p className="text-neutral-400 text-[18px]">
          Pedido #12345 realizado em {moment().format("DD/MM/YYYY")} às{" "}
          {moment().format("HH:mm")}h
        </p>
      </div>
      <div className="w-[90%] mx-auto">
        <OrderStatus currentStep={2} />
      </div>
      <Link href="/">
        <p className="text-green-500 hover:text-green-600 text-[18px] text-center w-full p-6">
          Ir para a tela inicial
        </p>
      </Link>
      <div className="space-y-4 w-[90%] mx-auto py-4 flex items-start justify-between gap-3">
        {/* Formas de pagamento */}
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="bg-white rounded-lg shadow-md p-4 w-full">
            <div className="flex items-center gap-2 mb-4 border-b border-neutral-200 pb-2">
              <h2>Resumo da Compra</h2>
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
          <div className="bg-white rounded-lg shadow-md p-4 w-full">
            <h2 className="border-b border-neutral-200 pb-2">
              Resumo de valores
            </h2>
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
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 w-full">
            <div className="bg-white rounded-lg shadow-md p-4 w-full">
              <div className="flex items-center gap-2 mb-4 border-b border-neutral-200 pb-2">
                <h2>Informações de entrega</h2>
              </div>
              <p className="text-neutral-500 text-[14px] p-2">
                Rua Amora 28, apto 43, Abobrinha, RS, 99999-999, Brasil
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-full">
              <div className="flex items-center gap-2 mb-4 border-b border-neutral-200 pb-2">
                <h2>Método de pagamento</h2>
              </div>
              <div className="w-full flex justify-between items-center gap-8 pb-2 pt-3 text-green-500 hover:text-green-600">
                <div className="flex items-center justify-start gap-2">
                  <Image src={LogoCartao} alt="Nubank" width={20} height={20} />
                  <p className="text-[14px]">Banco Nubank ******1234</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
