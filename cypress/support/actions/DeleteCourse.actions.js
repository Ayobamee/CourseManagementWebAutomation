Cypress.Commands.add("deleteCourseAction", () => {
  //Select course to delete
  cy.CourseToDelete().click();
  //Click delete
  cy.FirstDeleteIcon().click();
  //Click confirmation for delete
  cy.SecondDeleteIcon().click();
});
