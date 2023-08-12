import React from "react";

import { Stack } from "expo-router";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components";

import { reactNativePaperTheme } from "../themes/paperTheme";
import styledComponentsTheme from "../themes/theme";

export default function Layout() {
  return (
    <ThemeProvider theme={styledComponentsTheme}>
      <PaperProvider theme={reactNativePaperTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
            animation: "fade",
          }}
        >
          <Stack.Screen name="index" />
        </Stack>
      </PaperProvider>
    </ThemeProvider>
  );
}
