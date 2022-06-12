import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
