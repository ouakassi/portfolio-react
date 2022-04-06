import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";
import Blog from "../components/blog/Blog";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

import "../styles/Globals.css";
import "../styles/Layout.css";
import "../styles/buttons.css";
import "../styles/Base.css";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
