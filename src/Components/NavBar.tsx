import {  MoonStar } from "lucide-react";

import "./Home.css";

const NavBar = () => {
  return (
    <div className="flex p-0 m-0 justify-between">
      <div className="logo">
       
        <a
          className="namedesc text-xl m-2 py-2 select-none px-1 rounded-2xl   hover:underline underline-offset-8  transition-all ease-linear"
          href="/"
        >
          {`>_`}
        </a>
      </div>
      <div className="RightPane flex gap-10 text-center">
        <a
          className="namedesc p-1 select-none  hover:underline underline-offset-8  rounded-md transition-all ease-linear"
          href="/work"
        >
          Work
        </a>
        <a
          className=" namedesc p-1  select-none hover:underline underline-offset-8 rounded-md transition-all ease-linear"
          href="/labs"
        >
          Labs
        </a>
        <a
          className=" namedesc p-1 select-none  hover:underline underline-offset-8 rounded-md transition-all ease-linear"
          href="/blog"
        >
          Blog
        </a>
        <button className="Darkmodetoggler p-1 hover:bg-black hover:text-white border-gray-200 border-2 rounded-lg transition-all ease-in-out">
          <MoonStar />
          {/* <SunMoon /> */}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
