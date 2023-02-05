import { GlobalStyle } from "@common/styles/globalStyles";
import { theme } from "@common/styles/theme";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => (
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

export { Container };
