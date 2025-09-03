class PersonalDetailsPage {
    employeeFullName = 'div[class="orangehrm-edit-employee-name"] > h6';
    employeeId = 'label:contains("Employee Id")';
    employeeGenderMale = 'label:contains("male")';
    
    submitButton1 = 'p:contains("* Required") + button';
    submitButton2 = 'button[type="submit"]';

    bloodTypeDropdown = 'label:contains("Blood Type")';
    bloodTypeOption = '.oxd-select-dropdown > :contains("O+")';


    verifyEmployeeFullName(text) {
        return cy.get(this.employeeFullName).should('contain.text', text);
    }

    saveEmployeeInfo(username, password) {
        cy.get(this.employeeId).parent().siblings().children('input').invoke('val').then((val) => {
            cy.log(val); 
            cy.writeFile('cypress/fixtures/employeeData.json', {
                userName: username,
                password: password,
                employeeId: val
            });
        });
    }

    selectGenderMale() {
        cy.get(this.employeeGenderMale).click();
    }

    clickSubmitButton1() {
        cy.get(this.submitButton1).click();
    }

    selectBloodTypeOPositive() {
        cy.get(this.bloodTypeDropdown).parent().siblings('div').click();
        cy.get(this.bloodTypeOption).click();
    }

    clickSubmitButton2() {
        cy.get(this.submitButton2).eq(1).click();
    }
}

export default new PersonalDetailsPage;