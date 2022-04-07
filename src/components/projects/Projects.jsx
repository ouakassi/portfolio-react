import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./ProjectsStyles.css";

import SectionTitle from "../../styles/Section";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./../../data/Data.js";
import checkColor from "./checkColor";
import { ShowMoreButton } from "../../styles/Buttons/ShowMoreButton";

const Projects = () => {
  const [projectTotal, setProjectTotal] = useState(1);
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
            if (i >= projectTotal) return null;
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
      <Link to="/projects">
        <ShowMoreButton
          onClick={() =>
            setProjectTotal((prevProjetTotal) => prevProjetTotal + 1)
          }
          icon="uil uil-direction"
          title="All projects"
        />
      </Link>
      <Outlet />
    </SectionTitle>
  );
};

export default Projects;
