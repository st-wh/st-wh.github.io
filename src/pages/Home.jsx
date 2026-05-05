import React from "react";
import { Element } from "react-scroll";
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
  React.useEffect(() => {
    document.title = siteOwnerName;
  }, []);

  return (
    <>
      <Element name="Home" id="home">
        <Hero
          name={siteOwnerName}
          titleLines={siteOwnerTitle}
        />
      </Element>
      <main>
        <AboutMe headshot={process.env.PUBLIC_URL + "/images/profileImage.jpeg"} />
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
