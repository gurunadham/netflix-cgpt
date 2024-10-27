import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
          alt="log"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full  bg-black bg-opacity-80 text-white border border-transparent"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-black bg-opacity-80 text-white"
        />
        <button className="p-4 my-4 w-full bg-red-700 rounded-lg">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
