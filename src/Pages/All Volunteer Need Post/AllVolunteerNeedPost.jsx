import { CgMenuGridO } from "react-icons/cg";
import { MdTableRows } from "react-icons/md";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";
import CardFormat from "../../Components/Card Format/CardFormat";
import TableFormat from "../../Components/Table Format/TableFormat";


const AllVolunteerNeedPost = () => {
  const [volunteerNeedPost, setVolunteerNeedPost] = useState([]);
  const [tableFormat, setTableFormat] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(`https://server-pi-drab.vercel.app/all-volunteer-need-post?search=${search}`)
      .then((res) => {
        setVolunteerNeedPost(res.data);
      });
  }, [search]);
  return (
    <>
      <Helmet>
        <title>All Volunteer Need Post</title>
      </Helmet>
      <div className="flex justify-between gap-5 items-center my-10">
        <div className="text-xl lg:text-4xl text-accent font-semibold">
          Volunteer Need Post ({volunteerNeedPost?.length})
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              name="search"
              value={search}
              className="grow"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="flex justify-center items-center gap-5 text-3xl ">
          <p
            onClick={() => setTableFormat(false)}
            className={`cursor-pointer ${tableFormat ? "" : "text-accent"}`}
          >
            <CgMenuGridO />
          </p>
          <p
            onClick={() => setTableFormat(true)}
            className={`cursor-pointer ${tableFormat ? "text-accent" : ""}`}
          >
            <MdTableRows />
          </p>
        </div>
      </div>
      <div>
        {tableFormat ? (
          <TableFormat volunteerNeedPost={volunteerNeedPost}></TableFormat>
        ) : (
          <CardFormat volunteerNeedPost={volunteerNeedPost}></CardFormat>
        )}
      </div>
    </>
  );
};

export default AllVolunteerNeedPost;
