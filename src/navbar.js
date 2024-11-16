const navMenuBackdrop = document.getElementById('nav-website-links-menu-backdrop');

const navLinksMenuLg = document.getElementById('nav-website-links-menu-lg');
const navLinksMenuSm = document.getElementById('nav-website-links-menu-sm');

const navMenuCloseBtn = document.getElementById('nav-menu-close-btn');

const supportBtn = document.getElementById('support-btn');
const supportMenuBtn = document.getElementById('support-menu-btn');

let isMenuOpen = false;

navMenuCloseBtn.addEventListener('click', navLinksMenuClose);

navLinksMenuLg.addEventListener('click', navLinksMenuOpen);
navLinksMenuSm.addEventListener('click', navLinksMenuOpen);

navMenuBackdrop.addEventListener('click', navLinksMenuClose);

function navLinksMenuOpen() {
    isMenuOpen = true;
    navMenuBackdrop.classList.remove('hide');
}

function navLinksMenuClose() {
    isMenuOpen = false;
    navMenuBackdrop.classList.add('hide');
}

supportBtn.addEventListener('click', () => {
    window.open('https://www.paypal.com/donate/?business=UZMLBR3M3FPUY&no_recurring=0&item_name=If+you+enjoyed+Canvas+HW+Reminder%2C+consider+supporting+the+project.+Thank+you%21&currency_code=USD','__blank');
});

supportMenuBtn.addEventListener('click', () => {
    window.open('https://www.paypal.com/donate/?business=UZMLBR3M3FPUY&no_recurring=0&item_name=If+you+enjoyed+Canvas+HW+Reminder%2C+consider+supporting+the+project.+Thank+you%21&currency_code=USD','__blank');
});