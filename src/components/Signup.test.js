import React from "react";
import SignUp from "./Signup";
import { render, screen, act } from "../config/test-utils";

beforeEach(async () => {
  await act(async () => {
    render(<SignUp />);
  });
});

test("Displays sign up form", () => {
  expect(screen.getByText(/email/i)).toBeInTheDocument();
  expect(screen.getByText(/confirm password/i)).toBeInTheDocument();
});
