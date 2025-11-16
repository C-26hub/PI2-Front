"use client";

import { useState } from "react";
import { useRouter } from "next/router"; // Importando o useRouter do Next.js
import { User, LogOut, ArrowLeft } from "lucide-react"; // Adicionando ArrowLeft
import Link from "next/link";
import Image from 'next/image';
import { Input } from "@/components/ui/input"; // Assumindo que o Input é importado de algum lugar
import { Button } from "@/components/ui/button"; // Assumindo que o Button é importado de algum lugar
import { Header } from "@/components/layout/Header"; // Importando o Header corretamente

// --- Componente Principal da Página (CadastroBeneficiario) ---
const CadastroBeneficiario = () => {
  const router = useRouter(); // Criando a instância do useRouter
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmit = () => {
    // Exibe os dados no console, mas você pode fazer qualquer ação adicional aqui
    console.log("Cadastro realizado:", { nome, sobrenome, cpf, telefone, cep, endereco, cidade, estado });

    // Navega para a nova página, substituindo "/nova-pasta" pelo caminho correto
    router.push("/nova-pasta"); // Aqui é onde você vai ser redirecionado após o cadastro
  };

  const handleBack = () => {
    console.log("Voltar para a página anterior");
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header /> {/* Agora importado corretamente */}

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
            {/* Campo Telefone */}
            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">Telefone Principal</label>
              <Input
                id="telefone"
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="h-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
                placeholder="(XX) XXXXX-XXXX"
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
                placeholder="XXXXX-XXX"
              />
            </div>

            {/* Campo Endereço */}
            <div>
              <label htmlFor="endereco" className="block text-sm font-medium text-gray-700 mb-2">Endereço (Rua / Sítio)</label>
              <Input
                id="endereco"
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                className="h-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
                placeholder="Rua Exemplo"
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
                placeholder="Cidade Exemplo"
              />
            </div>

            {/* Campo Estado */}
            <div>
              <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
              <Input
                id="estado"
                type="text"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                className="h-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
                placeholder="Estado Exemplo"
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

export default CadastroBeneficiario;
