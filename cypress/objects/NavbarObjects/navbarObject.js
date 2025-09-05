class NavbarObject {
    navHead = 'h6';
    profileSpan = '.oxd-userdropdown-tab';
    profileName = '.oxd-userdropdown-tab > p';
    logoutOption = '.oxd-dropdown-menu li a:contains("Logout")';

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

export default new NavbarObject;