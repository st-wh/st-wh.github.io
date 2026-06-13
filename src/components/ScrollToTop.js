import React from "react";
import { useLocation } from "react-router-dom";

// #region component
const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  React.useLayoutEffect(() => {
    // When a navigation requests scrolling to a specific section (handled in
    // Home), don't fight it by forcing the window back to the top.
    if (state?.scrollTo) return;
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    // `state` is intentionally read but excluded from deps: re-run only on a
    // real route change, not when Home clears the scrollTo intent in place.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
};
// #endregion

export default ScrollToTop;
