"use client";

import { ChevronDown, ChevronRight, Circle } from "lucide-react";
import Link from "next/link";

type HeaderButtonProps = {
  title: string;
  onExpand?: () => void;
  pathname?: string;
  isActive: boolean;
  subitems?: boolean;
  subitemsExpanded?: boolean;
};

export function HeaderButton({
  title,
  onExpand,
  pathname = "/",
  isActive,
  subitems = false,
  subitemsExpanded = false,
}: HeaderButtonProps) {
  return subitems ? (
    <button
      onClick={onExpand}
      className={`flex gap-3 items-center w-full text-left px-3 py-1 rounded-lg hover:bg-white/10 ${
        isActive && "bg-white/20"
      }`}
    >
      {subitemsExpanded ? (
        <ChevronDown size={18} color="white" />
      ) : (
        <ChevronRight size={18} color="white" />
      )}
      <p className="text-white">{title}</p>
    </button>
  ) : (
    <Link
      href={pathname}
      className={`flex gap-3 items-center w-full text-left px-3 py-1 rounded-lg hover:bg-white/10 ${
        isActive && "bg-white/20"
      }`}
    >
      <Circle size={15} fill="white" />
      <p className="text-white">{title}</p>
    </Link>
  );
}
