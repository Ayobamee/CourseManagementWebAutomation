Cypress.Commands.add("assertDeleteCourse", () => {
  //Course created sourcefully slide show should be displayed
  cy.OnscreenDeleteMessage().should("be.visible");
  cy.log("A course has been deleted successfully");
});
