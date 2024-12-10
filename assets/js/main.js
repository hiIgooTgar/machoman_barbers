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

// pop up galeri
function showPopUpGaleri(event) {
  const galeriImage = event.currentTarget
    .querySelector("#galeri-img")
    .getAttribute("src");

  const overlayGaleri = document.createElement("div");
  overlayGaleri.id = "overlay-galeri";

  const contentGaleri = document.createElement("div");
  contentGaleri.id = "content-galeri";
  contentGaleri.innerHTML = `
   <div>
        <div class='float-right'>
          <button class='bg-primary text-gray-950' id='popup-close'><i class='fa fa-x'></i></button>
        </div>
        <img src='${galeriImage}' alt='${galeriImage}' />
    </div>`;

  overlayGaleri.appendChild(contentGaleri);
  document.body.appendChild(overlayGaleri);

  document.getElementById("popup-close").addEventListener("click", () => {
    document.body.removeChild(overlayGaleri);
  });
}
