import React, { useState, useEffect } from "react";
import { useData } from "../parts/Memory";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const { musclesData, screenSize } = useData();
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * musclesData.length);
      setIndex(randomIndex > 1 ? randomIndex - 1 : randomIndex);
    }, 5000);

    return () => clearInterval(interval); // Cleanup function to clear the interval on unmount
  }, []);
  return (
    <div className="flex items-center gap-16 justify-center mt-6">
      <div className="flex flex-col items-center justify-center">
        <img className="w-[155px] h-[260px]" src={musclesData[index].image} />
        <p className="text-black-300">{musclesData[index].name}</p>
      </div>

      {screenSize.width > 1024 && (
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-[155px] h-[260px]"
            src={musclesData[index + 1].image}
          />
          <p className="text-black-300">{musclesData[index + 1].name}</p>
        </div>
      )}
    </div>
  );
}
