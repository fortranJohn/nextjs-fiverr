import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <div className="flex item-center justify-center text-gray-400 text-2xl font-bold min-h-[11vh]">
      Trusted by: &nbsp;
      <ul className="flex justify-center text-gray gap-10 ml-10">
        {[1, 2, 3, 4, 5].map((item) => (
          <li key={item} className="relative h-[4.5rem] w-4.5rem">
            {" "}
            <Image width="50" height="70" alt="trusted brands" src={`/trusted${item}.png`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Companies;
