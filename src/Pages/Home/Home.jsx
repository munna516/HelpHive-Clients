import React from "react";
import Banner from "../../Components/Banner/Banner";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>HelpHive | Volunteer Management Website</title>
      </Helmet>
      <div className="my-0">
        <Banner></Banner>
      </div>
    </>
  );
};

export default Home;
