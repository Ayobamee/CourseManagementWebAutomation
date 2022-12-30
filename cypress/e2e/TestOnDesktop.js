/// <reference types= "cypress" />

describe("Quales Course Management Regression Test suite on Desktop", () => {
  beforeEach(() => {
    cy.log("Login to the app");
    //change view port to macbook 16
    cy.viewport("macbook-16");
    //Login
    cy.Login_Desktop({});
  });

  context("In app tests on Desktop", () => {
    it("Validate that users with valid credentials can login to the app successfully", () => {
      cy.log("Test successful login");
      //Test successful login
      cy.assertCoursesDisplay({});
    });

    it("Validate that courses can be created successfully", () => {
      cy.log("Test add courses");
      //Test courses are added successfully.
      cy.addCourses({});
      //Check course has been created
      cy.assertCourseCreation({});
    });
  });

  context("Tear Down tests on Desktop", () => {
    it("Validate that users can logout of the app successfully", () => {
      cy.log("Test logout");
      //Test successful logout
      cy.clickLogout({});
      cy.assertLogout({});
    });
  });
});
