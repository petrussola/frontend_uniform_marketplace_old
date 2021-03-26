import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const currentUser = {
  email: process.env.REACT_APP_FAKE_EMAIL_TEST_LOGIN,
};

const logout = jest.fn();
const signup = jest.fn();
const login = jest.fn();

const AllTheProviders = ({ children }) => {
  return (
    <Router>
      <AuthContext.Provider value={{ currentUser, logout, signup, login }}>
        <MemoryRouter>{children}</MemoryRouter>
      </AuthContext.Provider>
    </Router>
  );
};

const customRender = (ui, options) => {
  render(ui, { wrapper: AllTheProviders, ...options });
};

export * from "@testing-library/react";

export { customRender as render };
