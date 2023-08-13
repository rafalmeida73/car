import React, { useEffect, useState } from "react";

import { Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components";

import CarsProvider from "../logic/useCars";
import { reactNativePaperTheme } from "../themes/paperTheme";
import styledComponentsTheme from "../themes/theme";

export default function Layout() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<
    null | boolean
  >(null);

  useEffect(() => {
    SecureStore.getItemAsync("token").then((token) => {
      setIsUserAuthenticated(!!token);
    });
  }, []);

  return (
    <CarsProvider>
      <ThemeProvider theme={styledComponentsTheme}>
        <PaperProvider theme={reactNativePaperTheme}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: "transparent" },
              animation: "fade",
            }}
          >
            <Stack.Screen name="index" redirect={isUserAuthenticated} />
            <Stack.Screen name="cars/index" />
            <Stack.Screen name="car/index" />
          </Stack>
        </PaperProvider>
      </ThemeProvider>
    </CarsProvider>
  );
}
