import React from "react";
import Banner from "../../Components/Banner/Banner";
import { Helmet } from "react-helmet";
import VolunteerNeedsNow from "../../Components/Volunteer Needs Now/VolunteerNeedsNow";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>HelpHive | Volunteer Management Website</title>
      </Helmet>
      <div className="my-0">
        <Banner></Banner>
        <VolunteerNeedsNow></VolunteerNeedsNow>
      </div>
    </>
  );
};

export default Home;
