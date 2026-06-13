import React from "react";
import { Element, scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import SelectedWorks from "../components/SelectedWorks";
import ResearchAreas from "../components/ResearchAreas";
import Books from "../components/Books";
import Teaching from "../components/Teaching";
import PodcastMedia from "../components/PodcastMedia";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
import { siteOwnerName, siteOwnerTitle } from "../config";

// #region component
const Home = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = siteOwnerName;
  }, []);

  // Scroll to a section when arriving from another route (e.g. a NavBar link
  // clicked while on /publications). The target section is passed via router
  // state. `smooth: false` issues a single scroll which the site's global
  // `html { scroll-behavior: smooth }` then animates — letting react-scroll
  // animate it itself fights that CSS rule and produces a janky, stretched
  // scroll, so we hand the easing to the browser.
  React.useEffect(() => {
    if (!state?.scrollTo) return;
    scroller.scrollTo(state.scrollTo, { smooth: false, offset: -64 });
    // Clear the intent so a refresh or back/forward doesn't re-trigger the scroll.
    navigate("/", { replace: true, state: null });
  }, [state, navigate]);

  return (
    <>
      <Element name="Home" id="home">
        <Hero
          name={siteOwnerName}
          titleLines={siteOwnerTitle}
          headshot={process.env.PUBLIC_URL + "/images/hero_image.jpg"}
        />
      </Element>
      <main id="main-content">
        <AboutMe />
        <SelectedWorks />
        <ResearchAreas />
        <Books />
        <Teaching />
        <PodcastMedia />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default Home;
