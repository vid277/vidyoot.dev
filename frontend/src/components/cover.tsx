"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FlipPositions } from "./cover-flip-positions";
import { ToolDock } from "./cover-dock";

export function Cover() {
  return (
    <div className="h-[100vh] rounded-md bg-neutral-900 flex flex-col items-start justify-center relative w-full">
      <h2 className="relative flex-col md:flex-col text-5xl md:text-8xl md:leading-tight max-w-8xl mx-auto text-left tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-6 z-[999]">
        <span>Hi! I'm Vidyoot.</span>
        <FlipPositions />
        <ToolDock />
      </h2>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
