import React from "react";

export default function Contact() {
  return (
    <div className="relative flex flex-col items-center justify-center lg:p-0 px-6 lg:min-h-[calc(100vh-264px)]">
      <p className="text-5xl mt-16">Ahoj</p>
      <div className="mt-8 relative flex flex-col items-center justify-center border-2 rounded-full w-[360px] h-[360px]">
        {" "}
        <img className="rounded-full" src="images/face.jpeg" />
        <a
          href="https://www.instagram.com/martin.drink_/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="absolute top-4 left-[274px] w-16 rounded-xl"
            src="images/Instagram.webp" //src="mdlogo.webp"
          />
        </a>
      </div>

      <p className="lg:mr-32 mr-[87px]">já jsem </p>

      <p className="text-2xl lg:text-3xl m">Martin Drinka</p>

      <p className="lg:text-5xl text-4xl lg:mt-8 mt-10 text-center w-[100%]">
        "A tohle je můj maturitní projekt."
      </p>
      <img
        className="absolute animate-floating -bottom-[78px] left-0 w-16 rounded-xl"
        src="images/mdlogo.webp"
      />
    </div>
  );
}
