// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginPage from "./pages/Login/loginPage";
import navbar from "./pages/Navbar/navbar";

Cypress.Commands.add('login', (username, password) => {
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
});

Cypress.Commands.add('logout', () => {
    navbar.clickProfileSpan();
    navbar.clickLogoutOption("Logout");
    loginPage.verifyLoginPage('Login');
});

Cypress.Commands.add('waitTillVisible', (selector, timeout = 10000) => {
    cy.get(selector, { timeout }).should('be.visible');
});