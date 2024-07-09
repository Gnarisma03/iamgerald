
const hamburger = document.querySelector(".hamburger_menu");
const navMenu = document.querySelector(".header_main_nav_list");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
})

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header_main .header_main_nav li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header_main .header_main_nav li a[href*=' + id +']').classList.add('active');
            });

        };
    });
};
