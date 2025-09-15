import PIMObject from "../../objects/PIMObjects/PIMObject";

class PIMPage {

    clickAddButton() {
        cy.get(PIMObject.getAddButton()).click();
    }

    enterEmployeeId(empId) {
        cy.get(PIMObject.getEmployeeIdInput()).parent().siblings().children('input').type(empId);
    }

    clickSearchButton() {
        cy.get(PIMObject.getSearchButton()).click();
    }

    verifySearchedEmployee(text) {
        return cy.get(PIMObject.getSearchedTableHeader()).siblings('div').children('div').children('span').should('contain.text', text);
    }
}

export default new PIMPage();