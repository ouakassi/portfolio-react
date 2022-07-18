import "./StyledParagrapgh.css";
import { motion } from "framer-motion";

const StyledParagraph = ({ children }) => (
  <motion.p
    initial={{ opacity: 0, y: 100 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    }}
    viewport={{ once: true, amount: 1 }}
    className="styles__paragraph"
  >
    {children}
  </motion.p>
);

export default StyledParagraph;
