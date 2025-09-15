import addEmployeeObject from "../../objects/PIMObjects/addEmployeeObject";

class AddEmployeePage {
    
    verifyOnTheAddEmployeePage(text) {
        return cy.get(addEmployeeObject.getAddEmployeeHeader()).should('contain.text', text);
    }

    enterFirstName(firstName) {
        cy.get(addEmployeeObject.getFirstNameInput()).type(firstName);
    }

    enterMiddleName(middleName) {
        cy.get(addEmployeeObject.getMiddleNameInput()).type(middleName);
    }

    enterLastName(lastName) {
        cy.get(addEmployeeObject.getLastNameInput()).type(lastName);
    }

    enterEmpId(empId) {
        cy.get(addEmployeeObject.getEmpIdInput()).parent().siblings().children('input').type(empId);
    }

    clickCheckbox() {
        cy.get(addEmployeeObject.getCreateLoginDetailsCheckbox()).check({force: true});
    }

    enterUsername(username) {
        cy.get(addEmployeeObject.getUsernameInput()).parent().siblings().children('input').type(username);
    }

    enterPassword(password) {
        cy.get(addEmployeeObject.getPasswordInput()).parent().siblings().children('input').type(password);
    }

    enterConfirmPassword(password) {
        cy.get(addEmployeeObject.getConfirmPasswordInput()).parent().siblings().children('input').type(password);
    }
    
    clickSaveButton() {
        cy.get(addEmployeeObject.getSaveButton()).click();
    }
}

export default new AddEmployeePage();