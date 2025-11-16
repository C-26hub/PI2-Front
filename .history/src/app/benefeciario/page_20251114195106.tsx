"use client";

import Link from "next/link";
import Image from 'next/image';

// --- Componente Logo Consolidado ---
interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

// Assumindo que o logo.svg está disponível na pasta /public
function Logo({ width = 30, height = 30, className }: LogoProps) {
  return (
    <div className={className}>
      {/* 
        ATENÇÃO: O caminho "/logo.svg" deve ser ajustado para o caminho real do seu logo.
        Para fins de demonstração, estou usando o componente Image do Next.js.
      */}
      <Image
        src="/logo.svg" 
        alt="Logo Ecosy"
        width={width}
        height={height}
      />
    </div>
  );
}

// --- Componente Header Consolidado ---
const navItems = [
  { name: "Painel de Controle", href: "/dashboard", active: false },
  { name: "Beneficiários", href: "/beneficiarios", active: true }, // Ativo conforme a imagem
  { name: "Ciclo das Sementes", href: "/ciclo-sementes", active: false },
  { name: "Relatórios", href: "/relatorios", active: false },
];

/**
 * Componente de Cabeçalho (Header)
 * 
 * Estrutura: Logo, Links de Navegação e Ícone de Perfil.
 * Estilizado com Tailwind CSS para replicar o design da imagem.
 */
function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Ecosy */}
          <div className="flex-shrink-0 flex items-center">
            <Logo width={30} height={30} className="mr-2" />
            <span className="text-lg font-semibold text-green-700">Ecosy</span>
          </div>

          {/* Links de Navegação */}
          <nav className="hidden sm:ml-6 sm:flex sm:space-x-8 h-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                  item.active
                    ? "border-b-2 border-green-600 text-gray-900"
                    : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Ícone de Perfil (MD) */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-600 text-sm font-medium text-white">
                MD
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;