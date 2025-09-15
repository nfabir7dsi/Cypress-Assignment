import { faker } from '@faker-js/faker';

class Generators {

    generateFirstName(gender) {
        return faker.person.firstName(gender);
    }

    generateMiddleName(gender) {
        return faker.person.middleName(gender);
    }

    generateLastName(gender) {
        return faker.person.lastName(gender);
    }

    generateFullName(firstName, lastName) {
        return firstName + " " + lastName;
    }

    generateUserName(firstName, lastName) {
        const randNo = Math.floor(Math.random() * 10);
        return firstName + lastName + randNo;
    }

    generateEmployeeId() {
        return Math.floor(Math.random() * 100);
    }

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

export default new Generators();