import React, { useState, useEffect } from "react";
import { useData } from "./Memory";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  const { screenSize } = useData();
  const [actualPage, setActualPage] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActualPage(window.location.pathname);
  }, []);

  return (
    <div>
      {screenSize.width > 1024 ? (
        <div className="flex items-center text-white justify-between px-8 py-4 bg-green-500 relative z-50">
          <div className="w-16">
            <a href="/">
              <img
                className="w-16 rounded-xl"
                src="images/LOGO.png"
                alt="Logo"
              />
            </a>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl">Svalová zóna</p>
            <div className="flex mt-4 text-lg font-bold text-center items-center justify-center space-x-16">
              <a className="w-16" href="/">
                <p className={`w-16 ${actualPage === "/" ? "underline" : ""}`}>
                  Domů
                </p>
              </a>
              <a className="w-16" href="/muscles">
                <p
                  className={`w-16 ${
                    actualPage === "/muscles" ? "underline" : ""
                  }`}
                >
                  Svaly
                </p>
              </a>
              <a className="w-16" href="/contact">
                <p
                  className={`w-16 ${
                    actualPage === "/contact" ? "underline" : ""
                  }`}
                >
                  O mně
                </p>
              </a>
            </div>
          </div>
          <div className="w-16"></div>
        </div>
      ) : (
        <div className="relative bg-green-500 p-4 text-white flex justify-between items-center z-50">
          <div className="w-16">
            <a href="/">
              <img
                className="w-12 rounded-xl"
                src="images/LOGO.png"
                alt="Logo"
              />
            </a>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={32} />
          </button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isMenuOpen ? "auto" : 0,
              opacity: isMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-green-600 text-white overflow-hidden z-50"
          >
            <div className="flex flex-col items-center py-4 space-y-2">
              <a
                className="w-full text-center py-2 hover:bg-green-700"
                href="/"
              >
                Domů
              </a>
              <a
                className="w-full text-center py-2 hover:bg-green-700"
                href="/muscles"
              >
                Svaly
              </a>
              <a
                className="w-full text-center py-2 hover:bg-green-700"
                href="/contact"
              >
                O mně
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
