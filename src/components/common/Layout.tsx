import React, { ReactNode } from "react";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      {/* Header fixo no topo */}
      <Header />

      {/* Conteúdo principal - cresce para preencher espaço disponível */}
      <main className="flex-1 mx-auto w-full">
        {children}
      </main>

      {/* Footer no rodapé */}
      <Footer />
    </div>
  );
};

export default Layout;
