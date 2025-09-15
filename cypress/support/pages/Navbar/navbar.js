import navbarObject from "../../objects/NavbarObjects/navbarObject";

class Navbar {

    verifyPage(text) {
        return cy.get(navbarObject.getNavHead()).should('contain.text', text);
    }

    clickProfileSpan() {
        cy.get(navbarObject.getProfileSpan()).click();
    }

    clickLogoutOption(text) {
        cy.get(navbarObject.getLogoutOption()).contains(text).click();
    }

    verifyEmployeeName(text) {
        return cy.get(navbarObject.getProfileName()).should('contain.text', text);
    }
}

export default new Navbar();