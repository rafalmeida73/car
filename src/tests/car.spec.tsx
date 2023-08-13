import React from "react";

import { cleanup, render } from "@testing-library/react-native";

import Car from "../app/car";
import { makeThemeProvider } from "../utils/jestFunctions/mockThemeProvider";

export const mockPush = jest.fn();
let mockImage =
  "https://s3-sa-east-1.amazonaws.com/videos.livetouchdev.com.br/esportivos/Maserati_Grancabrio_Sport.png";
jest.mock("expo-router", () => {
  return {
    useRouter: () => ({
      push: mockPush,
      canGoBack: () => true,
      back: jest.fn(),
    }),
    useLocalSearchParams: () => ({
      name: "Maserati Grancabrio",
      photo: mockImage,
      type: "classicos",
      description: "Maserati Grancabrio",
      video:
        "https://s3-sa-east-1.amazonaws.com/videos.livetouchdev.com.br/esportivos/renault_megane.mp4",
      latitude: "-23.564224",
      longitude: "-46.653156",
    }),
  };
});

describe("Car Page", () => {
  afterEach(cleanup);
  it("Should render", () => {
    const component = render(<Car />, {
      wrapper: makeThemeProvider,
    });

    expect(component).toBeTruthy();
  });
  it("Should render with image error", () => {
    mockImage = "";
    const component = render(<Car />, {
      wrapper: makeThemeProvider,
    });

    expect(component).toBeTruthy();
  });
});
