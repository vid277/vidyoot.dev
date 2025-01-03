import React from "react";
import { Meteors } from "./ui/meteors";
import {
  IconArticle,
  IconBrandSpotify,
  IconExternalLink,
  IconTerminal2,
} from "@tabler/icons-react";
import Link from "next/link";

export function LinkSection() {
  return (
    <div className="w-full  relative flex md:flex-row flex-col  items-start justify-start md:px-36 px-14 mb-20 md:gap-10 gap-5">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black/95 md:shadow-xl cursor-pointer">
        <Link href="/blogs">
          <div className="flex flex-row items-center justify-center py-5 px-15 gap-3">
            <Meteors number={13} />
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-white font-hanken bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Blogs
            </span>
            <IconArticle className="size-6 text-white" />
          </div>
        </Link>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black/95 md:shadow-xl cursor-pointer">
        <Link href="/music">
          <div className="flex flex-row items-center justify-center py-5 px-15 gap-3">
            <Meteors number={13} />
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-white font-hanken bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Music
            </span>
            <IconBrandSpotify className="size-6 text-white" />
          </div>
        </Link>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black/95 md:shadow-xl cursor-pointer">
        <Link href="/playground">
          <div className="flex flex-row items-center justify-center py-5 px-15 gap-3">
            <Meteors number={13} />
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-white font-hanken bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Playground
            </span>
            <IconTerminal2 className="size-6 text-white" />
          </div>
        </Link>
      </div>
    </div>
  );
}
