import "./ButtonPrimary.css";
import { motion } from "framer-motion";

export default function ButtonPrimary({ link, title, icon }) {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0, "background-size": "100% 3px" }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ "background-size": "100% 20%", scale: 1.2 }}
      className="button-primary"
      href={link}
      // rel="noreferrer noopener"
    >
      {title}
      <i className={`${icon} button__icon`}></i>
    </motion.a>
  );
}
