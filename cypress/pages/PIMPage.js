class PIMPage {
    pimHeader = 'h6';
    addButton = "button[type='button']:contains('Add')";

    employeeIdInput = 'label:contains("Employee Id")';
    searchButton = 'button[type="submit"]';
    searchedTableHeader = '.orangehrm-header-container';

    verifyOnThePIMPage(text) {
        return cy.get(this.pimHeader).should('contain.text', text);
    }   

    clickAddButton() {
        cy.get(this.addButton).click();
    }

    enterEmployeeId(empId) {
        cy.get(this.employeeIdInput).parent().siblings().children('input').type(empId);
    }

    clickSearchButton() {
        cy.get(this.searchButton).click();
    }

    verifySearchedEmployee(text) {
        return cy.get(this.searchedTableHeader).siblings('div').children('div').children('span').should('contain.text', text);
    }
}

export default new PIMPage;