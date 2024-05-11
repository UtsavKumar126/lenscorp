import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-[7rem] py-[1rem] sticky">
      <img
        src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"
        className="w-[80px] h-[70px]"
        alt="logo"
      />
      <div className="flex gap-[2rem] text-base justify-around items-center">
        <a
          style={{ padding: "0.5rem 1rem", transition: "all 0.2s ease-in-out" }}
          className="hover:text-[purple] hover:scale-105"
        >
          MakeMyWeb
        </a>
        <a
          style={{ padding: "0.5rem 1rem", transition: "all 0.2s ease-in-out" }}
          className="hover:text-[purple] hover:scale-105"
        >
          Home
        </a>
        <a
          style={{ padding: "0.5rem 1rem", transition: "all 0.2s ease-in-out" }}
          className="hover:text-[purple] hover:scale-105"
        >
          Company
        </a>
        <a
          style={{ padding: "0.5rem 1rem", transition: "all 0.2s ease-in-out" }}
          className="hover:text-[purple] hover:scale-105 hover:font-[700]"
        >
          Blogs
        </a>
      </div>
    </div>
  );
}

export default Navbar;
