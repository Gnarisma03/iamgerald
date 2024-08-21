document.getElementById('theme-switch').addEventListener('click', function() {
    document.body.classList.toggle('night');
});



document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section"); // Select all the sections you want to observe
    const navLinks = document.querySelectorAll(".header-menu-list li a");

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.6 // Trigger when 60% of the section is in view
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === entry.target.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});



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


