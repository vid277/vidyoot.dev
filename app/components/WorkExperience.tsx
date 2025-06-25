"use client";

import { motion } from "framer-motion";

export default function WorkExperience() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {[
            {
              title: "Software Developer",
              company: "Trieve AI (YC W24)",
              period: "2024 - Present",
              type: "Part-time",
              description:
                "Developing the world's first Embeddings Management System (EMS) – powering 30k+ documentation websites",
              details: [
                "Developing frontend & backend features using TypeScript, Astro, SolidJS, and Rust to help create the world's first Embeddings Management System (EMS)",
                "Architected, published, and maintained multiple Trieve API clients and SDKs across Python, Typescript, Java, .NET, and Ruby processing several million queries daily",
                "Spearheaded the development of 35+ new frontend and backend features across the AI Search, RAG, Dashboard, and Demo Pages",
              ],
              tech: [
                "TypeScript",
                "Rust",
                "SolidJS",
                "Astro",
                "Python",
                "Java",
                ".NET",
                "Ruby",
              ],
            },
            {
              title: "Software Engineering Intern",
              company: "Product Services and Logistics, Caterpillar Inc.",
              period: "Summer 2024",
              type: "Internship",
              description:
                "Developed vision analytics models and resolved business development issues",
              details: [
                "Created a vision analytics model utilizing a 3D time of flight (ToF) camera data to optimize space-utilization within shipping crates and containers",
                "Tackled and resolved 10+ Business Development (BCD) issues utilizing Snowflake, SQL, Snaplogic, SAP, and ServiceNow",
              ],
              tech: [
                "Python",
                "Snowflake",
                "SQL",
                "Snaplogic",
                "SAP",
                "ServiceNow",
              ],
            },
            {
              title: "Software Engineering Intern",
              company: "Product Services and Logistics, Caterpillar Inc.",
              period: "Summer 2023",
              type: "Internship",
              description:
                "Engineered advanced object detection models for warehouse safety monitoring",
              details: [
                "Engineered an advanced object detection model leveraging warehouse camera data to enhance real-time monitoring of safety equipment usage in part warehouses with 98.2% accuracy",
                "Presented a novel real-time worker safety monitoring solution to managers & division executives, and showcased the MVP at the Product Services and Logistics Division's Innovation Fair",
              ],
              tech: [
                "Python",
                "Computer Vision",
                "Machine Learning",
                "Object Detection",
              ],
            },
            {
              title: "Student Researcher & Dynalab Co-founder",
              company:
                "Wei-Jen Tang and Sosnick Lab, The University of Chicago",
              period: "2022 - 2024",
              type: "Research",
              description:
                "Built parallelized, cloud-based protein simulation tools and novel data analysis libraries",
              details: [
                "Engineered a parallelized, cloud-based protein simulation tool using Python, C++, and Google Cloud, achieving a 6x boost in speed and a 3.2x reduction in storage space compared to prior technologies",
                "Developed several novel data analysis & simulation (molecular dynamic & coarse-grained) libraries utilizing R, Python, and Linux systems to analyze protein movement",
                "Presented lab results at end of year symposium to 300+ attendees",
              ],
              tech: [
                "Python",
                "C++",
                "R",
                "Google Cloud",
                "NAMD",
                "Molecular Dynamics",
                "Linux",
              ],
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <h4 className="text-lg text-gray-300 mb-2">{job.company}</h4>
                  <p className="text-gray-400 mb-4">{job.description}</p>
                </div>
                <div className="flex flex-col md:items-end">
                  <span className="text-sm px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20 mb-2 w-fit">
                    {job.type}
                  </span>
                  <span className="text-gray-400 text-sm">{job.period}</span>
                </div>
              </div>
              <div className="mb-6">
                <h5 className="text-lg font-semibold mb-3">
                  Key Achievements:
                </h5>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {job.details.map((detail, i) => (
                    <li key={i} className="leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {job.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
