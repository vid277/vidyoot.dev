import React from "react";
import { Meteors } from "./ui/meteors";
import {
  IconArticle,
  IconBrandSpotify,
  IconExternalLink,
  IconTerminal2,
} from "@tabler/icons-react";

export function LinkSection() {
  return (
    <div className="w-full  relative flex flex-row items-start justify-start mb-16 px-36 pb-16 gap-10">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black/95 md:shadow-xl cursor-pointer">
        <div className="flex flex-row items-center justify-center py-5 px-15 gap-3">
          <Meteors number={10} />
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-white font-hanken bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Blogs
          </span>
          <IconArticle className="size-6 text-white" />
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black/95 md:shadow-xl cursor-pointer">
        <div className="flex flex-row items-center justify-center py-5 px-15 gap-3">
          <Meteors number={10} />
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-white font-hanken bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Music
          </span>
          <IconBrandSpotify className="size-6 text-white" />
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black/95 md:shadow-xl cursor-pointer">
        <div className="flex flex-row items-center justify-center py-5 px-15 gap-3">
          <Meteors number={10} />
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-white font-hanken bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Playground
          </span>
          <IconTerminal2 className="size-6 text-white" />
        </div>
      </div>
    </div>
  );
}
