import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
<<<<<<< HEAD
=======
import { GeneralContextProvider } from "./components/GeneralContext";
>>>>>>> 23fa13c (fixing sell)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
=======
        <GeneralContextProvider>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      </GeneralContextProvider>
>>>>>>> 23fa13c (fixing sell)
    </BrowserRouter>
  </React.StrictMode>
);
