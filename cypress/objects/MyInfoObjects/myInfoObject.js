class MyInfoObject {
    employeeFullName = 'div[class="orangehrm-edit-employee-name"] > h6';
    employeeId = 'label:contains("Employee Id")';
    employeeGenderMale = 'label:contains("male")';
    
    submitButton1 = 'p:contains("* Required") + button';
    submitButton2 = 'button[type="submit"]';

    bloodTypeDropdown = 'label:contains("Blood Type")';
    bloodTypeOption = '.oxd-select-dropdown > :contains("O+")';

    getEmployeeFullName() {
        return this.employeeFullName;
    }

    getEmployeeId() {
        return this.employeeId;
    }

    getEmployeeGenderMale() {
        return this.employeeGenderMale;
    }

    getSubmitButton1() {
        return this.submitButton1;
    }

    getSubmitButton2() {
        return this.submitButton2;
    }

    getBloodTypeDropdown() {
        return this.bloodTypeDropdown;
    }

    getBloodTypeOption() {
        return this.bloodTypeOption;
    }
}

export default new MyInfoObject;