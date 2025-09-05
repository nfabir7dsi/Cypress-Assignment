class AddEmployeeObject {
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

    getAddEmployeeHeader() {
        return this.addEmployeeHeader;
    }

    getFirstNameInput() {
        return this.firstNameInput;
    }

    getMiddleNameInput() {
        return this.middleNameInput;
    }

    getLastNameInput() {
        return this.lastNameInput;
    }

    getEmpIdInput() {
        return this.empIdInput;
    }
    
    getCreateLoginDetailsCheckbox() {
        return this.createLoginDetailsCheckbox;
    }

    getUsernameInput() {
        return this.usernameInput;
    }

    getPasswordInput() {
        return this.passwordInput;
    }

    getConfirmPasswordInput() {
        return this.confirmPasswordInput;
    }

    getSaveButton() {
        return this.saveButton;
    }
}

export default new AddEmployeeObject;