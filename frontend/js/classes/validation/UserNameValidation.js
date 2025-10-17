import Helper from './Helper.js'

export default class UserNameValidation {
    constructor(userName, minNameLength) {
        this.userName = userName;
        this.minNameLength = minNameLength;
    }

    isUserNameValid() {
        if (Helper.isInputEmpty(this.userName.value.trim())) {
            Helper.errorMessage(this.userName, 'Este campo é obrigatório.');

            return false;
        } else if (Helper.minLength(this.userName, this.minNameLength)) {
            Helper.errorMessage(this.userName, `Deve possuir no mínimo ${this.minNameLength} caracteres`);

            return false;
        }

        Helper.errorMessage(this.userName, '', true);
        return true;
    }
}