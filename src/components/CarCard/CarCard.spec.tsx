import React from "react";

import { act, cleanup, fireEvent, render } from "@testing-library/react-native";

import { CarCard } from ".";
import { mockPush } from "../../../jestSetupFile";
import { makeThemeProvider } from "../../utils/jestFunctions/mockThemeProvider";

describe("CarCard Component", () => {
  afterEach(cleanup);
  it("Should render", () => {
    const component = render(
      <CarCard
        id={1}
        description="description"
        latitude="123"
        longitude="1234"
        name="rafael"
        photo="https://github.com/rafalmeida73.png"
        type="Esportivo"
        video="https://static.videezy.com/system/resources/previews/000/012/979/original/record_player_011.mp4"
      />,
      {
        wrapper: makeThemeProvider,
      },
    );

    expect(component).toBeTruthy();
  });
  it("Should render correct title", () => {
    const { getByTestId } = render(
      <CarCard
        id={1}
        description="description"
        latitude="123"
        longitude="1234"
        name="rafael"
        photo="https://github.com/rafalmeida73.png"
        type="Esportivo"
        video="https://static.videezy.com/system/resources/previews/000/012/979/original/record_player_011.mp4"
      />,
      {
        wrapper: makeThemeProvider,
      },
    );

    const title = getByTestId("CarCard-Title").props;
    expect(title.children).toEqual("rafael");
  });
  it("Should be able to press", () => {
    const { getByTestId } = render(
      <CarCard
        id={1}
        description="description"
        latitude="123"
        longitude="1234"
        name="rafael"
        photo="https://github.com/rafalmeida73.png"
        type="Esportivo"
        video="https://static.videezy.com/system/resources/previews/000/012/979/original/record_player_011.mp4"
      />,
      {
        wrapper: makeThemeProvider,
      },
    );

    const card = getByTestId("CarCard-Card");
    fireEvent.press(card);

    expect(mockPush).toBeCalled();
  });
  it("Should ", () => {
    const { getByTestId } = render(
      <CarCard
        id={1}
        description="description"
        latitude="123"
        longitude="1234"
        name="rafael"
        photo=""
        type="Esportivo"
        video="https://static.videezy.com/system/resources/previews/000/012/979/original/record_player_011.mp4"
      />,
      {
        wrapper: makeThemeProvider,
      },
    );

    const image = getByTestId("CarCard-Image");

    act(() => {
      image.props.onError();
    });

    const imageWithError = getByTestId("CarCard-Image").props;
    expect(imageWithError.source.uri).toEqual(
      "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png",
    );
  });
});
