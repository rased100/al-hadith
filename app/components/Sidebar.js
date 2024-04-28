import React from "react";
import Image from "next/image";
import Link from "next/link";
import bookIcon from "../../public/sidebar/bookIcon.svg";
import bookmarkIcon from "../../public/sidebar/bookmarkIcon.svg";
import gotoIcon from "../../public/sidebar/gotoIcon.svg";
import subjectIcon from "../../public/sidebar/subjectIcon.svg";
import home from "../../public/sidebar/home.svg";
import othersIcon from "../../public/sidebar/othersIcon.svg";

const Sidebar = () => {
  return (
    <div className="bg-white z-10 h-[80px] fixed bottom-0 w-full lg:left-0 lg:w-[80px] lg:h-full ">
      <nav className=" flex lg:flex-col lg:h-lvh lg:justify-center justify-evenly items-center md:gap-5 gap-3 ">
        <Link href={"/"}>
          <Image
            className="p-3 hover:bg-[#45ac85] rounded-md"
            src={home}
            alt="book Icon"
            width={45}
            height={45}
          />
        </Link>
        <Link href={"/"}>
          <Image
            className="p-3 hover:bg-[#45ac85] bg-[#45ac85] rounded-md"
            src={bookIcon}
            alt="book Icon"
            width={45}
            height={45}
          />
        </Link>
        <Link href={"/"}>
          <Image
            className="p-3 hover:bg-[#45ac85] rounded-md"
            src={subjectIcon}
            alt="book Icon"
            width={45}
            height={45}
          />
        </Link>
        <Link href={"/"}>
          <Image
            className="p-3 hover:bg-[#45ac85] rounded-md"
            src={bookmarkIcon}
            alt="book Icon"
            width={45}
            height={45}
          />
        </Link>
        <Link href={"/"}>
          <Image
            className="p-3 hover:bg-[#45ac85] rounded-md"
            src={othersIcon}
            alt="book Icon"
            width={45}
            height={45}
          />
        </Link>
        <Link href={"/"}>
          <Image
            className="p-3 hover:bg-[#45ac85] rounded-md"
            src={gotoIcon}
            alt="book Icon"
            width={45}
            height={45}
          />
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
