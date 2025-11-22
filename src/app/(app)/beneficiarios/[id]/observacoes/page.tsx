import { getBeneficiarioById } from "@/services/beneficiariosService";
import { Separator } from "@/components/ui/separator";
import { User } from "lucide-react";

// 1. TIPO PROMISE
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ObservacoesPage({ params }: PageProps) {
  // 2. AWAIT PARAMS
  const { id } = await params;

  // 3. USE O ID
  const b = await getBeneficiarioById(id);
  
  if (!b) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-xl font-heading font-bold text-ecosy-blue mb-1">Observações de Campo</h2>
        <p className="text-sm text-muted-foreground">Notas registradas pelos técnicos durante visitas.</p>
      </div>
      <Separator />

      <div className="space-y-6">
        {b.observacoes.map((obs) => (
          <div key={obs.id} className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <User className="w-4 h-4 text-gray-500" />
              </div>
            </div>
            <div className="flex-1 bg-gray-50 p-4 rounded-lg border">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-ecosy-blue text-sm">{obs.tecnico}</span>
                <span className="text-xs text-muted-foreground">{obs.data}</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {obs.texto}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}