import React from "react";

const SignUp = () => {
  return (
    <div className="mx-auto px-[20px] max-w-[35rem] w-full">
      {/* <h1 className="text-left font-bold my-7 text-2xl">Sign Up</h1> */}
      <h2 className="text-2xl font-bold font-sans-display my-7">Sign Up</h2>
      <form className="flex flex-col gap-y-4">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="username"
        >
          Username
        </label>
        <input
          type="username"
          className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-100 rounded-[4px]"
          placeholder="username"
          required=""
          name="username"
          id="username"
        ></input>
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-100 rounded-[4px]"
          placeholder="email@example.com"
          required=""
          name="email"
          id="email"
        ></input>
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-start justify-between"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E3E63] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-100 rounded-[4px]"
          id="password"
          placeholder="********"
          required=""
          name="password"
        />

        <div className="flex items-center gap-4 mt-3">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-100 gap-2 rounded-[4px] bg-[#8E3E63] text-primaryForeground hover:bg-[#8E3E63]/90 h-10 px-4 py-2 flex-grow basis-0">
            Sign Up
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-100 gap-2 rounded-[4px] bg-[#fdf1f6] text-[#8E3E63] hover:text-primaryForeground hover:bg-[#8E3E63] h-10 px-4 py-2 flex-grow basis-0">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
