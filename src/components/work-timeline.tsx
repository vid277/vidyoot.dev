import React from "react";
import { Timeline } from "./ui/timeline";
import { Badge } from "./ui/badge";
import Link from "next/link";
import InteractiveHoverButton from "./ui/interactive-hover-button";
import { LinkPreview } from "./ui/link-preview";
import poster2023 from "./images/poster_2023.png";
import poster2024 from "./images/poster_2024.png";
import dynalabDemo from "./images/dynalab_demo.png";

export function WorkTimeline() {
  const data = [
    {
      title: "2022",
      content: (
        <div className="flex flex-col gap-4">
          <Badge className="text-sm font-hanken w-max">Research</Badge>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-0.5">
              <h3 className="text-xl font-bold font-oddolini">
                Student Researcher & Dynalab Co-founder{" "}
              </h3>
              <h3 className="text-base font-bold text-zinc-700 font-hanken">
                Wei-Jen Tang and Sosnick Lab, The University of Chicago
              </h3>
            </div>
            <ul className="list-disc list-inside">
              <li
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-2"
                style={{
                  listStylePosition: "inside",
                  textIndent: "-1.5em",
                  paddingLeft: "20px",
                }}
              >
                Engineered a parallelized, cloud-based protein simulation tool
                using Python, C++, and Google Cloud, achieving a 6x boost in
                speed and a 3.2x reduction in storage space compared to prior
                technologies.
              </li>
              <li
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-2"
                style={{
                  listStylePosition: "inside",
                  textIndent: "-1.5em",
                  paddingLeft: "20px",
                }}
              >
                Developed several novel data analysis & simulation (molecular
                dynamic & coarse-grained) libraries utilizing R, Python, and
                Linux systems to analyze protein movement
              </li>{" "}
              <li
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-2"
                style={{
                  listStylePosition: "inside",
                  textIndent: "-1.5em",
                  paddingLeft: "20px",
                }}
              >
                Presented lab results at end of year symposium to 300+
                attendees.
              </li>
            </ul>
            <div className="flex gap-2">
              <LinkPreview
                url="https://drive.google.com/file/d/1J4gvl3n81ZEVlHE_jY0kZG8VZlZkqsVR/view?usp=sharing"
                isStatic={true}
                imageSrc={poster2023.src}
              >
                <InteractiveHoverButton text="Poster 2023" />
              </LinkPreview>
              <LinkPreview
                url="https://drive.google.com/file/d/13Os1CgOGZYeqnZVuiTEhnEm6MUUojMn0/view?usp=sharing"
                isStatic={true}
                imageSrc={poster2024.src}
              >
                <InteractiveHoverButton text="Poster 2024" />
              </LinkPreview>
              <LinkPreview
                url="https://colab.research.google.com/drive/1klGLUJi527VPdtSVAbr09xXSDIGHp5ND?usp=sharing"
                isStatic={true}
                imageSrc={dynalabDemo.src}
              >
                <InteractiveHoverButton text="Dynalab Demo!" />
              </LinkPreview>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Summer 2023",
      content: (
        <div className="flex flex-col gap-4">
          <Badge className="text-sm font-hanken w-max">Internship</Badge>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-0.5">
              <h3 className="text-xl font-bold font-oddolini">
                Software Engineering Intern
              </h3>
              <h3 className="text-base font-bold text-zinc-700 font-hanken">
                Product Services and Logistics, Caterpillar Inc.
              </h3>
            </div>
            <ul className="list-disc list-inside">
              <li
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-2"
                style={{
                  listStylePosition: "inside",
                  textIndent: "-1.5em",
                  paddingLeft: "20px",
                }}
              >
                Engineered an advanced object detection model leveraging
                warehouse camera data to enhance real-time monitoring of safety
                equipment usage in part warehouses with 98.2% accuracy.
              </li>
              <li
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal font-hanken mb-2"
                style={{
                  listStylePosition: "inside",
                  textIndent: "-1.5em",
                  paddingLeft: "20px",
                }}
              >
                Presented a novel real-time worker safety monitoring solution to
                managers & division executives, and showcased the MVP at the
                Product Services and Logistics Division's Innovation Fair
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Summer 2024",
      content: (
        <div className="flex flex-col gap-4 z-20">
          <Badge className="text-sm font-hanken w-max">Internship</Badge>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-0.5">
              <h3 className="text-xl font-bold font-oddolini">
                Software Engineering Intern
              </h3>
              <h3 className="text-base font-bold text-zinc-700 font-hanken">
                Product Services and Logistics, Caterpillar Inc.
              </h3>
            </div>
            <ul className="list-disc list-inside">
              <li
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-2"
                style={{
                  listStylePosition: "inside",
                  textIndent: "-1.5em",
                  paddingLeft: "20px",
                }}
              >
                Created a vision analytics model utilizing a 3D time of flight
                (ToF) camera data to optimize space-utilization within shipping
                crates and containers.
              </li>{" "}
              <li
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-2"
                style={{
                  listStylePosition: "inside",
                  textIndent: "-1.5em",
                  paddingLeft: "20px",
                }}
              >
                Tackled and resolved 10+ Business Development (BCD) issues
                utilizing Snowflake, SQL, Snaplogic, SAP, and ServiceNow.
              </li>{" "}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Current",
      content: (
        <div className="flex flex-col gap-4">
          <Badge className="text-sm font-hanken w-max">Part-time</Badge>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-0.5">
              <h3 className="text-xl font-bold font-oddolini">
                Software Developer
              </h3>
              <h3 className="text-base font-bold text-zinc-700 font-hanken">
                Trieve AI (YC W24)
              </h3>
            </div>
            <ul className="list-disc list-inside">
              <li
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-2"
                style={{
                  listStylePosition: "inside",
                  textIndent: "-1.5em",
                  paddingLeft: "20px",
                }}
              >
                Developing frontend & backend features using TypeScript, Astro,
                SolidJS, and Rust to help create the world’s first Embeddings
                Management System (EMS) – powering 30k+ documentation websites
              </li>{" "}
              <li
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-2"
                style={{
                  listStylePosition: "inside",
                  textIndent: "-1.5em",
                  paddingLeft: "20px",
                }}
              >
                Architected, published, and maintained multiple Trieve API
                clients and SDKs across Python, Typescript, Java, .NET, and Ruby
                processing several million queries daily.
              </li>{" "}
              <li
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-2"
                style={{
                  listStylePosition: "inside",
                  textIndent: "-1.5em",
                  paddingLeft: "20px",
                }}
              >
                Spearheaded the development of 35+ new frontend and backend
                features across the AI Search, RAG, Dashboard, and Demo Pages.
              </li>{" "}
            </ul>
            <div className="flex gap-2">
              <LinkPreview url="https://trieve.ai">
                <InteractiveHoverButton text="Trieve Website" />
              </LinkPreview>
              <LinkPreview url="https://github.com/devflowinc/trieve">
                <InteractiveHoverButton text="Repository" />
              </LinkPreview>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
