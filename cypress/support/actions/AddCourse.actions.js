Cypress.Commands.add("AddCourses", () => {
  cy.addCourseBtn().click();

  //minimize left icon
  cy.coursePageLeftIcon().click();

  //input test title
  cy.courseTitleInputField().type("Cypress test course");

  //input test description
  cy.courseDescriptionInputField().type("Cypress Test Description");

  //click course category
  cy.courseCategoryDropdown().click();

  //select Quality assurance
  cy.qaCourseCategory().click();

  //select offline
  cy.offlineRadioButton().click();

  //Type address
  cy.addressInputField().type("Cypress test address");

  //click add course
  cy.secondAddCourseBtn().click();

  //Course created sourcefully slide show should be displayed
  cy.successfullyAddedCourseToast().should("be.visible");
});
