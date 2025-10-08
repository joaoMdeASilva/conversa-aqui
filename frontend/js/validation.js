import Helper from "./classes/validation/Helper.js";
import UserNameValidation from "./classes/validation/NameValidation.js";
import PasswordValidation from "./classes/validation/PasswordValidation.js";
import UserEmailValidation from "./classes/validation/UserEmailValidation.js";

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
  valid = userNameValidation.isUserNameValid();

  const emailValidation = new UserEmailValidation(getEmail);
  valid = emailValidation.isUserEmailValid();

  const passwordValidation = new PasswordValidation();
  valid = passwordValidation.isUserPasswordValid(getPassword, minPassLength);
  valid = passwordValidation.isUserPasswordValid(getConfirmPassword, minPassLength);

  if (!passwordValidation.isUserPasswordAndConfirmPasswordEqual(getPassword, getConfirmPassword)) {
    Helper.errorMesage(getPassword, 'As senhas devem ser iguais.')
    Helper.errorMesage(getConfirmPassword, 'As senhas devem ser iguais.');

    valid = false;
  }

  // Verificação se já está valido para mudar de página
  if (valid) {
    window.location.href = "./html/main-page.html"
  }
}