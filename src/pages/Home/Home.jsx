import Hero from "../../components/hero/Hero";
import LatestProjects from "../../components/projects/LatestProjects";
// import Blog from "../../components/blog/Blog";
import Contact from "../../components/contact/Contact";
import Experience from "../../components/experience/Experience";
import About from "../../components/About/About";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestProjects />
      <Experience />
      <About />
      {/* <Blog /> */}
      <Contact />
    </div>
  );
};

export default Home;
