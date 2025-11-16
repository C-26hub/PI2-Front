"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function CadastroBeneficiario() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  const handleSubmit = () => {
    console.log("Cadastro realizado:", { nome, sobrenome, cpf });
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Cadastro de Novo Beneficiário</h2>
      <div className="mb-4">
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
        <Input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite o nome"
          className="mt-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sobrenome" className="block text-sm font-medium text-gray-700">Sobrenome</label>
        <Input
          id="sobrenome"
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Digite o sobrenome"
          className="mt-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">CPF</label>
        <Input
          id="cpf"
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="Digite o CPF"
          className="mt-2"
        />
      </div>
      <Button onClick={handleSubmit} className="w-full mt-4">
        Continuar
      </Button>
    </div>
  );
}"use client";  // Certifique-se de ter isso no topo do arquivo, como já discutimos.

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CadastroBeneficiario = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  const handleSubmit = () => {
    console.log("Cadastro realizado:", { nome, sobrenome, cpf });
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Cadastro de Novo Beneficiário</h2>
      <div className="mb-4">
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
        <Input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite o nome"
          className="mt-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sobrenome" className="block text-sm font-medium text-gray-700">Sobrenome</label>
        <Input
          id="sobrenome"
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Digite o sobrenome"
          className="mt-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">CPF</label>
        <Input
          id="cpf"
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="Digite o CPF"
          className="mt-2"
        />
      </div>
      <Button onClick={handleSubmit} className="w-full mt-4">
        Continuar
      </Button>
    </div>
  );
};

// Certifique-se de exportar o componente como padrão
export default CadastroBeneficiario;