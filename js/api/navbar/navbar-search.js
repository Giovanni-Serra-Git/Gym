export let inputSearch = document.querySelector("[input-search]");
let searchIcon = document.querySelector("[search-icon]");
let searchBox = document.querySelector("[search-box]");
let searchFieldClose = document.querySelector("[search-field-hamburger-menu-close]");
let navbarInner = document.querySelector("[navbar-inner]");


searchIcon.addEventListener("click", () => {
    navbarInner.style.display = "none";
    searchBox.classList.add("active");
});

searchFieldClose.addEventListener("click", () => {
    navbarInner.style.display = "flex";
    searchBox.classList.remove("active");
})



