/// <reference types= "cypress" />

describe("Quales Course Management Regression Test suite", () => {
  beforeEach(() => {
    //Login
    cy.Login({});
  });

  context("In app tests", () => {
    it("Validate that users with valid credentials can login to the app successfully", () => {
      //Test successful login
      cy.checkCoursesDisplay({});
    });

    it("Validate that courses can be created successfully", () => {
      //Test courses are are added.
      cy.addCourses({});
    });
  });

  context("Tear Down", () => {
    it("Validate that users can logout of the app successfully", () => {
      //Test successful logout
      cy.clickLogout({});
      cy.assertLoginPage({});
    });
  });
});
