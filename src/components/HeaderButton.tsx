"use client";

import { ChevronDown, ChevronRight, Circle, LucideProps } from "lucide-react";
import Link from "next/link";

type HeaderButtonProps = {
  title: string;
  onExpand?: () => void;
  pathname?: string;
  isActive?: boolean;
  icon?: React.ComponentType<LucideProps>;
  subitems?: boolean;
  subitemsExpanded?: boolean;
};

export function HeaderButton({
  title,
  onExpand,
  pathname = "/",
  isActive = false,
  icon: Icon,
  subitems = false,
  subitemsExpanded = false,
}: HeaderButtonProps) {
  return (
    <Link
      onClick={onExpand}
      href={pathname}
      className={`flex gap-3 items-center w-full text-left px-3 py-1 rounded-lg ${
        !subitemsExpanded && "hover:bg-white/10"
      } ${isActive && "bg-white/20"}`}
    >
      {subitems &&
        (subitemsExpanded ? (
          <ChevronDown size={18} color="white" />
        ) : (
          <ChevronRight size={18} color="white" />
        ))}
      {Icon && <Icon size={15} color="white" />}
      <p className="text-white">{title}</p>
    </Link>
  );
}
