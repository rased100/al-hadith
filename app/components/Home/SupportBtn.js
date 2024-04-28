import Image from "next/image";
import React from "react";
import support from "../../../public/support.svg";

const SupportBtn = () => {
  return (
    <button className="hidden px-3 py-1  justify-center items-center gap-2 2xl:block 2xl:flex">
      সাপোর্ট করুন
      <Image src={support} alt="support-icon" width={30} height={30} />
    </button>
  );
};

export default SupportBtn;
