// src/services/lotesService.ts
import { Lote } from "@/types/Lote";

export const getLotes = async (): Promise<Lote[]> => {
  // Simula delay de rede
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: "1",
      codigo: "FJN-25.11",
      semente: "Feijão",
      origem: "Banco Comunitário de Garanhuns",
      quantidade: 500,
      dataCadastro: "01/10/2025",
      status: "Em Distribuição",
    },
    {
      id: "2",
      codigo: "SRG-25.12",
      semente: "Sorgo",
      origem: "Compra Governamental (NF 12345)",
      quantidade: 2000,
      dataCadastro: "09/10/2025",
      status: "Planejamento",
    },
    {
      id: "3",
      codigo: "MLH-25.08",
      semente: "Milho Crioulo",
      origem: "Banco de Sementes de Sertânia",
      quantidade: 1500,
      dataCadastro: "15/04/2025",
      status: "Concluído",
    },
    {
      id: "4",
      codigo: "FV-25.09",
      semente: "Fava",
      origem: "Compra Governamental",
      quantidade: 300,
      dataCadastro: "20/08/2025",
      status: "Cancelado",
    },
  ];
};