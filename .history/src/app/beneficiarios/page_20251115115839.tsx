"use client";

import { useState } from "react";
import { ArrowLeft, Menu, LogOut, User } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

// --- MOCKANDO DEPENDÊNCIAS DE UI (Assumindo Shadcn/ui ou similar) ---
// O usuário precisa garantir que estes componentes existam em seu projeto.
const Input = ({ className, ...props }) => <input className={`border p-2 rounded ${className}`} {...props} />;
const Button = ({ className, children, ...props }) => <button className={`bg-green-600 text-white p-2 rounded ${className}`} {...props}>{children}</button>;
const Logo = ({ width, height }) => <div style={{ width, height }} className="text-xl font-bold text-green-600">Ecosy</div>;
const cn = (...classes) => classes.filter(Boolean).join(' ');
const usePathname = () => "/beneficiarios"; // Mockando para simular a página atual

// Mockando DropdownMenu e Avatar
const DropdownMenu = ({ children }) => <div className="relative">{children}</div>;
const DropdownMenuTrigger = ({ children }) => children;
const DropdownMenuContent = ({ children }) => <div className="absolute right-0 mt-2 bg-white shadow-lg z-50">{children}</div>;
const DropdownMenuLabel = ({ children }) => <div className="p-2 font-bold">{children}</div>;
const DropdownMenuSeparator = () => <div className="h-px bg-gray-200 my-1" />;
const DropdownMenuItem = ({ children, asChild, className }) => <div className={`p-2 hover:bg-gray-100 ${className}`}>{children}</div>;
const Avatar = ({ children }) => <div className="rounded-full bg-gray-300 h-10 w-10 flex items-center justify-center">{children}</div>;
const AvatarFallback = ({ children }) => children;
// --- FIM DOS MOCKS ---

// --- NOVO COMPONENTE HEADER (Fornecido pelo usuário) ---
const gestorLinks = [
  { href: "/dashboard", label: "Painel de Controle" },
  { href: "/beneficiarios", label: "Beneficiários" },
  { href: "/lotes", label: "Ciclo de Sementes" },
  { href: "/relatorios", label: "Relatórios" },
  { href: "/configuracoes", label: "Configurações" },
];

export function Header() {
  const pathname = usePathname();

  // --- DADOS MOCKADOS ---
  const user = {
    name: "Ana Cecília",
    email: "ana.cecilia@ipa.pe.gov.br",
    role: "gestor" as "gestor" | "tecnico",
  };

  const userInitials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  const navLinks = user.role === "gestor" ? gestorLinks : gestorLinks; // Mantendo gestorLinks para o exemplo

  return (
    // O Header na imagem de referência não tem max-w-[1200px] e sim largura total.
    // Ajustando para largura total e centralizando o conteúdo interno.
    <header className="border-b bg-white w-full">
        <div className="flex h-[80px] items-center max-w-7xl mx-auto px-6">
            <Link href="/dashboard">
                <Logo width={120} height={50} />
            </Link>

            {/* Menu de Navegação Dinâmico */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 ml-6 h-full">
                {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);

                return (
                    <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                        // --- ESTILIZAÇÃO BASE MANTIDA ---
                        "relative h-full flex items-center text-sm font-medium transition-colors text-[#2F2F2F]",               
                        // --- A ANIMAÇÃO DA LINHA ---
                        "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#4D8965] after:transition-all after:duration-300", // Ajustando bottom-5 para bottom-0 para alinhamento correto
                        
                        isActive
                        ? "after:w-full font-semibold text-green-600" // Usando green-600 como cor de destaque
                        : "after:w-0 hover:after:w-full hover:text-green-600"
                    )}
                    >
                    {link.label}
                    </Link>
                );
                })}
            </nav>

            <div className="flex-1" />

            {/* Menu do Usuário */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-11 w-11 rounded-[16px] bg-[#4FA26F] hover:bg-[#266940] text-[20px] font-light cursor-pointer text-white"
                >
                    <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-transparent font-heading text-white">
                        {userInitials}
                    </AvatarFallback>
                    </Avatar>
                </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none font-heading">
                        {user.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                    </p>
                    <p className="text-xs font-bold text-green-600 uppercase mt-1">
                        {user.role}
                    </p>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/perfil">
                    <User className="mr-2 h-4 w-4" />
                    <span>Meu Perfil</span>
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="cursor-pointer text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </header>
  );
}

// --- Componente Principal da Página (CadastroBeneficiario) ---
const CadastroBeneficiario = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  const handleSubmit = () => {
    console.log("Cadastro realizado:", { nome, sobrenome, cpf });
  };

  const handleBack = () => {
    console.log("Voltar para a página anterior");
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* 1. Header Corrigido */}
      <Header /> 

      {/* 2. Conteúdo da Página */}
      <main className="flex-1 flex items-center justify-center bg-[url('/images/login-bg.jpg')] bg-cover bg-center p-4">
        <div className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
          
          {/* Cabeçalho com o botão de voltar e o título */}
          <div className="flex items-center mb-6">
            <button onClick={handleBack} className="p-2 mr-4 text-gray-600 hover:text-gray-800 rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Cadastro de Novo Beneficiário</h2>
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
                className="h-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Botão Continuar */}
          <div className="flex justify-end mt-8">
            <Button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow-md"
            >
              Continuar
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

// EXPORTAÇÃO PADRÃO CORRIGIDA: O componente principal da página deve ser o default export.
export default CadastroBeneficiario