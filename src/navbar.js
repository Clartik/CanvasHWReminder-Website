const navMenuBackdrop = document.getElementById('nav-website-links-menu-backdrop');

const navLinksMenuLg = document.getElementById('nav-website-links-menu-lg');
const navLinksMenuSm = document.getElementById('nav-website-links-menu-sm');

const navMenuCloseBtn = document.getElementById('nav-menu-close-btn');

let isMenuOpen = false;

navMenuCloseBtn.addEventListener('click', navLinksMenuClose);

navLinksMenuLg.addEventListener('click', navLinksMenuOpen);
navLinksMenuSm.addEventListener('click', navLinksMenuOpen);

function navLinksMenuOpen() {
    isMenuOpen = true;
    navMenuBackdrop.classList.remove('hide');
}

function navLinksMenuClose() {
    isMenuOpen = false;
    navMenuBackdrop.classList.add('hide');
}