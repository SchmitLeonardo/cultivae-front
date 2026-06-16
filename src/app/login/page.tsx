"use client";

import React, { useState } from "react";
import { Mail, Lock, User, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import GoogleLogo from "../../../public/images/misc/google-logo.png";
import AppleLogo from "../../../public/images/misc/apple-logo.png";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [isLoading, setIsLoading] = useState(false);

  // Estado do formulário de Login
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // Estado do formulário de Cadastro
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "consumer" as "consumer" | "producer",
  });

  // Handler para mudanças no formulário de login
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  // Handler para submit de login
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Faz login usando o contexto de autenticação
      await login(loginForm.email, loginForm.password);

      // Redireciona para a home após login bem-sucedido
      router.push("/");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
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
            <span className="text-2xl text-neutral-600">Entre</span>
          </div>

          {/* Formulário de Login */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  placeholder="seu@email.com"
                  className="input-base pl-10"
                  required
                />
              </div>
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
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  placeholder="••••••••"
                  className="input-base pl-10"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end items-center text-sm">
              <a href="#" className="text-primary-600 hover:text-primary-700">
                Esqueci a senha
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center gap-2 mt-6 disabled:opacity-50"
            >
              {isLoading ? "Entrando..." : "Entrar"}
              {!isLoading && <ArrowRight className="w-4 h-4" />}
            </button>

            <p className="text-center text-neutral-600 text-sm mt-4">
              Não tem uma conta?{" "}
              <Link href="/register">
                <span className="text-primary-600 hover:text-primary-700 font-medium">
                  Cadastre-se
                </span>
              </Link>
            </p>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-neutral-200"></div>
            <span className="text-neutral-500 text-sm">ou</span>
            <div className="flex-1 h-px bg-neutral-200"></div>
          </div>

          {/* Login social */}
          <div className="space-y-3">
            <button className="btn-outline w-full ">
              <Link
                href="/"
                className="flex items-center justify-center gap-2"
              >
                <Image
                  src={GoogleLogo}
                  alt="Google Logo"
                  className="w-5 h-5 mr-2"
                />
                Continuar com Google
              </Link>
            </button>
            <button className="btn-dark w-full">
              <Link
                href="/"
                className="flex items-center justify-center gap-2"
              >
                <Image
                  src={AppleLogo}
                  alt="Apple Logo"
                  className="w-5 h-5 mr-2"
                />
                Continuar com Apple
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
