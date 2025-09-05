import dashboardObject from "../../objects/DashboardObjects/dashboardObject";

class DashboardPage {

    clickPIMTab() {
        cy.get(dashboardObject.getPimSidemenuItem()).click();
    }
    
    clickMyInfoTab() {
        cy.get(dashboardObject.getMyInfoSidemenuItem()).click();
    }

    clickDirectoryTab() {
        cy.get(dashboardObject.getDirectorySidemenuItem()).click();
    }
}

export default new DashboardPage;