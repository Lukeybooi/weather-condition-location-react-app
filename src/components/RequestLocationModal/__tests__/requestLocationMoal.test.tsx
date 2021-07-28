import { render, screen } from "@testing-library/react";
import React from "react";
import RequestLocationModal from "..";
import { TEST_LOCATION_MODAL_ID } from "../../../constants";
import { ILocationModalProps } from "../../../models";

const props: ILocationModalProps = {
  show: true,
  onAllow: () => console.log("onAllow"),
  onDeny: () => console.log("onDeny"),
};

test("renders requestLocationModal", () => {
  render(<RequestLocationModal {...props} />);
  const linkElement = screen.getByTestId(TEST_LOCATION_MODAL_ID);

  expect(linkElement).toBeInTheDocument();
});
