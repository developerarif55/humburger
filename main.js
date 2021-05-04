const humburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const menuBar = document.querySelector(".bar")


// my all listener
humburger.addEventListener("click", mobileMenu);

navLink.forEach(n=> n.addEventListener("click", closeMenu))

// my all function here
function mobileMenu(){
    humburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  
}

function closeMenu(){
    humburger.classList.remove("active");
    navMenu.classList.remove("active");
};