import React from "react";
import "./ProjectsStyles.css";
import SectionTitle from "../../styles/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "./../../data/Data.js";

const Projects = () => (
  <section className="projects section" id="projects">
    <SectionTitle
      icon="uil uil-folder-open"
      sectionTitle="Projects"
      sectionSubtitle="my projects"
    />

    <div className="project__container container">
      {projects.map((project, i) => {
        return (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            github={project.github}
            tags={project.tags}
            website={project.website}
          />
        );
      })}
    </div>
    <a href="google.com" className="show-more__button">
      Show More <i className="uil uil-direction button__icon" />
    </a>
  </section>
);

export default Projects;
