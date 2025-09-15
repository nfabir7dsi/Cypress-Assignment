import commonObject from "../../objects/CommonObjects/commonObject";

class CommonUtils {

    verifyToasterMessage(text) {
        return cy.get(commonObject.getToasterMessage()).should('contain.text', text);
    }
}

export default new CommonUtils();