import dashboardPage from "../pages/Dashboard/dashboardPage";
import PIMPage from "../pages/PIM/PIMPage";
import addEmployeePage from "../pages/PIM/addEmployeePage";
import personalDetailsPage from "../pages/MyInfo/personalDetailsPage";
import directoryPage from "../pages/Directory/directoryPage";
import commonUtils from "../pages/Commons/commonUtils";
import navbar from "../pages/Navbar/navbar";
import navbarObject from "../objects/NavbarObjects/navbarObject";
import addEmployeeObject from "../objects/PIMObjects/addEmployeeObject";
import commonObject from "../objects/CommonObjects/commonObject";
import myInfoObject from "../objects/MyInfoObjects/myInfoObject";
import generators from "../utils/generators";

describe('Orange HRM Testing with POM for Admin', () => {

    const firstName = generators.generateFirstName('male');
    const middleName = generators.generateMiddleName('male');
    const lastName = generators.generateLastName('male');
    const fullName = firstName + " " + lastName;
    const userName = firstName + lastName;
    const password = generators.generateRandomPassword(8);
    const empId = Math.floor(Math.random() * 10);  

    before(() => {
        cy.visit('/');
        cy.fixture('loginData').then((loginData) => {
            cy.login(loginData.validUser.username, loginData.validUser.password);
        });
        cy.waitTillVisible(navbarObject.getNavHead());
        navbar.verifyPage('Dashboard');
    });

    it('Orange HRM Admin Flow', () => {
        // Navigate to PIM page
        dashboardPage.clickPIMTab();
        cy.waitTillVisible(navbarObject.getNavHead());
        navbar.verifyPage('PIM');

        // Add Employee
        PIMPage.clickAddButton();
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
        dashboardPage.clickPIMTab();
        cy.fixture('employeeData').then((emp) => {
            PIMPage.enterEmployeeId(emp.employeeId);
            PIMPage.clickSearchButton();
            PIMPage.verifySearchedEmployee('(1) Record Found');
        });

        // Directory search employee by Employee Name
        dashboardPage.clickDirectoryTab();
        navbar.verifyPage('Directory');
        directoryPage.enterEmployeeNameAndSelect(firstName);
        directoryPage.clickSearchButton();
        directoryPage.verifySearchedEmployee('(1) Record Found');

        // Logout Admin
        cy.logout();
    });
})