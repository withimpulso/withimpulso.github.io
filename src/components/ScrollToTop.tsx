import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router doesn't reset scroll position on navigation, so pages could
// render mid-scroll (e.g. showing the bottom of a shorter page).
const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // Let pages that need to scroll to a specific section (via state.scrollTo) handle it themselves.
    if (state?.scrollTo) return;
    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;
