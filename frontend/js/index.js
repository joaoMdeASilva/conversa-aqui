function nullInput(input) {
  if (input.value === '') {
    input.classList.add('required');
    
    const spanWarning = input.nextElementSibling;
    
    spanWarning.innerText = 'Este campo é obrigatório.\n';
    
    console.log(input)
    
    return false;
  } else{
    input.classList.remove('required');

    const spanWarning = input.nextElementSibling;
    
    spanWarning.innerText = '';

    return true;
  }
}

function userNameValidation(event) {
  const nameForm = form.name;
  
  if(!nullInput(nameForm)) {
    nameForm.setAttribute('onkeyup', `nullInput(this)`)
    return false;
  };

  return true;
}


function validate(event) {
  if (!userNameValidation()) {
    event.preventDefault();
  }
}

const formId = document.querySelector('#form');

formId.addEventListener('submit', validate);