import { render, screen } from "@testing-library/react";
import React from "react";
import Loader from "..";
import { TEST_LOADER_ID } from "../../../constants";
import { ILoaderProps } from "../../../models";

const props: ILoaderProps = { loading: true };

test("renders loader", () => {
  render(<Loader {...props} />);
  const linkElement = screen.getByTestId(TEST_LOADER_ID);

  expect(linkElement).toBeInTheDocument();
});
