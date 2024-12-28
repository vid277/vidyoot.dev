"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import vidyoot_image from "./images/vidyoot_sen.png";

export function About() {
  return (
    <div className="h-[100vh] relative w-full p-16 px-36 flex flex-col justify-start items-start gap-2">
      <h1 className="text-5xl font-oddolini">About me.</h1>
      <div className="flex flex-row justify-between items-start gap-2 w-full mt-1">
        <div className="flex flex-col gap-5">
          <div className="max-w-[75%]">
            <h2 className="text-base font-hanken">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minus dicta quaerat soluta illum est, fugit necessitatibus
              delectus consequatur suscipit deleniti velit veniam cupiditate
              praesentium nemo perferendis impedit! Nobis, reiciendis?{" "}
            </h2>
          </div>
          <h2 className="text-3xl font-bold font-oddolini text-gray-900">
            Hobbies
          </h2>
          <h2 className="text-3xl font-bold font-oddolini text-gray-900">
            Socials
          </h2>
          <h2 className="text-3xl font-bold font-oddolini text-gray-900">
            Currently learning
          </h2>
        </div>
        <CardContainer className="mt-8">
          <CardBody>
            <Image
              src={vidyoot_image}
              className="h-[20rem] w-[30rem] object-cover rounded-3xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
