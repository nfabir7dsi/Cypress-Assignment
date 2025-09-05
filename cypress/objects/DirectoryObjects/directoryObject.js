class DirectoryObject {
    nameInput = 'input[placeholder="Type for hints..."]';
    dropdownOption = '.oxd-autocomplete-option > span';
    searchButton = 'button[type="submit"]';
    searchedTableHeader = '.orangehrm-paper-container span';

    getNameInput() {
        return this.nameInput;
    }

    getDropdownOption() {
        return this.dropdownOption;
    }

    getSearchButton() {
        return this.searchButton;
    }

    getSearchedTableHeader() {
        return this.searchedTableHeader;
    }
}

export default new DirectoryObject;