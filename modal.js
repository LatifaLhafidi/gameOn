
// DOM Elements
const modalBackground = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

const modalBody = document.querySelector(".modal-body");
const modalSuccess = document.querySelector(".modal-success")
const modalCloseSucess = document.querySelector('.modal-success-close');

const formFirst = document.getElementById('first'); // Get firstname input
const formLast = document.getElementById('last'); // Get lastname input
const formEmail = document.getElementById('email'); // Get email input
const formBirthdate = document.getElementById('birthdate'); // Get birthdate input
const formQuantity = document.getElementById('quantity'); // Get quantity of number of tournament participated input
const formLocation = document.querySelector('input[name="location"]'); // Get location input radio
const formLocationCheck = document.querySelector('input[name="location"]:checked');
const formTermsConditions = document.getElementById('checkbox1'); // Get terms conditions input checkbox

//RegEx
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexName = /^[a-z-A-Z ,.'-]+$/;
const regexQuantity = /^([0-9]{1,2})$/;

let formIsValid; // initialize form validation;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click",close);
modalCloseSucess.addEventListener("click",closeSucess);

function editNav() {
  let navbar = document.getElementById("myTopnav");
  if (navbar == null) throw new Error('navbar not found');
  navbar.classList.toggle("responsive")
}
// launch modal form
function launchModal() {
  modalBackground.style.display = "block";

  
}
function close(){
  closeModal();
  if(modalBackground.classList.contains('formSubmitted')){
    restartModal();
  }
}
function closeSucess(){
  closeModal();
  restartModal();
} 
// close modal form
function closeModal() {
  modalBackground.style.display = "none";
}


// restart modal form
function restartModal(){
  modalBackground.classList.remove('formSubmitted');
  modalBody.style.opacity = "1";
  modalSuccess.style.display = "none";
  formFirst.value="";
  formLast.value="";
  formEmail.value="";
  formBirthdate.value="";
  formQuantity.value="";
  formLocationCheck.checked = false;
}



// Add error message
function addFormErrorMessage(element,errorMessage){
  element.parentElement.setAttribute('data-error', errorMessage);
  element.parentElement.setAttribute('data-error-visible','true');
}

// Remove error message
function removeFormErrorMessage(element){
    element.parentElement.removeAttribute('data-error');
    element.parentElement.removeAttribute('data-error-visible');
}

// Check the validation of the firstname input
function formFirsLasttIsValid(element){
  if(element.value == "" || element.value.length < 2 || regexName.test(element.value) != true){
    addFormErrorMessage(element, "Veuillez entrer 2 caractères valide ou plus pour le champ du prénom.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(element);
  }
}

// // Check the validation of the email input
// satisfait les critères définis par l'expression régulière, 
function formEmailIsValid(){
  if (regexEmail.test(formEmail.value) != true){
    addFormErrorMessage(formEmail, "Veuillez entrer une adresse email valide.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formEmail);
  }
}

// // Check the validation of the birthdate input
function formBirthdateIsValid(){
  if(formBirthdate.value == ""){
    addFormErrorMessage(formBirthdate, "Vous devez entrer votre date de naissance.");
    formIsValid = false;
  } else if (Date.parse(formBirthdate.value) > Date.now()){
    addFormErrorMessage(formBirthdate, "Vous devez entrer une date de naissance valide.");
    formIsValid = false;
  } else {
    removeFormErrorMessage(formBirthdate);
  }
}

// Check the validation of the quantity input
//satisfait les critères définis par l'expression régulière, 
function formQuantityIsValid(){
  if(formQuantity.value == "" || regexQuantity.test(formQuantity.value)!= true){
    addFormErrorMessage(formQuantity, "Veuillez entrer un nombre entre 0 et 99");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formQuantity);
  }
}


// // Check the validation of the location input
//verifier si Un bouton radio est sélectionné.
function formLocationIsValid(){
  let formLocationCheck = document.querySelector('input[name="location"]:checked');
  if(formLocationCheck == null){
    addFormErrorMessage(formLocation, "Vous devez choisir une option.");
    formIsValid = false;
  }else{
    removeFormErrorMessage(formLocation);
  }
}

// // Check the validation of the terms conditions input
//verifier si La case des conditions générales est cochée, 
function formTermsConditionsIsValid(){
  if(!formTermsConditions.checked){
    addFormErrorMessage(formTermsConditions, "Vous devez vérifier que vous acceptez les termes et conditions.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formTermsConditions);
  }
}

// // Check the validation of the form and return a message if it's ok
function validate(event){
  //Prevent to submit form
  //ajouter une comfirmation quand envoi reusi 
  event.preventDefault();

  formIsValid = true;
  formFirsLasttIsValid(formFirst);
  formFirsLasttIsValid(formLast);
  formEmailIsValid();
  formBirthdateIsValid();
  formQuantityIsValid();
  formLocationIsValid();
  formTermsConditionsIsValid();

  if(formIsValid){
    modalBackground.classList.add('formSubmitted');
    modalBody.style.opacity = "0";
    modalSuccess.style.display = "flex"
    return true;
  } else{
    return false;
  }
}