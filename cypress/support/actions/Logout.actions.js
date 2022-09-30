Cypress.Commands.add("clickLogout", () => {
  cy.logoutBtn().click();
});

Cypress.Commands.add("assertLoginPage", () => {
  cy.url().should("include", "/login");
  cy.log("User is on login page");
});
