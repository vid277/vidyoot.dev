"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconExchange,
  IconHome,
  IconArticle,
  IconTerminal2,
  IconBrandSpotify,
} from "@tabler/icons-react";

export function FloatingDockHome() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-800 dark:text-neutral-200" />
      ),
      href: "/",
    },
    {
      title: "Blog",
      icon: (
        <IconArticle className="h-full w-full text-neutral-800 dark:text-neutral-200" />
      ),
      href: "#",
    },
    {
      title: "Music",
      icon: (
        <IconBrandSpotify className="h-full w-full text-neutral-800 dark:text-neutral-200" />
      ),
      href: "/music",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-800 dark:text-neutral-200" />
      ),
      href: "https://github.com/vid277",
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock items={links} />
    </div>
  );
}
