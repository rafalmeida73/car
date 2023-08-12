import React from "react";

import { ThemeProvider } from "styled-components/native";

import styledComponentsTheme from "../../themes/theme";

export const makeThemeProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={styledComponentsTheme}>{children}</ThemeProvider>
  );
};
