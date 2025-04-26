import { test, expect } from "vitest";
import { add, like } from "./like.js";

test("adds two numbers", () => {
  expect(add(1, 1)).toBe(2);
});

test("no one likes this", () => {
  const result = like([]);
  expect(result).toBe("no one likes this");
});

