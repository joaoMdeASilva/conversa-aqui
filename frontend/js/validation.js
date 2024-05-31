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
  const minTextLength = 3;
  const minTextLengthPassword = 8;

  
  

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
  
  const nameValidationResult = minLength(nameForm, minTextLength);

  if (!nameValidationResult && !isInputEmpty(nameForm.value.trim())) {

    errorMensage(nameForm, `Deve possuir no mínimo ${minTextLength} caracteres`);

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
  
  // Validação da senha
  const passwordValidationResult = minLength(passwordForm, minTextLengthPassword);
  
  if (!passwordValidationResult && !isInputEmpty(passwordForm.value.trim())) {

    errorMensage(passwordForm, `Deve possuir no mínimo ${minTextLengthPassword} caracteres`);

  } else if (isInputEmpty(passwordForm.value.trim())) {
    errorMensage(passwordForm, 'Este campo é obrigatório.');
  } else {
    errorMensage(passwordForm, '', true)
  }

  // Validação de confirmação de senha
  const confirmPasswordValidationResult = minLength(confirmPasswordForm, minTextLengthPassword);
  
  if (!confirmPasswordValidationResult && !isInputEmpty(passwordForm.value.trim())) {

    errorMensage(confirmPasswordForm, `Deve possuir no mínimo ${minTextLengthPassword} caracteres`);

  } else if (isInputEmpty(confirmPasswordForm.value.trim())) {

    errorMensage(confirmPasswordForm, 'Este campo é obrigatório.');

  } else {

    errorMensage(confirmPasswordForm, '', true)

  }

  // verificar se a senha está correta 

  const validationPasswordsResult = validationPasswords(passwordForm, confirmPasswordForm);
  
  if (!validationPasswordsResult && passwordValidationResult && confirmPasswordValidationResult) {
    errorMensage(passwordForm, 'Erro! Senhas diferentes.')
    errorMensage(confirmPasswordForm, 'Erro! Senhas diferentes.');
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
  if(input.value.trim().length < length && input.value.trim() != '') {
    input.classList.add('required');

    return false;
  } else if(input.value.trim().length < length) {
    input.classList.add('required');

    return false;
  } 
  
  else  {
    
    input.classList.remove('required');
    
    return true;
  }
}

function isValidEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

  return regex.test(email); 
}

function validationPasswords(password, confirmPassowrd) {
  return password === confirmPassowrd;
}
