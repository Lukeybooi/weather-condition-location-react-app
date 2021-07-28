import { render, screen } from "@testing-library/react";
import React from "react";
import Alert from "..";
import { TEST_ALERT_ID } from "../../../constants";
import { IAlertProps } from "../../../models";

const props: IAlertProps = { message: "Test Alert", type: "info" };

test("renders alert", () => {
  render(<Alert {...props} />);
  const linkElement = screen.getByTestId(TEST_ALERT_ID);

  expect(linkElement).toBeInTheDocument();
});
