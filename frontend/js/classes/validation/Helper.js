export default class Helper {
    static isInputEmpty(input) {
        return !input;
    }

    static minLength(input, length) {

        if (input.value.trim().length < length) {
            input.classList.add('required');
            return false;
        }

        input.classList.remove('required');
        return true;
    }

    static errorMesage(input, text = '', clean = false) {
        if (clean) {
            input.nextElementSibling.innerText = "";
            return input.classList.remove('required');
        }

        input.classList.add('required');

        return input.nextElementSibling.innerText = text;
    }
}