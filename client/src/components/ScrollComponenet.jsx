import { useState, useEffect } from "react";
import "./ScrollComponenet.css";
import { motion } from "framer-motion";
import useWindowHeight from "../hooks/useWindowHeight";

const ScrollComponent = () => {
  const windowHeight = useWindowHeight();

  const handlClick = () => window.scrollTo(0, 0);

  if (windowHeight >= 400)
    return (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ transition: 0.5 }}
        onClick={handlClick}
        className="scrollup"
      >
        <i className="uil uil-arrow-up scrollup__icon" />
      </motion.div>
    );
};

export default ScrollComponent;
