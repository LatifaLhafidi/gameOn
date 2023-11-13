
const modalBackground = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalclose = document.querySelector(".close");
const firstInput = document.querySelector("#first");
const lastInput= document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");
const quantityInput =document.querySelector("#quantity");
const location1=document.querySelector("#location1");
const conditionsCheckbox = document.querySelector('#checkbox1');
const submitButton=document.querySelector(".btn-submit");






modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalclose.addEventListener("click", close);

/* validation form*/ 
firstInput.addEventListener("invalid",ErrorMessage);
lastInput.addEventListener("invalid",ErrorMessage);
emailInput.addEventListener("invalid",ErrorMessage);
birthdateInput.addEventListener("invalid",ErrorMessage);
quantityInput.addEventListener("invalid",ErrorMessage);
location1.addEventListener("invalid",ErrorMessage);
conditionsCheckbox.addEventListener("invalid",ErrorMessage);
 
// Show error message
function ErrorMessage(event) {
  const target = event.target;
  const parent=target.parentElement;
  parent.setAttribute("data-error-visible","true");
   setTimeout(removeErrorMessage,9000);
  
}

// remove error message
function removeErrorMessage () {
  const errorMsg =document.querySelectorAll("[data-error]");
  errorMsg.forEach((errorMsg) => {
  errorMsg.removeAttribute('data-error-visible');
  });
}
 
function editNav() {
  let navbar = document.getElementById("myTopnav");
  if (navbar == null) throw new Error('navbar not found');
  navbar.classList.toggle("responsive")

}

function close() {
  if (modalBackground != null) {
    modalBackground.classList.remove("active");
  }
}

function launchModal() {
  if (modalBackground != null) {
    modalBackground.classList.add("active");

  }

}




  








