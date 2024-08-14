"use client";

import { ChevronDown, ChevronRight, Circle } from "lucide-react";

type HeaderButtonProps = {
  title: string;
  action: () => void;
  subitems?: boolean;
  subitemsExpanded?: boolean;
};

export function HeaderButton({
  title,
  action,
  subitems = false,
  subitemsExpanded = false,
}: HeaderButtonProps) {
  return (
    <button
      onClick={action}
      className="flex gap-3 items-center w-full text-left px-3 py-1 rounded-lg hover:bg-white/10"
    >
      {subitems ? (
        subitemsExpanded ? (
          <ChevronDown size={18} color="white" />
        ) : (
          <ChevronRight size={18} color="white" />
        )
      ) : (
        <Circle size={15} color="white" fill="white" />
      )}
      <p className="text-white">{title}</p>
    </button>
  );
}
