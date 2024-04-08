// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="py-2 px-8 shadow flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img
          src="http://assets.sakshxm08.in/sakshxm08-logo-transparent"
          alt=""
          className="w-14"
        />
        <div className="flex flex-col justify-center gap-0 leading-tight">
          <h1 className="text-3xl font-bold">Assets</h1>
          <h4 className="text-sm font-bold">@sakshxm08</h4>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link
          to="/auth"
          className="border rounded-md py-2 px-4 hover:border-black transition-all"
        >
          Login
        </Link>
        {/* <Link
          to="/upload"
          className="border rounded-md py-2 px-4 hover:border-black transition-all"
        >
          Upload
        </Link>
        <button className="border rounded-md py-2 px-4 border-red-300 text-red-400 hover:text-red-600 hover:border-red-600 transition-all">
          Logout
        </button> */}
      </div>
    </div>
  );
};
