beforeEach(() => {
  cy.visit("/");
});

describe("Load Home Page", () => {
  it("succesfully loads", () => {});
  it("Contains expected nav bar", () => {
    // cy.visit("/");
    cy.contains("Uniforms");
    cy.contains("Very fast.");
    // cy.contains("Home");
    // cy.contains("Sign In");
    // cy.contains("Sign Up");
  });
  it("Contains footer", () => {
    cy.contains("Made with");
  });
  it("Contains jumbotron", () => {
    cy.contains("School uniforms are expensive, and kids outgrow them.");
    cy.contains(
      "Marketplace for communities of parents to donate or sell school uniforms so others can reuse them."
    );
  });
  it("Loads image", () => {
    cy.get('[alt="school uniform"]')
      .should("be.visible")
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
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
