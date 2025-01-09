"use client";
import React from "react";
import { WorkTimeline } from "./work-timeline";

export function Work() {
  return (
    <div className="h-max w-full  relative flex flex-col items-center md:items-start justify-start py-8 p-16 md:px-36 px-16 mb-20 ">
      <h1 className="text-6xl md:text-6xl font-oddolini text-center md:text-left">
        Experience
      </h1>
      <WorkTimeline />
    </div>
  );
}
