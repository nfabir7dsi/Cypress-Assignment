import pimObject from "../../objects/PIMObjects/pimObject";

class PIMPageHome {

    clickAddButton() {
        cy.get(pimObject.getAddButton()).click();
    }

    enterEmployeeId(empId) {
        cy.get(pimObject.getEmployeeIdInput()).parent().siblings().children('input').type(empId);
    }

    clickSearchButton() {
        cy.get(pimObject.getSearchButton()).click();
    }

    verifySearchedEmployee(text) {
        return cy.get(pimObject.getSearchedTableHeader()).siblings('div').children('div').children('span').should('contain.text', text);
    }
}

export default new PIMPageHome();