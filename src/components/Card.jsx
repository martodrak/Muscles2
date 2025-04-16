import React from "react";

export default function Card({ data }) {
  const { name, description, image } = data;
  return (
    <a
      href={`
      Muscle-${name}
    `}
      className="flex flex-col items-center min-w-64 min-h-[370px] justify-center border-2 duration-200 hover:border-green-500 shadow-md border-green-200 rounded-xl px-6 py-4"
    >
      <p className="text-2xl">{name}</p>
      <div className="flex mt-4 items-center justify-center">
        <img src={image} className="w-[155px] h-[260px]" alt="sval" />
      </div>
      <button className="button__small bg-green-500 text-white mt-10">
        Podrobnosti 
      </button>
    </a>
  );
}
