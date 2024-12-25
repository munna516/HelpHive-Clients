import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card Format/Card";
import { FaArrowRight } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";

const VolunteerNeedsNow = () => {
  const navigate = useNavigate();
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
        <div className="flex justify-end my-8 mr-10">
          <button
            onClick={() => navigate("/all-volunteer-need-post")}
            className="flex items-center justify-end gap-2 text-red-500 font-bold text-lg"
          >
            See All <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default VolunteerNeedsNow;
