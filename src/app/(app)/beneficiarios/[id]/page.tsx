import { getBeneficiarioById } from "@/services/beneficiariosService";
import { Separator } from "@/components/ui/separator";

// 1. DEFINA O TIPO COMO PROMISE
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DadosCadastraisPage({ params }: PageProps) {
  // 2. FAÇA O AWAIT ANTES DE USAR
  const { id } = await params;

  // 3. USE A VARIÁVEL DESESTRUTURADA 'id'
  const b = await getBeneficiarioById(id);
  
  if (!b) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-xl font-heading font-bold text-ecosy-blue mb-1">Dados Cadastrais</h2>
        <p className="text-sm text-muted-foreground">Informações pessoais e de contato.</p>
      </div>
      <Separator />

      <div className="grid grid-cols-2 gap-y-6 gap-x-12">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">Nome Completo</p>
          <p className="text-base font-medium text-ecosy-blue">{b.nome}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">CPF</p>
          <p className="text-base font-medium text-ecosy-blue">{b.cpf}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">Telefone / WhatsApp</p>
          <p className="text-base font-medium text-ecosy-blue">{b.telefone}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">Técnico Responsável</p>
          <p className="text-base font-medium text-ecosy-blue">{b.tecnicoResponsavel}</p>
        </div>
        <div className="col-span-2 space-y-1">
          <p className="text-sm font-medium text-gray-500">Associação</p>
          <p className="text-base font-medium text-ecosy-blue">{b.associacao}</p>
        </div>
        <div className="col-span-2 space-y-1">
          <p className="text-sm font-medium text-gray-500">Endereço</p>
          <p className="text-base font-medium text-ecosy-blue">{b.endereco} - {b.cep}</p>
          <p className="text-base font-medium text-ecosy-blue">{b.cidade} - PE</p>
        </div>
      </div>
    </div>
  );
}