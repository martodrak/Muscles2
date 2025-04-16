import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./parts/Navbar";
import Footer from "./parts/Footer";
import Muscles from "./pages/Muscles";
import Contact from "./pages/Contact";
import MuscleDetail from "./pages/MuscleDetail";
import "./index.css";
import { useData } from "./parts/Memory";

export default function App() {
  const { musclesData } = useData();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/muscles" element={<Muscles />} />
        <Route path="/contact" element={<Contact />} />
        {musclesData.map((muscleData, i) => (
          <Route
            id={i}
            path={`/Muscle-${muscleData.name}`}
            element={<MuscleDetail data={muscleData} />}
          />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}
