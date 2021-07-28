import { render, screen } from "@testing-library/react";
import React from "react";
import RetryButton from "..";
import { TEST_RETRY_BTN_ID } from "../../../constants";
import { IRetryOptionProps } from "../../../models";

const props: IRetryOptionProps = {
  onClick: () => console.log("clicked"),
};

test("renders retry button", () => {
  render(<RetryButton {...props} />);
  const linkElement = screen.getByTestId(TEST_RETRY_BTN_ID);

  expect(linkElement).toBeInTheDocument();
});
