import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Memory } from "./parts/Memory.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Memory>
      <StrictMode>
        <App />
      </StrictMode>
    </Memory>
  </BrowserRouter>
);
