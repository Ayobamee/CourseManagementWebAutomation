const username = Cypress.env("username");
const password = Cypress.env("password");
Cypress.Commands.add("visitSite", () => {
  cy.visit("/");
});

Cypress.Commands.add("performLoginActions", () => {
  //Enter username
  cy.userNameField().type(username);

  //Enter password
  cy.passwordField().type(password);
  //click login
  cy.loginBtn().click();
});

Cypress.Commands.add("Login", () => {
  //Load test env
  cy.visitSite();

  //Confirm site renders
  cy.assertAppLoads().should("be.visible");

  //Click Sign Button
  cy.SignBtn().click();

  //assert login page
  cy.assertLoginPage();
  //perform login
  cy.performLoginActions();
});

Cypress.Commands.add("checkCoursesDisplay", () => {
  cy.url().should("include", "/courses");
  cy.log("User can view courses successfully");
});

Cypress.Commands.add("LoginMobile_Tab", () => {
  //Load test env
  cy.visitSite();

  //Click modal
  cy.loginModal().click({ force: true });

  //Click Login
  cy.loginBtnMobile().click();
  //Confirm site renders
  cy.assertLoginMobile().should("be.visible");

  cy.performLoginActions();
});

Cypress.Commands.add("checkCoursesDisplay", () => {
  cy.url().should("include", "/courses");
  cy.log("User can view courses successfully");
});
