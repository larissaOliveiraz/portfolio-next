"use client";

import { Contact, House, PencilRuler, TableOfContents } from "lucide-react";
import { HeaderButton } from "./HeaderButton";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-black/80 h-[calc(100vh-1.25rem)] w-[20rem] p-4 rounded-3xl m-3">
      <div className="flex items-center gap-2 mb-5">
        <TableOfContents size={24} color="white" />
        <h2 className="text-white font-[600] text-[1.5rem]">Navegação</h2>
      </div>

      <div className="flex flex-col gap-2">
        <HeaderButton title="Início" isActive={pathname === "/"} icon={House} />
        <HeaderButton
          title="Habilidades"
          isActive={pathname === "/habilities"}
          icon={PencilRuler}
          pathname="/habilities"
        />
        <HeaderButton
          title="Contato"
          isActive={pathname === "/contacts"}
          icon={Contact}
          pathname="/contacts"
        />
      </div>
    </header>
  );
}
