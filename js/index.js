const navbarId = "websiteNavbar";
const navbarEl = document.getElementById(navbarId);
const navbarClass = "website-navbar";
const hamburgerClass = "fa-bars";
const navbarDropdownClass = "navbar-collapse-content";

document.addEventListener("click", (e) => {
    const isHamburgerClick = e.target.className.includes(hamburgerClass);

    var elem = e.target;
    var isDropdownClick = false;

    // Check whether anything within the dropdown is clicked
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.className.includes(navbarDropdownClass)) {
            isDropdownClick = true;
            break;
        }
    }

    if (isHamburgerClick) {
        if (navbarEl.className === navbarClass) {
            navbarEl.className += " responsive";
        } else {
            navbarEl.className = navbarClass;
        }
    } else if (!isDropdownClick && navbarEl.className.includes("responsive")) {
        // The dropdown is open and the click came from outside the dropdown
        navbarEl.className = navbarClass;
    }
})