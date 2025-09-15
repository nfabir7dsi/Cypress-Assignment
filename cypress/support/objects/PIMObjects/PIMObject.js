class PIMObject {
    addButton = "button[type='button']:contains('Add')";
    employeeIdInput = 'label:contains("Employee Id")';
    searchButton = 'button[type="submit"]';
    searchedTableHeader = '.orangehrm-header-container';

    getAddButton() {
        return this.addButton;
    }

    getEmployeeIdInput() {
        return this.employeeIdInput;
    }

    getSearchButton() {
        return this.searchButton;
    }

    getSearchedTableHeader() {
        return this.searchedTableHeader;
    }
}

export default new PIMObject();