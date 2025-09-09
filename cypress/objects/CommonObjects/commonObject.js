class CommonObject {
    toasterMessage = '#oxd-toaster_1';
    // toasterMessage = 'div[class*="oxd-toaster-container"]';

    getToasterMessage() {
        return this.toasterMessage;
    }
}

export default new CommonObject;