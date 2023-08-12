import React from "react";

import { cleanup, fireEvent, render } from "@testing-library/react-native";

import { Checkbox } from ".";
import { makeThemeProvider } from "../../utils/jestFunctions/mockThemeProvider";

const onPress = jest.fn();

describe("InputText Component", () => {
  afterEach(cleanup);
  it("Should render", () => {
    const component = render(<Checkbox onPress={onPress} />, {
      wrapper: makeThemeProvider,
    });

    expect(component).toBeTruthy();
  });
  it("Should be able change text with form error", () => {
    const { getByTestId } = render(<Checkbox onPress={onPress} text="test" />, {
      wrapper: makeThemeProvider,
    });
    const checkbox = getByTestId("Checkbox-Text");
    fireEvent.press(checkbox);

    expect(onPress).toBeCalled();
  });
});
