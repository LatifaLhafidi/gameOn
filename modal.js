
const modalBackground = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalclose = document.querySelector(".close");
const firstInput = document.querySelector("#first");
const lastInput= document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");




modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalclose.addEventListener("click", close);
firstInput.addEventListener("invalid",validationError);
lastInput.addEventListener("invalid",validationError);
emailInput.addEventListener("invalid",validationError);
birthdateInput.addEventListener("invalid",validationError);


function validationError(event) {
  const target = event.target;

  const parent=target.parentElement;
  parent.setAttribute("data-error-visible","true");
  
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


