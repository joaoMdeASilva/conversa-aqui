import Helper from "./classes/validation/Helper.js";
import PasswordValidation from "./classes/validation/PasswordValidation.js";

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

  if (Helper.isInputEmpty(getName.value.trim())) {
    Helper.errorMesage(getName, 'Este campo é obrigatório.');

    valid = false;
  } else if (Helper.minLength(getName, minTextLengthName)) {
    Helper.errorMesage(getName, `Deve possuir no mínimo ${minTextLengthName} caracteres`);

    valid = false;
  } else {
    Helper.errorMesage(getName, '', true)
  }

  // Validação do campo de email

  if (Helper.isInputEmpty(getEmail.value.trim())) {
    Helper.errorMesage(getEmail, 'Este campo é obrigatório.');

    valid = false
  } else if (!isValidEmail(getEmail.value.trim())) {
    Helper.errorMesage(getEmail, 'Digite um email valido. Ex.: example@example.com')

    valid = false;
  } else {
    Helper.errorMesage(getEmail, '', true)
  }

  // Validação do campo de senha
  const passwordValidation = new PasswordValidation();
  
  valid = passwordValidation.passwordInputValidation(getPassword);
  valid = passwordValidation.passwordInputValidation(getConfirmPassword);

  // Verificação se os inputs senha e confirmação senha são iguais
  if (!passwordValidation.isPasswordAndConfirmPasswordEqual(getPassword, getConfirmPassword)) {
    Helper.errorMesage(getPassword, 'As senhas devem ser iguais.')
    Helper.errorMesage(getConfirmPassword, 'As senhas devem ser iguais.');

    valid = false;
  }

  // Verificação se já está valido para mudar de página
  if (valid) {
    window.location.href = "./html/main-page.html"
  }
}

// retorna se o tamanho mínimo de caracteres de um determinado input está menor(false) ou maior ou igual(true) 

// Retorna se o email é valido(true) ou não(false)
function isValidEmail(email) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

  return emailRegex.test(email);
}