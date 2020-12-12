import React from "react";
import { screen, render } from "@testing-library/react";
import MarketingPage from "./MarketingPage";

it("renders welcome message", () => {
  render(<MarketingPage />);
  expect(screen.getByText(/uniforms/i)).toBeInTheDocument();
  expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});
