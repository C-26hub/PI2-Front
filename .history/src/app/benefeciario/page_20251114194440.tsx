"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from 'next/image'; // Necessário para o componente Logo
import Link from "next/link"; // Necessário para o componente Header

// --- Componente Logo Consolidado ---
interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

function Logo({ width = 100, height = 100, className }: LogoProps) {
  return (
    <div className={className}>
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

// --- Componente Header Consolidado ---
const navItems = [
  { name: "Painel de Controle", href: "/dashboard", active: false },
  { name: "Beneficiários", href: "/beneficiarios", active: true }, // Ativo conforme a imagem
  { name: "Ciclo das Sementes", href: "/ciclo-sementes", active: false },
  { name: "Relatórios", href: "/relatorios", active: false },
];

function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Ecosy */}
          <div className="flex-shrink-0 flex items-center">
            {/* Usando o componente Logo com um tamanho menor para o cabeçalho */}
            <Logo width={30} height={30} className="mr-2" />
            <span className="text-lg font-semibold text-green-700">Ecosy</span>
          </div>

          {/* Links de Navegação */}
          <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
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
// --- Fim do Componente Header Consolidado ---


const CadastroBeneficiario = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  const handleSubmit = () => {
    console.log("Cadastro realizado:", { nome, sobrenome, cpf });
  };

  // Função de exemplo para voltar, pode ser substituída por um router.back() real
  const handleBack = () => {
    console.log("Voltar para a página anterior");
  };

  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-[#F4F7F4]">
        <div className="px-6 w-full max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-heading font-medium tracking-tight mb-[28px]">
            Beneficiários
          </h1>
          {/* Conteúdo da Seção de Beneficiários */}
          {/* O formulário de cadastro será o conteúdo principal */}
          <div className="w-full max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      
      {/* Cabeçalho com o botão de voltar e o título */}
      <div className="flex items-center mb-6">
        {/* Botão de Voltar - Estilizado para ser discreto e alinhado ao design */}
        <button onClick={handleBack} className="p-2 mr-4 text-gray-600 hover:text-gray-800 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          {/* Título principal - Ajustado para ser menor e sem centralização */}
          <h2 className="text-xl font-bold text-gray-900">Cadastro de Novo Beneficiário</h2>
          {/* Subtítulo "Informações Pessoais" */}
          <p className="text-sm text-gray-500 mt-1">Informações Pessoais</p>
        </div>
      </div>

      {/* Campos de Input */}
      <div className="space-y-6">
        {/* Campo Nome */}
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
          <Input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            // Removido o placeholder para corresponder à imagem
            className="h-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
        </div>

        {/* Campo Sobrenome */}
        <div>
          <label htmlFor="sobrenome" className="block text-sm font-medium text-gray-700 mb-2">Sobrenome</label>
          <Input
            id="sobrenome"
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            // Removido o placeholder para corresponder à imagem
            className="h-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
        </div>

        {/* Campo CPF */}
        <div>
          <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-2">CPF</label>
          <Input
            id="cpf"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            // Removido o placeholder para corresponder à imagem
            className="h-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Botão Continuar - Alinhado à direita e com cor verde personalizada */}
      <div className="flex justify-end mt-8">
        <Button
          onClick={handleSubmit}
          // Cor de fundo e hover ajustados para um verde que se assemelha ao da imagem
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow-md"
        >
          Continuar
        </Button>
      </div>
    </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Certifique-se de exportar o componente como padrão
export default CadastroBeneficiario;