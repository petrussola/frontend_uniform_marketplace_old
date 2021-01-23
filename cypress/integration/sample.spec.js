describe("My first test", () => {
  it("whatever", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");

    cy.get(".action-email")
      .type("adasd@aas.com")
      .should("have.value", "adasd@aas.com");
  });
});
