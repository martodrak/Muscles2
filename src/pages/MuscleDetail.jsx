import React from "react";
import VideoPlayer from "../components/VideoPlayer";

export default function MuscleDetail({ data }) {
  const { name, description, image, latin, videoLink } = data;

  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-32 mt-10">
      {/* Text Section */}
      <div className="relative border-2 rounded-xl px-4 py-6 max-w-xs md:max-w-[400px] flex flex-col items-center justify-center">
        <p className="absolute top-2 right-4 text-gray-400 text-sm">
          "{latin}"
        </p>
        <p className="font-bold text-2xl md:text-3xl mt-2 text-center">
          {name}
        </p>
        <div className="border-2 w-full max-w-[300px] mt-2" />
        <p className="mt-4 text-center text-sm md:text-base">{description}</p>
      </div>

      {/* Image Section */}
      <div className="mt-6">
        <img
          className="w-full max-w-xs md:w-[310px] md:h-[520px]"
          src={image}
          alt={name}
        />
      </div>

      {/* Video Section */}
      <div className="flex flex-col mt-16 md:mt-32 items-center justify-center w-full">
        <p className="text-3xl md:text-6xl mb-4 md:mb-8 self-start md:ml-0 ml-4">
          Video ukázka
        </p>
        <VideoPlayer videoLink={videoLink} />
      </div>
    </div>
  );
}
