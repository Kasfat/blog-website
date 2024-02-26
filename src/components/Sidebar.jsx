import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ApiData from "../services/GlobalApi";

function Sidebar() {
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [isError, setIsError] = useState("");

  const getPopularBlogData = async () => {
    try {
      let modifiedApiData = ApiData;
      const res = await modifiedApiData.get("/blogs");
      setPopularBlogs(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getPopularBlogData();
  }, []);

  return (
    <div>
      <div>
        <h3 className=" text-2xl font-semibold px-4">Letest Blogs</h3>
        {popularBlogs.slice(0,5).map((value, index) => 
          <div className="my-5 border-b-2 border-spacing-2 px-4" key={value.index}>
            <h4 className=" font-medium mb-2">{value.title}</h4>
            <Link
              to="/"
              className=" text-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
            >
              Read More <FaArrowRight className=" ml-2 mt-1" />
            </Link>
          </div>
        )}
      </div>
      <div>
        <h3 className=" text-2xl font-semibold px-4 mt-20">Popular Blogs</h3>
        {popularBlogs.slice(6,11).map((value, index) => 
          <div className="my-5 border-b-2 border-spacing-2 px-4" key={value.index}>
            <h4 className=" font-medium mb-2">{value.title}</h4>
            <Link
              to="/"
              className=" text-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
            >
              Read More <FaArrowRight className=" ml-2 mt-1" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
