import React from "react";
import { Element } from "react-scroll";
import { useGetUsersQuery } from "../app/apiSlice";
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
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    document.title = siteOwnerName;
  }, []);

  return (
    <>
      <Element name="Home" id="home">
        <Hero
          name={userData?.name || siteOwnerName}
          titleLines={siteOwnerTitle}
        />
      </Element>
      <main>
        <AboutMe headshot={null} />
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
