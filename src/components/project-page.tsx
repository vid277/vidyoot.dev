"use client";
import React from "react";
import BoxReveal from "./ui/box-reveal";
import { ProjectCard } from "./ui/project-card";
import { IconBrandGithub, IconGlobe } from "@tabler/icons-react";
import trieveLibrarian from "./images/trieve_librarian.png";
import jhmcPortal from "./images/jhmc_portal.png";
import titran from "./images/titran.png";
import dynalab from "./images/dynalab.png";
import embargo from "./images/embargo.png";

export function ProjectPage() {
  return (
    <div className="h-max w-full  relative flex flex-col md:items-start items-center justify-start  md:px-36 px-14 md:mb-20 mb-16 gap-10 ">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h1 className="text-6xl font-oddolini">Projects</h1>
      </BoxReveal>
      <div className="flex flex-row md:items-start items-center justify-start gap-10 flex-wrap">
        <ProjectCard
          title="Trieve Librarian"
          description="A Chrome extension that can scrape websites, subselect relevant content and text, and search and index new bookmarks regularly allowing for better bookmark search."
          dates="February 2024 - March 2024"
          image={trieveLibrarian.src}
          tags={[
            "JavaScript",
            "Chrome Extension",
            "Semantic Search",
            "Scraping",
          ]}
          links={[
            {
              type: "Github",
              href: "https://github.com/vid277/trieve-librarian",
              icon: <IconBrandGithub className="size-3" />,
            },
          ]}
        />
        <ProjectCard
          title="JHMC Testing and Grading Portal"
          description="A testing, proctoring, and grading portal using modern web technologies and serving 500+ competitors annually in the online division of the international Junior High School Math Contest."
          dates="August 2022 - May 2024"
          image={jhmcPortal.src}
          tags={[
            "HTML",
            "SCSS",
            "Typescript",
            "EJS",
            "Node.js",
            "Bootstrap",
            "MathJAX",
            "Google Cloud",
            "Airtable",
            "Markdown",
          ]}
          links={[
            {
              type: "Github",
              href: "https://github.com/vid277/JHMC-scripts",
              icon: <IconBrandGithub className="size-3" />,
            },
            {
              type: "Website",
              href: "https://imsajhmc.com/",
              icon: <IconGlobe className="size-3" />,
            },
          ]}
        />

        <ProjectCard
          title="Titran"
          description="An esoteric programming language mimicking club announcements at my high school (IMSA) with a custom interpreter and compiler both using Python."
          dates="June 2023 - July 2023"
          image={titran.src}
          tags={["Python", "Esolang", "Interpreter", "Compiler"]}
          links={[
            {
              type: "Github",
              href: "https://github.com/vid277/titran",
              icon: <IconBrandGithub className="size-3" />,
            },
          ]}
        />

        <ProjectCard
          title="Dynalab"
          description="A coarse-grained, cloud-based protein simulation tool using Python, C++, and Google Cloud."
          dates="July 2022 - July 2024"
          image={dynalab.src}
          tags={[
            "Python",
            "C++",
            "Google Cloud",
            "NAMD",
            "Google Colab",
            "Upside",
            "Molecular Dynamics",
          ]}
          links={[
            {
              type: "Website",
              href: "https://colab.research.google.com/drive/1klGLUJi527VPdtSVAbr09xXSDIGHp5ND?authuser=1#scrollTo=vFOOzcaMPjN7",
              icon: <IconGlobe className="size-3" />,
            },
          ]}
        />

        <ProjectCard
          title="Embargo"
          description="A level based dungeon game built using the Unity engine inspired by the 1980s game, 'Dungeon Explorer'. This game was built in a team of 3 over the course of 4 months."
          dates="August 2022 - June 2023"
          image={embargo.src}
          tags={["Unity", "C#", "Blender", "Game Design", "2D Art"]}
          links={[
            {
              type: "Github",
              href: "https://github.com/vid277/embargo",
              icon: <IconBrandGithub className="size-3" />,
            },
          ]}
        />
      </div>
    </div>
  );
}
