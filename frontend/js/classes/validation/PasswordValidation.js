import Helper from './Helper.js'

export default class PasswordValidation {
    isPasswordAndConfirmPasswordEqual(password, confirmPassowrd) {
        return password.value === confirmPassowrd.value;
    }

    passwordInputValidation(password, minPassLength) {
        if (Helper.isInputEmpty(password.value.trim())) {
            Helper.errorMesage(password, 'Este campo é obrigatório.');

            return false;
        } else if (!Helper.minLength(password, minPassLength)) {
            Helper.errorMesage(password, `Deve possuir no mínimo ${minPassLength} caracteres`);

            return false;
        } else {
            Helper.errorMesage(password, '', true)
        }
    }
}