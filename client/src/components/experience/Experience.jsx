import Section from "../Section";
import "./Experience.css";
import ExperienceBox from "./ExperienceBox";
import { ShowMoreButton } from "../Buttons/ShowMoreButton";
import { useState } from "react";
import { motion } from "framer-motion";

const selectors = [
  { title: "school", icon: "uil uil-briefcase" },
  { title: "work", icon: "uil uil-building" },
];

const workData = [
  {
    id: 1,
    company: "Freelancing",
    companyImg: "./images/freelance-logo.webp",
    position: "Web Developer",
    date: "2022 - Now",
    desc: "Working with a fantastic team of UI folks to develop and maintain purpose-built UI for the Traceable platform and Hypertrace UI library.",
  },
  {
    id: 2,
    company: "vfs global (mawared house)",
    companyImg: "./images/vfs-global-logo.png",
    position: "web developer",
    date: "sep 2019 - nov 2021",
    desc: "Working with a fantastic team of UI folks to develop and maintain purpose-built UI for the Traceable platform and Hypertrace UI library.",
  },
  {
    id: 3,
    company: "vfs global",
    companyImg: "./images/vfs-global-logo.svg",
    position: "web developer",
    date: "2018-2022",
    desc: "Working with a fantastic team of UI folks to develop and maintain purpose-built UI for the Traceable platform and Hypertrace UI library.",
  },
];

const schoolData = [
  {
    id: 1,
    company: "The Specialized Institute of Applied Technology",
    companyImg: "./images/ofppt-logo.png",
    position: "Diploma Technician Specialized in Computer Development",
    date: "2016 - 2018",
    desc: "Working with a fantastic team of UI folks to develop and maintain purpose-built UI for the Traceable platform and Hypertrace UI library.",
  },
  {
    id: 2,
    company: "high school",
    companyImg: "./images/high-school.jpg",
    position: "bachelor's degree",
    date: "2015 - 2016",
    desc: "Working with a fantastic team of UI folks to develop and maintain purpose-built UI for the Traceable platform and Hypertrace UI library.",
  },
  {
    id: 3,
    company: "test",
    companyImg: "./images/high-school.jpg",
    position: "bachelor's degree",
    date: "2015 - 2016",
    desc: "Working with a fantastic team of UI folks to develop and maintain purpose-built UI for the Traceable platform and Hypertrace UI library.",
  },
];

export default function Experience() {
  const [activeSection, setActiveSection] = useState("work");

  const [isClicked, setIsClicked] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <Section
      className="experience"
      id="experience"
      icon="uil uil-users-alt"
      sectionTitle="professional experience"
      sectionSubtitle="my all experience in the field"
    >
      <div className="exp__selector">
        {selectors.map(({ title, icon }) => {
          return (
            <ShowMoreButton
              title={title}
              icon={icon}
              style={
                activeSection === title
                  ? { backgroundColor: "var(--first-color-light)" }
                  : null
              }
              method={() => {
                setActiveSection(title);
                setIsClicked(isClicked);
              }}
            />
          );
        })}
      </div>
      <motion.div
        className="exp__container"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={1}
      >
        {activeSection === "work" ? (
          <>
            {workData.map(
              ({ id, company, companyImg, position, date, desc }, i) => {
                return (
                  <ExperienceBox
                    key={id}
                    company={company}
                    companyImg={companyImg}
                    position={position}
                    date={date}
                    desc={desc}
                  />
                );
              }
            )}
          </>
        ) : (
          <>
            {schoolData.map(
              ({ id, company, companyImg, position, date, desc }, i) => {
                return (
                  <ExperienceBox
                    key={id}
                    company={company}
                    companyImg={companyImg}
                    position={position}
                    date={date}
                    desc={desc}
                  />
                );
              }
            )}
          </>
        )}
      </motion.div>
    </Section>
  );
}
