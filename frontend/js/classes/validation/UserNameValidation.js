import Helper from './Helper.js'

export default class UserNameValidation {
    constructor(userName, minNameLength) {
        this.userName = userName;
        this.minNameLength = minNameLength;
    }

    isUserNameValid() {
        if (Helper.isInputEmpty(this.userName.value.trim())) {
            Helper.errorMesage(this.userName, 'Este campo é obrigatório.');

            return false;
        } else if (Helper.minLength(this.userName, this.minNameLength)) {
            Helper.errorMesage(this.userName, `Deve possuir no mínimo ${this.minNameLength} caracteres`);

            return false;
        }

        Helper.errorMesage(this.userName, '', true);
        return true;
    }
}