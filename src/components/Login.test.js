import React from "react";
import Login from "./Login";
import { render, screen, act } from "../config/test-utils";

beforeEach(async () => {
  await act(async () => {
    render(<Login />);
  });
});

test("Displays sign up form", () => {
  expect(screen.getByText(/email/i)).toBeInTheDocument();
  expect(screen.getByText(/password/i)).toBeInTheDocument();
});
