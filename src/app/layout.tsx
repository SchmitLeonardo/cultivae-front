import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { Layout } from "@/components/common/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cultivaê - Agricultura Familiar",
  description:
    "Plataforma digital para conectar pequenos produtores rurais a consumidores finais",
  keywords: ["agricultura", "produtos orgânicos", "produtor rural", "agricultura familiar"],
  authors: [{ name: "Cultivaê" }],
  openGraph: {
    title: "Cultivaê - Agricultura Familiar",
    description: "Conectando produtores rurais a consumidores finais",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {/* AuthProvider para gerenciar autenticação global */}
        <AuthProvider>
          {/* CartProvider para acesso global ao carrinho */}
          <CartProvider>
            {/* Layout global com Header e Footer */}
            <Layout>{children}</Layout>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
