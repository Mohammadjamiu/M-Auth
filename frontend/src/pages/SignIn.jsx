import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    console.log("Form Data:", formData); // Check form data before sending it

    try {
      const response = await fetch("http://localhost:4501/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/");
    } catch (error) {
      console.error("An error occurred:", error.message);
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="mx-auto px-[20px] max-w-[35rem] w-full">
      <h2 className="text-2xl font-bold font-sans-display my-7">Sign In</h2>
      {error && (
        <p className="mb-6 bg-red-200 p-4 rounded-md text-sm text-red-700">
          Something went wrong!
        </p>
      )}

      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E3E63] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-100 rounded-[4px]"
          placeholder="email@example.com"
          required=""
          name="email"
          id="email"
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />

        <div className="flex items-center gap-4 mt-3">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-100 gap-2 rounded-[4px] bg-[#8E3E63] text-primaryForeground hover:bg-[#8E3E63]/90 h-10 px-4 py-2 flex-grow basis-0">
            {loading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </form>
      <p className="text-[15px] mt-5 pl-1">
        Don&apos;t have an account?
        <Link
          to="/sign-up"
          className=" font-medium pl-1 text-[#8E3E63]  hover:text-[#8E3E63]/85 "
        >
          Sign Up
        </Link>
      </p>
      <hr className="opacity-50 mt-6"></hr>
    </div>
  );
};

export default SignIn;
