import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Sanitization {

    constructor() { }

    checkUserId(email) {
        const regExEmail = "[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
        if (!email.match(regExEmail)) {
            alert("Incorect email, found " + email);
            return false;
        }
        return true;
    }

    checkString(str) {
        const regExName = "^[a-zA-Z0-9 àâçéèêëîïôûùüÿñæœ\',]*$";
        if (!str || !str.match(regExName)) {
            alert("Check the format");
            return false;
        }
        return true;
    }
}