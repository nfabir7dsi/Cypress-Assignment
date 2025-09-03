class DirectoryPage {
    directoryHead = 'h6';
    nameInput = 'input[placeholder="Type for hints..."]';
    dropdownOption = '.oxd-autocomplete-option > span';
    searchButton = 'button[type="submit"]';
    searchedTableHeader = '.orangehrm-paper-container span';

    verifyOnTheDirectoryPage(text) {
        return cy.get(this.directoryHead).should('contain.text', text);
    }

    enterEmployeeNameAndSelect(name) {
        cy.get(this.nameInput).type(name); 
        cy.get(this.dropdownOption).eq(0).click();
    }

    clickSearchButton() {
        cy.get(this.searchButton).click();
    }

    verifySearchedEmployee(text) {
        return cy.get(this.searchedTableHeader).should('contain.text', text);
    }
}

export default new DirectoryPage;