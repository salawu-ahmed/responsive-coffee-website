// const menuBtn = document.querySelector('.mobile-menu-icon')
const navList = document.querySelector('nav ul')
const menuButton = document.querySelector(".mobile-menu-icon i");

function handleClick() {
    navList.classList.toggle('open')
    const isOpened = navList.classList.contains('open')
    menuButton.classList = isOpened ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}

menuButton.addEventListener("click", () => handleClick());