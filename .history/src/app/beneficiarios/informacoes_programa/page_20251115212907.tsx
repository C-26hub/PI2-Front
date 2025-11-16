"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import Link from "next/link";

// Componente Select customizado (simulado com <select> HTML)
// Movido para fora do componente principal para evitar re-renderizações desnecessárias

// Tipagem para as opções do Select
interface SelectOption {
  id: number;
  nome: string;
}

// Tipagem para as props do CustomSelect
interface CustomSelectProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, value, onChange, options }) => (
  <div>
    <label htmlFor={label} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <div className="relative">
      <select
        id={label}
        value={value}
        onChange={onChange}
          className="block w-full h-10 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md appearance-none bg-white"
      >
        <option value="" disabled>Selecione {label}</option>
          {options.map((option: SelectOption) => (
            <option key={option.id} value={option.nome}>{option.nome}</option>
          ))}
      </select>
      {/* Ícone de seta para o select */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
);


// --- Componente Principal da Página (CadastroInformacoesPrograma) ---
// Terceira etapa do cadastro: Informações do Programa
const CadastroInformacoesPrograma = () => {
  const [associacao, setAssociacao] = useState("");
  const [tecnicoResponsavel, setTecnicoResponsavel] = useState("");
  const [statusInicial, setStatusInicial] = useState("");

  const handleSave = (): void => {
    console.log("Cadastro Finalizado:", { associacao, tecnicoResponsavel, statusInicial });
    // TODO: Adicionar lógica de envio final dos dados e redirecionamento para a lista de beneficiários
  };

  // Simula a volta para a página anterior (CadastroContato)
  const handleBack = (): void => {
    // Se estiver usando Next.js Router: router.back() ou router.push('/beneficiarios/contato')
    console.log("Voltar para a página de Contato e Localização");
  };

  // Opções para Técnico Responsável (simuladas)
  const tecnicos = [
    { id: 1, nome: "João Silva" },
    { id: 2, nome: "Maria Oliveira" },
    { id: 3, nome: "Pedro Souza" },
  ];

  // Opções para Status Inicial (simuladas)
  const statusOptions = [
    { id: 1, nome: "Ativo" },
    { id: 2, nome: "Pendente" },
    { id: 3, nome: "Inativo" },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />

      {/* Conteúdo da Página */}
      <main className="flex-1 flex items-center justify-center bg-[url('/images/login-bg.jpg')] bg-cover bg-center p-4">
        <div className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
          
          {/* Cabeçalho com o botão de voltar e o título */}
          <div className="flex items-center mb-6">
            <button onClick={handleBack} className="p-2 mr-4 text-gray-600 hover:text-gray-800 rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Cadastro de Novo Beneficiário</h2>
              <p className="text-sm text-gray-500 mt-1">Informações do Programa</p>
            </div>
          </div>

          {/* Campos de Input e Select */}
          <div className="space-y-6">
            {/* Campo Associação / Cooperativa */}
            <div>
              <label htmlFor="associacao" className="block text-sm font-medium text-gray-700 mb-2">Associação / Cooperativa <span className="text-xs font-normal text-gray-500">(Opcional)</span></label>
              <Input
                id="associacao"
                type="text"
                value={associacao}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAssociacao(e.target.value)}
                className="h-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            {/* Campo Técnico Responsável (Select) */}
            <CustomSelect
              label="Técnico Responsável"
              value={tecnicoResponsavel}
              onChange={(e) => setTecnicoResponsavel(e.target.value)}
              options={tecnicos}
            />

            {/* Campo Status Inicial (Select) */}
            <CustomSelect
              label="Status Inicial"
              value={statusInicial}
              onChange={(e) => setStatusInicial(e.target.value)}
              options={statusOptions}
            />
          </div>

          {/* Botões Cancelar e Salvar Cadastro */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={(): void => console.log("Cancelar Cadastro")}
              className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
            >
              Cancelar
            </button>
            <Button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow-md"
            >
              Salvar cadastro
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CadastroInformacoesPrograma;