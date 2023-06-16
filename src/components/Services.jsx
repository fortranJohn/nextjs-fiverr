import { categories } from "@/utils/categories";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Services = () => {
  const router = useRouter();
  return (
    <div className="mx-20 my-16">
      <h2 className="text-4xl font-bold mb-10 text-[#404541] ">
        You need it, we&apos;ve got it
      </h2>
      <ul className="grid grid-cols-5 gap-10">
        {categories.map(({ name, logo }) => (
          <li
            onClick={() => router.push(`/search?category=${name}`)}
            key={name}
            className="flex flex-col justify-center items-center cursor-pointer hover:shadow-2xl border border-transparent hover:border-[#1d8f73] p-5 transition-all duration-500 "
          >
            <Image src={logo} alt="categories" width={50} height={50} />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
