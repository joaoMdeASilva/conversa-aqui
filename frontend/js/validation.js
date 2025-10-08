import Helper from "./classes/validation/Helper.js";
import UserNameValidation from "./classes/validation/NameValidation.js";
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
  const minNameLength = 3;
  const minPassLength = 8;

  // Vararel para dizer se o formulário é válido ou não
  let valid = true;

  const userNameValidation = new UserNameValidation(getName, minNameLength);

  valid = userNameValidation.isValidUserName();

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
  
  valid = passwordValidation.passwordInputValidation(getPassword, minPassLength);
  valid = passwordValidation.passwordInputValidation(getConfirmPassword, minPassLength);

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