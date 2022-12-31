Cypress.Commands.add("CourseToDelete", () => {
  cy.contains("Cypressweb");
});

Cypress.Commands.add("FirstDeleteIcon", () => {
  cy.contains("Delete");
});

Cypress.Commands.add("SecondDeleteIcon", () => {
  cy.get(".MuiBox-root > .MuiButton-contained");
});

Cypress.Commands.add("OnscreenDeleteMessage", () => {
  cy.contains("Course deleted successfully");
});
