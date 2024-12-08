const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("fa-x");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("fa-x");
  });
});

// active menus
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active-menu");
  }
});
