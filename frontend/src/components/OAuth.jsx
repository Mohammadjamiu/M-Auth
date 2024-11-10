import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";

const OAuth = () => {
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      //   console.log(result.user);
      //   console.log(result.user.email);
      const response = await fetch("http://localhost:4501/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await response.json();
      dispatch(signInSuccess(data));
    } catch (error) {
      console.error("Could not login with Google:", error.message || error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background border-[#8E3E63]/90 border-2 focus-visible:ring-2 focus-visible:ring-[#8E3E63]/90 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-100 gap-2 rounded-[4px] bg-[#fff] text-[#8E3E63] hover:text-[#fff] hover:bg-[#8E3E63]/90 h-10 px-4 py-2 flex-grow basis-0"
    >
      Continue with Google
    </button>
  );
};

export default OAuth;
