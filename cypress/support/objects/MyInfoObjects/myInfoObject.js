class MyInfoObject {
    employeeFullName = 'div[class="orangehrm-edit-employee-name"] > h6';
    employeeId = 'label:contains("Employee Id")';
    employeeGender = 'label';
    
    submitButton1 = 'p:contains("* Required") + button';
    submitButton2 = 'button[type="submit"]';

    bloodTypeDropdown = 'label:contains("Blood Type")';
    bloodTypeOption = 'div[class*="oxd-select-dropdown"]';

    getEmployeeFullName() {
        return this.employeeFullName;
    }

    getEmployeeId() {
        return this.employeeId;
    }

    getEmployeeGender() {
        return this.employeeGender;
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

export default new MyInfoObject();