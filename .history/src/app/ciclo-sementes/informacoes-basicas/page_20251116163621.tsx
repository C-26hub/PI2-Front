"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";

// Componente Select customizado (simulado com <select> HTML)
// Reutilizando a tipagem e estrutura do CustomSelect anterior
interface SelectOption {
  id: number;
  nome: string;
}

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
          className="block w-full h-10 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md appearance-none bg-gray-50"
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


// Função para gerar um código de lote simples (ex: LOTE-20251116-1234)
const generateLoteCode = (): string => {
  const now = new Date();
  const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
  const randomPart = Math.floor(1000 + Math.random() * 9000); // 4 dígitos aleatórios
  return `LOTE-${datePart}-${randomPart}`;
};

// --- Componente Principal da Página (CadastroLoteSementes) ---
// Primeira etapa do cadastro de Lote de Sementes: Informações Básicas
const CadastroLoteSementes = () => {
  const router = useRouter();
  const [tipoSemente, setTipoSemente] = useState("");
  const [quantidadeTotal, setQuantidadeTotal] = useState("");
  
  // O código do lote é automático e apenas exibido
  const codigoLote = generateLoteCode(); 

  const handleSubmit = (): void => {
    console.log("Informações Básicas do Lote:", { tipoSemente, codigoLote, quantidadeTotal });
    // TODO: Navegar para a próxima etapa do cadastro de lote
    // router.push("/ciclo-sementes/proxima-etapa");
  };

  const handleBack = (): void => {
    // Volta para a página anterior (provavelmente a lista de lotes ou painel)
    router.back(); 
  };

  // Opções para Tipo de Semente (simuladas)
  const tiposSemente = [
    { id: 1, nome: "Milho Híbrido" },
    { id: 2, nome: "Feijão Crioulo" },
    { id: 3, nome: "Soja Transgênica" },
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
              <h2 className="text-xl font-bold text-gray-900">Cadastrar Novo Lote de Sementes</h2>
              <p className="text-sm text-gray-500 mt-1">Informações Básicas</p>
            </div>
          </div>

          {/* Campos de Input e Select */}
          <div className="space-y-6">
            
            {/* Campo Tipo de Semente (Select) */}
            <CustomSelect
              label="Tipo de Semente"
              value={tipoSemente}
              onChange={(e) => setTipoSemente(e.target.value)}
              options={tiposSemente}
            />

            {/* Campo Código do Lote (Automático) */}
            <div>
              <label htmlFor="codigoLote" className="block text-sm font-medium text-gray-700 mb-2">Código do Lote (Automático)</label>
              <Input
                id="codigoLote"
                type="text"
                value={codigoLote}
                disabled // Campo desabilitado, conforme a imagem
                className="h-10 border-gray-300 focus:border-green-500 focus:ring-green-500 bg-gray-100 text-gray-500" // Estilo para campo desabilitado
              />
            </div>

            {/* Campo Quantidade Total (kg) */}
            <div>
              <label htmlFor="quantidadeTotal" className="block text-sm font-medium text-gray-700 mb-2">Quantidade Total (kg)</label>
              <Input
                id="quantidadeTotal"
                type="number" // Tipo numérico para quantidade
                value={quantidadeTotal}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantidadeTotal(e.target.value)}
                className="h-10 border-gray-300 focus:border-green-500 focus:ring-green-500 bg-gray-50"
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

export default CadastroLoteSementes;