"use client";
import React from "react";
import { WorkTimeline } from "./work-timeline";
import BoxReveal from "./ui/box-reveal";

export function Work() {
  return (
    <div className="h-max w-full  relative flex flex-col items-center md:items-start justify-start py-8 p-16 md:px-36 px-14 mb-28 ">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h1 className="text-6xl font-oddolini text-center md:text-left">
          Experience
        </h1>
      </BoxReveal>
      <WorkTimeline />
    </div>
  );
}
