"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio",
    description: "A personal portfolio website",
    image: "/images/projects/1.png",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "/",
    codeHide: true
  },
  {
    id: 2,
    title: "RiskWise Pro",
    description: "Crypto stats web app",
    image: "/images/projects/2.png",
    tag: ["All", "React.js"],
    gitUrl: "/",
    previewUrl: "https://riskwisepro.io/",
    codeHide: true
  },
  {
    id: 3,
    title: "Codeto - learning",
    description: "A learning program webiste.",
    image: "/images/projects/3.png",
    tag: ["All", "React.js"],
    gitUrl: "/",
    previewUrl: "https://codeto.codes/",
    codeHide: true

  },
  {
    id: 4,
    title: "Betri9 - 3cards game",
    description: "A landing page for a cards game app.",
    image: "/images/projects/4.png",
    tag: ["All", "React.js"],
    gitUrl: "/",
    previewUrl: "https://betri9.com/",
    codeHide: true
  },
  {
    id: 5,
    title: "Mindmaze",
    description: "A mindmaze for BajajAMC",
    image: "/images/projects/5.png",
    tag: ["All", "React.js"],
    gitUrl: "/",
    previewUrl: "https://mindmaze.bajajamc.com/",
    codeHide: true
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "React.js"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React.js"
          isSelected={tag === "React.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              codeHide={project?.codeHide || false}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
