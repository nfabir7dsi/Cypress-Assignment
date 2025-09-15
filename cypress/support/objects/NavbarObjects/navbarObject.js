class NavbarObject {
    navHead = 'h6';
    profileSpan = 'span[class="oxd-userdropdown-tab"]';
    profileName = 'p[class="oxd-userdropdown-name"]';
    logoutOption = 'ul[class="oxd-dropdown-menu"] li a';

    getNavHead() {
        return this.navHead;
    }

    getProfileSpan() {
        return this.profileSpan;
    }

    getProfileName() {
        return this.profileName;
    }

    getLogoutOption() {
        return this.logoutOption;
    }
}

export default new NavbarObject();