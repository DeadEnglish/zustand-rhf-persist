import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home/Home";
import { FinalSubmit } from "./pages/final-submit/final-submit";
import { Address } from "./pages/address/Address";
import { Name } from "./pages/name/Name";
import "./main.css";
import { Box, Button, theme } from "@mrshmllw/smores-react";
import { GlobalStyles } from "./global.styles";
import { ErrorBoundary } from "react-error-boundary";

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
        <ErrorBoundary
          fallbackRender={({ error }) => (
            <div style={{ textAlign: "center" }}>
              <h1>Something went wrong</h1>
              <p>{error.message}</p>{" "}
              <div style={{ marginTop: "16px" }}>
                <Button
                  onClick={() =>
                    (window.location.href = "http://localhost:3000/")
                  }
                >
                  Restart the form
                </Button>
              </div>
            </div>
          )}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote/:quoteId/name" element={<Name />} />
            <Route path="/quote/:quoteId/address" element={<Address />} />
            <Route
              path="/quote/:quoteId/final-submit"
              element={<FinalSubmit />}
            />
          </Routes>
        </ErrorBoundary>
      </Box>
    </BrowserRouter>
  </StrictMode>,
);
