// Navigation
const menuBtn = document.querySelector(".nav__mobile-btn");
const navMenu = document.querySelector(".nav__menu");
// const navLinks = document.querySelectorAll("nav__link");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
    menuBtn.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Footer year
const year = document.getElementById("year");
year.innerText = new Date().getFullYear();