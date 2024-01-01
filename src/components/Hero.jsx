import React from "react";
import { RiStarSFill } from "react-icons/ri";

export default function Hero() {
  return (
    <div className=" mt-12 flex items-center justify-center px-12 py-4">
      <div className="flex flex-col gap-8">
        {/* left */}
        <h1 className="uppercase text-4xl font-semibold max-w-xl">
          Hi There, I'm Aditya from SUM Tech . Let's create something amazing
        </h1>
        <div className="flex gap-4 text-lg font-medium">
          {/* taglines */}
          <div className="flex items-center">
            <RiStarSFill color="#f9db4b" />
            <span>Mobile</span>
          </div>
          <div className="flex items-center">
            <RiStarSFill color="#f9db4b" />
            <span>Consultant</span>
          </div>
          <div className="flex items-center">
            <RiStarSFill color="#f9db4b" />
            <span>Web</span>
          </div>
        </div>
        <div className="flex gap-4">
          {/* button */}
          <button className="bg-transparent border-2 border-[#222222] font-semibold py-2 px-8 rounded-full">
            Want to discuss?
          </button>
          <button className="bg-[#f9db4b] font-semibold py-2 px-8 rounded-full">
            Let's Talks.
          </button>
        </div>
      </div>
      <div>
        {/* right image section */}
        <img className="w-60 object-contain rounded-full" src="/user.jpg" />
      </div>
    </div>
  );
}
