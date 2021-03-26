import React from "react";
import user from "@testing-library/user-event";
import Logout from "./Logout";
import { act, screen, render, waitFor } from "../config/test-utils";

const handleLogout = jest.fn();

beforeEach(async () => {
  await act(async () => {
    render(<Logout handleLogout={handleLogout} />);
  });
});

test("logout feature", async () => {
  const button = screen.getByRole("button", { name: /logout/i });
  user.click(button);
  await waitFor(() => {
    expect(handleLogout).toHaveBeenCalled();
  });
});
