import React from "react";

import { act, cleanup, fireEvent, render } from "@testing-library/react-native";

import InputText from ".";
import { makeThemeProvider } from "../../utils/jestFunctions/mockThemeProvider";
// aaa
let mockError = "";
const mockClearError = jest.fn();
jest.mock("@unform/core", () => ({
  useField: () => {
    return {
      fieldName: "fieldName",
      registerField: (params) => {
        params.getValue();
        params.setValue();
        params.clearValue();
      },
      error: mockError,
      clearError: mockClearError,
    };
  },
}));

describe("InputText Component", () => {
  afterEach(cleanup);
  it("Should render", () => {
    const component = render(<InputText name="test" />, {
      wrapper: makeThemeProvider,
    });

    expect(component).toBeTruthy();
  });
  it("Should call onFocus when input is focused", () => {
    const onFocus = jest.fn();

    const { getByTestId } = render(
      <InputText name="test" onFocus={onFocus} />,
      {
        wrapper: makeThemeProvider,
      },
    );

    const input = getByTestId("TextInput").props;

    act(() => {
      input.onFocus();
    });

    expect(onFocus).toBeCalled();
  });
  it("Should call onFocus when input blur", () => {
    const onBlur = jest.fn();

    const { getByTestId } = render(<InputText name="test" onBlur={onBlur} />, {
      wrapper: makeThemeProvider,
    });

    const input = getByTestId("TextInput").props;

    act(() => {
      input.onBlur();
    });

    expect(onBlur).toBeCalled();
  });
  it("Should be able change text with form error", () => {
    mockError = "error";
    const { getByTestId } = render(<InputText name="test" />, {
      wrapper: makeThemeProvider,
    });

    const input = getByTestId("TextInput");

    const newValue = "new value";
    act(() => {
      fireEvent.changeText(input, newValue);
    });

    const inputChange = getByTestId("TextInput").props;

    expect(inputChange.value).toBe(newValue);
  });
  it("Should be able press password icon", () => {
    const { getByTestId } = render(<InputText name="test" isPassword />, {
      wrapper: makeThemeProvider,
    });

    const button = getByTestId("Passoword-Button-Icon");

    act(() => {
      fireEvent.press(button);
    });

    const icon = getByTestId("Passoword-Icon").props;

    expect(icon.name).toBe("eye-slash");
  });
});
