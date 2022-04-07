import React from "react";

import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Blog from "../components/blog/Blog";
import Contact from "../components/contact/Contact";

import "../styles/Globals.css";
import "../styles/Layout.css";
import "../styles/buttons.css";
import "../styles/Base.css";

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
