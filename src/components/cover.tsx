"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FlipPositions } from "./cover-flip-positions";
import { ToolDock } from "./cover-dock";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function Cover() {
  return (
    <div className="h-[100vh] bg-neutral-900 flex flex-col items-center justify-center relative w-full font-oddolini">
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="relative flex-col text-7xl md:text-[10rem] leading-tight max-w-8xl mx-auto text-center md:text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center md:items-center gap-12 md:gap-8 z-[999] px-4 md:px-0 text-wrap">
          <span>Hi! I'm Vidyoot.</span>
          <div className="flex flex-col gap-2 justify-center items-center">
            <FlipPositions />
            <ToolDock />
            <Link
              href="#about"
              className="cursor-pointer transition duration-500 text-white hover:bg-white hover:text-black rounded-full p-2 z-[999] flex items-center justify-center"
            >
              <ArrowDown size={32} strokeWidth={1.5} />
            </Link>
          </div>
        </h2>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
