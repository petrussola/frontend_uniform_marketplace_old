beforeEach(() => {
  cy.visit("/login");
});

describe("Load Login Page", () => {
  it("contains email and password fields", () => {
    cy.contains(/email/i);
    cy.contains(/password/i);
    cy.get("[data-cy=login-button]");
    cy.get("[data-cy=signup-link]");
  });
});

describe("Sign in works", () => {
  it("email and password typing works", () => {
    cy.get("[data-cy=email-field")
      .type(Cypress.env("email"))
      .should("have.value", Cypress.env("email"));
    cy.get("[data-cy=password-field")
      .type(Cypress.env("password"))
      .should("have.value", Cypress.env("password"));
    cy.get("[data-cy=login-button")
      .click()
      .url()
      .should("include", "/dashboard")
      .then(() => {
        cy.contains(Cypress.env("email"));
      });
  });
});
