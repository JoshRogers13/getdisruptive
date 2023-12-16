/* --------------------------------------------------------------------------------------------------------------------------------------------------
File functions:

• Opening and closing of the mobile nav
-------------------------------------------------------------------------------------------------------------------------------------------------- */

// Define variables for elements
const   body = document.querySelector('body'),
        header = document.querySelector('#shopify-section-header'),
        mobileNav = document.querySelector('.navigation'),
        mobileNavItems = document.querySelectorAll('.nav-item'),
        mobileNavtrigger = document.querySelector('[data-role="execute-open-mobile-nav"]');

// Define variables for interactive design
const showDelay = 300;

// Define classes to be added
var headerClassesToAdd = {
    openingMobileNav: 'nav-opening',
    openMobileNav: 'nav-open',
    navItemShow: 'nav-item-show'
}

// Open Mobile Nav
function execeuteOpenMobileNav() {
    body.classList.add(headerClassesToAdd.openingMobileNav);
    setTimeout(() => {
        body.classList.add(headerClassesToAdd.openMobileNav);
    }, showDelay);
    setTimeout(() => {
        mobileNavItems.forEach(navItem => {
            navItem.classList.add(headerClassesToAdd.navItemShow);
        });
    }, showDelay * 2);
}

// Close Mobile Nav
function execeuteCloseMobileNav() {
    mobileNavItems.forEach(navItem => {
        navItem.classList.remove(headerClassesToAdd.navItemShow);
    });
    setTimeout(() => {
        body.classList.remove(headerClassesToAdd.openMobileNav);
    }, showDelay);
    setTimeout(() => {
        body.classList.remove(headerClassesToAdd.openingMobileNav);
    }, showDelay * 2);
}

mobileNavtrigger.addEventListener('click', () => {
    if(mobileNavtrigger.classList.contains(headerClassesToAdd.openMobileNav)) {
        execeuteCloseMobileNav();
    } else {
        execeuteOpenMobileNav();
    }

    mobileNavtrigger.classList.toggle(headerClassesToAdd.openMobileNav);
});