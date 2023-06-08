import { Routes, Route, useLocation } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";

import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Project from "./Projects/Project";
import Blog from "./Blog/Blog";
import Contact from "../components/contact/Contact";
import Article from "./Blog/Article";
import NotFound from "./Errors/NotFound";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Unauthorized from "./Errors/Unauthorized";
import Create from "./Dashboard/Create";

// import CreateArticle from "./Dashboard/CreateArticle";
// import CreateProject from "./Dashboard/CreateProject";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<Article />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/create" element={<Create />} /> */}

      <Route element={<RequireAuth />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard/create-article" element={<CreateArticle />} /> */}
        {/* <Route path="/dashboard/create-project" element={<CreateProject />} /> */}
      </Route>
    </Routes>
  );
}
