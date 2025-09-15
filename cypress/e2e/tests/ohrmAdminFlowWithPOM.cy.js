import dashboardPage from "../../support/pages/Dashboard/dashboardPage";
import pimPage from "../../support/pages/PIM/pimPageHome";
import addEmployeePage from "../../support/pages/PIM/addEmployeePage";
import personalDetailsPage from "../../support/pages/MyInfo/personalDetailsPage";
import directoryPage from "../../support/pages/Directory/directoryPage";
import commonUtils from "../../support/pages/Commons/commonUtils";
import navbar from "../../support/pages/Navbar/navbar";
import navbarObject from "../../support/objects/NavbarObjects/navbarObject";
import addEmployeeObject from "../../support/objects/PIMObjects/addEmployeeObject";
import commonObject from "../../support/objects/CommonObjects/commonObject";
import myInfoObject from "../../support/objects/MyInfoObjects/myInfoObject";
import generators from "../../utils/generators";

describe('Orange HRM Testing with POM for Admin', () => {

    const firstName = generators.generateFirstName('male');
    const middleName = generators.generateMiddleName('male');
    const lastName = generators.generateLastName('male');
    const fullName = generators.generateFullName(firstName, lastName);
    const userName = generators.generateUserName(firstName, lastName);
    const password = generators.generateRandomPassword(8);
    const empId = generators.generateEmployeeId();  

    before(() => {
        cy.visit('/');
        cy.login('Admin', 'admin123');
        cy.waitTillVisible(navbarObject.getNavHead());
        navbar.verifyPage('Dashboard');
    });

    it('Orange HRM Admin Flow', () => {
        // Verifying Xpath implementation
        // cy.xpath('//button[text()=" Upgrade"]').click();

        // Navigate to PIM page
        dashboardPage.clickOnTheSideMenuItem("PIM");
        cy.waitTillVisible(navbarObject.getNavHead());
        navbar.verifyPage('PIM');

        // Add Employee
        pimPage.clickAddButton();
        cy.waitTillVisible(addEmployeeObject.getAddEmployeeHeader());
        addEmployeePage.verifyOnTheAddEmployeePage('Add Employee');

        addEmployeePage.enterFirstName(firstName);
        addEmployeePage.enterMiddleName(middleName);
        addEmployeePage.enterLastName(lastName);
        addEmployeePage.enterEmpId(empId);
        addEmployeePage.clickCheckbox();
        addEmployeePage.enterUsername(userName);
        addEmployeePage.enterPassword(password);
        addEmployeePage.enterConfirmPassword(password);
        addEmployeePage.clickSaveButton();

        cy.waitTillVisible(commonObject.getToasterMessage());
        commonUtils.verifyToasterMessage('Successfully Saved');
        cy.waitTillVisible(myInfoObject.getEmployeeFullName());
        personalDetailsPage.verifyEmployeeFullName(fullName);

        // Save employee info into json file
        personalDetailsPage.saveEmployeeInfo(userName, password, fullName);

        // Search Employee by ID
        dashboardPage.clickOnTheSideMenuItem("PIM");
        cy.fixture('employeeData').then((emp) => {
            pimPage.enterEmployeeId(emp.employeeId);
            pimPage.clickSearchButton();
            pimPage.verifySearchedEmployee('(1) Record Found');
        });

        // Directory search employee by Employee Name
        dashboardPage.clickOnTheSideMenuItem("Directory");
        navbar.verifyPage('Directory');
        directoryPage.enterEmployeeNameAndSelect(firstName);
        directoryPage.clickSearchButton();
        directoryPage.verifySearchedEmployee('(1) Record Found');

        // Logout Admin
        cy.logout();
    });
})