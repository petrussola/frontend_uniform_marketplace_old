import React from "react";
import { render, screen, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
// import { render, screen, act } from "../config/test-utils";
import { AuthProvider } from "../context/AuthContext";

beforeEach(async () => {
  const wrapper = ({ children }) => (
    <Router>
      <AuthProvider>{children}</AuthProvider>
    </Router>
  );
  await act(async () => {
    render(<Login />, { wrapper });
  });
});

test("Displays sign up form", () => {
  expect(screen.getByText(/email/i)).toBeInTheDocument();
  expect(screen.getByText(/password/i)).toBeInTheDocument();
});
