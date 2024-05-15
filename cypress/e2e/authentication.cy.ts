describe("attempts to signs in", () => {
  const USERNAME = "detin68260";

  it("passes with correct credentials", () => {
    cy.visit("/", { failOnStatusCode: false });
    cy.get('[id="identifier-field"]').type(USERNAME);
    cy.get('[data-localization-key="formButtonPrimary"]').click();

    cy.get('[id="password-field"]').type(USERNAME);
    cy.get('[data-localization-key="formButtonPrimary"]').click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });

  it("failes with incorrect password", () => {
    cy.visit("/", { failOnStatusCode: false });
    cy.get('[id="identifier-field"]').type(USERNAME);
    cy.get('[data-localization-key="formButtonPrimary"]').click();

    cy.get('[id="password-field"]').type("random");
    cy.get('[data-localization-key="formButtonPrimary"]').click();
    cy.get('[id="error-password"]').should("be.visible");
  });
});

describe("attempts to sign out", () => {
  const USERNAME = "detin68260";

  it("passes", () => {
    cy.visit("/", { failOnStatusCode: false });
    cy.get('[id="identifier-field"]').type(USERNAME);
    cy.get('[data-localization-key="formButtonPrimary"]').click();

    cy.get('[id="password-field"]').type(USERNAME);
    cy.get('[data-localization-key="formButtonPrimary"]').click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);

    cy.get('[id="sign-out-btn"]').should("be.visible");
    cy.get('[id="sign-out-btn"]').click();
    cy.url().should("include", "/sign-in");
  });
});
