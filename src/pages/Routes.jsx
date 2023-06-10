import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Project from "./Projects/Project";
import Blog from "./Blog/Blog";
import Contact from "../components/contact/Contact";
import Article from "./Blog/Article";
import NotFound from "./Errors/NotFound";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<Article />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
