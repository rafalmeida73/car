import React from "react";

import { act, cleanup, fireEvent, render } from "@testing-library/react-native";

import Page from "../../../src/app";
import { makeThemeProvider } from "../../utils/jestFunctions/mockThemeProvider";

describe("Login Page", () => {
  afterEach(cleanup);

  it("Should render", () => {
    const component = render(<Page />, {
      wrapper: makeThemeProvider,
    });

    expect(component).not.toBeFalsy();
  });
  it("Should be able run onSubmitEditing", async () => {
    const { getAllByTestId } = render(<Page />, {
      wrapper: makeThemeProvider,
    });

    const input = getAllByTestId("TextInput")[0];

    fireEvent.changeText(input, "user");

    act(() => {
      input.props.onSubmitEditing();
    });
  });
  it("Should be submit form when password input is onSubmitEditing", async () => {
    const { getAllByTestId } = render(<Page />, {
      wrapper: makeThemeProvider,
    });

    const input = getAllByTestId("TextInput")[1];

    fireEvent.changeText(input, "password");

    act(() => {
      input.props.onSubmitEditing();
    });
  });
  it("Should be submit form when button is clicked", async () => {
    const { getByTestId } = render(<Page />, {
      wrapper: makeThemeProvider,
    });

    const submitButton = getByTestId("Login-Form-Button");

    fireEvent.press(submitButton);
  });
});
