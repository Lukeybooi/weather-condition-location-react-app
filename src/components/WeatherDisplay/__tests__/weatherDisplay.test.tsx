import { render, screen } from "@testing-library/react";
import React from "react";
import WeatherDisplay from "..";
import { TEST_WEATHER_DISPLAY_ID } from "../../../constants";
import { IWeatherDisplayProps } from "../../../models";
import { DUMMY_WEATHER_DATA } from "../../../utils/app.utils";

const props: IWeatherDisplayProps = {
  data: DUMMY_WEATHER_DATA,
  onRefresh: () => console.log("onRefresh"),
};

test("renders weather display", () => {
  render(<WeatherDisplay {...props} />);
  const linkElement = screen.getByTestId(TEST_WEATHER_DISPLAY_ID);

  expect(linkElement).toBeInTheDocument();
});
