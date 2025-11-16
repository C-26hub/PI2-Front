"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowLeft } from "lucide-react"; // Importando o ícone de seta
import { Header } from "./Header"; // Reimportando o componente Header



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
      {/* Adicionando o Logo no topo do card, ajustando o tamanho para ser discreto */}
      
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