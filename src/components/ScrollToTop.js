import React from "react";
import { useLocation } from "react-router-dom";

// #region component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useLayoutEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [pathname]);

  return null;
};
// #endregion

export default ScrollToTop;
