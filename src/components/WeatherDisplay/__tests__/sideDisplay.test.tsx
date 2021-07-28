import { render, screen } from "@testing-library/react";
import React from "react";
import { TEST_WEATHER_SIDE_DISPLAY_ID } from "../../../constants";
import { ISideDisplayProps } from "../../../models";
import { DUMMY_WEATHER_DATA } from "../../../utils/app.utils";
import SideDisplay from "../sideDisplay";

const props: ISideDisplayProps = {
  data: DUMMY_WEATHER_DATA,
};

test("renders side display in weather display", () => {
  render(<SideDisplay {...props} />);
  const linkElement = screen.getByTestId(TEST_WEATHER_SIDE_DISPLAY_ID);

  expect(linkElement).toBeInTheDocument();
});
