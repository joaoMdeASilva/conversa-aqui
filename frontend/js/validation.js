import Helper from "./classes/validation/Helper.js";
import UserNameValidation from "./classes/validation/UserNameValidation.js";
import UserPasswordValidation from "./classes/validation/UserPasswordValidation.js";
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

  const userNameValidation = new UserNameValidation(getName, minNameLength);
  const userNameValidationResult = userNameValidation.isUserNameValid();

  const emailValidation = new UserEmailValidation(getEmail);
  const userEmailValidationResult = emailValidation.isUserEmailValid();

  const userPasswordValidation = new UserPasswordValidation(minPassLength, getPassword, getConfirmPassword);

  const userPassworValidationResult = userPasswordValidation.isUserPasswordValid();
  const userConfirmPasswordValidationResult = userPasswordValidation.isUserConfirmPasswordValid();
  const isUserPasswordAndConfirmPasswordEqualResult = userPasswordValidation.isUserPasswordAndConfirmPasswordEqual()

  if (!isUserPasswordAndConfirmPasswordEqualResult && userConfirmPasswordValidationResult) {
    Helper.errorMessage(getConfirmPassword, 'A senha de confirmação deve ser igual a senha anterior!');
  }

  const validation = userNameValidationResult && userEmailValidationResult && userPassworValidationResult && userConfirmPasswordValidationResult && isUserPasswordAndConfirmPasswordEqualResult;
  // Verificação se já está valido para mudar de página
  if (validation)
    window.location.href = "./html/main-page.html";
}