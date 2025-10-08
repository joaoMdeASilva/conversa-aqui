import Helper from './Helper.js'

export default class UserNameValidation {
    constructor(userName, minNameLength) {
        this.userName = userName;
        this.minNameLength = minNameLength;
    }

    valid() {
        if (Helper.isInputEmpty(this.userName.value.trim())) {
            Helper.errorMesage(this.userName, 'Este campo é obrigatório.');

            valid = false;
        } else if (Helper.minLength(this.userName, this.minNameLength)) {
            Helper.errorMesage(this.userName, `Deve possuir no mínimo ${this.minNameLength} caracteres`);

            valid = false;
        } else {
            Helper.errorMesage(this.userName, '', true)
        }
    }
}