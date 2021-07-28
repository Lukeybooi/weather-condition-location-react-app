import { render, screen } from "@testing-library/react";
import React from "react";
import { TEST_WEATHER_MAIN_DISPLAY_ID } from "../../../constants";
import { IWeatherDisplayProps } from "../../../models";
import { DUMMY_WEATHER_DATA } from "../../../utils/app.utils";
import MainDisplay from "../mainDisplay";

const props: IWeatherDisplayProps = {
  data: DUMMY_WEATHER_DATA,
  onRefresh: () => console.log("onRefresh"),
};

test("renders main display in weather display", () => {
  render(<MainDisplay {...props} />);
  const linkElement = screen.getByTestId(TEST_WEATHER_MAIN_DISPLAY_ID);

  expect(linkElement).toBeInTheDocument();
});
