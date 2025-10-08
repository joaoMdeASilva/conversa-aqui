import Helper from "./Helper.js";

export default class UserEmailValidation {
    #email;
    constructor(email) {
        this.#email = email;
    }

    isUserEmailValid() {
        if (Helper.isInputEmpty(this.#email.value.trim())) {
            Helper.errorMesage(this.#email, 'Este campo é obrigatório.');

            return false;
        } else if (!isEmailFormatValid(this.#email.value.trim())) {
            Helper.errorMesage(this.#email, 'Digite um email valido. Ex.: example@example.com')

            return false;
        }
        
        Helper.errorMesage(this.#email, '', true)
        return true;
    }

    isEmailFormatValid() {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

        return emailRegex.test(this.#email);
    }
}