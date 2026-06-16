import { CheckCircle2, Clock } from "lucide-react";

interface OrderStatusStep {
  label: string;
  completed?: boolean;
}

interface OrderStatusProps {
  currentStep: number;
  steps?: OrderStatusStep[];
}

const DEFAULT_STEPS: OrderStatusStep[] = [
  { label: "Pedido realizado" },
  { label: "Pagamento confirmado" },
  { label: "Preparando pedido" },
  { label: "Pedido saiu para entrega" },
  { label: "Pedido entregue" },
];

export default function OrderStatus({
  currentStep,
  steps = DEFAULT_STEPS,
}: OrderStatusProps) {
  return (
    <div className="w-full p-8">
      <div className="flex items-center justify-between relative">
        {/* Linha de fundo conectora */}
        <div className="absolute top-6 left-6 right-6 h-1 bg-neutral-300 -z-10">
          <div
            className="h-full bg-green-500 transition-all duration-300"
            style={{
              width: `${currentStep > 0 ? (currentStep / (steps.length - 1)) * 100 : 0}%`,
            }}
          />
        </div>

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center flex-1 relative z-10">
            {/* Círculo com ícone */}
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full mb-2 transition-colors bg-white border-2 ${
                index <= currentStep
                  ? "border-green-500 bg-green-500"
                  : "border-neutral-300 bg-white"
              }`}
            >
              {index <= currentStep ? (
                <CheckCircle2 className="w-6 h-6 text-white" />
              ) : (
                <Clock className="w-6 h-6 text-neutral-400" />
              )}
            </div>

            {/* Label */}
            <p
              className={`text-xs sm:text-sm text-center font-medium transition-colors ${
                index <= currentStep
                  ? "text-neutral-900"
                  : "text-neutral-400"
              }`}
            >
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
