import React from "react";
import FiverrLogo from "./FiverrLogo";
import { BsCheckCircle } from "react-icons/bs";
import Image from "next/image";

const FiverrBusiness = () => {
  return (
    <div className="px-20 flex py-16 bg-[#0d084d] gap-10">
      <div className="text-white flex flex-col gap-6 justify-center items-start">
        <div className="flex gap-4">
          <FiverrLogo fillColor={"#ffffff"}  />
          <span className="text-3xl text-white font-bold">Business</span>
        </div>
        <h2 className="text-3xl font-bold">A solution built for business</h2>
        <h4 className="text-xl mb-4">
          Upgrade to a curated experience to access vetted talent and exclusive
          tools
        </h4>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl " />
            <span>Talent matching</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl " />
            <span>Dedicated account management</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl " />
            <span>Team collaboration tools</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl " />
            <span>Business payment solutions</span>
          </li>
        </ul>
        <button
          type="button"
          className="border text-base font-medium mt-3 px-5 py-2 text-white rounded-md border-[#1dbf73] bg-[#1dbf73] "
        >
          Explore Side-Husl Business
        </button>
      </div>
      <div className="relative h-[512px] w-2/3">
        <Image 
          src="/business.webp" alt="business"  fill
        />
      </div>
    </div>
  );
};

export default FiverrBusiness;
