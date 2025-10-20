import Helper from './Helper.js'

export default class UserPasswordValidation {
    #passwordElement;
    #confirmPasswordElement;
    #minPassLength;

    constructor(minPassLength, passwordElement, confirmPassowordElement = undefined) {
        if (!Number.isInteger(minPassLength))
            throw new TypeError(Helper.typeOrInstanceErrorMessageTemplate('minPassLength', 'integer Number'));
        else if(minPassLength < 0)
            throw new RangeError(`"minPassLength" argument must be greater than or equal to 0. Received ${minPassLength}.`);

        if (!Helper.isHtmlElement(passwordElement))
            throw new TypeError(Helper.typeOrInstanceErrorMessageTemplate('passwordElement', 'HTMLElement', 'instance'))
        
        if (!Helper.isHtmlElement(confirmPassowordElement) && confirmPassowordElement) 
            throw new TypeError(Helper.typeOrInstanceErrorMessageTemplate('confirPasswordElement', 'HTMLElement', 'instance'))
        
        this.#minPassLength = minPassLength;
        this.#passwordElement = passwordElement;
        this.#confirmPasswordElement = confirmPassowordElement;
    }

    isUserPasswordAndConfirmPasswordEqual() {
        this.#isUserConfirmPasswordMissing();

        return this.#passwordElement.value === this.#confirmPasswordElement.value;
    }

    isUserPasswordValid() {
        if (Helper.isInputEmpty(this.#passwordElement.value.trim())) {
            Helper.errorMessage(this.#passwordElement, 'Este campo é obrigatório.');

            return false;
        } else if (!Helper.minLength(this.#passwordElement, this.#minPassLength)) {
            Helper.errorMessage(this.#passwordElement, `Deve possuir no mínimo ${this.#minPassLength} caracteres`);

            return false;
        }

        Helper.errorMessage(this.#passwordElement, '', true);
        return true;
    }

    isUserConfirmPasswordValid() {
        this.#isUserConfirmPasswordMissing();

        if (Helper.isInputEmpty(this.#confirmPasswordElement.value.trim())) {
            Helper.errorMessage(this.#confirmPasswordElement, 'Este campo é obrigatório.');

            return false;
        } else if (!Helper.minLength(this.#confirmPasswordElement, this.#minPassLength)) {
            Helper.errorMessage(this.#confirmPasswordElement, `Deve possuir no mínimo ${this.#minPassLength} caracteres`);

            return false;
        }
        Helper.errorMessage(this.#confirmPasswordElement, '', true)

        return true;
    }

    #isUserConfirmPasswordMissing() {
        if (!this.#confirmPasswordElement)
            throw "'confirmPassword' is missing! You must pass it to the constructor.";
    }
}