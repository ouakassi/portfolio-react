import React from "react";
import "./ProjectsStyles.css";
import SectionTitle from "../../styles/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "./../../data/Data.js";
import checkColor from "./checkColor";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <SectionTitle
        icon="uil uil-folder-open"
        sectionTitle="Projects"
        sectionSubtitle="my projects"
      />

      <div className="project__container container">
        {projects.map(
          ({ id, image, title, description, github, tags, website }, i) => {
            return (
              <ProjectCard
                key={id}
                image={image}
                title={title}
                description={description}
                github={github}
                tags={tags.map((tag, i) => {
                  return checkColor(tag, i);
                })}
                website={website}
              />
            );
          }
        )}
      </div>
      <a href="google.com" className="show-more__button">
        Show More <i className="uil uil-direction button__icon" />
      </a>
    </section>
  );
};

export default Projects;
