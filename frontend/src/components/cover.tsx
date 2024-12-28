"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FlipPositions } from "./cover-flip-positions";
import { ToolDock } from "./cover-dock";
import { ArrowDown } from "lucide-react";

export function Cover() {
  return (
    <div className="h-[100vh] bg-neutral-900 flex flex-col items-start justify-center relative w-full font-oddolini">
      <h2 className="relative flex-col md:flex-col text-5xl md:text-[10rem] md:leading-relaxed max-w-8xl mx-auto text-left tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 md:gap-4 z-[999]">
        <span>Hi! I'm Vidyoot.</span>
        <FlipPositions />
        <ToolDock />
        <span className="text-white hover:bg-white rounded-full p-1 hover:text-black transition-all duration-500">
          <ArrowDown size={32} strokeWidth={1.5} />
        </span>
      </h2>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
