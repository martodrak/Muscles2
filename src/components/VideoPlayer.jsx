// src/VideoPlayer.jsx
import React from "react";

const VideoPlayer = ({ videoLink }) => {
  return (
    <div className="flex flex-col items-center justify-center  w-[60vw] bg-gray-100 p-4 rounded-xl">
      {/* <h1 className="text-3xl font-bold mb-4">Video ukázka</h1> */}
      <div className="w-full max-w-s2xl">
        <video controls className="w-full rounded shadow-lg">
          <source src={videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
