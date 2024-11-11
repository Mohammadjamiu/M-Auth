import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="mx-auto px-[20px] max-w-[35rem] w-full ">
      <h2 className="text-2xl font-bold font-sans-display my-6 ">Profile</h2>

      <form className="flex flex-col gap-y-4">
        <img
          alt="profile"
          src={currentUser.profilePhoto}
          className="h-24 w-24 object-cover mb-4 rounded-full self-center cursor-pointer border-[#8E3E63]/90 border-2"
        />

        <input
          type="text"
          className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E3E63] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-100 rounded-[4px]"
          placeholder="Username"
          name="username"
          id="username"
          defaultValue={currentUser.username}
        />
        <input
          type="email"
          className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E3E63] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-100 rounded-[4px]"
          placeholder="email@email.com"
          name="email"
          id="email"
          defaultValue={currentUser.email}
        />

        <input
          type="password"
          className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E3E63] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-100 rounded-[4px]"
          id="password"
          placeholder="********"
          name="password"
        />

        <div className="flex items-center gap-4 mt-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-100 gap-2 rounded-[4px] bg-[#8E3E63] text-primaryForeground hover:bg-[#8E3E63]/90 h-10 px-4 py-2 flex-grow basis-0">
            Update
          </button>
        </div>
      </form>
      {/* <p className="text-[15px] mt-5 pl-1">
        Don&apos;t have an account?
        <Link
          to="/sign-up"
          className=" font-medium pl-1 text-[#8E3E63]  hover:text-[#8E3E63]/85 "
        >
          Sign Up
        </Link>
      </p> */}

      <div className="flex items-center justify-between gap-4 mt-5">
        <Link
          to="/sign-up"
          className=" mb-6 bg-red-200 p-2 px-3 rounded-md text-sm text-red-700"
        >
          Delete Account
        </Link>
        <Link
          to="/sign-up"
          className=" mb-6 bg-blue-200 p-2 px-3 rounded-md text-sm text-blue-700"
        >
          Sign Out
        </Link>
      </div>
      <hr className="opacity-50 mt-6"></hr>
    </div>
  );
};

export default Profile;
