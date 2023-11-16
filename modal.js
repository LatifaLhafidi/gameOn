
const modalBackground = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalclose = document.querySelector(".close");
const firstInput = document.querySelector("#first");
const lastInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");
const quantityInput = document.querySelector("#quantity");
const location1 = document.querySelector("#location1");
const conditionsCheckbox = document.querySelector('#checkbox1');
const form = document.querySelector("form");

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalclose.addEventListener("click", closeModal);
//RegEx
const regexName = /^[a-zA-ZÀ-ÖØ-öø-ÿ]{2,}$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexQuantity = /^([0-9]{1,2})$/;
const dateNaissanceRegex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;


// Check input with event listen
firstInput.addEventListener("input", () => CheckInputValue(regexName, firstInput));
lastInput.addEventListener("input", () => CheckInputValue(regexName, lastInput));
emailInput.addEventListener("input", () => CheckInputValue(regexEmail, emailInput));
birthdateInput.addEventListener("input", () => CheckInputValue(dateNaissanceRegex, birthdateInput));
quantityInput.addEventListener("input", () => CheckInputValue(regexQuantity, quantityInput));
// location1.addEventListener("invalid", ErrorMessage);
conditionsCheckbox.addEventListener("input", checkIfConditionsAccepted(conditionsCheckbox));
// form.addEventListener("submit", handleSubmit);

//checkIfConditionsAccepted
function checkIfConditionsAccepted(element) {
  if (!element.checked) {
    ErrorMessage(element);
    return false; 
    
  }
    removeErrorMessage();
    return true;

}
//CheckInputValue
function CheckInputValue(regex, element) {
  if (!regex.test(element.value)) {
    ErrorMessage(element);
    return false;

  }
  removeErrorMessage();
  return true;
}



// Show error message
function ErrorMessage(element) {
  const parent = element.parentElement;
  parent.setAttribute("data-error-visible", "true");

}

// remove error message
function removeErrorMessage() {
  const errorMsg = document.querySelectorAll("[data-error]");
  errorMsg.forEach((errorMsg) => {
    errorMsg.removeAttribute('data-error-visible');
  });
}

function editNav() {
  let navbar = document.getElementById("myTopnav");
  if (navbar == null) throw new Error('navbar not found');
  navbar.classList.toggle("responsive")

}

function closeModal() {
  if (modalBackground != null) {
    modalBackground.classList.remove("active");
  }
}

function launchModal() {
  if (modalBackground != null) {
    modalBackground.classList.add("active");

  }

}















