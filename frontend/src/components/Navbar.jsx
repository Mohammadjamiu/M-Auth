import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 firefox:bg-opacity-90">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <span className="text-2xl text-[#7E60BF] font-semibold">
              M-Auth
            </span>
          </Link>

          <div className="flex items-center space-x-4 text-gray-900">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/sign-up">Sign Up</Link>

            {/* Profile Image */}
            {/* <div className="ml-4">
              <img
                src="path-to-your-image.jpg" // Replace with the actual path to your image
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white/30 backdrop-blur-md backdrop-brightness-125"
              />
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
