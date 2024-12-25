import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Card = ({ post }) => {
  const { _id, thumbnail, title, description, deadline,category } =
    post;
  return (
    <>
      <div
        className="card card-compact bg-base-100 border shadow-xl transition hover:scale-105
       overflow-hidden"
      >
        <figure className="p-3">
          <img
            src={thumbnail}
            className="rounded-lg w-full h-[300px] object-cover"
            alt={title}
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title  font-bold">{title}</h2>
          <p className="text-gray-400">{description.slice(0, 100)} . . .</p>
          <div className="flex justify-between text-lg ">
            <div>
              Category :{" "}
              <span className="text-accent font-semibold">
                {category}
              </span>
            </div>
            <div>
              Deadline :{" "}
              <span className="text-accent font-semibold">
                {format(new Date(deadline), "P")}
              </span>
            </div>
          </div>
          <div className="card-actions justify-end mt-5">
            <Link to={`/volunteer-post/${_id}`}>
              <button className="btn btn-accent text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
