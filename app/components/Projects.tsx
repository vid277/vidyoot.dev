"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Trieve Librarian",
              description:
                "A Chrome extension that can scrape websites, subselect relevant content and text, and search and index new bookmarks regularly allowing for better bookmark search.",
              dates: "February 2024 - March 2024",
              tech: [
                "JavaScript",
                "Chrome Extension",
                "Semantic Search",
                "Scraping",
              ],
              links: [
                {
                  type: "GitHub",
                  href: "https://github.com/vid277/trieve-librarian",
                },
              ],
            },
            {
              title: "JHMC Testing and Grading Portal",
              description:
                "A testing, proctoring, and grading portal using modern web technologies and serving 500+ competitors annually in the online division of the international Junior High School Math Contest.",
              dates: "August 2022 - May 2024",
              tech: [
                "HTML",
                "SCSS",
                "TypeScript",
                "EJS",
                "Node.js",
                "Bootstrap",
                "MathJAX",
                "Google Cloud",
                "Airtable",
                "Markdown",
              ],
              links: [
                {
                  type: "GitHub",
                  href: "https://github.com/vid277/JHMC-scripts",
                },
                {
                  type: "Website",
                  href: "https://imsajhmc.com/",
                },
              ],
            },
            {
              title: "Titran",
              description:
                "An esoteric programming language mimicking club announcements at my high school (IMSA) with a custom interpreter and compiler both using Python.",
              dates: "June 2023 - July 2023",
              tech: ["Python", "Esolang", "Interpreter", "Compiler"],
              links: [
                {
                  type: "GitHub",
                  href: "https://github.com/vid277/titran",
                },
              ],
            },
            {
              title: "Dynalab",
              description:
                "A coarse-grained, cloud-based protein simulation tool using Python, C++, and Google Cloud.",
              dates: "July 2022 - July 2024",
              tech: [
                "Python",
                "C++",
                "Google Cloud",
                "NAMD",
                "Google Colab",
                "Upside",
                "Molecular Dynamics",
              ],
              links: [
                {
                  type: "Demo",
                  href: "https://colab.research.google.com/drive/1klGLUJi527VPdtSVAbr09xXSDIGHp5ND?authuser=1#scrollTo=vFOOzcaMPjN7",
                },
              ],
            },
            {
              title: "Embargo",
              description:
                'A level based dungeon game built using the Unity engine inspired by the 1980s game, "Dungeon Explorer". This game was built in a team of 3 over the course of 4 months.',
              dates: "August 2022 - June 2023",
              tech: ["Unity", "C#", "Blender", "Game Design", "2D Art"],
              links: [
                {
                  type: "GitHub",
                  href: "https://github.com/vid277/embargo",
                },
              ],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <p className="text-sm text-gray-500 mb-4">{project.dates}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-blue-500/10 rounded-md border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.links.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {link.type === "GitHub" ? (
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      ) : link.type === "Website" ? (
                        <path
                          fillRule="evenodd"
                          d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                          clipRule="evenodd"
                        />
                      ) : (
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z"
                          clipRule="evenodd"
                        />
                      )}
                    </svg>
                    {link.type}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
