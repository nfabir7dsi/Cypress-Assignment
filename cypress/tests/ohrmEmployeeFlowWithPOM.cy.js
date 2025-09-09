import dashboardPage from "../pages/Dashboard/dashboardPage";
import personalDetailsPage from "../pages/MyInfo/personalDetailsPage";
import commonUtils from "../pages/Commons/commonUtils";
import navbar from "../pages/Navbar/navbar";
import navbarObject from "../objects/NavbarObjects/navbarObject";
import myInfoObject from "../objects/MyInfoObjects/myInfoObject";

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
        dashboardPage.clickMyInfoTab();
        cy.waitTillVisible(myInfoObject.getEmployeeFullName());
        cy.fixture('employeeData').then((emp) => {
            personalDetailsPage.verifyEmployeeFullName(emp.fullName);
            }
        );

        personalDetailsPage.selectGender("male");
        personalDetailsPage.clickSubmitButton1();
        // cy.waitTillVisible(dashboardPage.toasterMessage);
        commonUtils.verifyToasterMessage('Successfully Updated');

        personalDetailsPage.selectBloodType("O+");
        personalDetailsPage.clickSubmitButton2();
        // cy.waitTillVisible(dashboardPage.toasterMessage);
        commonUtils.verifyToasterMessage('Successfully Saved');

        // Logout New Employee
        cy.logout();
    });
})