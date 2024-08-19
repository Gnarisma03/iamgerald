


document.addEventListener('DOMContentLoaded', function () {
  const themeSwitch = document.getElementById('theme-switch');
  const body = document.body;

  if (localStorage.getItem('theme') === 'night') {
      body.classList.add('night');
      themeSwitch.checked = true;
  }

  themeSwitch.addEventListener('change', function () {
      if (this.checked) {
          body.classList.add('night');
          localStorage.setItem('theme', 'night');
      } else {
          body.classList.remove('night');
          localStorage.setItem('theme', 'day');
      }
  });
});



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

  

  // Function to open the modal
  function openModal(projectId) {
    document.getElementById(projectId + '-modal').style.display = 'block';
    showImage(projectId, 0);
}

// Function to close the modal
function closeModal(projectId) {
    document.getElementById(projectId + '-modal').style.display = 'none';
}

// Function to show a specific image
function showImage(projectId, index) {
    let images = document.querySelectorAll('#' + projectId + '-modal .modal-image');
    let totalImages = images.length;
    let caption = document.getElementById(projectId + '-caption');
    if (index >= totalImages) index = 0;
    if (index < 0) index = totalImages - 1;

    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });

    // Update caption
    caption.textContent = images[index].getAttribute('data-caption');
}

// Next and Previous image functions
function nextImage(projectId) {
    let images = document.querySelectorAll('#' + projectId + '-modal .modal-image');
    let currentIndex = Array.from(images).findIndex(img => img.style.display === 'block');
    showImage(projectId, currentIndex + 1);
}

function prevImage(projectId) {
    let images = document.querySelectorAll('#' + projectId + '-modal .modal-image');
    let currentIndex = Array.from(images).findIndex(img => img.style.display === 'block');
    showImage(projectId, currentIndex - 1);
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    let modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}


