// FUNCIONAMINENTO ENTRE CAMBIO DE RESOLUCION MOBILE/DESKTOP
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#mobile-menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// FUNCIONAMIENTO DE LOS LINKS
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
  const scrollPosition = window.scrollY + 100; // Ajusta según la altura del header

  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    const offsetTop = section.offsetTop;
    const offsetHeight = section.offsetHeight;

    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
      link.classList.add("bg-orange-600", "text-white");
    } else {
      link.classList.remove("bg-orange-600", "text-white");
    }
  });
}

setActiveLink();
window.addEventListener("scroll", setActiveLink);
