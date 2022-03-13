import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog";

import "./styles/Globals.css";
import "./styles/Layout.css";
import "./styles/buttons.css";
import "./styles/Base.css";

const App = () => (
  <>
    <Header />
    <Hero />
    <main className="main">
      <Projects />
      <Blog />
      <About />
    </main>
    <Footer />
  </>
);

export default App;
