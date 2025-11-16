"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header"; // Mantendo a importação do Header
import Link from "next/link"; // Para o botão de voltar

// Assumindo que o Select é um componente de UI que você tem
// Se não tiver, o código abaixo usará um <select> HTML padrão
// import { Select } from "@/components/ui/select"; 

// --- Componente Principal da Página (CadastroContato) ---
// Segunda etapa do cadastro: Contato e Localização
const CadastroContato = () => {
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmit = () => {
    console.log("Cadastro de Contato e Localização concluído:", { telefone, cep, endereco, cidade, estado });
    // TODO: Adicionar lógica de navegação para a próxima etapa ou finalização
  };

  // Simula a volta para a página anterior (CadastroBeneficiario)
  const handleBack = () => {
    // Se estiver usando Next.js Router: router.back() ou router.push('/beneficiarios')
    console.log("Voltar para a página de Dados Pessoais");
  };

  // Lista de estados (simplificada para o exemplo)
  const estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
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
              <p className="text-sm text-gray-500 mt-1">Contato e Localização</p>
            </div>
          </div>

          {/* Campos de Input */}
          <div className="space-y-6">
            {/* Campo Telefone Principal */}
            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">Telefone Principal</label>
              <Input
                id="telefone"
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(__) _____-_____"
                className="h-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            {/* Campo CEP */}
            <div>
              <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-2">CEP</label>
              <Input
                id="cep"
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="h-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            {/* Campo Endereço (Rua / Sítio) */}
            <div>
              <label htmlFor="endereco" className="block text-sm font-medium text-gray-700 mb-2">Endereço (Rua / Sítio)</label>
              <Input
                id="endereco"
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                className="h-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            {/* Campo Cidade */}
            <div>
              <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-2">Cidade</label>
              <Input
                id="cidade"
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                className="h-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            {/* Campo Estado (Select) */}
            <div>
              <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
              <div className="relative">
                <select
                  id="estado"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  className="block w-full h-10 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md appearance-none"
                >
                  <option value="" disabled>Selecione o Estado</option>
                  {estados.map((uf) => (
                    <option key={uf} value={uf}>{uf}</option>
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

export default CadastroContato;