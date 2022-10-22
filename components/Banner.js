import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/Final_Banner.jpg"
        className=""
        layout="fill"
        objectFit="cover"
        alt='some value'
      />
      <div className="absolute top-1/2 text-center w-full">
         
        <p className="  text-2xl sm:text-7xl   inline-block outline-4 text-white">
          Not sure where not to go ? Perfect.
        </p>
        <button className=" block m-w-full mx-auto text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 duration-150">
          Lets Go
        </button>
      </div>
    </div>
  );
}

export default Banner;
