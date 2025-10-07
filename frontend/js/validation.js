const loginForm = document.querySelector('#loginForm'); // Pegando o formulário

const getName = document.getElementById('name');
const getEmail = document.getElementById('email');
const getPassword = document.getElementById('password');
const getConfirmPassword = document.getElementById('confirm-password');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formValidation();
});

function formValidation() {
  const minTextLengthName = 3;
  const minTextLengthPassword = 8;

  // Saber es todos os campo estão validos ou não
  let valid = true;

  if (isInputEmpty(getName.value.trim())) {
    errorMensage(getName, 'Este campo é obrigatório.');

    valid = false;
  } else if (minLength(getName, minTextLengthName)) {
    errorMensage(getName, `Deve possuir no mínimo ${minTextLengthName} caracteres`);

    valid = false;
  } else {
    errorMensage(getName, '', true)
  }

  // Validação do campo de email

  if (isInputEmpty(getEmail.value.trim())) {
    errorMensage(getEmail, 'Este campo é obrigatório.');

    valid = false
  } else if (!isValidEmail(getEmail.value.trim())) {
    errorMensage(getEmail, 'Digite um email valido. Ex.: example@example.com')

    valid = false;
  } else {
    errorMensage(getEmail, '', true)
  }

  // Validação do campo de senha

  if (isInputEmpty(getPassword.value.trim())) {
    errorMensage(getPassword, 'Este campo é obrigatório.');
    
    valid = false;
  } else if (!minLength(getPassword, minTextLengthPassword)) {
    errorMensage(getPassword, `Deve possuir no mínimo ${minTextLengthPassword} caracteres`);

    valid = false;
  } else {
    errorMensage(getPassword, '', true)

  }

  // Validação da senha de confirmação

  // Variavel com o resultado da validação do tamanho da senha de confirmação
  // validando o tamanho da senha de confirmação
  // const confirmPasswordValidationResult = minLength(getConfirmPassword, minTextLengthPassword);

  // if (!confirmPasswordValidationResult && !isInputEmpty(getPassword.value.trim())) {
  //   errorMensage(getConfirmPassword, `Deve possuir no mínimo ${minTextLengthPassword} caracteres`);

  //   valid = false;
  // } else if (isInputEmpty(getConfirmPassword.value.trim())) {
  //   errorMensage(getConfirmPassword, 'Este campo é obrigatório.');

  //   valid = false;
  // } else {
  //   errorMensage(getConfirmPassword, '', true)
  // }

  // // Validação das senhas, valida se são iguais

  // // Variavel com o resutado da validação das senhas
  // // verificar se as senhas estão correta 
  // const validationPasswordsResult = validationPasswords(getPassword, getConfirmPassword);

  // if (!validationPasswordsResult && passwordValidationResult && confirmPasswordValidationResult) {
  //   errorMensage(getPassword, 'Erro! Senhas diferentes.')
  //   errorMensage(getConfirmPassword, 'Erro! Senhas diferentes.');
  //   valid = false;
  // }

  // Verificação se já está valido para mudar de página
  if (valid) {
    window.location.href = "./html/main-page.html"
  }
}

// Retorna se o valor está vazio(true) ou não(false)
function isInputEmpty(input) {
  return !input;
}

// colocar e retirar a mensagem de erro
function errorMensage(input, text = '', clean = false) {
  /* Argumentos:
  
  input: serve para escolher qual input com uma tag seguinte (sendo o span) vai ser aplicado este aviso;
  text: texto da mensagem;
  clean: limpa o texto da mensagem se for true, se for false, não faz nada.
  */

  // Limpar a mensagem de erro 
  if (clean === true) {
    input.nextElementSibling.innerText = "";
    return input.classList.remove('required');
  }

  input.classList.add('required');

  // Adicionando o texto da mensagem
  return input.nextElementSibling.innerText = text;
}

// retorna se o tamanho mínimo de caracteres de um determinado input está menor(false) ou maior ou igual(true) 
function minLength(input, length) {
  /* Argumentos:
  
  input: escolher qual é o input que vai ser verificado;
  length: tamanho mínimo de caracteres no input.
  */

  if (input.value.trim().length < length) {
    input.classList.add('required');
    return false;
  }

  input.classList.remove('required');
  return true;
}

// Retorna se o email é valido(true) ou não(false)
function isValidEmail(email) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

  return emailRegex.test(email);
}

// Validadar as senhas estão iguais, sim(true) ou não(false)
function validationPasswords(password, confirmPassowrd) {
  return password.value === confirmPassowrd.value;
}
