import React, { useState } from "react";
import "./ProjectsStyles.css";
import SectionTitle from "../../styles/Section";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./../../data/Data.js";
import checkColor from "./checkColor";

const Projects = () => {
  const [index, setindex] = useState(1);
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
            if (i >= index) return null;
            else
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
      <span onClick={() => setindex(index + 1)} className="show-more__button">
        Show More <i className="uil uil-direction button__icon" />
      </span>
    </SectionTitle>
  );
};

export default Projects;
