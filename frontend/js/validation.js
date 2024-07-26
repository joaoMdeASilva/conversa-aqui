const loginForm = document.querySelector('#loginForm'); // Pegando o formulário

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formValidation();
});

// Função para validação do formulário
function formValidation() {
  const nameForm = getName(); // Pegar o nome do usuário
  const emailForm = getEmail(); // Pegar o email do usuário 
  const passwordForm = getPassword(); // Pegar a senha do usuário
  const confirmPasswordForm = getConfirmPassword(); // Pegar a confirmação de senha do usuário
  const minTextLengthName = 3; // Quantidade mínima de caracteres do nome
  const minTextLengthPassword = 8; // Quantidade mínima de caracteres da senha
  
  // saber es todos os campo estão falidos ou não
  let valid = true; 

  // Validação do campo de nome
  
  // Variável com a função de validar o tamanho do input
  const nameValidationResult = minLength(nameForm, minTextLengthName); // validando o tamanho do nome

  if (!nameValidationResult && !isInputEmpty(nameForm.value.trim())) {
    errorMensage(nameForm, `Deve possuir no mínimo ${minTextLengthName} caracteres`);
    
    valid = false;
  } else if (isInputEmpty(nameForm.value.trim())) {
    errorMensage(nameForm, 'Este campo é obrigatório.');
    
    valid = false;
  } else {

    errorMensage(nameForm, '', true)

  }

  // Validação do campo de email

  // Variavel com o resultado da validação do email
  const emailValidationResult = isValidEmail(emailForm.value.trim()); // Validando se o email está correto ou não

  if (!emailValidationResult && !isInputEmpty(emailForm.value.trim())) {
    errorMensage(emailForm, 'Digite um email valido. Ex.: example@example.com')

    valid = false
  } else if (isInputEmpty(emailForm.value.trim())) {
    errorMensage(emailForm, 'Este campo é obrigatório.');

    valid = false;
  } else {

    errorMensage(emailForm, '', true)

  }

  // Validação do campo de senha
  
  // Variavel com o resultado da validação do tamanho da senha
  const passwordValidationResult = minLength(passwordForm, minTextLengthPassword); // validando o tamanho da senha
  
  if (!passwordValidationResult && !isInputEmpty(passwordForm.value.trim())) {
    errorMensage(passwordForm, `Deve possuir no mínimo ${minTextLengthPassword} caracteres`);

    valid = false;
  } else if (isInputEmpty(passwordForm.value.trim())) {
    errorMensage(passwordForm, 'Este campo é obrigatório.');

    valid = false;
  } else {
    errorMensage(passwordForm, '', true)

  }
  
  // Validação da senha de confirmação

  // Variavel com o resultado da validação do tamanho da senha de confirmação
  // validando o tamanho da senha de confirmação
  const confirmPasswordValidationResult = minLength(confirmPasswordForm, minTextLengthPassword);
  
  if (!confirmPasswordValidationResult && !isInputEmpty(passwordForm.value.trim())) {
    errorMensage(confirmPasswordForm, `Deve possuir no mínimo ${minTextLengthPassword} caracteres`);
    
    valid = false;
  } else if (isInputEmpty(confirmPasswordForm.value.trim())) {
    errorMensage(confirmPasswordForm, 'Este campo é obrigatório.');

    valid = false;
  } else {
    errorMensage(confirmPasswordForm, '', true)

  }

  // Validação das senhas, valida se são iguais

  // Variavel com o resutado da validação das senhas
  // verificar se as senhas estão correta 
  const validationPasswordsResult = validationPasswords(passwordForm, confirmPasswordForm);
  
  if (!validationPasswordsResult && passwordValidationResult && confirmPasswordValidationResult) {
    errorMensage(passwordForm, 'Erro! Senhas diferentes.')
    errorMensage(confirmPasswordForm, 'Erro! Senhas diferentes.');
    valid = false;
  }

  // Verificação se já está valido para mudar de página
  if(valid) {
    window.location.href = "./html/main-page.html"
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

// Retorna se o valor está vazio(true) ou não(false)
function isInputEmpty(input){
  return input === '';
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

// Retorna se o email é valido(true) ou não(false)
function isValidEmail(email) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

  return emailRegex.test(email); 
}

// Validadar as senhas estão iguais, sim(true) ou não(false)
function validationPasswords(password, confirmPassowrd) {
  return password.value === confirmPassowrd.value;
}
