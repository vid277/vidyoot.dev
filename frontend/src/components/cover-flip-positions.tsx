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
    <div className="flex justify-center items-center px-4 mt-[-1.5rem]">
      <div className="text-4xl mx-auto font-normal text-gray-100 tracking-wide">
        A
        <FlipWords words={words} className="text-gray-100 tracking-wide" />
      </div>
    </div>
  );
}
