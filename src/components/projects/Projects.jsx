import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.js";

import "./Projects.css";

import Section from "../../components/Section";
import ProjectCard from "./ProjectCard";
import { ShowMoreButton } from "../Buttons/ShowMoreButton";
import checkColor from "./checkColor";

const Projects = () => {
  const [projectTotal, setProjectTotal] = useState(3);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data.projects);
  }, []);

  return (
    <Section
      className="projects"
      id="projects"
      icon="uil uil-folder-open"
      sectionTitle="Projects"
      sectionSubtitle="my projects"
    >
      <div className="project__container container">
        {projects.map(
          (
            { id, imgurl, description, slug, title, tags, website, github },
            i
          ) =>
            i >= projectTotal ? null : (
              <ProjectCard
                key={id}
                title={title}
                image={imgurl}
                tags={tags.map((tag, i) => {
                  return checkColor(tag, i, "project__language");
                })}
                description={description}
                website={website}
                github={github}
                link={slug}
              />
            )
        )}
      </div>
      <Link to="/projects">
        <ShowMoreButton icon="uil uil-direction" title="All projects" />
      </Link>
    </Section>
  );
};

export default Projects;
