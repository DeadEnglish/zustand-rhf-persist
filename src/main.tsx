import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./main.css";
import { Box, theme } from "@mrshmllw/smores-react";
import { GlobalStyles } from "./global.styles";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";
import { AppRouting } from "./routes";

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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AppRouting />
        </ErrorBoundary>
      </Box>
    </BrowserRouter>
  </StrictMode>,
);
