import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className=" px-4 py-32 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className=" text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome To Our Blog
        </h1>
        <p className=" text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
          Start your blog today and oin a community of writers and readers who
          are passionate about sharing theries stories and ideas. We offer
          everything you need to get started, from helpful tips and tutorials
        </p>
        <div>
            <Link to="/" className=" font-medium hover:text-orange-500 inline-flex items-center py-1">Learn More <FaArrowRight className=" ml-2 mt-1"/></Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
