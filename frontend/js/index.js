// Aviso de campo obrigatório
const fillInputWarning = 'Este campo é obrigatório.'

// função para definir o tamanho mínimo do nome do formoulário
function minNameLength(name) {
  // Span para colocar os avisos de erro desta função
  const constMinNameLength = document.querySelector('#min-name-lenght');
  
  //Tamanho da quantidade de letras no campo de nome
  const minNLength = 3;

  // Colocar o aviso do mínimo de caracteres e de preencher o input
  if(name.value.trim().length < minNLength ) {
    nameForm.classList.add('required');
    nameForm.setAttribute('onkeyup', 'minNameLength(nameForm)');

    constMinNameLength.innerText = `'Precisa ter no mínimo ter 3 caracteres'\n${fillInputWarning}`;
    return false;
  }
  // Colocar somente o aviso do mínimo de caracteres
  else if(name.value.trim().length < minNLength){
    nameForm.classList.add('required');
    nameForm.setAttribute('onkeyup', 'minNameLength(nameForm)');

    constMinNameLength.innerText = fillInputWarning;
    return false;
  }
  // Remover a estilização quando  estiver correto
  else {
    nameForm.classList.remove('required');
    constMinNameLength.innerText = '';
    return true
  }
}


function emailValidation(email) {
  const emailFormSpan = document.querySelector('#email-validate');
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  // retorna se o email está correto ou não
  if (email.value.trim() === '') {
    emailForm.classList.add('required');
    emailForm.setAttribute('onkeyup', 'emailValidation(emailForm)');

    emailFormSpan.innerText = fillInputWarning;
    
    return false;
  } else if (emailRegex.test(email.value) == false) {
    emailForm.classList.add('required');
    emailForm.setAttribute('onkeyup', 'emailValidation(emailForm)');

    emailFormSpan.innerText = 'digite um email valido. Ex.: example@example.com'

    return false;
  } 
  
  else {
    emailForm.classList.remove('required');

    emailFormSpan.innerHTML = ''

    return true;
  }
}

// Span
const minPasswordLengthSpan = document.querySelector('#min-password-lenght');

// Validação de tamanho de senha
function minPasswordLength(password) {
  // Tamanho mínimo de caracteres da senha
  const minPLength = 8;
  
  if (password.value.length === '') {
    passwordForm.classList.add('required');
    passwordForm.setAttribute('onkeyup', 'minPasswordLength(passwordForm)');

    minPasswordLengthSpan.innerText =  fillInputWarning;

    return false;
  }
  else if (password.value.length < minPLength) {
    passwordForm.classList.add('required');
    passwordForm.setAttribute('onkeyup', 'minPasswordLength(passwordForm)');

    minPasswordLengthSpan.innerText =  'A senha deve conter no mínimo 8 caracteres';

    return false;
  } else {
    minPasswordLengthSpan.innerText =  '';

    passwordForm.classList.remove('required');

    return true;
  }
}

const nameForm = document.querySelector('#name'); // Variavel para pegar o input do nome no formulário
const emailForm = document.querySelector('#email');
const passwordForm = document.querySelector('#password');
const confirmPasswordForm = document.querySelector('#confirm-password');


const form = document.querySelector('.subscribe');

form.addEventListener('submit', (event) => {
  // if utilizado para parar o submit se não estiver com o foromulário valido
  
  if (!minNameLength(nameForm)) {
   event.preventDefault();
  }

  if (!emailValidation(emailForm)) {
   event.preventDefault();
  }

  if (!minPasswordLength(passwordForm)) {
   event.preventDefault();
  }
}); 

// faz a verificação se tudo está conforme a validação para envir o formulário 

const characterLimit = 109; // limite de carcteres para a função logo abaixo, chamada de "commentBoxesParagraphLimit"
const commentParagraph = document.querySelectorAll('.comment-box p'); // pegar o container dos comentários

// função para definir o limite de paragrafo dos comentarios 
function commentBoxesParagraphLimit() {  
  commentParagraph.forEach(text => {
    if(text.innerText.length > characterLimit) {
      text.innerText = text.innerText.substring(0, characterLimit) + '...';
    } 
  });  
}

commentBoxesParagraphLimit();
