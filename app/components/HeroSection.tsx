"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [currentView, setCurrentView] = useState("all");
  const [command, setCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const enableTerminalInput =
    process.env.NEXT_PUBLIC_ENABLE_TERMINAL_INPUT !== "false";

  const blogPosts = [
    {
      title: "Hello World",
      slug: "hello-world",
      date: "2025-06-25",
    },
    {
      title: "The Paradoxical Nature of Jealousy",
      slug: "the-paradoxical-nature-of-jealousy",
      date: "2025-06-25",
    },
  ];

  const handleCommand = (cmd: string) => {
    if (!enableTerminalInput) return;

    const trimmedCmd = cmd.trim().toLowerCase();
    setCommand("");

    if (trimmedCmd === "clear") {
      setCurrentView("all");
      setCommandHistory([]);
      return;
    }

    setCommandHistory((prev) => [...prev, `$ ${cmd}`]);

    if (
      trimmedCmd === "whoami" ||
      trimmedCmd === "home" ||
      trimmedCmd === "all" ||
      trimmedCmd === "overview"
    ) {
      setCurrentView("all");
    } else if (
      trimmedCmd === "cat work_experience.txt" ||
      trimmedCmd === "work"
    ) {
      setCurrentView("work");
    } else if (trimmedCmd === "ls projects/" || trimmedCmd === "projects") {
      setCurrentView("projects");
    } else if (trimmedCmd === "cat skills.txt" || trimmedCmd === "skills") {
      setCurrentView("skills");
    } else if (trimmedCmd === "contact --info" || trimmedCmd === "contact") {
      setCurrentView("contact");
    } else if (trimmedCmd === "blogs" || trimmedCmd === "blog") {
      setCurrentView("blogs");
    } else if (trimmedCmd === "help") {
      setCurrentView("help");
    } else {
      setCommandHistory((prev) => [
        ...prev,
        `Command not found: ${cmd}. Type 'help' for available commands.`,
      ]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(command);
    }
  };

  useEffect(() => {
    if (inputRef.current && !isMobile && enableTerminalInput) {
      inputRef.current.focus();
    }
  }, [currentView, isMobile, enableTerminalInput]);

  useEffect(() => {
    setIsClient(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isClient) {
      setIsMobile(window.innerWidth < 768);
    }
  }, [currentView, isClient]);

  const renderContent = () => {
    switch (currentView) {
      case "all":
        return (
          <div className="space-y-6">
            <div>
              <p className="text-green-700 font-bold text-sm">$ whoami</p>
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mt-2 mb-2 text-black">
                Vidyoot Senthil
              </h1>
              <p className="text-gray-800 mb-3 sm:mb-4 text-sm">
                cs student @ georgia tech | full-stack engineer
              </p>
            </div>

            <div>
              <p className="text-green-700 font-bold mb-2 sm:mb-3 text-sm">
                $ cat work_experience.txt
              </p>
              <div className="text-gray-800 space-y-2 sm:space-y-3">
                <div>
                  <p className="text-blue-700 text-sm font-semibold">
                    • Software Developer, Trieve AI (YC W24) [2024-Present]
                  </p>
                  <p className="ml-3 sm:ml-4 text-xs text-gray-700">
                    - Developing EMS powering 30k+ documentation websites
                  </p>
                  <p className="ml-3 sm:ml-4 text-xs text-gray-700">
                    - Built API clients across Python, TypeScript, Java, .NET,
                    Ruby
                  </p>
                  <p className="ml-3 sm:ml-4 text-xs text-gray-700">
                    - Delivered 35+ frontend/backend features for AI Search &
                    RAG
                  </p>
                </div>

                <div>
                  <p className="text-blue-700 text-sm font-semibold">
                    • Software Engineering Intern, Caterpillar Inc. [Summer
                    2024]
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    - Created 3D ToF camera vision analytics for space
                    optimization
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    - Resolved 10+ BCD issues using Snowflake, SQL, SAP
                  </p>
                </div>

                <div>
                  <p className="text-blue-700 text-sm font-semibold">
                    • Software Engineering Intern, Caterpillar Inc. [Summer
                    2023]
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    - Built object detection model with 98.2% accuracy
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    - Presented safety monitoring solution to executives
                  </p>
                </div>

                <div>
                  <p className="text-blue-700 text-sm font-semibold">
                    • Student Researcher, University of Chicago [2022-2024]
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    - Engineered protein simulation tool: 6x speed, 3.2x storage
                    reduction
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    - Developed molecular dynamics libraries in Python, C++, R
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    - Presented to 300+ attendees at symposium
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-green-700 font-bold mb-3 text-sm">
                $ ls projects/
              </p>
              <div className="text-gray-800 space-y-3">
                <div>
                  <p className="text-yellow-600 text-sm font-semibold">
                    • Trieve Librarian [Chrome Extension, 2024]
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    - Website scraping & semantic search for bookmarks
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    -{" "}
                    <a
                      href="https://chromewebstore.google.com/detail/trieve-librarian/lahoelkigecebpmgcfnkkmaaibccipal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 underline font-medium"
                    >
                      Chrome Web Store
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/devflowinc/trieve-librarian"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 underline font-medium"
                    >
                      GitHub
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-yellow-600 text-sm font-semibold">
                    • JHMC Testing Portal [Full-Stack, 2022-2024]
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    - Serves 500+ competitors annually for math contests
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    - Built with TypeScript, Node.js, Google Cloud
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    -{" "}
                    <a
                      href="https://github.com/vid277/jhmc-testing-portal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 underline font-medium"
                    >
                      GitHub
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-yellow-600 text-sm font-semibold">
                    • Dynalab [Research Tool, 2022-2024]
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    - Cloud-based protein simulation using Python, C++
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    -{" "}
                    <a
                      href="https://github.com/vid277/dynalab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 underline font-medium"
                    >
                      GitHub
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-yellow-600 text-sm font-semibold">
                    • Titran [Programming Language, 2023]
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    - Esoteric language with custom interpreter & compiler
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    -{" "}
                    <a
                      href="https://github.com/vid277/titran"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 underline font-medium"
                    >
                      GitHub
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-yellow-600 text-sm font-semibold">
                    • Embargo [Unity Game, 2022-2023]
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    - Team-built dungeon explorer game in C#
                  </p>
                  <p className="ml-4 text-xs text-gray-700">
                    -{" "}
                    <a
                      href="https://github.com/vid277/embargo-game"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 underline font-medium"
                    >
                      GitHub
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-green-700 font-bold mb-3 text-sm">
                $ cat skills.txt
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                  Python
                </span>
                <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                  Rust
                </span>
                <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                  C++
                </span>
                <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                  Google Cloud
                </span>
                <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                  SQL
                </span>
              </div>
            </div>

            <div>
              <p className="text-green-700 font-bold mb-3 text-sm">
                $ contact --info
              </p>
              <div className="text-gray-800 space-y-2">
                <p className="text-sm">
                  • Email:{" "}
                  <a
                    href="mailto:vidyoots@gmail.com"
                    className="text-blue-700 hover:text-blue-800 underline font-medium"
                  >
                    vidyoots@gmail.com
                  </a>
                </p>
                <p className="text-sm">
                  • GitHub:{" "}
                  <a
                    href="https://github.com/vid277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 underline font-medium"
                  >
                    github.com/vid277
                  </a>
                </p>
                <p className="text-sm">
                  • LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/vidyootsenthil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 underline font-medium"
                  >
                    linkedin.com/in/vidyootsenthil
                  </a>
                </p>
                <p className="text-sm">• Location: Atlanta, GA</p>
              </div>
            </div>

            {enableTerminalInput && (
              <div className="border-t border-gray-700 pt-3 sm:pt-4 mt-4 sm:mt-6">
                {isClient && isMobile ? (
                  <div className="flex flex-wrap gap-1.5">
                    {currentView !== "all" && (
                      <button
                        onClick={() => handleCommand("all")}
                        className="px-2 py-1 bg-black border border-black text-white text-xs font-medium rounded hover:bg-gray-800 transition-colors"
                      >
                        home
                      </button>
                    )}
                    <button
                      onClick={() => handleCommand("work")}
                      className="px-2 py-1 bg-blue-100 border border-blue-600 text-blue-800 text-xs font-medium rounded hover:bg-blue-200 transition-colors"
                    >
                      work
                    </button>
                    <button
                      onClick={() => handleCommand("projects")}
                      className="px-2 py-1 bg-yellow-100 border border-yellow-600 text-yellow-800 text-xs font-medium rounded hover:bg-yellow-200 transition-colors"
                    >
                      projects
                    </button>
                    <button
                      onClick={() => handleCommand("skills")}
                      className="px-2 py-1 bg-green-100 border border-green-600 text-green-800 text-xs font-medium rounded hover:bg-green-200 transition-colors"
                    >
                      skills
                    </button>
                    <button
                      onClick={() => handleCommand("contact")}
                      className="px-2 py-1 bg-purple-100 border border-purple-600 text-purple-800 text-xs font-medium rounded hover:bg-purple-200 transition-colors"
                    >
                      contact
                    </button>
                    <button
                      onClick={() => handleCommand("blogs")}
                      className="px-2 py-1 bg-orange-100 border border-orange-600 text-orange-800 text-xs font-medium rounded hover:bg-orange-200 transition-colors"
                    >
                      blogs
                    </button>
                    {currentView !== "all" && (
                      <button
                        onClick={() => handleCommand("clear")}
                        className="px-2 py-1 bg-red-100 border border-red-600 text-red-800 text-xs font-medium rounded hover:bg-red-200 transition-colors"
                      >
                        clear
                      </button>
                    )}
                  </div>
                ) : (
                  <>
                    <p className="text-gray-600 text-sm mb-2 font-medium">
                      Try these commands for focused views:
                    </p>
                    <div className="text-gray-700 text-sm space-y-1">
                      <p className="flex flex-wrap gap-2">
                        <span className="text-blue-700 font-medium">work</span>|{" "}
                        <span className="text-yellow-600 font-medium">
                          projects
                        </span>{" "}
                        |{" "}
                        <span className="text-green-700 font-medium">
                          skills
                        </span>{" "}
                        |{" "}
                        <span className="text-purple-700 font-medium">
                          contact
                        </span>{" "}
                        |{" "}
                        <span className="text-gray-700 font-medium">help</span>
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        );

      case "home":
        return (
          <div>
            <p className="text-green-700 font-bold text-sm">$ whoami</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-2 text-black">
              Vidyoot Senthil
            </h1>
            <p className="text-gray-800 mb-4 text-sm">
              cs student @ georgia tech | full-stack engineer
            </p>
            <div className="text-gray-800 space-y-1">
              <p className="text-sm">Available commands:</p>
              <p className="text-blue-700 text-sm">
                • work → View work experience
              </p>
              <p className="text-yellow-600 text-sm">
                • projects → View projects
              </p>
              <p className="text-green-700 text-sm">
                • skills → View technical skills
              </p>
              <p className="text-purple-700 text-sm">
                • contact → View contact information
              </p>
              <p className="text-gray-700 text-sm">• help → Show this help</p>
            </div>
          </div>
        );

      case "work":
        return (
          <div>
            <p className="text-green-700 font-bold mb-3 text-sm">
              $ cat work_experience.txt
            </p>
            <div className="text-gray-800 space-y-3">
              <div>
                <p className="text-blue-700 text-sm font-semibold">
                  • Software Developer, Trieve AI (YC W24) [2024-Present]
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Developing EMS powering 30k+ documentation websites
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Built API clients across Python, TypeScript, Java, .NET,
                  Ruby
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Delivered 35+ frontend/backend features for AI Search & RAG
                </p>
              </div>

              <div>
                <p className="text-blue-700 text-sm font-semibold">
                  • Software Engineering Intern, Caterpillar Inc. [Summer 2024]
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Created 3D ToF camera vision analytics for space
                  optimization
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Resolved 10+ BCD issues using Snowflake, SQL, SAP
                </p>
              </div>

              <div>
                <p className="text-blue-700 text-sm font-semibold">
                  • Software Engineering Intern, Caterpillar Inc. [Summer 2023]
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Built object detection model with 98.2% accuracy
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Presented safety monitoring solution to executives
                </p>
              </div>

              <div>
                <p className="text-blue-700 text-sm font-semibold">
                  • Student Researcher, University of Chicago [2022-2024]
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Engineered protein simulation tool: 6x speed, 3.2x storage
                  reduction
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Developed molecular dynamics libraries in Python, C++, R
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Presented to 300+ attendees at symposium
                </p>
              </div>
            </div>
          </div>
        );

      case "projects":
        return (
          <div>
            <p className="text-green-700 font-bold mb-3 text-sm">
              $ ls projects/
            </p>
            <div className="text-gray-800 space-y-3">
              <div>
                <p className="text-yellow-600 text-sm font-semibold">
                  • Trieve Librarian [Chrome Extension, 2024]
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Website scraping & semantic search for bookmarks
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  -{" "}
                  <a
                    href="https://chromewebstore.google.com/detail/trieve-librarian/lahoelkigecebpmgcfnkkmaaibccipal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 underline font-medium"
                  >
                    Chrome Web Store
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://github.com/devflowinc/trieve-librarian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 underline font-medium"
                  >
                    GitHub
                  </a>
                </p>
              </div>

              <div>
                <p className="text-yellow-600 text-sm font-semibold">
                  • JHMC Testing Portal [Full-Stack, 2022-2024]
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Serves 500+ competitors annually for math contests
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Built with TypeScript, Node.js, Google Cloud
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  -{" "}
                  <a
                    href="https://github.com/vid277/jhmc-testing-portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 underline font-medium"
                  >
                    GitHub
                  </a>
                </p>
              </div>

              <div>
                <p className="text-yellow-600 text-sm font-semibold">
                  • Dynalab [Research Tool, 2022-2024]
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Cloud-based protein simulation using Python, C++
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  -{" "}
                  <a
                    href="https://github.com/vid277/dynalab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 underline font-medium"
                  >
                    GitHub
                  </a>
                </p>
              </div>

              <div>
                <p className="text-yellow-600 text-sm font-semibold">
                  • Titran [Programming Language, 2023]
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Esoteric language with custom interpreter & compiler
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  -{" "}
                  <a
                    href="https://github.com/vid277/titran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 underline font-medium"
                  >
                    GitHub
                  </a>
                </p>
              </div>

              <div>
                <p className="text-yellow-600 text-sm font-semibold">
                  • Embargo [Unity Game, 2022-2023]
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  - Team-built dungeon explorer game in C#
                </p>
                <p className="ml-4 text-xs text-gray-700">
                  -{" "}
                  <a
                    href="https://github.com/vid277/embargo-game"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 underline font-medium"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        );

      case "skills":
        return (
          <div>
            <p className="text-green-700 font-bold mb-3 text-sm">
              $ cat skills.txt
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                Python
              </span>
              <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                Rust
              </span>
              <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                React
              </span>
              <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                Node.js
              </span>
              <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                C++
              </span>
              <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                Google Cloud
              </span>
              <span className="px-3 py-1 bg-green-100 rounded-md border-2 border-green-600 text-xs font-medium text-green-800 flex justify-center items-center">
                SQL
              </span>
            </div>
          </div>
        );

      case "contact":
        return (
          <div>
            <p className="text-green-700 font-bold mb-3 text-sm">
              $ contact --info
            </p>
            <div className="text-gray-800 space-y-2">
              <p className="text-sm">
                • Email:{" "}
                <a
                  href="mailto:vidyoots@gmail.com"
                  className="text-blue-700 hover:text-blue-800 underline font-medium"
                >
                  vidyoots@gmail.com
                </a>
              </p>
              <p className="text-sm">
                • GitHub:{" "}
                <a
                  href="https://github.com/vid277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800 underline font-medium"
                >
                  github.com/vid277
                </a>
              </p>
              <p className="text-sm">
                • LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/vidyootsenthil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800 underline font-medium"
                >
                  linkedin.com/in/vidyootsenthil
                </a>
              </p>
              <p className="text-sm">• Location: Atlanta, GA</p>
            </div>
          </div>
        );

      case "blogs":
        return (
          <div>
            <p className="text-green-700 font-bold mb-3 text-sm">$ ls blogs/</p>
            <div className="text-gray-800 space-y-2">
              {blogPosts.map((post) => (
                <div key={post.slug}>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-orange-700 hover:text-orange-800 underline font-medium text-sm"
                  >
                    • {post.title}
                  </a>
                  <span className="ml-2 text-xs text-gray-600">
                    {post.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      case "help":
        return (
          <div>
            <p className="text-green-700 font-bold mb-3 text-sm">$ help</p>
            <div className="text-gray-800 space-y-1">
              <p className="text-black font-bold text-sm">
                Available Commands:
              </p>
              <p className="text-sm">
                <span className="text-green-700">all</span> /{" "}
                <span className="text-green-700">overview</span> → View complete
                portfolio
              </p>
              <p className="text-sm">
                <span className="text-green-700">whoami</span> /{" "}
                <span className="text-green-700">home</span> → Go to home screen
              </p>
              <p className="text-sm">
                <span className="text-blue-700">work</span> /{" "}
                <span className="text-blue-700">cat work_experience.txt</span> →
                View work experience
              </p>
              <p className="text-sm">
                <span className="text-yellow-600">projects</span> /{" "}
                <span className="text-yellow-600">ls projects/</span> → View
                projects
              </p>
              <p className="text-sm">
                <span className="text-green-700">skills</span> /{" "}
                <span className="text-green-700">cat skills.txt</span> → View
                technical skills
              </p>
              <p className="text-sm">
                <span className="text-purple-700">contact</span> /{" "}
                <span className="text-purple-700">contact --info</span> → View
                contact info
              </p>
              <p className="text-sm">
                <span className="text-orange-700">blogs</span> /{" "}
                <span className="text-orange-700">ls blogs/</span> → View blog
                posts
              </p>
              <p className="text-sm">
                <span className="text-gray-700">clear</span> → Clear screen (go
                to home)
              </p>
              <p className="text-sm">
                <span className="text-gray-700">help</span> → Show this help
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen flex items-start sm:items-center justify-center p-4 pt-8 sm:p-4 md:p-8 bg-gradient-to-br from-[#fdfcf8] via-[#f7f5ef] to-[#faf8f3]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      <div className="relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          dragListener={false}
          className="bg-gray-100 border-4 border-black shadow-none sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none sm:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 w-full max-w-7xl mx-auto min-h-[85vh] sm:min-h-0"
        >
          <div
            className={`flex items-center justify-between p-3 sm:p-4 border-b-4 border-black bg-gray-200 ${
              isClient && !isMobile
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150" />
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150" />
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150" />
              <span className="ml-2 sm:ml-4 text-gray-800 text-xs sm:text-sm font-mono font-bold">
                vidyoot@portfolio:~$
              </span>
            </div>

            <div className="flex items-center gap-1 sm:gap-3">
              <a
                href="https://github.com/vid277"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-3 bg-gray-100 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform-gpu transition-all duration-300 ease-out hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1.5 hover:-translate-y-1.5 group"
                title="GitHub"
              >
                <svg
                  className="w-3 h-3 sm:w-5 sm:h-5 text-gray-800 group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/vidyootsenthil/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-3 bg-gray-100 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 group"
                title="LinkedIn"
              >
                <svg
                  className="w-3 h-3 sm:w-5 sm:h-5 text-[#0077B5] group-hover:text-[#005885] transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="mailto:vidyoots@gmail.com"
                className="p-1.5 sm:p-3 bg-gray-100 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 group"
                title="Email"
              >
                <svg
                  className="w-3 h-3 sm:w-5 sm:h-5 text-[#EA4335] group-hover:text-[#D32F2F] transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.819L12 10.183l9.545-6.362h.819A1.636 1.636 0 0 1 24 5.457z" />
                </svg>
              </a>

              <Link
                href="/blog"
                className="p-1.5 sm:p-3 bg-gray-100 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 group"
                title="Blog"
              >
                <svg
                  className="w-3 h-3 sm:w-5 sm:h-5 text-[#FF6B35] group-hover:text-[#E55A2B] transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                  <path d="M7 7h10v2H7zM7 11h10v2H7zM7 15h7v2H7z" />
                </svg>
              </Link>
            </div>
          </div>
          <div
            className={`sm:p-6 min-h-[80vh] sm:min-h-[70vh] max-h-[85vh] sm:max-h-[80vh] flex flex-col bg-gray-100 ${
              enableTerminalInput ? "p-3 sm:p-6" : "pb-0 p-3 sm:pb-0"
            }`}
          >
            <div className="flex-1 font-mono text-xs sm:text-sm mb-3 sm:mb-4 overflow-y-auto sm:scrollbar-thin sm:scrollbar-track-gray-200 sm:scrollbar-thumb-gray-400">
              {renderContent()}
            </div>

            {enableTerminalInput && (
              <>
                <div className="flex-shrink-0 mb-3 sm:mb-4">
                  <div className="font-mono text-xs sm:text-sm space-y-1 max-h-16 sm:max-h-24 overflow-y-auto sm:scrollbar-thin sm:scrollbar-track-gray-200 sm:scrollbar-thumb-gray-400">
                    {commandHistory.slice(-4).map((cmd, index) => (
                      <p
                        key={index}
                        className="text-gray-700 text-xs break-words"
                      >
                        {cmd}
                      </p>
                    ))}
                  </div>
                </div>

                <div
                  className={`flex-shrink-0 flex items-center font-mono text-xs sm:text-sm border-t-2 border-black pt-3 sm:pt-4 bg-gray-100 ${
                    isClient && isMobile
                      ? "bg-gray-200 rounded-b-lg px-2 py-2 cursor-pointer active:bg-gray-300"
                      : ""
                  }`}
                  onClick={() => {
                    if (inputRef.current) {
                      inputRef.current.focus();
                      inputRef.current.click();
                    }
                  }}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    if (inputRef.current) {
                      inputRef.current.focus();
                    }
                  }}
                >
                  <span className="text-green-700 mr-1 sm:mr-2 flex-shrink-0 text-xs sm:text-sm font-bold">
                    vidyoot@portfolio:~$
                  </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={handleKeyPress}
                    onTouchStart={(e) => {
                      e.stopPropagation();
                      if (inputRef.current) {
                        inputRef.current.focus();
                      }
                    }}
                    onFocus={() => {
                      if (inputRef.current) {
                        inputRef.current.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }
                    }}
                    className="flex-1 bg-transparent text-gray-900 outline-none min-w-0 text-xs sm:text-sm touch-manipulation font-bold"
                    placeholder={
                      isClient && isMobile
                        ? "Tap here to type..."
                        : "Type a command... (try 'help')"
                    }
                    autoFocus={false}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="none"
                    spellCheck="false"
                    inputMode="text"
                  />
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
