class LoginPage {
    usernameField = 'input[name="username"]';
    passwordField = 'input[name="password"]';
    loginButton = 'button[type="submit"]';
    errorMessage = '.oxd-alert-content-text';
    loginTitle = 'h5.orangehrm-login-title';

    verifyLoginPage(text) {
        return cy.get(this.loginTitle).should('contain.text', text);
    }

    enterUsername(username) {
        cy.get(this.usernameField).clear().type(username);
    }

    enterPassword(password) {
        cy.get(this.passwordField).clear().type(password);
    }

    clickLogin() {
        cy.get(this.loginButton).click();
    }

    verifyErrorMessage(text) {
        return cy.get(this.errorMessage).should('contain.text', text);
    }
}

export default new LoginPage;