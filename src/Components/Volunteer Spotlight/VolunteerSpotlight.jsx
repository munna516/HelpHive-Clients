import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const VolunteerSpotlight = () => {
  const navigate = useNavigate();
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/volunteer-of-week").then((res) => {
      setVolunteers(res.data);
    });
  }, []);
  return (
    <div className="mt-20 my-10">
      <h2 className="text-xl lg:text-4xl font-bold text-center text-accent mb-10">
        <Typewriter
          words={["Volunteer Spotlights: Celebrating Changemakers"]}
          loop={50}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteers.map((volunteer, index) => (
          <div
            key={index}
            className={`md:flex md:flex-row border-2 border-gray-200  rounded-xl shadow-xl items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } gap-6`}
          >
            <div className="flex-shrink-0 p-5 w-full md:w-1/3">
              <img
                src={volunteer.image}
                alt={volunteer.name}
                className="w-full md:w-[250px]  h-[300px] md:h-[200px] rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3 text-center p-5 md:text-left">
              <h3 className="text-2xl font-semibold text-accent mb-2">
                {volunteer.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{volunteer.location}</p>
              <p className="text-gray-400">{volunteer.story}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <p className="text-lg font-medium">Want to be featured here?</p>
        <button onClick={()=> navigate("/all-volunteer-need-post")} className="btn btn-accent text-white text-lg mt-3">
          Start Volunteering Today
        </button>
      </div>
    </div>
  );
};

export default VolunteerSpotlight;
