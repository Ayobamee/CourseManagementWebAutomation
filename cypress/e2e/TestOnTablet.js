/// <reference types= "cypress" />

describe("Quales Course Management Regression Test suite on Tablet", () => {
  beforeEach(() => {
    cy.log("Login to the app");
    cy.viewport("ipad-2");
    //Login
    cy.Login({});
  });

  context("In app tests on Tablet", () => {
    it("Validate that users with valid credentials can login to the app successfully", () => {
      cy.log("Test successful login");
      //Test successful login
      cy.checkCoursesDisplay({});
    });

    it("Validate that courses can be created successfully", () => {
      cy.log("Test add courses");
      //Test courses are added successfully.
      cy.addCourses({});
    });
  });

  context("Tear Down on Tablet", () => {
    it("Validate that users can logout of the app successfully", () => {
      cy.log("Test logout");
      //Test successful logout
      cy.clickLogout({});
      cy.assertLoginPage({});
    });
  });
});
