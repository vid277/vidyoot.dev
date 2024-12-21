"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function SmoothTypewriter() {
  const words = [
    {
      text: "A",
      className: "text-white",

    },
    {
      text: "web",
      className: "text-white",

    },
    {
      text: "apps",
      className: "text-white",

    },
    {
      text: "with",
      className: "text-white",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
