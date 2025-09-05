class DashboardObjects {
    pimSidemenuItem = 'ul li a span:contains("PIM")';
    myInfoSidemenuItem = 'ul li a span:contains("My Info")';
    directorySidemenuItem = 'ul li a span:contains("Directory")';

    getPimSidemenuItem() {
        return this.pimSidemenuItem;
    }

    getMyInfoSidemenuItem() {
        return this.myInfoSidemenuItem;
    }

    getDirectorySidemenuItem() {
        return this.directorySidemenuItem;
    }
}

export default new DashboardObjects;