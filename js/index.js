const navbarId = "websiteNavbar";
const navbarEl = document.getElementById(navbarId);
const navbarClass = "website-navbar";
const workDropdownId = "dropdownContent";
const workDropdownEl = document.getElementById(workDropdownId);
const workDropdownClass = "navbar-dropdown-content";
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
            // Close all dropdowns if the dropdown is open and the hamburger is clicked.
            navbarEl.className = navbarClass;
            workDropdownEl.className = workDropdownClass;
        }
    } else if (!isDropdownClick && navbarEl.className.includes("responsive")) {
        // The dropdown is open and the click came from outside the dropdown,
        // so close the dropdown. Also, reset (close) the work dropdown.
        navbarEl.className = navbarClass;
        workDropdownEl.className = workDropdownClass;
    }
})

function workDropdownToggle() {
    if (navbarEl.className.includes("responsive")) {
        if (workDropdownEl.className === workDropdownClass) {
            workDropdownEl.className += " open";
        } else {
            workDropdownEl.className = workDropdownClass;
        }
    }
}