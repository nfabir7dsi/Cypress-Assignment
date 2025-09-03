class PasswordGenerator {

    generateRandomPassword(size) {
        const smallChars = "abcdefghijklmnopqrstuvwxyz";
        const capChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const nums = "1234567890";
        const specials = "~!@#$%^&*()_+";

        let password = "";

        password += capChars.charAt(Math.floor(Math.random() * capChars.length));
        password += nums.charAt(Math.floor(Math.random() * nums.length));
        password += specials.charAt(Math.floor(Math.random() * specials.length));
        password += smallChars.charAt(Math.floor(Math.random() * smallChars.length));


        let i = size - 4;
        while(i--) {
            const allChars = smallChars + capChars + nums + specials;
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

        return password;
    }
}

export default new PasswordGenerator;