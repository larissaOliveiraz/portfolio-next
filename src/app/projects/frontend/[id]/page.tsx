"use client";
import React from "react";
import { FrontendProjects } from "../../../../db/FrontendProjects";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  params: {
    id: string;
  };
};

export default function Project({ params }: ProjectProps) {
  const project = FrontendProjects.find((item) => item.id === params.id);

  return (
    <div className="text-white">
      <header>
        <h1 className="text-white font-[700] text-4xl">{project?.title}</h1>
        <p className="text-white/80 font-[400] text-3xl">{project?.subtitle}</p>
        <div className="w-full h-[1px] bg-white/50 rounded-full mt-5" />
      </header>

      <main className="mt-5 flex flex-col gap-10">
        <div>
          <h2 className="font-semibold text-2xl">Links</h2>
          <div className="flex items-center gap-1">
            <h3 className="font-semibold text-lg w-[5rem]">Website:</h3>
            <Link
              href={project?.website as string}
              className="text-[1.1rem] hover:bg-white/10 p-1 px-3 rounded-xl"
            >
              {project?.website}
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <h3 className="font-semibold text-lg w-[5rem]">Github:</h3>
            <Link
              href={project?.github as string}
              className="text-[1.1rem] hover:bg-white/10 p-1 px-3 rounded-xl"
            >
              {project?.github}
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">Descrição</h2>
          <p className="text-[1.1rem] mt-2">{project?.description}</p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">Imagens</h2>
          <div className="rounded-2xl overflow-hidden mt-2">
            {project?.images.map((image) => (
              <Image src={image} alt="" width={1475} height={807} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">Funcionalidades</h2>
          <div className="flex flex-col gap-2 mt-2">
            {project?.functionalities.map((func) => (
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <p className="text-[1.1rem]">{func}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
