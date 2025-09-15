class LoginObject {
    usernameField = 'input[name="username"]';
    passwordField = 'input[name="password"]';
    loginButton = 'button[type="submit"]';
    errorMessage = 'div[class*="oxd-alert-content-text"]';
    loginTitle = 'h5';

    getUsernameField() {
        return this.usernameField;
    }

    getPasswordField() {
        return this.passwordField;
    }

    getLoginButton() {
        return this.loginButton;
    }

    getErrorMessage() {
        return this.errorMessage;
    }

    getLoginTitle() {
        return this.loginTitle;
    }   
}

export default new LoginObject();