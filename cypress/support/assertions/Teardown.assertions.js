Cypress.Commands.add("assertLogout", () => {
  cy.url().should("include", "/login");
  cy.log("User is on login page");
});