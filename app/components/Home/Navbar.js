import React from "react";
import Image from "next/image";
import search from "../../../public/search-icon.svg";
import logo from "../../../public/logo.png";
import support from "../../../public/support.svg";

import SupportBtn from "./SupportBtn";
import Settings from "./Settings";

// const logo = "/public/icons/home-logo.png";
// const supportIcon = "/public/icons/helping-hand.svg";
// const searchIcon = "/public/icons/search.svg";

const Navbar = () => {
  return (
    <div className="bg-white h-[80px] z-20 fixed top-0 w-full flex items-center justify-between">
      <div className="flex items-center">
        <Image
          className="m-4"
          src={logo}
          alt="ihadith logo"
          width={50}
          height={50}
        />
        <div>
          <h3 className="text-2xl font-bold">হাদিস সমূহ</h3>
          <p>হাদিস পড়ুন শিখুন এবং জানুন</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 lg:gap-14 ">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="hidden lg:block w-full bg-gray-100 rounded px-5 py-2 border border-gray-300 text-gray-500"
          />
          <button className="lg:hidden p-1 mt-1 rounded-md bg-gray-300">
            <Image
              className="m-1"
              src={search}
              alt="search"
              width={30}
              height={30}
            />
          </button>
        </div>

        <div className="bg-green-500 text-white rounded-md mr-4">
          <SupportBtn />
          <Settings></Settings>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
