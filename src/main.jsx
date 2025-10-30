import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";


import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import ProjectDetails from "./Components/ProjectDetails";

AOS.init({
  duration: 2000,
  easing: "ease-in-out",
  once: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
