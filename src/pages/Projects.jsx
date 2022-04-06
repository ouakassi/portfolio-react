import React from "react";
import { Link } from "react-router-dom";

import { projectsData } from "../data/Data";
import ProjectCard from "../components/projects/ProjectCard";
import checkColor from "../components/projects/checkColor.js";

export default function Projects() {
  return (
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
  );
}
