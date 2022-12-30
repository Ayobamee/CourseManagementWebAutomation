Cypress.Commands.add("assertCourseCreation", () => {
  //Course created sourcefully slide show should be displayed
  cy.successfullyAddedCourseToast().should("be.visible");
  cy.log("A course has been created successfully");
});
