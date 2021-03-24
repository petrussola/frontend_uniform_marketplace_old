describe("Load Home Page", () => {
  it("succesfully loads", () => {
    cy.visit("/");
  });
  it("Contains expected nav bar", () => {
    cy.contains("Uniforms");
    cy.contains("Very fast.");
    // cy.contains("Home");
    // cy.contains("Sign In");
    // cy.contains("Sign Up");
  });
  // it("Loads Log In page upon clicking on Log In button", () => {
  //   cy.contains("Sign In")
  //     .click()
  //     .url()
  //     .should("include", "/login")
  //     .then(() => {
  //       cy.contains("Need an account? Sign Up");
  //       cy.get("#signup-link").click().url().should("include", "/signup");
  //     });
  // });
  // it("Loads Sign Up page upon clicking on Sign Up button", () => {
  //   cy.contains("Sign Up")
  //     .click()
  //     .url()
  //     .should("include", "/signup")
  //     .then(() => {
  //       cy.contains("Already have an account? Log in");
  //       cy.get("#login-link").click().url().should("include", "/login");
  //     });
  // });
});
