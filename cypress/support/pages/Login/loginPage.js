import loginObject from "../../objects/LoginObjects/loginObject";

class LoginPage {

    verifyLoginPage(text) {
        return cy.get(loginObject.getLoginTitle()).should('contain.text', text);
    }

    enterUsername(username) {
        cy.get(loginObject.getUsernameField()).clear().type(username);
    }

    enterPassword(password) {
        cy.get(loginObject.getPasswordField()).clear().type(password);
    }

    clickLogin() {
        cy.get(loginObject.getLoginButton()).click();
    }

    verifyErrorMessage(text) {
        return cy.get(loginObject.getErrorMessage()).should('contain.text', text);
    }
}

export default new LoginPage();