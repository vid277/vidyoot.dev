"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function HeroSection() {
  const [isDragging, setIsDragging] = useState(false);
  const [currentView, setCurrentView] = useState("all");
  const [command, setCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (cmd: string) => {
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
    if (inputRef.current && !isDragging) {
      inputRef.current.focus();
    }
  }, [isDragging, currentView]);

  const renderContent = () => {
    switch (currentView) {
      case "all":
        return (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <p className="text-green-500">$ whoami</p>
              <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-2">
                Vidyoot Senthil
              </h1>
              <p className="text-gray-400 mb-4">
                cs student @ georgia tech | full-stack engineer
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <p className="text-green-500 mb-3">$ cat work_experience.txt</p>
              <div className="text-gray-300 space-y-3">
                <div>
                  <p className="text-blue-400">
                    • Software Developer, Trieve AI (YC W24) [2024-Present]
                  </p>
                  <p className="ml-4 text-sm">
                    - Developing EMS powering 30k+ documentation websites
                  </p>
                  <p className="ml-4 text-sm">
                    - Built API clients across Python, TypeScript, Java, .NET,
                    Ruby
                  </p>
                  <p className="ml-4 text-sm">
                    - Delivered 35+ frontend/backend features for AI Search &
                    RAG
                  </p>
                </div>

                <div>
                  <p className="text-blue-400">
                    • Software Engineering Intern, Caterpillar Inc. [Summer
                    2024]
                  </p>
                  <p className="ml-4 text-sm">
                    - Created 3D ToF camera vision analytics for space
                    optimization
                  </p>
                  <p className="ml-4 text-sm">
                    - Resolved 10+ BCD issues using Snowflake, SQL, SAP
                  </p>
                </div>

                <div>
                  <p className="text-blue-400">
                    • Software Engineering Intern, Caterpillar Inc. [Summer
                    2023]
                  </p>
                  <p className="ml-4 text-sm">
                    - Built object detection model with 98.2% accuracy
                  </p>
                  <p className="ml-4 text-sm">
                    - Presented safety monitoring solution to executives
                  </p>
                </div>

                <div>
                  <p className="text-blue-400">
                    • Student Researcher, University of Chicago [2022-2024]
                  </p>
                  <p className="ml-4 text-sm">
                    - Engineered protein simulation tool: 6x speed, 3.2x storage
                    reduction
                  </p>
                  <p className="ml-4 text-sm">
                    - Developed molecular dynamics libraries in Python, C++, R
                  </p>
                  <p className="ml-4 text-sm">
                    - Presented to 300+ attendees at symposium
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <p className="text-green-500 mb-3">$ ls projects/</p>
              <div className="text-gray-300 space-y-3">
                <div>
                  <p className="text-yellow-400">
                    • Trieve Librarian [Chrome Extension, 2024]
                  </p>
                  <p className="ml-4 text-sm">
                    - Website scraping & semantic search for bookmarks
                  </p>
                  <p className="ml-4 text-sm">
                    -{" "}
                    <a
                      href="https://chromewebstore.google.com/detail/trieve-librarian/lahoelkigecebpmgcfnkkmaaibccipal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      Chrome Web Store
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/devflowinc/trieve-librarian"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      GitHub
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-yellow-400">
                    • JHMC Testing Portal [Full-Stack, 2022-2024]
                  </p>
                  <p className="ml-4 text-sm">
                    - Serves 500+ competitors annually for math contests
                  </p>
                  <p className="ml-4 text-sm">
                    - Built with TypeScript, Node.js, Google Cloud
                  </p>
                  <p className="ml-4 text-sm">
                    -{" "}
                    <a
                      href="https://github.com/vid277/jhmc-testing-portal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      GitHub
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-yellow-400">
                    • Dynalab [Research Tool, 2022-2024]
                  </p>
                  <p className="ml-4 text-sm">
                    - Cloud-based protein simulation using Python, C++
                  </p>
                  <p className="ml-4 text-sm">
                    -{" "}
                    <a
                      href="https://github.com/vid277/dynalab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      GitHub
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-yellow-400">
                    • Titran [Programming Language, 2023]
                  </p>
                  <p className="ml-4 text-sm">
                    - Esoteric language with custom interpreter & compiler
                  </p>
                  <p className="ml-4 text-sm">
                    -{" "}
                    <a
                      href="https://github.com/vid277/titran"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      GitHub
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-yellow-400">
                    • Embargo [Unity Game, 2022-2023]
                  </p>
                  <p className="ml-4 text-sm">
                    - Team-built dungeon explorer game in C#
                  </p>
                  <p className="ml-4 text-sm">
                    -{" "}
                    <a
                      href="https://github.com/vid277/embargo-game"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      GitHub
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="text-green-500 mb-3">$ cat skills.txt</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                  Rust
                </span>
                <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                  C++
                </span>
                <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                  Google Cloud
                </span>
                <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                  SQL
                </span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-green-500 mb-3">$ contact --info</p>
              <div className="text-gray-300 space-y-2">
                <p>
                  • Email:{" "}
                  <a
                    href="mailto:vidyoots@gmail.com"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    vidyoots@gmail.com
                  </a>
                </p>
                <p>
                  • GitHub:{" "}
                  <a
                    href="https://github.com/vid277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    github.com/vid277
                  </a>
                </p>
                <p>
                  • LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/vidyootsenthil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    linkedin.com/in/vidyootsenthil
                  </a>
                </p>
                <p>• Location: Atlanta, GA</p>
              </div>
            </div>

            {/* Navigation hint */}
            <div className="border-t border-gray-700 pt-4 mt-6">
              <p className="text-gray-500 text-xs mb-2">
                💡 Try these commands for focused views:
              </p>
              <div className="text-gray-400 text-xs space-y-1">
                <p>
                  <span className="text-blue-400">work</span> •{" "}
                  <span className="text-yellow-400">projects</span> •{" "}
                  <span className="text-green-400">skills</span> •{" "}
                  <span className="text-purple-400">contact</span> •{" "}
                  <span className="text-gray-400">help</span>
                </p>
              </div>
            </div>
          </div>
        );

      case "home":
        return (
          <div>
            <p className="text-green-500">$ whoami</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-2">
              Vidyoot Senthil
            </h1>
            <p className="text-gray-400 mb-4">
              cs student @ georgia tech | full-stack engineer
            </p>
            <div className="text-gray-300 space-y-1">
              <p>Available commands:</p>
              <p className="text-blue-400">• work → View work experience</p>
              <p className="text-yellow-400">• projects → View projects</p>
              <p className="text-green-400">• skills → View technical skills</p>
              <p className="text-purple-400">
                • contact → View contact information
              </p>
              <p className="text-gray-400">• help → Show this help</p>
            </div>
          </div>
        );

      case "work":
        return (
          <div>
            <p className="text-green-500 mb-3">$ cat work_experience.txt</p>
            <div className="text-gray-300 space-y-3">
              <div>
                <p className="text-blue-400">
                  • Software Developer, Trieve AI (YC W24) [2024-Present]
                </p>
                <p className="ml-4 text-sm">
                  - Developing EMS powering 30k+ documentation websites
                </p>
                <p className="ml-4 text-sm">
                  - Built API clients across Python, TypeScript, Java, .NET,
                  Ruby
                </p>
                <p className="ml-4 text-sm">
                  - Delivered 35+ frontend/backend features for AI Search & RAG
                </p>
              </div>

              <div>
                <p className="text-blue-400">
                  • Software Engineering Intern, Caterpillar Inc. [Summer 2024]
                </p>
                <p className="ml-4 text-sm">
                  - Created 3D ToF camera vision analytics for space
                  optimization
                </p>
                <p className="ml-4 text-sm">
                  - Resolved 10+ BCD issues using Snowflake, SQL, SAP
                </p>
              </div>

              <div>
                <p className="text-blue-400">
                  • Software Engineering Intern, Caterpillar Inc. [Summer 2023]
                </p>
                <p className="ml-4 text-sm">
                  - Built object detection model with 98.2% accuracy
                </p>
                <p className="ml-4 text-sm">
                  - Presented safety monitoring solution to executives
                </p>
              </div>

              <div>
                <p className="text-blue-400">
                  • Student Researcher, University of Chicago [2022-2024]
                </p>
                <p className="ml-4 text-sm">
                  - Engineered protein simulation tool: 6x speed, 3.2x storage
                  reduction
                </p>
                <p className="ml-4 text-sm">
                  - Developed molecular dynamics libraries in Python, C++, R
                </p>
                <p className="ml-4 text-sm">
                  - Presented to 300+ attendees at symposium
                </p>
              </div>
            </div>
          </div>
        );

      case "projects":
        return (
          <div>
            <p className="text-green-500 mb-3">$ ls projects/</p>
            <div className="text-gray-300 space-y-3">
              <div>
                <p className="text-yellow-400">
                  • Trieve Librarian [Chrome Extension, 2024]
                </p>
                <p className="ml-4 text-sm">
                  - Website scraping & semantic search for bookmarks
                </p>
                <p className="ml-4 text-sm">
                  -{" "}
                  <a
                    href="https://chromewebstore.google.com/detail/trieve-librarian/lahoelkigecebpmgcfnkkmaaibccipal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Chrome Web Store
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://github.com/devflowinc/trieve-librarian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    GitHub
                  </a>
                </p>
              </div>

              <div>
                <p className="text-yellow-400">
                  • JHMC Testing Portal [Full-Stack, 2022-2024]
                </p>
                <p className="ml-4 text-sm">
                  - Serves 500+ competitors annually for math contests
                </p>
                <p className="ml-4 text-sm">
                  - Built with TypeScript, Node.js, Google Cloud
                </p>
                <p className="ml-4 text-sm">
                  -{" "}
                  <a
                    href="https://github.com/vid277/jhmc-testing-portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    GitHub
                  </a>
                </p>
              </div>

              <div>
                <p className="text-yellow-400">
                  • Dynalab [Research Tool, 2022-2024]
                </p>
                <p className="ml-4 text-sm">
                  - Cloud-based protein simulation using Python, C++
                </p>
                <p className="ml-4 text-sm">
                  -{" "}
                  <a
                    href="https://github.com/vid277/dynalab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    GitHub
                  </a>
                </p>
              </div>

              <div>
                <p className="text-yellow-400">
                  • Titran [Programming Language, 2023]
                </p>
                <p className="ml-4 text-sm">
                  - Esoteric language with custom interpreter & compiler
                </p>
                <p className="ml-4 text-sm">
                  -{" "}
                  <a
                    href="https://github.com/vid277/titran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    GitHub
                  </a>
                </p>
              </div>

              <div>
                <p className="text-yellow-400">
                  • Embargo [Unity Game, 2022-2023]
                </p>
                <p className="ml-4 text-sm">
                  - Team-built dungeon explorer game in C#
                </p>
                <p className="ml-4 text-sm">
                  -{" "}
                  <a
                    href="https://github.com/vid277/embargo-game"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
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
            <p className="text-green-500 mb-3">$ cat skills.txt</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                Rust
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                C++
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                Google Cloud
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                SQL
              </span>
            </div>
          </div>
        );

      case "contact":
        return (
          <div>
            <p className="text-green-500 mb-3">$ contact --info</p>
            <div className="text-gray-300 space-y-2">
              <p>
                • Email:{" "}
                <a
                  href="mailto:vidyoots@gmail.com"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  vidyoots@gmail.com
                </a>
              </p>
              <p>
                • GitHub:{" "}
                <a
                  href="https://github.com/vid277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  github.com/vid277
                </a>
              </p>
              <p>
                • LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/vidyootsenthil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  linkedin.com/in/vidyootsenthil
                </a>
              </p>
              <p>• Location: Atlanta, GA</p>
            </div>
          </div>
        );

      case "help":
        return (
          <div>
            <p className="text-green-500 mb-3">$ help</p>
            <div className="text-gray-300 space-y-1">
              <p className="text-white font-bold">Available Commands:</p>
              <p>
                <span className="text-green-400">all</span> /{" "}
                <span className="text-green-400">overview</span> → View complete
                portfolio
              </p>
              <p>
                <span className="text-green-400">whoami</span> /{" "}
                <span className="text-green-400">home</span> → Go to home screen
              </p>
              <p>
                <span className="text-blue-400">work</span> /{" "}
                <span className="text-blue-400">cat work_experience.txt</span> →
                View work experience
              </p>
              <p>
                <span className="text-yellow-400">projects</span> /{" "}
                <span className="text-yellow-400">ls projects/</span> → View
                projects
              </p>
              <p>
                <span className="text-green-400">skills</span> /{" "}
                <span className="text-green-400">cat skills.txt</span> → View
                technical skills
              </p>
              <p>
                <span className="text-purple-400">contact</span> /{" "}
                <span className="text-purple-400">contact --info</span> → View
                contact info
              </p>
              <p>
                <span className="text-gray-400">clear</span> → Clear screen (go
                to home)
              </p>
              <p>
                <span className="text-gray-400">help</span> → Show this help
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 shadow-2xl"
        >
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0.1}
            dragConstraints={{
              top: -200,
              left: -200,
              right: 200,
              bottom: 200,
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            className={`flex items-center gap-2 p-4 border-b border-gray-800 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" />
            <span className="ml-4 text-gray-400 text-sm font-mono">
              vidyoot@portfolio:~$
            </span>
          </motion.div>
          <div className="p-6 min-h-[70vh] max-h-[80vh] flex flex-col">
            {/* Current Content */}
            <div className="flex-1 font-mono text-sm mb-4 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600">
              {renderContent()}
            </div>

            {/* Command History */}
            <div className="flex-shrink-0 mb-4">
              <div className="font-mono text-sm space-y-1 max-h-24 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600">
                {commandHistory.slice(-6).map((cmd, index) => (
                  <p key={index} className="text-gray-400 text-xs break-words">
                    {cmd}
                  </p>
                ))}
              </div>
            </div>

            {/* Command Input */}
            <div className="flex-shrink-0 flex items-center font-mono text-sm border-t border-gray-700 pt-4">
              <span className="text-green-500 mr-2 flex-shrink-0">
                vidyoot@portfolio:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1 bg-transparent text-white outline-none min-w-0"
                placeholder="Type a command... (try 'help')"
                autoFocus
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
