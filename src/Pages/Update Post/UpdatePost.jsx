import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePost = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/volunteer-post/${id}`)
      .then((res) => setPost(res.data));
  }, []);
  const [post, setPost] = useState({});
  const { id } = useParams();
  const [startDate, setStartDate] = useState();
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { email, name, numberOfVolunteer, ...updatePost } = initialData;
    updatePost.deadline = post?.deadline;
    updatePost.numberOfVolunteer = parseInt(numberOfVolunteer);
    updatePost.organizer = { email, name };
    console.log(updatePost);
    axios
      .put(`http://localhost:5000/update-post/${id}`, updatePost)
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Post id Updated",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(-1);
        }
      });
  };
  return (
    <>
      <Helmet>
        <title>Update Volunteer Need Post</title>
      </Helmet>
      <div className="bg-base-300 my-10 p-6 md:p-20 rounded-lg">
        <h1 className="text-3xl lg:text-4xl text-accent font-bold text-center mb-5">
          Update Heer Your Volunteer Need Post
        </h1>
        <p className="text-gray-500 text-center lg:w-9/12 mx-auto mb-5">
          This enables you to share opportunities for volunteer support. Fill
          out this form to detail your needs, making it easier to connect with
          willing contributors
        </p>
        <form onSubmit={handleUpdate}>
          {/* First Row Name and email */}
          <div className=" md:flex gap-5 space-y-5 md:space-y-0 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Organizer Name
                  </span>
                </div>
                <input
                  type="text"
                  name="name"
                  readOnly
                  defaultValue={post?.organizer?.name}
                  placeholder="name"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Organizer Email
                  </span>
                </div>
                <input
                  type="text"
                  name="email"
                  readOnly
                  defaultValue={post?.organizer?.email}
                  placeholder="email"
                  className="input input-bordered "
                />
              </label>
            </div>
          </div>

          {/* Second Row Thumbnail and Post Title */}
          <div className="md:flex gap-5 space-y-5 md:space-y-0 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Thumbnail</span>
                </div>
                <input
                  type="url"
                  name="thumbnail"
                  defaultValue={post.thumbnail}
                  placeholder="thumbnail"
                  className="input input-bordered "
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Post Title</span>
                </div>
                <input
                  type="text"
                  name="title"
                  defaultValue={post.title}
                  placeholder="title"
                  className="input input-bordered "
                  required
                />
              </label>
            </div>
          </div>

          {/* Third Row Location and Category */}
          <div className=" md:flex gap-5 space-y-5 md:space-y-0 mb-8">
            <div className="w-full ">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Location</span>
                </div>
                <input
                  type="text"
                  name="location"
                  defaultValue={post.location}
                  placeholder="location"
                  className="input input-bordered"
                  required
                />
              </label>
            </div>

            <div className="w-full ">
              {post?.category && (
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">Category</span>
                  </div>
                  <select
                    name="category"
                    className="select select-bordered "
                    required
                    defaultValue={post.category}
                  >
                    <option disabled selected>
                      choose a category
                    </option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Social Service</option>
                    <option>Animal Welfare</option>
                  </select>
                </label>
              )}
            </div>
          </div>

          {/* Fourth Row Number of volunteer and Deadline */}
          <div className=" md:flex gap-5 space-y-5 md:space-y-0 mb-8">
            <div className="w-full ">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Number of volunteer
                  </span>
                </div>
                <input
                  type="number"
                  name="numberOfVolunteer"
                  defaultValue={post.numberOfVolunteer}
                  placeholder="Number of volunteer"
                  className="input input-bordered pr-6"
                  required
                />
              </label>
            </div>

            <div className="w-full">
              {post?.deadline && (
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">Deadline</span>
                  </div>
                  <DatePicker
                    placeholderText="pick a date"
                    className="w-full rounded-lg p-2 h-12 outline-none border focus:border-gray-400"
                    selected={
                      startDate || format(new Date(post?.deadline), "P")
                    }
                    onChange={(date) => setStartDate(date)}
                  />
                </label>
              )}
            </div>
          </div>

          {/* Fifth Row Description */}
          <div className=" md:flex gap-5 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Description</span>
                </div>
                <textarea
                  type="text"
                  name="description"
                  rows="5"
                  defaultValue={post.description}
                  cols="10"
                  placeholder="write somgthing about this game"
                  className="input input-bordered w-full h-[110px] "
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            className="w-full btn btn-accent text-white font-bold"
            value="Update"
          />
        </form>
      </div>
    </>
  );
};

export default UpdatePost;
