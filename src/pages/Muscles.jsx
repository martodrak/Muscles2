import React from "react";
import Card from "../components/Card";
import { useData } from "../parts/Memory";

export default function Muscles() {
  const { musclesData } = useData();
  return (
    <div className="flex flex-col items-center justify-center lg:min-h-[calc(100vh-264px)]">
      <p className="text-4xl mt-6 font-semibold">Vyber si sval:</p>
      <div className="mt-10 flex gap-4 flex-wrap items-center justify-center">
        {musclesData.map((muscle, i) => (
          <div key={i} className="flex items-center justify-center">
            <Card data={muscle} />
          </div>
        ))}
      </div>
    </div>
  );
}
