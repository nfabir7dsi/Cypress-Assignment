import loginPage from "../pages/loginPage";
import dashboardPage from "../pages/dashboardPage";
import PIMPage from "../pages/PIMPage";
import addEmployeePage from "../pages/addEmployeePage";
import personalDetailsPage from "../pages/personalDetailsPage";
import directoryPage from "../pages/directoryPage";
import passwordGenerator from "../utils/passwordGenerator";
import { faker } from '@faker-js/faker';

describe('Orange HRM Testing with POM', () => {

    const firstName = faker.person.firstName('male');
    const middleName = faker.person.middleName('male');
    const lastName = faker.person.lastName('male');
    const fullName = firstName + " " + lastName;
    const userName = firstName + lastName;
    const password = passwordGenerator.generateRandomPassword(8);
    const empId = Math.floor(Math.random() * 10);  

    console.log(password);

    before(() => {
        cy.visit('/');

        //Admin Login
         cy.fixture('loginData').then((loginData) => {
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickLogin();
            dashboardPage.verifyOnTheDashboard(loginData.validUser.welcomeMessage);
        });
    });

    // it('Valid Login Test', () => {
    //     cy.fixture('loginData').then((loginData) => {
    //         loginPage.enterUsername(loginData.validUser.username);
    //         loginPage.enterPassword(loginData.validUser.password);
    //         loginPage.clickLogin();
    //         dashboardPage.verifyWelcomeMessage(loginData.validUser.welcomeMessage);
    //     });
    // });

    // it('Invalid Login Test', () => {
    //     cy.fixture('loginData').then((loginData) => {
    //         loginPage.enterUsername(loginData.invalidUser.username);
    //         loginPage.enterPassword(loginData.invalidUser.password);
    //         loginPage.clickLogin();
    //         loginPage.verifyErrorMessage(loginData.invalidUser.errorMessage);
    //     });
    // });

    it('Adding Employee', () => {
        // Navigate to PIM page
        dashboardPage.clickPIMTab();
        PIMPage.verifyOnThePIMPage('PIM');

        // Add Employee
        PIMPage.clickAddButton();
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

        dashboardPage.verifyToasterMessage('Successfully Saved');
        personalDetailsPage.verifyEmployeeFullName(fullName);

        // Save employee info into json file
        personalDetailsPage.saveEmployeeInfo(userName, password);

        // Search Employee by ID
        dashboardPage.clickPIMTab();
        cy.fixture('employeeData').then((emp) => {
            PIMPage.enterEmployeeId(emp.employeeId);
            PIMPage.clickSearchButton();
            PIMPage.verifySearchedEmployee('(1) Record Found');
        });

        // Directory search employee by Employee Name
        dashboardPage.clickDirectoryTab();
        directoryPage.verifyOnTheDirectoryPage('Directory');
        directoryPage.enterEmployeeNameAndSelect(firstName);
        directoryPage.clickSearchButton();
        directoryPage.verifySearchedEmployee('(1) Record Found');

        // Logout Admin
        dashboardPage.clickProfileSpan();
        dashboardPage.clickLogoutOption();
        loginPage.verifyLoginPage('Login');

        // New Employee Login
        cy.fixture('employeeData').then((emp) => {
            loginPage.enterUsername(emp.userName);
            loginPage.enterPassword(emp.password);
            loginPage.clickLogin();
            dashboardPage.verifyOnTheDashboard('Dashboard');
        });

        // Update Personal Details
        dashboardPage.clickMyInfoTab();
        personalDetailsPage.verifyEmployeeFullName(fullName);
        personalDetailsPage.selectGenderMale();
        personalDetailsPage.clickSubmitButton1();
        dashboardPage.verifyToasterMessage('Successfully Updated');

        personalDetailsPage.selectBloodTypeOPositive();
        personalDetailsPage.clickSubmitButton2();
        dashboardPage.verifyToasterMessage('Successfully Saved');

        // Logout New Employee
        dashboardPage.clickProfileSpan();
        dashboardPage.clickLogoutOption();
        loginPage.verifyLoginPage('Login');
    });
})