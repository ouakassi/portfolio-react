import React from "react";
import "./ProjectsStyles.css";
import SectionTitle from "../../styles/SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <section className="projects section" id="projects">
    <SectionTitle
      icon="uil uil-folder-open"
      sectionTitle="Projects"
      sectionSubtitle="my projects"
    />

    <div className="project__container">
      {/*==================== PROJECTS Content 1 BIG ====================*/}
      <ProjectCard
        image="./images/portfolio1.jpg"
        title="Suna "
        description={"oussama ouakassi is areadsqqqqqqqqqfdsfdgggggggggggggggddddd".slice(
          0,
          20
        )}
        github="www.github.com"
        tags="javascript , git , git , git ,git ,git ,git ,git , git , git , git ,git ,git ,git ,gi , git , git , git "
        website="www.google.com"
      />
      {/*==================== PROJECTS Content 1 ====================*/}
      <ProjectCard
        image="./images/portfolio1.jpg"
        title="project 1 "
        description="hfdhlskfjksdjfkjdsfjmsdddddddflskdfsd"
        github="www.github.com"
        tags="javascript , git"
        website="www.google.com"
      />

      <ProjectCard
        image="./images/portfolio1.jpg"
        title="project 1 "
        description="hfdhlskfjksdjfkjdsfjmsddddddddddflskdfsd"
        github="www.github.com"
        tags="javascript , git"
        website="www.google.com"
      />
    </div>
    <a href="google.com" className="show-more__button">
      Show More <i className="uil uil-direction button__icon" />
    </a>
  </section>
);

export default Projects;
