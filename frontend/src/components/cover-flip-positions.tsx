import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipPositions() {
  const words = [
    "Frontend Developer.",
    "CS Student.",
    "Software Engineer.",
    "Game Developer.",
  ];

  return (
    <div className="flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-gray-100">
        A
        <FlipWords words={words} className="text-gray-100"/>
      </div>
    </div>
  );
}
