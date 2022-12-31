/// <reference types= "cypress" />

describe("Quales Course Management Regression Test suite on Mobile", () => {
  beforeEach(() => {
    cy.log("Login to the app");
    cy.viewport("iphone-8");
    //Login
    cy.LoginMobile_Tab({});
  });

  context("In app tests on Mobile", () => {
    it("Validate that users with valid credentials can login to the app successfully", () => {
      cy.log("Test successful login");
      //Test successful login
      cy.assertCoursesDisplay({});
    });

    it("Validate that courses can be created successfully", () => {
      cy.log("Test add courses");
      //Test courses are added successfully.
      cy.addCoursesMobile_Tab({});
      //Check course has been created
      cy.assertCourseCreation({});
    });

    it("Validate that courses can be deleted successfully", () => {
      cy.log("Test delete courses");
      //Test courses are deleted successfully.
      cy.deleteCourseAction({});
      //Check course has been deleted
      cy.assertDeleteCourse({});
    });
  });

  context("Tear Down tests on Mobile", () => {
    it("Validate that users can logout of the app successfully", () => {
      cy.log("Test logout");
      //Test successful logout
      cy.clickLogout({});
      cy.assertLogout({});
    });
  });
});
