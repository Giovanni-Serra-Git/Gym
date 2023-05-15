const hamburgerMenuOpen = document.querySelector("[hamburger-menu-open]");
const hamburgerMenuClose = document.querySelector("[hamburger-menu-close]");
const overlay = document.querySelector("[overlay]");
const navbar = document.querySelector("[navbar]");
const linkOverlay = overlay.querySelectorAll("li");

function getWidthScreen() {
    return document.body.clientWidth;
}
 


linkOverlay.forEach(link => link.addEventListener("click", () =>  {
    if (overlay.classList.contains("active")) {
        overlay.classList.remove("active");
    }
    hamburgerMenuClose.style.display = "none";
    hamburgerMenuOpen.style.display = "block";
}));




hamburgerMenuOpen.addEventListener("click", () => {

    if (getWidthScreen() <= 1400) {
        navbar.classList.add("active")
    }

    hamburgerMenuOpen.style.display = "none";
    hamburgerMenuClose.style.display = "block";
    overlay.classList.toggle("active");
});

hamburgerMenuClose.addEventListener("click", () => {
    hamburgerMenuClose.style.display = "none";
    hamburgerMenuOpen.style.display = "block";
    overlay.classList.toggle("active");
});