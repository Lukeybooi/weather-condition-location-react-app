import React from "react";
import { capitalize, divideBy } from "../app.utils";

test("test capitalize function if empty values", () => {
  expect(capitalize("")).toBe("");
});

test("test capitalize function if with hello world", () => {
  expect(capitalize("hello world")).toBe("Hello World");
});

test("test divideBy function if invalid division will return 0", () => {
  expect(divideBy(100, 0)).toBe(0);
});

test("test divideBy function if 25 / 4 = 6.25", () => {
  expect(divideBy(25, 4)).toBe(6.25);
});

test("test divideBy function if 25 / 5 = 5", () => {
  expect(divideBy(25, 5)).toBe(5);
});

test("test divideBy function if ! 25 / 7 = 4", () => {
  expect(divideBy(25, 7)).not.toBe(4);
});
