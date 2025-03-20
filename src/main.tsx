import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home/Home";
import { FinalSubmit } from "./pages/final-submit/final-submit";
import { Address } from "./pages/address/Address";
import { Name } from "./pages/name/Name";
import "./main.css";
import { Box, theme } from "@mrshmllw/smores-react";
import { GlobalStyles } from "./global.styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles key="globalstyles" />
      <Box
        as="main"
        flex
        height="100vh"
        width="100vw"
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ background: theme.colors.mascarpone }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/name" element={<Name />} />
          <Route path="/address" element={<Address />} />
          <Route path="/final-submit" element={<FinalSubmit />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </StrictMode>,
);
