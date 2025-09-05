import navbarObject from "../../objects/NavbarObjects/navbarObject";

class Navbar {

    verifyPage(text) {
        return cy.get(navbarObject.getNavHead()).should('contain.text', text);
    }

    clickProfileSpan() {
        cy.get(navbarObject.getProfileSpan()).click();
    }

    clickLogoutOption() {
        cy.get(navbarObject.getLogoutOption()).click();
    }

    verifyEmployeeName(text) {
        return cy.get(navbarObject.getProfileName()).should('contain.text', text);
    }
}

export default new Navbar;