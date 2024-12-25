import axios from "axios";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../Hooks/useAuth";
import { register } from "swiper/element";
import toast from "react-hot-toast";

const Event = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/upcoming-event")
      .then((res) => setEvents(res.data));
  }, []);
  const handleRegister = (id) => {
    const registerEvent = {
      email: user?.email,
      eventId: id,
    };
    axios
      .post("http://localhost:5000/event-registration", registerEvent)
      .then((res) => {
        // console.log(res.data);
        if (res?.data?.acknowledged) {
          console.log(res);
          toast.success("Registration Successful");
        } else {
          toast.error(res?.data);
        }
      });
  };
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-accent">
        <Typewriter
          words={["Upcoming Events"]}
          loop={50}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl"
          >
            <div className="card-body">
              <figure>
                <img
                  className="rounded-lg w-full h-[200px] object-cover"
                  src={event.image}
                  alt="Shoes"
                />
              </figure>
              <h3 className="card-title text-xl font-semibold text-accent">
                {event.title}
              </h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
              <p className="mt-2 text-gray-700">{event.description}</p>
              <div className="card-actions mt-4">
                <button
                  onClick={() => handleRegister(event._id)}
                  className="btn btn-accent w-full text-white"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
