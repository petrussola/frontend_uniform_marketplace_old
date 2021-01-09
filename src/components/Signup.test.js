import React from "react";
import user from "@testing-library/user-event";
import SignUp from "./Signup";
import { render, screen, act, waitFor } from "../config/test-utils";

beforeEach(async () => {
  await act(async () => {
    render(<SignUp />);
  });
});

test("Displays sign up form", () => {
  expect(screen.getByText(/email/i)).toBeInTheDocument();
  expect(screen.getByText(/^Password$/)).toBeInTheDocument();
  expect(screen.getByText(/^Confirm Password$/)).toBeInTheDocument();
});

test("Shows typed input", async () => {
  const fakeEmail = "dev@dev.lol";
  const fakePassword = "1234567";
  const fakePasswordRepeat = "1234567";

  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const passwordInput = screen.getByLabelText(/^Password$/);
  const passwordConfirmInput = screen.getByLabelText(/^Confirm Password$/);
  user.type(emailInput, fakeEmail);
  user.type(passwordInput, fakePassword);
  user.type(passwordConfirmInput, fakePasswordRepeat);

  expect(emailInput.value).toEqual(fakeEmail);
  expect(passwordInput.value).toEqual(fakePassword);
});

test("Submits form", async () => {
  const fakeEmail = process.env.REACT_APP_FAKE_EMAIL_TEST_SIGNUP;
  const fakePassword = process.env.REACT_APP_FAKE_PASSWORD_TEST_SIGNUP;
  const fakePasswordConfirm = process.env.REACT_APP_FAKE_PASSWORD_TEST_SIGNUP;

  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const passwordInput = screen.getByLabelText(/^Password$/);
  const passwordConfirmInput = screen.getByLabelText(/^Confirm Password$/);
  const button = screen.getByRole("button", { name: /sign up/i });
  user.type(emailInput, fakeEmail);
  user.type(passwordInput, fakePassword);
  user.type(passwordConfirmInput, fakePasswordConfirm);
  user.click(button);
  await waitFor(() => {
    expect(
      screen.getByText(
        /The email address is already in use by another account./i
      )
    ).toBeInTheDocument();
  });
});
