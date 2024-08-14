

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-main-nav-list");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
})
