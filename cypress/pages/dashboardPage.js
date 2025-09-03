class DashboardPage {
    dashboardHead = 'h6';
    pimSidemenuItem = 'ul li a span:contains("PIM")';
    myInfoSidemenuItem = 'ul li a span:contains("My Info")';
    directorySidemenuItem = 'ul li a span:contains("Directory")';

    profileSpan = '.oxd-userdropdown-tab';
    profileName = '.oxd-userdropdown-tab  p';
    logoutOption = '.oxd-dropdown-menu li a:contains("Logout")';

    toasterMessage = '#oxd-toaster_1';

    verifyOnTheDashboard(text) {
        return cy.get(this.dashboardHead).should('contain.text', text);
    }

    clickPIMTab() {
        cy.get(this.pimSidemenuItem).click();
    }
    
    clickMyInfoTab() {
        cy.get(this.myInfoSidemenuItem).click();
    }

    clickDirectoryTab() {
        cy.get(this.directorySidemenuItem).click();
    }

    clickProfileSpan() {
        cy.get(this.profileSpan).click();
    }

    clickLogoutOption() {
        cy.get(this.logoutOption).click();
    }

    verifyEmployeeName(text) {
        return cy.get(this.profileName).should('contain.text', text);
    }

    verifyToasterMessage(text) {
        return cy.get(this.toasterMessage).should('contain.text', text);
    }
}

export default new DashboardPage;