import myInfoObject from "../../objects/MyInfoObjects/myInfoObject";

class PersonalDetailsPage {

    verifyEmployeeFullName(text) {
        return cy.get(myInfoObject.getEmployeeFullName()).should('contain.text', text);
    }

    saveEmployeeInfo(username, password, fullname) {
        cy.get(myInfoObject.getEmployeeId()).parent().siblings().children('input').invoke('val').should('not.be.empty').then((val) => {
            cy.log(val); 
            cy.writeFile('cypress/fixtures/employeeData.json', {
                userName: username,
                password: password,
                employeeId: val,
                fullName: fullname
            });
        });
    }

    selectGender(gender) {
        cy.get(myInfoObject.getEmployeeGender()).contains(gender).click();
    }

    clickSubmitButton1() {
        cy.get(myInfoObject.getSubmitButton1()).click();
    }

    selectBloodType(bloodType) {
        cy.get(myInfoObject.getBloodTypeDropdown()).parent().siblings('div').click();
        cy.get(myInfoObject.getBloodTypeOption()).contains(bloodType).click();
    }

    clickSubmitButton2() {
        cy.get(myInfoObject.getSubmitButton2()).eq(1).click();
    }
}

export default new PersonalDetailsPage;