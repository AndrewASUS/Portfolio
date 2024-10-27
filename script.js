// DEFINE THE TOGGLE MENU FUNCTION
// CHANGE THE STYLING FOR DESKTOP MENU AND HAMBURGER MENU

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


