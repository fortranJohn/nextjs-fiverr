import Image from "next/image";
import React from "react";

const JoinFiverr = () => {
  return (
    <div className="mx32 my16 relative">
      <div className="absolute z-10 top-1/3 left-10">
        <h4 className="text-white text-5xl mb-10">
          Suddenly it&apos;s all so <i>doable</i>
        </h4>
        <button className="text-base border font-medium px-5 py-2 bg-[#1dbf73] border-[#1dbf73] text-white rounded-md">
          Join Side-Husl
        </button>
      </div>
      <div className="w-full h-96">
        <Image src="/bg-signup.webp" fill  alt="signup" className="rounded-sm" />
      </div>
    </div>
  );
};

export default JoinFiverr;
