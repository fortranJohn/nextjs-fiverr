import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PopularServices = () => {
  const router = useRouter;
  const popularServiceData = [
    {
      name: "AI Artists",
      label: "Add talent to AI",
      image: "/service1.png",
    },
    {
      name: "Logo Design",
      label: "Build our brand",
      image: "/service2.jpeg",
    },
    {
      name: "Wordpress",
      label: "Customize",
      image: "/service3.jpeg",
    },
    {
      name: "Voice Over",
      label: "Share your message",
      image: "/service4.jpeg",
    },
    {
      name: "Social Media",
      label: "Reach more customers",
      image: "/service5.jpeg",
    },
    {
      name: "SEO",
      label: "Unlock growth online",
      image: "/service6.jpeg",
    },
    {
      name: "Illustrations",
      label: "Colour your dreams",
      image: "/service7.jpeg",
    },
    {
      name: "Translation",
      label: "Go global",
      image: "/service8.jpeg",
    },
    {
      name: "Script Writing",
      label: "Bring your Imagination on paper",
      image: "/service3.jpeg"
    },
    {
      name: "AI Prompting",
      label: "Get the best prompts for results",
      image: "/service1.png"
    },
  ];
  return (
    <div className="mx-20 my-16">
      <h2 className="4xl mb-5 text-[#404145] font-bold ">Popular Services</h2>
      <ul className="flex flex-wrap gap-16">
        {popularServiceData.map(({ name, label, image }) => (
          <li
            className="relative cursor-pointer"
            key={name}
            onClick={() => router.push(`/search?q=${name.toLowerCase()}`)}
          >
            <div className="absolute z-10 text-white left-5 top-4">
              <span>{label}</span>
              <h6 className="font-extrabold text-2xl">{name}</h6>
            </div>
            <div className="h-80 w-72">
              <Image
                alt="service"
                src={image} fill
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularServices;
