
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
const form=document.querySelector("form");

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalclose.addEventListener("click", closeModal);

/* validation form*/ 
firstInput.addEventListener("invalid",ErrorMessage);
lastInput.addEventListener("invalid",ErrorMessage);
emailInput.addEventListener("invalid",ErrorMessage);
birthdateInput.addEventListener("invalid",ErrorMessage);
quantityInput.addEventListener("invalid",ErrorMessage);
location1.addEventListener("invalid",ErrorMessage);
conditionsCheckbox.addEventListener("invalid",ErrorMessage);
form.addEventListener("submit",handleSubmit);

  
 
// Show error message
function ErrorMessage(event) {
  const target = event.target;
  const parent=target.parentElement;
  parent.setAttribute("data-error-visible","true");
   setTimeout(removeErrorMessage,2000);
  
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
function handleSubmit(){
  if(form == null) throw new Error ("No form found");
  if(form.checkValidity){
    alert("Merci ! Votre réservation a été reçue");
   closeModal();
  }
}




  








