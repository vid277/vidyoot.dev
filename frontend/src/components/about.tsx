"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import vidyoot_image from "./images/vidyoot_sen.png";
import { BoxReveal } from "./ui/box-reveal";
import { Badge, badgeVariants } from "@/components/ui/badge";

export function About() {
  return (
    <div
      className="h-min w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center py-10"
      id="about"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="h-max relative w-full p-16 px-36 pb-28 flex flex-col justify-start items-start gap-2">
        <div className="flex flex-row justify-center items-start w-full mt-1">
          <div className="flex flex-col gap-2 flex-1">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h1 className="text-6xl font-oddolini">About me.</h1>
            </BoxReveal>
            <div className="flex flex-col gap-7">
              <div className="w-5/6">
                <h2 className="text-xl font-hanken">
                  Hi! I'm Vidyoot Senthil, a software engineer based in Atlanta,
                  Georgia. I'm currently a student at the{" "}
                  <span className="font-bold">
                    Georgia Institute of Technology
                  </span>{" "}
                  studying Computer Science with a focus on Artificial
                  Intelligence and System Architecture.
                  <br />
                  <br />
                  I'm a full-stack developer with a focus on React/Next.js and
                  SolidJS. I'm also an avid game-developer &mdash; designing,
                  creating, and publishing Unity games in my free time.
                </h2>
              </div>
              <div>
                <h2 className="text-4xl font-bold font-oddolini text-gray-900 mb-3">
                  Hobbies
                </h2>{" "}
                <div className="flex flex-row gap-2 flex-wrap w-[85%]">
                  <Badge variant="outline" className="text-base font-hanken">
                    Lifting
                  </Badge>
                  <Badge variant="outline" className="text-base font-hanken">
                    Designing Game Art
                  </Badge>
                  <Badge variant="outline" className="text-base font-hanken">
                    Animating in Blender
                  </Badge>
                  <Badge variant="outline" className="text-base font-hanken">
                    Learning Premiere Pro
                  </Badge>
                  <Badge variant="outline" className="text-base font-hanken">
                    Playing BTD 6
                  </Badge>
                  <Badge variant="outline" className="text-base font-hanken">
                    Swimming
                  </Badge>
                  <Badge variant="outline" className="text-base font-hanken">
                    Re-reading Harry Potter
                  </Badge>
                  <Badge variant="outline" className="text-base font-hanken">
                    Scrolling Hacker News
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <CardContainer className="mt-8 flex-shrink-0">
            <CardBody>
              <Image
                src={vidyoot_image}
                width={350}
                height={350}
                className="object-cover rounded-3xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  );
}
