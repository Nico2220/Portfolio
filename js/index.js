window.onload = function () {
  const menuBtn = document.querySelector(".menu-btn");
  const hamburger = document.querySelector(".menu-btn__burger");
  const nav = document.querySelector(".navbar");
  const navMenu = document.querySelector(".nav-items");
  const navMenuItem = document.querySelectorAll(".nav-item");
  let showMenu = false;
  console.log(navMenuItem);

  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      hamburger.classList.add("open");
      nav.classList.add("open");
      navMenu.classList.add("open");
      navMenuItem.forEach((item) => item.classList.add("open"));
      showMenu = true;
    } else {
      hamburger.classList.remove("open");
      nav.classList.remove("open");
      navMenu.classList.remove("open");
      navMenuItem.forEach((item) => item.classList.remove("open"));
      showMenu = false;
    }
  }
};
