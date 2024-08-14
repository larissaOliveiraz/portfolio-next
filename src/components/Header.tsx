"use client";

import { TableOfContents } from "lucide-react";
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

      <div>
        <HeaderButton title="Início" isActive={pathname === "/"} />
      </div>
    </header>
  );
}
