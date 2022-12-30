Cypress.Commands.add("assertCoursesDisplay", () => {
  cy.url().should("include", "/courses");
  cy.log("User can view courses successfully");
});
