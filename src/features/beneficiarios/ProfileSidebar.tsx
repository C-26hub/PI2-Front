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
                ? "bg-[#DAF481]" 
                : "hover:bg-gray-50 hover:bg-[#E5E5E5]" 
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}