import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";

const ManageMyPost = () => {
  const { user } = useAuth();
  const [toogle, setToggle] = useState(true);
  const [activeTab, setActiveTab] = useState("Tab1");
  const [myPost, setMyPost] = useState([]);
  const [myReq, setMyReq] = useState([]);
  const handleToggle = () => {
    setActiveTab("Tab2");
    setToggle(false);
  };
  useEffect(() => {
    if (activeTab == "Tab1") {
      axios.get(`http://localhost:5000/my-post/${user?.email}`).then((res) => {
        setMyPost(res.data);
      });
    } else if (activeTab == "Tab2") {
      axios
        .get(`http://localhost:5000/my-request/${user?.email}`)
        .then((res) => {
          setMyReq(res.data);
        });
    }
  }, [activeTab]);
  console.log(myPost);
  return (
    <>
      <Helmet>
        <title>Manage My Post</title>
      </Helmet>
      <div role="tablist" className="tabs tabs-lifted  my-8">
        <input
          type="radio"
          name="my_tabs_2"
          onClick={() => setToggle(true)}
          role="tab"
          className={`tab lg:text-2xl font-semibold  ${
            toogle ? "text-accent" : "text-gray-600"
          }`}
          aria-label="My Volunteer Need Posts"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <h1 className="text-xl lg:text-4xl text-center mt-2 font-bold text-accent">
            My Volunteer Need Post ({myPost.length})
          </h1>
          <div className="overflow-x-auto mt-7">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {myPost.map((post) => (
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          onClick={() => handleToggle()}
          className={`tab lg:text-2xl font-semibold  ${
            toogle ? "text-gray-600" : "text-accent"
          }`}
          aria-label="My Volunteering Request"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <h1 className="text-xl lg:text-4xl text-center mt-2 font-bold text-accent">
            My Volunteer Request Post ({myReq.length})
          </h1>
          <div className="overflow-x-auto mt-7">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {myReq.map((req) => (
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageMyPost;
