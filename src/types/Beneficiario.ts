export type BeneficiarioStatus = "Ativo" | "Inativo" | "Pendente";

export interface Beneficiario {
  id: string;
  nome: string;
  cpf: string; // Ex: "***.123.456-**"
  cidade: string;
  associacao: string;
  tecnicoResponsavel: string;
  status: BeneficiarioStatus;
}