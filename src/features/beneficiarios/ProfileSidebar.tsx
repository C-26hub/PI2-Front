"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { User, History, ClipboardList } from "lucide-react";

interface ProfileSidebarProps {
  beneficiarioId: string;
}

export function ProfileSidebar({ beneficiarioId }: ProfileSidebarProps) {
  const pathname = usePathname();
  const baseUrl = `/beneficiarios/${beneficiarioId}`;

  const items = [
    { href: baseUrl, label: "Dados Cadastrais", icon: User, exact: true },
    { href: `${baseUrl}/historico`, label: "Histórico", icon: History },
    { href: `${baseUrl}/observacoes`, label: "Observações", icon: ClipboardList },
  ];

  return (
    <nav className="flex flex-col space-y-1">
      {items.map((item) => {
        // Lógica para saber se está ativo
        const isActive = item.exact 
          ? pathname === item.href 
          : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors",
              isActive
                ? "bg-green-50 text-[#4FA26F] border-l-4 border-[#4FA26F]" // Estilo Ativo
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900" // Estilo Inativo
            )}
          >
            <item.icon className={cn("h-4 w-4", isActive ? "text-[#4FA26F]" : "text-gray-400")} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}