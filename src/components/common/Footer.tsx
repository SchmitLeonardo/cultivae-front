"use client";

import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/misc/logo.png";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F3F8F5]">
      {/* Conteúdo principal do footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo e marca */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Image src={Logo} alt="Logo Cultivaê" />
            </Link>
            <p className="text-neutral-400 text-sm">
              © {currentYear} Leonardo Borges. Trabalho de Conclusão de Curso.
              Todos os direitos reservados.
            </p>
          </div>

          {/* Links úteis */}
          <div className="space-y-4">
            <h3 className="font-semibold text-neutral-400">Sobre</h3>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary-500 transition-colors"
                >
                  Institucional
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-500 transition-colors"
                >
                  Fale conosco
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-500 transition-colors"
                >
                  Conta e segurança
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary-500 transition-colors"
                >
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações de contato */}
          <div className="space-y-4">
            <h3 className="font-semibold text-neutral-400">Produtores</h3>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary-500 transition-colors"
                >
                  Como funciona
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-500 transition-colors"
                >
                  Cadastre seus produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-500 transition-colors"
                >
                  Vantagens
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-neutral-400">Entregadores</h3>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary-500 transition-colors"
                >
                  Como funciona
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-500 transition-colors"
                >
                  Seja um entregador Cultivaê
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex items-center justify-end gap-2">
          <button onClick={() => {}} className="btn-secondary">
            Criar conta
          </button>
          <button onClick={() => {}} className="btn-primary">
            Entrar
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
