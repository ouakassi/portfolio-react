import React from "react";

import { projectsData } from "../data/db";
import ProjectCard from "../components/projects/ProjectCard";
import checkColor from "../components/projects/checkColor.js";
import SectionTitle from "../styles/Section";

export default function Projects() {
  return (
    <SectionTitle
      className="projects"
      id="projects"
      icon="uil uil-folder-open"
      sectionTitle="Projects"
      sectionSubtitle="my projects"
    >
      <div className="project__container container">
        {projectsData.map(
          ({ id, image, title, description, github, tags, website }, i) => {
            return (
              <ProjectCard
                key={id}
                image={image}
                title={title}
                description={description}
                github={github}
                tags={tags.map((tag, i) => {
                  return checkColor(tag, i, "project__language");
                })}
                website={website}
              />
            );
          }
        )}
      </div>
    </SectionTitle>
  );
}
