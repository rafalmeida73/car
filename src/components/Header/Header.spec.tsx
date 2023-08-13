import React from "react";

import { act, cleanup, fireEvent, render } from "@testing-library/react-native";

import { Header } from ".";
import { mockBack } from "../../../jestSetupFile";
import { makeThemeProvider } from "../../utils/jestFunctions/mockThemeProvider";

const mockPress = jest.fn();

describe("Header Component", () => {
  afterEach(cleanup);
  it("Should render", () => {
    const component = render(<Header title="test" />, {
      wrapper: makeThemeProvider,
    });

    expect(component).toBeTruthy();
  });
  it("Should render with icons", () => {
    const { getAllByTestId } = render(
      <Header
        title="test"
        icons={[
          {
            name: "arrow-collapse-right",
            onPress: async () => {
              mockPress();
            },
          },
        ]}
      />,
      {
        wrapper: makeThemeProvider,
      },
    );

    const icons = getAllByTestId("Header-IconsButtons");

    expect(icons.length).toEqual(1);
  });
  it("Should be able to press  icons", () => {
    const { getAllByTestId } = render(
      <Header
        title="test"
        icons={[
          {
            name: "arrow-collapse-right",
            onPress: async () => {
              mockPress();
            },
          },
        ]}
      />,
      {
        wrapper: makeThemeProvider,
      },
    );

    const icons = getAllByTestId("Header-IconsButtons");

    act(() => {
      fireEvent.press(icons[0]);
    });

    expect(mockPress).toBeCalled();
  });
  it("Should be able to press  back button", () => {
    const { getByTestId } = render(
      <Header
        title="test"
        icons={[
          {
            name: "arrow-collapse-right",
            onPress: async () => {
              mockPress();
            },
          },
        ]}
      />,
      {
        wrapper: makeThemeProvider,
      },
    );

    const back = getByTestId("Header-BackButton");

    act(() => {
      fireEvent.press(back);
    });

    expect(mockBack).toBeCalled();
  });
});
