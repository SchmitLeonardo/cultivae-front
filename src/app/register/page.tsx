"use client";

import React, { useState } from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [isLoading, setIsLoading] = useState(false);

  // Estado do formulário de Cadastro
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "consumer" as "consumer" | "producer",
  });

  // Handler para mudanças no formulário de cadastro
  const handleSignupChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler para submit de cadastro
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (signupForm.password !== signupForm.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    setIsLoading(true);

    try {
      // Faz login com os dados de cadastro
      await login(signupForm.email, signupForm.password);

      // Redireciona para a home após cadastro bem-sucedido
      router.push("/");
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error);
      alert("Erro ao fazer cadastro. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[80%] flex">
      <div className="w-full flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Logo mobile */}
          <div className="w-full flex items-center justify-center gap-2 mb-8">
            <span className="text-2xl text-neutral-600">Cadastre-se</span>
          </div>

          {/* Formulário de Cadastro */}
          <form onSubmit={handleSignupSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Nome Completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={signupForm.name}
                  onChange={handleSignupChange}
                  placeholder="João da Silva"
                  className="input-base pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={signupForm.email}
                  onChange={handleSignupChange}
                  placeholder="seu@email.com"
                  className="input-base pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Tipo de Usuário
              </label>
              <select
                name="userType"
                value={signupForm.userType}
                onChange={handleSignupChange}
                className="input-base"
              >
                <option value="consumer">Consumidor</option>
                <option value="producer">Produtor Rural</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="password"
                  name="password"
                  value={signupForm.password}
                  onChange={handleSignupChange}
                  placeholder="••••••••"
                  className="input-base pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Confirmar Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={signupForm.confirmPassword}
                  onChange={handleSignupChange}
                  placeholder="••••••••"
                  className="input-base pl-10"
                  required
                />
              </div>
            </div>

            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-neutral-300 mt-1"
                required
              />
              <span className="text-neutral-600">
                Concordo com os{" "}
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  termos de uso
                </a>{" "}
                e{" "}
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  política de privacidade
                </a>
              </span>
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center gap-2 mt-6 disabled:opacity-50"
            >
              {isLoading ? "Cadastrando..." : "Cadastrar"}
              {!isLoading && <ArrowRight className="w-4 h-4" />}
            </button>

            <p className="text-center text-neutral-600 text-sm mt-4">
              Já tem uma conta?{" "}
              <Link href="/login">
                <span className="text-primary-600 hover:text-primary-700 font-medium">
                  Faça login
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
