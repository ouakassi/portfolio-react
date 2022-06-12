import "./Section.css";
import { motion } from "framer-motion";

const Section = (props) => (
  <motion.section
    initial={{ opacity: 0, width: "80%" }}
    animate={{ opacity: 1, x: 0, width: "100%" }}
    exit={{ opacity: 0, y: 50, width: "80%" }}
    transition={{ duration: 0.2 }}
    id={props.id}
    className={`${props.className || ""} section`}
  >
    <h2 className="section__title">
      <i className={props.icon + " section__icon"} />
      {props.sectionTitle}
    </h2>
    <span className="section__subtitle">{props.sectionSubtitle}</span>
    {props.children}
  </motion.section>
);

export default Section;
