import { Beneficiario } from "@/types/Beneficiario";

// --- NOVOS TIPOS PARA OS DETALHES ---

export interface HistoricoEntrega {
  id: string;
  data: string;
  semente: string;
  lote: string;
  quantidade: number;
  status: "Entregue" | "Devolvido";
}

export interface Observacao {
  id: string;
  data: string;
  tecnico: string;
  texto: string;
}

// Estendemos o tipo base para incluir os detalhes que só aparecem no perfil
export interface BeneficiarioDetalhado extends Beneficiario {
  telefone: string;
  endereco: string;
  cep: string;
  historico: HistoricoEntrega[];
  observacoes: Observacao[];
}

// --- MOCK DATA (LISTA GERAL) ---
const MOCK_LISTA: Beneficiario[] = [
  {
    id: "1",
    nome: "Maria Lúcia dos Santos",
    cpf: "***.123.456-**",
    cidade: "Garanhuns",
    associacao: "Assoc. Peq. Produtores Sítio Laranjeiras",
    tecnicoResponsavel: "Jonas Pereira",
    status: "Ativo",
  },
  {
    id: "2",
    nome: "José Cícero Almeida",
    cpf: "***.789.012-**",
    cidade: "Sertânia",
    associacao: "Cooperativa Agroecológica",
    tecnicoResponsavel: "Jonas Pereira",
    status: "Ativo",
  },
  {
    id: "3",
    nome: "Antônia da Silva",
    cpf: "***.345.678-**",
    cidade: "Bom Conselho",
    associacao: "-",
    tecnicoResponsavel: "Carla Medeiros",
    status: "Pendente",
  },
  {
    id: "4",
    nome: "Manoel Joaquim",
    cpf: "***.901.234-**",
    cidade: "Ouricuri",
    associacao: "Sindicato Rural",
    tecnicoResponsavel: "Marcos Andrade",
    status: "Inativo",
  },
];

// --- FUNÇÃO 1: LISTAR TODOS (Para a Tabela) ---
export const getBeneficiarios = async (): Promise<Beneficiario[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_LISTA;
};

// --- FUNÇÃO 2: OBTER DETALHES POR ID (Para o Perfil) ---
export const getBeneficiarioById = async (id: string): Promise<BeneficiarioDetalhado | null> => {

  
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log("--- DEBUG SERVICE ---");
  console.log("Buscando ID:", id);
  console.log("IDs disponíveis no Mock:", MOCK_LISTA.map(u => u.id));
  
  await new Promise((resolve) => setTimeout(resolve, 500));

  const basicUser = MOCK_LISTA.find((u) => u.id === id);

  console.log("Encontrou?", basicUser ? "Sim" : "Não");
  console.log("---------------------");

  if (!basicUser) return null;

  // Retorna os dados básicos + os dados detalhados mockados
  // (Na vida real, isso viria do banco de dados com todas as colunas)
  return {
    ...basicUser,
    telefone: "(87) 99999-8888",
    endereco: "Sítio Laranjeiras, Zona Rural",
    cep: "55290-000",
    historico: [
      { id: "101", data: "12/10/2025", semente: "Feijão", lote: "FJN-25.11", quantidade: 5, status: "Entregue" },
      { id: "102", data: "15/04/2025", semente: "Milho Crioulo", lote: "MLH-25.08", quantidade: 10, status: "Entregue" },
      { id: "103", data: "02/02/2024", semente: "Sorgo", lote: "SRG-24.01", quantidade: 5, status: "Entregue" },
    ],
    observacoes: [
      { id: "obs1", data: "12/10/2025", tecnico: "Jonas Pereira", texto: "Entrega realizada com sucesso. Agricultora relatou boa chuva na região e está otimista para o plantio." },
      { id: "obs2", data: "15/04/2025", tecnico: "Jonas Pereira", texto: "Visita técnica de rotina. Orientação sobre espaçamento de plantio do milho." },
      { id: "obs3", data: "10/01/2025", tecnico: "Carla Medeiros", texto: "Atualização cadastral realizada." },
    ]
  };
};

// --- FUNÇÃO 3: CRIAR (Para o Formulário) ---
export const createBeneficiario = async (data: any) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("MOCK CREATE:", data);
  return { success: true };
};