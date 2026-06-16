"use client";

import React from "react";
import { ShoppingCart, User, Menu, X, LogOut } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/images/misc/logo.png";

export const Header: React.FC = () => {
  const { itemCount } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F3F8F5]">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo e marca */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src={Logo} alt="Logo Cultivaê" />
        </Link>

        {/* Ícones de ação */}
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              {/* Carrinho - Exibido quando autenticado */}
              <Link
                href="/cart"
                className="relative p-2 text-neutral-700 hover:text-primary-600 transition-colors"
                aria-label="Carrinho de compras"
              >
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* Perfil do usuário - Exibido quando autenticado */}
              <button
                onClick={logout}
                className="p-2 text-neutral-700 hover:text-primary-600 transition-colors"
                aria-label="Sair da conta"
                title="Clique para sair"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </>
          ) : (
            <>
              {/* Botões de autenticação - Exibidos quando não autenticado */}
              <Link href="/login" className="btn-secondary">
                Criar conta
              </Link>
              <Link href="/login" className="btn-primary">
                Entrar
              </Link>
            </>
          )}

          {/* Botão menu mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-neutral-50">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-neutral-700 hover:text-primary-600 transition-colors font-medium py-2"
            >
              Produtos
            </Link>
            <Link
              href="/about"
              className="block text-neutral-700 hover:text-primary-600 transition-colors font-medium py-2"
            >
              Sobre
            </Link>
            <Link
              href="/contact"
              className="block text-neutral-700 hover:text-primary-600 transition-colors font-medium py-2"
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
