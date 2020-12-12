import React from "react";
import { render, screen, act } from "@testing-library/react";
import SignUp from "./Signup";
// import { render, screen, act } from "../config/test-utils";
import { AuthProvider } from "../context/AuthContext";

beforeEach(async () => {
  const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
  await act(async () => {
    render(<SignUp />, { wrapper });
  });
});

test("Displays sign up form", () => {
  expect(screen.getByText(/email/i)).toBeInTheDocument();
  expect(screen.getByText(/confirm password/i)).toBeInTheDocument();
});
