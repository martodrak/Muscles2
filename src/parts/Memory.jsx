import React, { useState, useEffect, createContext, useContext } from "react";

// Define a default context value

// Create Context with a default value
const DataContext = createContext();

// Custom hook to use the context
export const useData = () => {
  return useContext(DataContext);
};

// Memory Provider Component
export const Memory = ({ children }) => {
  const musclesData = [
    {
      name: "Prsní svaly",
      latin: "Pectoralis Major",
      description:
        "Má dvě hlavní části: klíčkovou a sternální část. Prsní svaly se aktivují při tlačících pohybech. Cvičení: bench press, tlak s jednoručkami. Pohyb: stlačení paží směrem k sobě. Pohybové směry: horizontální (při bench pressu) a vertikální (při tlaku nad hlavou).",
      image: "images/animace1panak.png",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Ramenní svaly",
      latin: "Deltoideus",
      description:
        "Má tři části: Přední – zvedání paže dopředu, Střední – zvedání paže do stran, Zadní – zvedání paže dozadu. Aktivuje se při tlakových a zvedacích pohybech. Cvičení: shoulder press, boční a přední zdvihy. Pohybové směry: přední, boční a zadní pohyb.",
      image: "images/panak_ramena.png",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Bicepsové svaly",
      latin: "Biceps Brachii",
      description:
        "Má dvě hlavy: dlouhou a krátkou. Je zde také brachialis, malý sval mezi hlavami. Aktivuje se při tahání a flexi paže. Cvičení: bicepsové zdvihy s činkami, shyby s úzkým úchopem. Pohyb: zvedání předloktí směrem k rameni.",
      image: "images/panak_bicepsNP.png",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Tricepsové svaly",
      latin: "Triceps Brachii",
      description:
        "Má tři části: Dlouhá hlava, boční hlava a střední hlava. Aktivuje se při tlacích nebo extendování paží. Cvičení: tricepsové stahování na kladce, kickbacky, bench press s úzkým úchopem. Pohyb: protažení paže a stlačení lokte směrem dolů.",
      image: "images/panak_triceps.png",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Předloketní svaly",
      latin: "Forearm Muscles",
      description:
        "Rozdělen na flexory a extenzory. Aktivuje se při stiskových a rotačních pohybech. Cvičení: zdvihy činek, prsty na kladce. Pohyb: flexe a extenze zápěstí a prstů. Pohybové směry: flexe a extenze v zápěstí.",
      image: "images/panak_predlokti.png",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Břišní svaly",
      latin: "Abdominals",
      description:
        "Skládá se z rectus abdominis, obliques (šikmé svaly) a transversus abdominis. Aktivuje se při flexi trupu a stabilizaci pánve. Cvičení: crunches, plank, ruské rotace. Pohyb: ohyb trupu nebo rotace. Pohybové směry: flexe trupu, rotace a laterální flexe.",
      image: "images/panak_bricho.png",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Zádové svaly",
      latin: "Latissimus Dorsi",
      description:
        "Skládá se z mnoha svalů, například trapezy, latisimy atp. Aktivuje se při tahání. Cvičení: shyby, přítahy v předklonu, stahování kladky. Pohyb: zvedání paží a přitahování rukou směrem k tělu. Pohybové směry: vertikální (při shybování) a horizontální (při přítazích).",
      image: "images/panak_zada.png",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Stehenní svaly",
      latin: "Quadriceps",
      description:
        "Má čtyři části: Rectus femoris, vastus medialis, vastus lateralis, vastus intermedius. Aktivuje se při prodlužování kolene. Cvičení: dřepy, leg press, výpady. Pohyb: extenze kolene.",
      image: "images/panak_stehna.png",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Hýžďové svaly",
      latin: "Gluteus Maximus, Medius, Minimus",
      description:
        "Má tři části: Gluteus maximus – největší a nejmocnější část, Gluteus medius a minimus – stabilizace pánve. Aktivuje se při zvedání pánve a extenzi kyčlí. Cvičení: dřepy, výpady, hip thrusty. Pohyb: zvedání pánve nebo nohy směrem vzhůru.",
      image: "images/panak_hyzde.png",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Lýtkové svaly",
      latin: "Gastrocnemius",
      description:
        "Má dvě hlavy: vnitřní a vnější. Aktivuje se při zvedání paty. Cvičení: výpony na lýtkách, sedící výpony. Pohyb: zvedání paty směrem vzhůru (flexe v kotníku). Pohybové směry: plantární flexe v kotníku.",
      image: "images/panak_lytka.png",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Zadní stehenní svaly",
      latin: "Hamstring",
      description:
        "Zadní část stehna řadíme: dvojhlavý sval stehenní, sval pološlašitý a sval poloblanitý. Aktivuje se ohybem spodní části nohy v kolenním kloubu je hlavní funkcí, kterou mají tyto svaly za úkol. Cvičení: rumunský mrtvý tah, leg curl na stroji (zakopávání). Pohyb: flexe kolene, extenze kyčle.",
      image: "images/panak_hems.png",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contextValue = {
    musclesData,
    screenSize,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
