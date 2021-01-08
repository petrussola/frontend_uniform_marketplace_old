import React from "react";
import user from "@testing-library/user-event";
import Login from "./Login";
import {
  render,
  screen,
  fireEvent,
  act,
  cleanup,
  waitFor,
} from "../config/test-utils";

beforeEach(async () => {
  await act(async () => {
    render(<Login />);
  });
});

afterEach(cleanup);

test("Displays log in form", () => {
  expect(screen.getByText(/email/i)).toBeInTheDocument();
  expect(screen.getByText(/password/i)).toBeInTheDocument();
});

test("Shows typed input", async () => {
  const fakeEmail = "dev@dev.lol";
  const fakePassword = "1234567";

  const emailInput = screen.getByTestId("input-email");
  const passwordInput = screen.getByTestId("input-password");
  await user.type(emailInput, fakeEmail);
  await user.type(passwordInput, fakePassword);

  expect(emailInput.value).toEqual(fakeEmail);
  expect(passwordInput.value).toEqual(fakePassword);
});

test("Submits form", async () => {
  const fakeEmail = "dev@dev.lol";
  const fakePassword = "1234567";

  const emailInput = await screen.findByTestId("input-email");
  const passwordInput = await screen.findByTestId("input-password");
  const form = await screen.findByTestId("form");
  user.type(emailInput, fakeEmail);
  user.type(passwordInput, fakePassword);
  fireEvent.submit(form);
  await waitFor(() => {
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
