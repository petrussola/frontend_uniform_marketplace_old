import React from "react";
import user from "@testing-library/user-event";
import Login from "./Login";
import { render, screen, act, waitFor } from "../config/test-utils";

const mockHistoryPush = jest.fn();

beforeEach(async () => {
  await act(async () => {
    render(<Login />);
  });
});

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useHistory: () => {
      return {
        push: mockHistoryPush,
      };
    },
  };
});

test("Displays log in form", () => {
  expect(screen.getByText(/email/i)).toBeInTheDocument();
  expect(screen.getByText(/password/i)).toBeInTheDocument();
});

test("Shows typed input", async () => {
  const fakeEmail = process.env.REACT_APP_FAKE_EMAIL_TEST_LOGIN;
  const fakePassword = process.env.REACT_APP_FAKE_PASSWORD_TEST_LOGIN;

  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const passwordInput = screen.getByLabelText(/password/i);
  user.type(emailInput, fakeEmail);
  user.type(passwordInput, fakePassword);

  expect(emailInput.value).toEqual(fakeEmail);
  expect(passwordInput.value).toEqual(fakePassword);
});

test("Submits form redirectos to /dashboard", async () => {
  const fakeEmail = process.env.REACT_APP_FAKE_EMAIL_TEST_LOGIN;
  const fakePassword = process.env.REACT_APP_FAKE_EMAIL_TEST_LOGIN;

  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const passwordInput = screen.getByLabelText(/password/i);
  const button = screen.getByRole("button", { name: /log in/i });
  user.type(emailInput, fakeEmail);
  user.type(passwordInput, fakePassword);
  user.click(button);
  await waitFor(() => {
    expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard");
  });
});
