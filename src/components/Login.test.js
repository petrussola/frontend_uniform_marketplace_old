import React from "react";
import user from "@testing-library/user-event";
import Login from "./Login";
import { render, screen, act, waitFor } from "../config/test-utils";

beforeEach(async () => {
  await act(async () => {
    render(<Login />);
  });
});

test("Displays log in form", () => {
  expect(screen.getByText(/email/i)).toBeInTheDocument();
  expect(screen.getByText(/password/i)).toBeInTheDocument();
});

test("Shows typed input", async () => {
  const fakeEmail = "dev@dev.lol";
  const fakePassword = "1234567";

  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const passwordInput = screen.getByLabelText(/password/i);
  await user.type(emailInput, fakeEmail);
  await user.type(passwordInput, fakePassword);

  expect(emailInput.value).toEqual(fakeEmail);
  expect(passwordInput.value).toEqual(fakePassword);
});

test("Submits form", async () => {
  const fakeEmail = "dev@dev.lol";
  const fakePassword = "1234567";

  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const passwordInput = screen.getByLabelText(/password/i);
  const button = screen.getByRole("button", { name: /log in/i });
  user.type(emailInput, fakeEmail);
  user.type(passwordInput, fakePassword);
  user.click(button);
  await waitFor(() => {
    expect(screen.getByText(/There is no user record/i)).toBeInTheDocument();
  });
});
