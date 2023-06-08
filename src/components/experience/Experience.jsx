import Section from "../Section";
import "./Experience.css";
import ExperienceBox from "./ExperienceBox";
import { ShowMoreButton } from "../Buttons/ShowMoreButton";
import { useState } from "react";
import IMAGES from "../../images";

const selectors = [
  { title: "school", icon: "uil uil-briefcase" },
  { title: "work", icon: "uil uil-building" },
];

const data = {
  workData: [
    {
      id: 1,
      company: "Freelancing",
      companyImg: IMAGES.freelanceLogo,
      position: "Web Developer",
      date: "2022 - Now",
      desc: "Working with a fantastic team of UI folks to develop and maintain purpose-built UI for the Traceable platform and Hypertrace UI library.",
    },
    {
      id: 2,
      company: "vfs global (mawared house)",
      companyImg: IMAGES.vfsLogo,
      position: "web developer",
      date: "sep 2019 - nov 2021",
      desc: "Working with a fantastic team of UI folks to develop and maintain purpose-built UI for the Traceable platform and Hypertrace UI library.",
    },
  ],
  schoolData: [
    {
      id: 1,
      company: "The Specialized Institute of Applied Technology",
      companyImg: IMAGES.ofpptLogo,
      position: "Diploma Technician Specialized in Computer Development",
      date: "2016 - 2018",
      desc: "Working with a fantastic team of UI folks to develop and maintain purpose-built UI for the Traceable platform and Hypertrace UI library.",
    },
    {
      id: 2,
      company: "high school",
      companyImg: IMAGES.highSchoolLogo,
      position: "bachelor's degree",
      date: "2015 - 2016",
      desc: "Working with a fantastic team of UI folks to develop and maintain purpose-built UI for the Traceable platform and Hypertrace UI library.",
    },
  ],
};

export default function Experience() {
  const [activeSection, setActiveSection] = useState("work");

  const selectorStyle = {
    backgroundColor: "var(--first-color-light)",
    fontSize: "2rem",
    fontWeight: "600",
    fontFamily: "var(--font-1)",
  };

  const iconStyle = {
    color: "var(--first-color-alt)",
    transform: "scale(1.3)",
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
        {selectors.map(({ title, icon }, i) => {
          return (
            <ShowMoreButton
              key={i}
              title={title}
              icon={icon}
              style={activeSection === title ? selectorStyle : null}
              iconStyle={activeSection === title ? iconStyle : null}
              method={() => {
                setActiveSection(title);
              }}
            />
          );
        })}
      </div>

      <div className="exp__container">
        {activeSection === "work"
          ? data.workData.map(
              ({ id, company, companyImg, position, date, desc }) => {
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
            )
          : data.schoolData.map(
              ({ id, company, companyImg, position, date, desc }) => {
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
      </div>
    </Section>
  );
}
