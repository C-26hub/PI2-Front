"use client";

import { useState } from "react";
import { User, LogOut } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

// --- Componente Logo Consolidado ---
interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

// Assumindo que o logo.svg está disponível na pasta /public
function Logo({ width = 100, height = 100, className }: LogoProps) {
  return (
    <div className={className}>
      {/* 
        ATENÇÃO: O caminho "/logo.svg" deve ser ajustado para o caminho real do seu logo.
      */}
      <Image
        src="/logo.svg" 
        alt="Logo Ecosy"
        width={width}
        height={height}
        className="mx-auto my-4" 
      />
    </div>
  );
}

// --- Componente ProfileDropdown (Novo) ---
function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // Dados mockados para o perfil
  const user = {
    name: "Ana Cecília",
    email: "ana.cecilia@ipa.pe.gov.br",
    role: "GESTOR",
    initials: "AC",
  };

  return (
    <div className="relative">
      {/* Botão/Ícone de Perfil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex-shrink-0 focus:outline-none"
      >
        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-600 text-sm font-medium text-white">
          {user.initials}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <p className="font-bold text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
            <p className="mt-2 text-xs font-bold text-gray-900">{user.role}</p>
          </div>
          
          <div className="py-1">
            {/* Link Meu Perfil */}
            <Link href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <User className="w-4 h-4 mr-3 text-gray-500" />
              Meu Perfil
            </Link>

            {/* Link Sair */}
            <button 
              onClick={() => console.log("Sair")}
              className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Sair
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

// --- Componente Header Consolidado ---
const navItems = [
  { name: "Painel de Controle", href: "/dashboard", active: false },
  { name: "Beneficiários", href: "/beneficiarios", active: true }, // Ativo para a página de Beneficiários
  { name: "Ciclo das Sementes", href: "/ciclo-sementes", active: false },
  { name: "Relatórios", href: "/relatorios", active: false },
  { name: "Configurações", href: "/configuracoes", active: false },
];

/**
 * Componente de Cabeçalho (Header)
 * 
 * Estrutura: Logo, Links de Navegação e Ícone de Perfil.
 * Estilizado com Tailwind CSS para replicar o design da imagem.
 * 
 * Correções aplicadas:
 * 1. Ajuste da altura do header para 'h-20' (80px) para dar mais espaço vertical.
 * 2. Uso de 'flex-1' no nav para centralizar os links de navegação.
 * 3. Ajuste do estilo do link ativo para usar 'text-green-600' e 'font-bold' para maior destaque.
 * 4. Ajuste do estilo do logo para corresponder ao layout da imagem.
 */
export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Aumentando a altura para h-20 (80px) para corresponder ao visual da imagem */}
        <div className="flex justify-between items-center h-20"> 
          
          {/* 1. Logo Ecosy (Esquerda) */}
          <div className="flex-shrink-0 flex items-center">
            {/* O logo na imagem parece ser um ícone + texto. Ajustando o Logo para ser apenas o ícone. */}
            {/* O texto "Ecosy" na imagem parece ser parte do logo ou um texto separado. Vamos usar o Logo com o texto. */}
            <div className="flex items-center space-x-1">
                {/* O logo na imagem é pequeno e seguido pelo texto "Ecosy". */}
                <Image
                    src="/logo-icon.svg" // Assumindo que você tem um ícone separado, se não, use o logo completo.
                    alt="Ecosy Icon"
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                />
                <span className="text-xl font-bold text-green-600">Ecosy</span>
            </div>
          </div>

          {/* 2. Links de Navegação (Centro) - Usando flex-1 para ocupar o espaço central e justificar o conteúdo no centro */}
          <nav className="hidden sm:flex sm:flex-1 sm:justify-center sm:space-x-8 h-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm transition-colors ${
                  item.active
                    ? "border-b-2 border-green-600 text-gray-900 font-bold" // Destaque para o item ativo
                    : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 font-medium"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* 3. Ícone de Perfil (Direita) */}
          <div className="flex items-center flex-shrink-0">
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}

// Exportando o componente principal para que o usuário possa usá-lo
export { Logo, ProfileDropdown };

// O componente CadastroBeneficiario não precisa ser alterado, mas vamos incluí-lo para referência.
/*
const CadastroBeneficiario = () => {
  // ... código original ...
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header /> 
      // ... restante do código ...
    </div>
  );
};

export default CadastroBeneficiario;
*/