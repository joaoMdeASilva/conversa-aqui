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

    static errorMessage(inputElement, text = '', clean = false) {
        if (!this.isHtmlElement(inputElement)) {
            throw new TypeError(this.typeOrInstanceErrorMessageTemplate('inputElement', 'HTMLElement', 'instance'));
        }

        if (clean) {
            inputElement.nextElementSibling.innerText = "";
            return inputElement.classList.remove('required');
        }

        inputElement.classList.add('required');

        return inputElement.nextElementSibling.innerText = text;
    }

    static isHtmlElement(htmlElement) {
        return htmlElement instanceof HTMLElement;
    }

    static isString(arg) { return typeof arg || arg instanceof String }

    static typeOrInstanceErrorMessageTemplate(parameterName, parameterType, typeOrInstance = 'both') {
        if (!this.isString(parameterName))
            throw new TypeError('"ParameterName" argument must be a type string.');
        
        if(!this.isString(parameterType))
            throw new TypeError('"pameterType" argument must be a type string.');
        
        const typeOrInst = {
            type: 'a type',
            instance: 'an instance of',
            both: 'an instance or type'
        };
        
        if(!typeOrInst[typeOrInstance])
            throw new Error(`typeOrInstance argument string value must be: ${Object.keys(typeOrInst).toString().replace(/,/g, ', ')}.`);

        return `"${parameterName}" argument must be ${typeOrInst[typeOrInstance]} ${parameterType}.`;
    }
}