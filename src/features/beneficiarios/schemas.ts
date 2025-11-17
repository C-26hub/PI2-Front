import * as z from "zod";

// Mantemos o as const
const STATUS_VALUES = ["Ativo", "Pendente", "Inativo"] as const;

export const formSchema = z.object({
  // --- ETAPA 1: Pessoal ---
  nome: z.string().min(2, "Nome é obrigatório"),
  sobrenome: z.string().min(2, "Sobrenome é obrigatório"),
  cpf: z.string().min(11, "CPF incompleto"),

  // --- ETAPA 2: Contato ---
  telefone: z.string().min(10, "Telefone inválido"),
  endereco: z.string().min(5, "Endereço é obrigatório"),
  cidade: z.string().min(2, "Cidade é obrigatória"),
  estado: z.string().length(2, "Use a sigla (ex: PE)"),
  cep: z.string().min(8, "CEP inválido"),

  // --- ETAPA 3: Institucional ---
  associacao: z.string().optional(),
  
  // Correção 1: Removido objeto de config, usando .min(1)
  tecnicoResponsavel: z.string().min(1, "Selecione um técnico"),

  // Correção 2: Solução definitiva para o Status
  status: z.string()
    .min(1, "Selecione um status") // Garante que não está vazio
    .refine((val) => STATUS_VALUES.includes(val as any), {
      message: "Selecione um status válido (Ativo, Pendente ou Inativo)",
    }),
});

// Tipo inferido do Zod
export type BeneficiarioFormData = z.infer<typeof formSchema>;