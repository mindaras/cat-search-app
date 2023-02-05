import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./common/styles/globalStyles";
import { theme } from "./common/styles/theme";
import { BrowserRouter } from "react-router-dom";
import { Cats } from "@modules/cats/Cats";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Cats />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
