"use strict";

// Mobile navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Header active
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});


/* Current Year Value In The Footer */
// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the 'currentYear' element
document.querySelector("#currentYear").textContent = currentYear;
