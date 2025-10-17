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

    static errorMessage(input, text = '', clean = false) {
        if (!this.isHtmlElement(input)) {
            throw new TypeError(`"input" argument must be an instance of HTMLElement.`);
        }

        if (clean) {
            input.nextElementSibling.innerText = "";
            return input.classList.remove('required');
        }

        input.classList.add('required');

        return input.nextElementSibling.innerText = text;
    }

    static isHtmlElement(htmlElement) {
        return htmlElement instanceof HTMLElement;
    }
}