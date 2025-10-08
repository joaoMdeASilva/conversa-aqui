import Helper from './Helper.js'

export default class UserPasswordValidation {
    #password;
    #confirmPassword
    #minPassLength;

    constructor(password, confirmPassoword = undefined, minPassLength) {
        this.#password = password;
        this.#confirmPassword = confirmPassoword;
        this.#minPassLength = minPassLength;
    }

    isUserPasswordAndConfirmPasswordEqual() {
        this.#isUserConfirmPasswordMissing();
            
        return this.#password.value === this.#confirmPassword.value;
    }

    isUserPasswordValid() {
        if (Helper.isInputEmpty(this.#password.value.trim())) {
            Helper.errorMesage(this.#password, 'Este campo é obrigatório.');

            return false;
        } else if (!Helper.minLength(this.#password, this.#minPassLength)) {
            Helper.errorMesage(`Deve possuir no mínimo ${minPassLength} caracteres`);

            return false;
        }

        Helper.errorMesage(this.#password, '', true)
        return true;
    }

    isUserConfirmPasswordValid() {
        this.#isUserConfirmPasswordMissing();
        
        if (Helper.isInputEmpty(this.#confirmPassword.value.trim())) {
            Helper.errorMesage(this.#confirmPassword, 'Este campo é obrigatório.');

            return false;
        } else if (!Helper.minLength(this.#confirmPassword, this.#minPassLength)) {
            Helper.errorMesage(`Deve possuir no mínimo ${minPassLength} caracteres`);

            return false;
        }

        Helper.errorMesage(this.#confirmPassword, '', true)
        return true;
    }

    #isUserConfirmPasswordMissing() {
        if (this.#confirmPassword === undefined)
            throw "'confirmPassword' is missing! You must pass it to the constructor.";
    }
}