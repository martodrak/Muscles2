import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import Carousel from "../components/Carousel";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center lg:min-h-[calc(100vh-264px)]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center mt-16"
      >
        <p className="lg:text-5xl text-3xl font-semibold text-center">
          První den V gymu?
        </p>
        <p className="ml-16 lg:ml-64 text-2xl lg:text-4xl lg:mt-6 mt-4">
          tak to si správně!
        </p>
      </motion.div>

      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="lg:w-[25%] w-[50%]"
        src="images/logoFinal.png"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="group flex flex-col border-2 hover:border-green-300 duration-300 rounded-xl px-6 py-4 lg:min-w-[600px] max-w-[80%] items-center justify-center mt-16"
      >
        <p className="text-3xl mt-2 font-semibold">
          Všechy cviků co budeš potřebovat
        </p>
        <Carousel />
        <button
          className="px-4 py-3 text-xl mt-6 group-hover:bg-green-500 md:bg duration-300 bg-green-700 rounded-xl text-white"
          onClick={() => navigate("/muscles")}
        >
          Jdu do toho
        </button>
      </motion.div>
    </div>
  );
}
