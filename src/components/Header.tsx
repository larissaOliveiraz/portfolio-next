"use client";

import { TableOfContents } from "lucide-react";
import { HeaderButton } from "./HeaderButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Header() {
  const router = useRouter();
  const [expandField, setExpandField] = useState(false);

  return (
    <header className="bg-black/80 h-screen w-[15rem] p-4">
      <div className="flex items-center gap-2 mb-5">
        <TableOfContents size={24} color="white" />
        <h2 className="text-white font-[600] text-[1.5rem]">Navegação</h2>
      </div>

      <div>
        <HeaderButton title="Início" action={() => router.push("/")} />
      </div>
    </header>
  );
}
