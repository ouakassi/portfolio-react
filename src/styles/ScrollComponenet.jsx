import React, { useState, useEffect } from "react";
import "./ScrollComponenet.css";

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
      <div onClick={handlClick} className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon" />
      </div>
    );
};

export default ScrollComponent;
