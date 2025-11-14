import { Beneficiario } from "@/types/Beneficiario";

export const getBeneficiarios = async (): Promise<Beneficiario[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
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
};