import dashboardObject from "../../objects/DashboardObjects/dashboardObject";

class DashboardPage {

    clickOnTheSideMenuItem(sideMenuName) {
        cy.get(dashboardObject.getSideMenuItem()).contains(sideMenuName).click();
    }
    
}

export default new DashboardPage();