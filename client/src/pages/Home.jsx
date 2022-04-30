import React, { Fragment } from "react";

import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Blog from "../components/blog/Blog";
import Contact from "../components/contact/Contact";
import { motion } from "framer-motion";

import "../styles/Globals.css";
import "../styles/Layout.css";
import "../styles/buttons.css";
import "../styles/Base.css";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Projects />
      <Blog />
      <Contact />
    </motion.div>
  );
};

export default Home;
