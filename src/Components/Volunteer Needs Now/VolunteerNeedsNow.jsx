import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card Format/Card";

const VolunteerNeedsNow = () => {
  const [needNow, SetNeedNow] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/volunteer-need-now").then((res) => {
      SetNeedNow(res.data);
    });
  }, []);
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center text-accent my-10">
          Volunteer Needs Now
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
          {needNow.map((post) => (
            <Card key={post._id} post={post}></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default VolunteerNeedsNow;
