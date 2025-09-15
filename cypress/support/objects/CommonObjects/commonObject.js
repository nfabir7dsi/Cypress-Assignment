class CommonObject {
    // toasterMessage = '#oxd-toaster_1';
    toasterMessage = 'div[class*="oxd-toast-container"]';

    getToasterMessage() {
        return this.toasterMessage;
    }
}

export default new CommonObject();