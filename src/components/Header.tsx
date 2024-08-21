"use client";
import {
  Circle,
  CircleDollarSign,
  Contact,
  CornerDownRight,
  House,
  PencilRuler,
  TableOfContents,
  Utensils,
} from "lucide-react";
import { HeaderButton } from "./HeaderButton";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FrontendProjects } from "../db/FrontendProjects";
import { BackendProjects } from "../db/BackendProjects";

export function Header() {
  const pathname = usePathname();
  const [frontendExpanded, setFrontendExpanded] = useState(false);
  const [backendExpanded, setBackendExpanded] = useState(false);

  useEffect(() => {
    if (
      !pathname.includes("/projects/backend") &&
      !pathname.includes("projects/frontend")
    ) {
      setBackendExpanded(false);
      setFrontendExpanded(false);
    }
  }, [pathname]);

  return (
    <header className="bg-black/80 h-[calc(100vh-1.25rem)] w-[20rem] p-4 rounded-3xl m-3">
      <div className="flex items-center gap-2 mb-5">
        <TableOfContents size={24} color="white" />
        <h2 className="text-white font-[600] text-[1.5rem]">Navegação</h2>
      </div>

      <div className="flex flex-col gap-2">
        <div className="border-b-2 border-white/50 pb-5">
          <HeaderButton
            title="Início"
            isActive={pathname === "/"}
            icon={House}
          />
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
        <div className="pt-5">
          <h2 className="text-white">Projetos</h2>
          <div className="flex flex-col gap-2 mt-2">
            <div className={`${frontendExpanded && "bg-white/10"} rounded-2xl`}>
              <HeaderButton
                title="Frontend"
                pathname="/projects/frontend"
                subitems
                subitemsExpanded={frontendExpanded}
                onExpand={() => setFrontendExpanded(!frontendExpanded)}
              />
              {frontendExpanded &&
                FrontendProjects.map((project) => (
                  <div className="ml-3">
                    <HeaderButton
                      title={project.title}
                      isActive={pathname == `/projects/frontend/${project.id}`}
                      pathname={`/projects/frontend/${project.id}`}
                      icon={CornerDownRight}
                    />
                  </div>
                ))}
            </div>

            <div className={`${backendExpanded && "bg-white/10"} rounded-2xl`}>
              <HeaderButton
                title="Backend"
                pathname="/projects/backend"
                subitems
                subitemsExpanded={backendExpanded}
                onExpand={() => setBackendExpanded(!backendExpanded)}
              />
              {backendExpanded &&
                BackendProjects.map((project) => (
                  <div className="ml-3">
                    <HeaderButton
                      title={project.title}
                      isActive={pathname == `/projects/backend/${project.id}`}
                      pathname={`/projects/backend/${project.id}`}
                      icon={CornerDownRight}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
