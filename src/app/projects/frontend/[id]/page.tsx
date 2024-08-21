import React from "react";
import { FrontendProjects } from "../../../../db/FrontendProjects";

type ProjectProps = {
  params: {
    id: string;
  };
};

export default function Project({ params }: ProjectProps) {
  const project = FrontendProjects.find((item) => item.id === params.id);

  return (
    <div className="text-white">
      <h1 className="font-[700] text-4xl">{project?.title}</h1>
    </div>
  );
}
