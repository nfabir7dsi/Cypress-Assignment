import directoryObject from "../../objects/DirectoryObjects/directoryObject";

class DirectoryPage {

    enterEmployeeNameAndSelect(name) {
        cy.get(directoryObject.getNameInput()).type(name); 
        cy.get(directoryObject.getDropdownOption()).eq(0).click();
    }

    clickSearchButton() {
        cy.get(directoryObject.getSearchButton()).click();
    }

    verifySearchedEmployee(text) {
        return cy.get(directoryObject.getSearchedTableHeader()).should('contain.text', text);
    }
}

export default new DirectoryPage();