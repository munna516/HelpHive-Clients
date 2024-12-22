import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { BiCategory } from "react-icons/bi";
import { IoMdTime } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const NeedPostDeails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const {
    title,
    thumbnail,
    category,
    deadline,
    description,
    numberOfVolunteer,
    location,
    organizer,
  } = post;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/volunteer-post/${id}`)
      .then((res) => setPost(res.data));
  }, []);
  return (
    <>
      <Helmet>
        <title>{`Details | ${title}`}</title>
      </Helmet>
      <div>
        {title && (
          <h1 className="text-2xl md:text-4xl font-bold text-accent text-center my-10">
            <Typewriter
              words={[title]}
              loop={50}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        )}

        <div className="card card-compact bg-base-100 border-2 mb-10 w-11/12 mx-auto shadow-xl">
          <figure className="p-3">
            <img
              src={thumbnail}
              className="w-full h-[300px] md:h-[600px] rounded-lg"
              alt={title}
            />
          </figure>
          <div className="card-body">
            <div className="text-center space-y-3 md:space-y-0 md:flex md:justify-between md:px-10 text-2xl font-medium my-5">
              <h1 className="flex items-center gap-3">
                <BiCategory /> <span className="text-accent">{category}</span>
              </h1>
              {deadline && (
                <h1 className="flex items-center gap-3">
                  <IoMdTime />
                  <span className="text-accent">
                    {" "}
                    {format(new Date(deadline), "dd-MM-yyyy")}
                  </span>
                </h1>
              )}
              <h1 className="flex items-center gap-3">
                <MdGroups />
                <span className="text-accent">{numberOfVolunteer}</span>
              </h1>
              <h1 className="flex items-center gap-3">
                <FaLocationDot />{" "}
                <span className="text-accent">{location}</span>
              </h1>
            </div>
            <div className="md:px-10  text-gray-400">
              <p>{description}</p>
            </div>
            <div className="text-center space-y-3 lg:space-y-0  lg:flex justify-between gap-3 items-center my-5 md:px-10">
              <h1>
                Organizer Name :{" "}
                <span className="text-accent">{organizer?.name}</span>
              </h1>
              <h1>
                Organizer Email :{" "}
                <span className="text-accent">{organizer?.email}</span>{" "}
              </h1>
            </div>

            <div className=" flex justify-center items-center gap-5">
              <Link
                onClick={() => navigate(-1)}
                className="btn btn-accent text-white"
              >
                Back
              </Link>
              <Link className="btn btn-accent text-white text-lg">
                Be a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NeedPostDeails;
