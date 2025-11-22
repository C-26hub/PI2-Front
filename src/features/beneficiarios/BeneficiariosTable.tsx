"use client";

import { Edit, Eye } from "lucide-react";
import { Beneficiario, BeneficiarioStatus } from "@/types/Beneficiario";
import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BeneficiariosTableProps {
  data: Beneficiario[];
}

const getStatusColor = (status: BeneficiarioStatus) => {
  switch (status) {
    case "Ativo":
      return "bg-[#D3EB76]"; 
    case "Pendente":
      return "bg-[#CCCCCC]";
    case "Inativo":
      return "bg-[#FB5555]";
    default:
      return "bg-gray-400";
  }
};

export function BeneficiariosTable({ data }: BeneficiariosTableProps) {
  const router = useRouter();

  const handleRowClick = (id: string) => {
    router.push(`/beneficiarios/${id}`);
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-ecosy-blue">Nome Completo</TableHead>
            <TableHead className="font-bold text-ecosy-blue">CPF</TableHead>
            <TableHead className="font-bold text-ecosy-blue">Cidade</TableHead>
            <TableHead className="font-bold text-ecosy-blue">Associação</TableHead>
            <TableHead className="font-bold text-ecosy-blue">Técnico</TableHead>
            <TableHead className="font-bold text-ecosy-blue">Status</TableHead>
            <TableHead className="text-right font-bold text-ecosy-blue">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow 
              key={item.id} 
              className="cursor-pointer hover:bg-gray-50"
              onClick={() => handleRowClick(item.id)}
            >
              <TableCell className="font-medium">{item.nome}</TableCell>
              <TableCell>{item.cpf}</TableCell>
              <TableCell>{item.cidade}</TableCell>
              <TableCell className="text-muted-foreground">{item.associacao}</TableCell>
              <TableCell>{item.tecnicoResponsavel}</TableCell>
              <TableCell>
                <Badge className={`${getStatusColor(item.status)} text-black border-none`}>
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div 
                  className="flex justify-end gap-2" 
                  onClick={(e) => e.stopPropagation()} 
                >
                  <Button variant="ghost" size="icon" title="Editar Cadastro">
                    <Edit className="h-4 w-4 text-ecosy-blue" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    title="Ver Perfil"
                    // O botão "Ver Perfil" faz a mesma coisa que clicar na linha, 
                    // então podemos chamar a função manualmente aqui também
                    onClick={() => handleRowClick(item.id)}
                  >
                    <Eye className="h-4 w-4 text-ecosy-blue" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}