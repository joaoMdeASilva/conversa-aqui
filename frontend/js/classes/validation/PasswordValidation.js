import Helper from './Helper.js'

export default class PasswordValidation {

    static isPasswordAndConfirmPasswordEqual(password, confirmPassowrd) {
        return password.value === confirmPassowrd.value;
    }

    passwordInputValidation(password) {
        if (Helper.isInputEmpty(password.value.trim())) {
            Helper.errorMesage(password, 'Este campo é obrigatório.');

            return false;
        } else if (!Helper.minLength(password, minTextLengthPassword)) {
            Helper.errorMesage(password, `Deve possuir no mínimo ${minTextLengthPassword} caracteres`);

            return false;
        } else {
            Helper.errorMesage(password, '', true)
        }
    }


}