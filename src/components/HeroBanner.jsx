import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const hero = [
  { id: 1, imgUrl: "bg-hero1.webp" },
  { id: 2, imgUrl: "bg-hero2.webp" },
  { id: 3, imgUrl: "bg-hero3.webp" },
  { id: 4, imgUrl: "bg-hero4.webp" },
  { id: 5, imgUrl: "bg-hero5.webp" },
  { id: 6, imgUrl: "bg-hero6.webp" },
];

const HeroBanner = () => {
  const router = useRouter();
  const [image, setImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(image >= 6 ? 1 : image + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [image]);

  return (
    <div className="h-[680px] relative bg-cover">
      <div className="absolute t-0 r-0 w-[110vw] h-full z-0 transition-opacity">
        {hero.map((item) => (
          <Image
            key={item.id}
            alt="hero"
            src={`/bg-hero${item.id}.webp`}
            fill
            className={`${
              image === item.id
                ? "opacity-100"
                : "opacity-0 transition-all duration-1000"
            }`}
          />
        ))}
      </div>
      <div className="z-10 relative flex justify-center flex-col h-full gap-5 ml-20">
        <h1 className="text-white text-5xl leading-snug ">
          Find the perfect &nbsp; <i>Side Husl</i> <br /> for your balling game
        </h1>
        <div className="flex align-middle">
          <div className="relative">
            <input
              type="text"
              placeholder="Try building mobile apps"
              className="h-14 w-[450px] pl-10 rounded-md outline-none rounded-r-none"
            />
          </div>
          <button className="bg-[#1DBF73] text-white px-12 text-lg font-semibold rounded-r-md ">
            Search
          </button>
        </div>
        <div className="text-white  flex gap-4">
          <ul className="flex gap-5 ">
            <li className="text-sm p1 px-3 border py-2     rounded-full hover:bg-white transition-all cursor-pointer duration-300 hover:text-black">Creative Writing</li>
            <li className="text-sm p1 px-3 border py-2    rounded-full hover:bg-white transition-all cursor-pointer duration-300 hover:text-black">Graphic Design</li>
            <li className="text-sm p1 px-3 border py-2    rounded-full hover:bg-white transition-all cursor-pointer duration-300 hover:text-black">Copywriting</li>
            <li className="text-sm p1 px-3 border py-2    rounded-full hover:bg-white transition-all cursor-pointer duration-300 hover:text-black">Data Analysis</li>
            <li className="text-sm p1 px-3 border py-2    rounded-full hover:bg-white transition-all cursor-pointer duration-300 hover:text-black">Web Design</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
