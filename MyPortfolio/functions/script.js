

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll(' .header-main nav ul li a');



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header-main nav ul li a[href*=' + id +']').classList.add('active');
            });

        };
    });
};


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-menu-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".header-menu-list li").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));


var navBar = document.getElementById("header-main");
window.onscroll = function() {
  if (window.scrollY > 22) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
};
