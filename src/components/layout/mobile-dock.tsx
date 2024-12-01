"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  links: {
    title: string;
    icon: LucideIcon;
    href: string;
  }[];
}

export function MobileDockMenu({ links }: MobileMenuProps) {
  const pathName = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md dark:bg-gray-900 sm:hidden">
      <nav className="flex justify-around">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={cn(
              "flex flex-col items-center justify-center py-1 px-2 text-sm",
              pathName === link.href
                ? "bg-[#c10037] text-white rounded-2xl" // Rounded edges for the active menu
                : "text-gray-600 hover:border-[#c10037] hover:border dark:text-gray-400",
              "transition-all ease-in-out duration-150"
            )}
          >
            <link.icon
              className={cn(
                "h-6 w-6",
                pathName === link.href ? "text-white" : "text-gray-600 dark:text-gray-400"
              )}
            />
            <span className="text-xs">{link.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}