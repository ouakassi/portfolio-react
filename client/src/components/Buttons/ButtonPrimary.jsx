import "./ButtonPrimary.css";
import { motion } from "framer-motion";

export default function ButtonPrimary({ link, title, icon }) {
  return (
    <motion.a
      initial={{
        scale: 0.8,
        opacity: 0,
        backgroundSize: "100% 3px",
      }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{
        backgroundSize: "100% 10px",
        scale: 1.1,
      }}
      className="button-primary"
      href={link}
      // rel="noreferrer noopener"
    >
      {title}
      <i className={`${icon} button__icon`}></i>
    </motion.a>
  );
}
