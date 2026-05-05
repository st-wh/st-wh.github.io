import React from "react";
import { useGetUsersQuery } from "../app/apiSlice";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
import { heroTagline, moreInfo } from "../config";
import { updateTitle } from "../utils";

// #region component
const Home = () => {
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    updateTitle(userData.name);
  }, [userData]);

  return (
    <>
      <Hero name={userData.name} tagline={heroTagline} />
      <main>
        <AboutMe
          avatar_url={userData.avatar_url}
          bio={userData.bio}
          moreInfo={moreInfo}
        />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default Home;
