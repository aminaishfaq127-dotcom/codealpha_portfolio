// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }

  });

}, {
  threshold: 0.1
});

reveals.forEach((item) => {
  observer.observe(item);
});


// Mobile Menu Toggle

let menuOpen = false;

function toggleMenu() {

  menuOpen = !menuOpen;

  const links = document.querySelector(".nav-links");

  if (menuOpen) {

    links.style.display = "flex";
    links.style.flexDirection = "column";
    links.style.position = "fixed";
    links.style.top = "70px";
    links.style.right = "28px";
    links.style.background = "rgba(245,240,232,0.97)";
    links.style.padding = "24px";
    links.style.borderRadius = "12px";
    links.style.gap = "20px";
    links.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";

  } else {

    links.style.display = "none";

  }
}