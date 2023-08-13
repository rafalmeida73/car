import React from "react";

import { act, cleanup, render } from "@testing-library/react-native";

import Cars from "../app/cars";
import { makeThemeProvider } from "../utils/jestFunctions/mockThemeProvider";

export const mockLogout = jest.fn();
export const mockLoadCars = jest.fn();
jest.mock("../logic/useCars", () => {
  return {
    useCars: () => ({
      logout: mockLogout,
      cars: [
        {
          id: 13381,
          nome: "Maserati Grancabrio",
          tipo: "classicos",
          descricao: "Maserati Grancabrio",
          urlFoto:
            "https://s3-sa-east-1.amazonaws.com/videos.livetouchdev.com.br/esportivos/Maserati_Grancabrio_Sport.png",
          urlVideo:
            "https://s3-sa-east-1.amazonaws.com/videos.livetouchdev.com.br/esportivos/renault_megane.mp4",
          latitude: "-23.564224",
          longitude: "-46.653156",
        },
        {
          id: 1338,
          nome: "Maserati Grancabrio",
          tipo: "classicos",
          descricao: "Maserati Grancabrio",
          urlFoto:
            "https://s3-sa-east-1.amazonaws.com/videos.livetouchdev.com.br/esportivos/Maserati_Grancabrio_Sport.png",
          urlVideo:
            "https://s3-sa-east-1.amazonaws.com/videos.livetouchdev.com.br/esportivos/renault_megane.mp4",
          latitude: "-23.564224",
          longitude: "-46.653156",
        },
      ],
      loadCars: mockLoadCars,
    }),
  };
});

describe("Cars Page", () => {
  afterEach(cleanup);
  it("Should render", () => {
    const component = render(<Cars />, {
      wrapper: makeThemeProvider,
    });

    expect(component).toBeTruthy();
  });
  it("Should render ItemSeparatorComponent", () => {
    const { getByTestId } = render(<Cars />, {
      wrapper: makeThemeProvider,
    });

    const flatList = getByTestId("Cars-FlatList").props;
    const separator = getByTestId("Cars-FlatList-Separator");

    act(() => {
      flatList.ItemSeparatorComponent();
    });

    expect(separator).toBeTruthy();
  });
});
