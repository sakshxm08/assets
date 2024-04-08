import { useState } from "react";
import axios from "axios";

export const Auth = () => {
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });
  const setValues = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/auth/login", details)
      .then((res) => console.log(res.data));
  };
  return (
    <div className="w-screen min-h-screen h-full bg-gray-100 pt-20 px-4">
      <div className="w-full max-w-sm mx-auto flex flex-col gap-4 p-6 rounded-xl shadow bg-white">
        <div className="flex items-center gap-4 pb-6 border-b-[0.5px]">
          <img
            src="http://assets.sakshxm08.in/sakshxm08-logo-transparent"
            alt=""
            className="w-16"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-xl">Welcome back</h3>
            <h6 className="text-gray-600 font-light">
              Please enter your details to sign in
            </h6>
          </div>
        </div>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={setValues}
              className="border p-2 w-full rounded-md focus-visible:outline-black"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={setValues}
              className="border p-2 w-full rounded-md focus-visible:outline-black"
            />
          </div>
          <button className="rounded-md bg-slate-900 text-white p-3 text-sm">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
