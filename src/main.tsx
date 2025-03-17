import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home/Home";
import { FinalSubmit } from "./pages/final-submit/final-submit";
import { Address } from "./pages/address/Address";
import { Name } from "./pages/name/Name";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/name" element={<Name />} />
        <Route path="/address" element={<Address />} />
        <Route path="/final-submit" element={<FinalSubmit />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
