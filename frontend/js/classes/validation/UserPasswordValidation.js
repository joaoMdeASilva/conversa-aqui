import Helper from './Helper.js'

export default class UserPasswordValidation {
    #password;
    #confirmPassword
    #minPassLength;

    constructor(minPassLength, password, confirmPassoword = undefined) {
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
            Helper.errorMessage(this.#password, 'Este campo é obrigatório.');

            return false;
        } else if (!Helper.minLength(this.#password, this.#minPassLength)) {
            Helper.errorMessage(this.#password, `Deve possuir no mínimo ${this.#minPassLength} caracteres`);

            return false;
        }

        Helper.errorMessage(this.#password, '', true);
        return true;
    }

    isUserConfirmPasswordValid() {
        this.#isUserConfirmPasswordMissing();

        if (Helper.isInputEmpty(this.#confirmPassword.value.trim())) {
            Helper.errorMessage(this.#confirmPassword, 'Este campo é obrigatório.');

            return false;
        } else if (!Helper.minLength(this.#confirmPassword, this.#minPassLength)) {
            Helper.errorMessage(this.#confirmPassword, `Deve possuir no mínimo ${this.#minPassLength} caracteres`);

            return false;
        }
        Helper.errorMessage(this.#confirmPassword, '', true)
        
        return true;
    }

    #isUserConfirmPasswordMissing() {
        if (!this.#confirmPassword)
            throw "'confirmPassword' is missing! You must pass it to the constructor.";
    }
}