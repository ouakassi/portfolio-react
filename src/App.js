import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Article from "./pages/Article";

import SpinnerComponent from "./styles/SpinnerComponent";
import ScrollComponent from "./styles/ScrollComponenet";

import "./styles/Globals.css";
import "./styles/Layout.css";
import "./styles/buttons.css";
import "./styles/Base.css";

import ScrollToTop from "./hooks/useScrollToTop";
import NoMatch from "./pages/NoMatch";

const App = () => {
  return (
    <>
      <SpinnerComponent />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
      <ScrollComponent />
    </>
  );
};

export default App;
