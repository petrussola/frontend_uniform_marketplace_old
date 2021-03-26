import React from "react";
import user from "@testing-library/user-event";
import Dashboard from "./Dashboard";
import { act, screen, render, waitFor } from "../config/test-utils";

const mockHistoryPush = jest.fn();

beforeEach(async () => {
  await act(async () => {
    render(<Dashboard />);
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

test("displays dashboard", () => {
  expect(screen.getByText(/this is the dashboard/i)).toBeInTheDocument();
  const email = process.env.REACT_APP_FAKE_EMAIL_TEST_LOGIN;
  const regex = new RegExp(email, "i");
  expect(screen.getByText(regex)).toBeInTheDocument();
  expect(screen.getByText(/logout/i)).toBeInTheDocument();
});

test("clicking logout redirects to login", async () => {
  const button = screen.getByRole("button", { name: /logout/i });
  user.click(button);
  await waitFor(() => {
    expect(mockHistoryPush).toHaveBeenCalledWith("/login");
  });
});
