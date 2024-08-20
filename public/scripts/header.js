document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#menu-toggle");
  const menu = document.querySelector("#mobile-menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});
