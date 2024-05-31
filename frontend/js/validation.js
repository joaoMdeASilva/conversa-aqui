const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formValidation();
});

function formValidation() {
  const nameForm = getName();
  const emailForm = getEmail();
  const passwordForm = getPassword();
  const confirmPasswordForm = getConfirmPassword();
  const textLength = 3;
  

  
  

  if (isInputEmpty(passwordForm.value.trim())) {
    errorMensage(passwordForm, 'Este campo é obrigatório.')
  } else {
    errorMensage(passwordForm, '', true)
  }

  if (isInputEmpty(confirmPasswordForm.value.trim())) {
    errorMensage(confirmPasswordForm, 'Este campo é obrigatório.')
  } else {
    errorMensage(confirmPasswordForm, '', true)
  }
  
  const nameValidationResult = minLength(nameForm, textLength);

  if (!nameValidationResult && !isInputEmpty(nameForm.value.trim())) {

    errorMensage(nameForm, `Deve possuir no mínimo ${textLength} caracteres`);

  } else if (isInputEmpty(nameForm.value.trim())) {
    errorMensage(nameForm, 'Este campo é obrigatório.');
  } else {
    errorMensage(nameForm, '', true)
  }

  // validação de email
  const emailValidationResult = isValidEmail(emailForm.value.trim());

  if (!emailValidationResult && !isInputEmpty(emailForm.value.trim())) {
    errorMensage(emailForm, 'Digite um email valido. Ex.: example@example.com')
  } else if (isInputEmpty(emailForm.value.trim())) {
    errorMensage(emailForm, 'Este campo é obrigatório.');
  } else {
    errorMensage(emailForm, '', true)
  }
}

// Pegar o nome
function getName() {
  return document.querySelector('#name');
}

// Pegar o Email
function getEmail() {
  return document.querySelector('#email');
}

// Pegar a senha
function getPassword() {
  return document.querySelector('#password');
}

// Pegar a senha de confirmar
function getConfirmPassword() {
  return document.querySelector('#confirm-password');
}

// Retorna se o valor está vazio ou não
function isInputEmpty(input){
  return input === '';
}

function errorMensage(input, text = '', clean = false) {
  if (clean === true) {
    input.nextElementSibling.innerText = "";
    return input.classList.remove('required');  
  }
  input.classList.add('required');
  return input.nextElementSibling.innerText = `${text}`;
}

function minLength(input, length) {
  if(input.value.trim().length < length && input.value.trim().length != 0) {
    input.classList.add('required');

    return false;
  } else {
    
    input.classList.remove('required');
    
    return true;
  }
}

function isValidEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

  return regex.test(email); 
}

