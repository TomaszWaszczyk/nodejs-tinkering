import { test, expect } from "vitest";
import { add } from "./like.js";

test("adds two numbers", () => {
  expect(add(1, 1)).toBe(2);
});
