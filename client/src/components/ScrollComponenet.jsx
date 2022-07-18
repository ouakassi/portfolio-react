import { useState, useEffect } from "react";
import "./ScrollComponenet.css";
import { motion } from "framer-motion";

const ScrollComponent = () => {
  const [windowHeight, setwindowHeight] = useState(0);

  const handlClick = () => window.scrollTo(0, 0);

  useEffect(() => {
    const onScroll = () => setwindowHeight(window.pageYOffset);

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
