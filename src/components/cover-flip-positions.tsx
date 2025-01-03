import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipPositions() {
  const words = [
    "Frontend Engineer.",
    "CS Student.",
    "Software Engineer.",
    "Game Developer.",
  ];

  return (
    <div className="flex flex-col justify-center items-center px-4 mt-[-1.5rem]">
      <div className="md:text-4xl text-2xl text-center font-normal text-gray-100 tracking-wide flex flex-wrap items-center justify-center gap-2">
        <span>A</span>
        <FlipWords words={words} className="text-gray-100 tracking-wide" />
      </div>
    </div>
  );
}
