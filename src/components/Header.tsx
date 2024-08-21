"use client";

import {
  CircleDollarSign,
  Contact,
  House,
  PencilRuler,
  TableOfContents,
  Utensils,
} from "lucide-react";
import { HeaderButton } from "./HeaderButton";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [frontendExpanded, setFrontendExpanded] = useState(false);
  const [backendExpanded, setBackendExpanded] = useState(false);

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
          <HeaderButton
            title="Projects"
            isActive={pathname == "/projects"}
            subitems
            subitemsExpanded={projectsExpanded}
            onExpand={() => setProjectsExpanded(!projectsExpanded)}
            pathname="/projects"
          />
          {projectsExpanded && (
            <div className="ml-3 flex flex-col gap-2 mt-2">
              <div>
                <HeaderButton
                  title="Frontend"
                  pathname="/projects/frontend"
                  isActive={pathname == "/projects/frontend"}
                  subitems
                  subitemsExpanded={frontendExpanded}
                  onExpand={() => setFrontendExpanded(!frontendExpanded)}
                />
                {frontendExpanded && (
                  <div className="ml-3">
                    <HeaderButton
                      title="Finance Next"
                      isActive={pathname == "/projects/frontend/finance-next"}
                      pathname="/projects/frontend/finance-next"
                      icon={CircleDollarSign}
                    />
                  </div>
                )}
              </div>

              <div>
                <HeaderButton
                  title="Backend"
                  pathname="/projects/backend"
                  isActive={pathname == "/projects/backend"}
                  subitems
                  subitemsExpanded={backendExpanded}
                  onExpand={() => setBackendExpanded(!backendExpanded)}
                />
                {backendExpanded && (
                  <div className="ml-3">
                    <HeaderButton
                      title="Delivery Spring"
                      isActive={pathname == "/projects/backend/delivery-spring"}
                      pathname="/projects/backend/delivery-spring"
                      icon={Utensils}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
