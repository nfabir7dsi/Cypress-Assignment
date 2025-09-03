class AddEmployeePage {
    addEmployeeHeader = 'div.orangehrm-card-container > h6';

    firstNameInput = 'input[name="firstName"]';
    middleNameInput = 'input[name="middleName"]';
    lastNameInput = 'input[name="lastName"]';
    empIdInput = 'label:contains("Employee Id")';
    createLoginDetailsCheckbox = 'input[type="checkbox"]';
    usernameInput = 'label:contains("Username")';
    passwordInput = 'label:contains("Password"):not(:contains("Confirm"))';
    confirmPasswordInput = 'label:contains("Confirm Password")';
    saveButton = 'button[type="submit"]';

    verifyOnTheAddEmployeePage(text) {
        return cy.get(this.addEmployeeHeader).should('contain.text', text);
    }

    enterFirstName(firstName) {
        cy.get(this.firstNameInput).type(firstName);
    }

    enterMiddleName(middleName) {
        cy.get(this.middleNameInput).type(middleName);
    }

    enterLastName(lastName) {
        cy.get(this.lastNameInput).type(lastName);
    }

    enterEmpId(empId) {
        cy.get(this.empIdInput).parent().siblings().children('input').type(empId);
    }

    clickCheckbox() {
        cy.get(this.createLoginDetailsCheckbox).click({force: true});
    }

    enterUsername(username) {
        cy.get(this.usernameInput).parent().siblings().children('input').type(username);
    }

    enterPassword(password) {
        cy.get(this.passwordInput).parent().siblings().children('input').type(password);
    }

    enterConfirmPassword(password) {
        cy.get(this.confirmPasswordInput).parent().siblings().children('input').type(password);
    }
    
    clickSaveButton() {
        cy.get(this.saveButton).click();
    }
}

export default new AddEmployeePage;