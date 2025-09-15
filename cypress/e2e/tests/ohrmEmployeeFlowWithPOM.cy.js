import dashboardPage from "../../support/pages/Dashboard/dashboardPage";
import personalDetailsPage from "../../support/pages/MyInfo/personalDetailsPage";
import commonUtils from "../../support/pages/Commons/commonUtils";
import navbar from "../../support/pages/Navbar/navbar";
import navbarObject from "../../support/objects/NavbarObjects/navbarObject";
import myInfoObject from "../../support/objects/MyInfoObjects/myInfoObject";

describe('Orange HRM Testing with POM for Employee', () => {

    before(() => {
        cy.visit('/');
        cy.fixture('employeeData').then((data) => {
            cy.login(data.userName, data.password);
        });
        cy.waitTillVisible(navbarObject.getNavHead());
        navbar.verifyPage('Dashboard');
    });

    it('Orange HRM Employee Flow', () => {
        // Verify Employee Name
        cy.fixture('employeeData').then((emp) => {
            navbar.verifyEmployeeName(emp.fullName);
            }
        );

        // Update Personal Details
        dashboardPage.clickOnTheSideMenuItem("My Info");
        cy.waitTillVisible(myInfoObject.getEmployeeFullName());
        cy.fixture('employeeData').then((emp) => {
            personalDetailsPage.verifyEmployeeFullName(emp.fullName);
            }
        );

        personalDetailsPage.selectGender("male");
        personalDetailsPage.clickSubmitButton1();
        commonUtils.verifyToasterMessage('Successfully Updated');

        personalDetailsPage.selectBloodType("O+");
        personalDetailsPage.clickSubmitButton2();
        commonUtils.verifyToasterMessage('Successfully Saved');

        // Logout New Employee
        cy.logout();
    });
})