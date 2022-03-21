import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import SpinnerComponent from "./styles/SpinnerComponent";
import ScrollComponent from "./styles/ScrollComponenet";

import "./styles/Globals.css";
import "./styles/Layout.css";
import "./styles/buttons.css";
import "./styles/Base.css";

const App = () => {
  return (
    <>
      <SpinnerComponent />
      <Header />
      <Hero />
      <Projects />
      <About />
      <Blog />
      {/*<Contact />

    <Footer />
    <ScrollComponent /> */}
    </>
  );
};

export default App;
