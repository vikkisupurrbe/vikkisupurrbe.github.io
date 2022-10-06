const navbarId = "websiteNavbar";
const navbarEl = document.getElementById(navbarId);
const navbarClass = "website-navbar";
const workDropdownId = "dropdownContent";
const workDropdownEl = document.getElementById(workDropdownId);
const workDropdownClass = "navbar-dropdown-content";
const workArrowDownId = "workArrowDown"
const workArrowDownEl = document.getElementById(workArrowDownId);
const workArrowDownClass = "fa-solid fa-caret-down work-arrow-down";
const workArrowUpId = "workArrowUp"
const workArrowUpEl = document.getElementById(workArrowUpId);
const workArrowUpClass = "fa-solid fa-caret-up work-arrow-up";
const hamburgerClass = "fa-bars";
const navbarDropdownClass = "navbar-collapse-content";
const noScrollClass = "no-scroll";
const userProfileCheckboxId = "userProfileCheckbox";
const userWorkflowCheckboxId = "userWorkflowCheckbox";
const userPerformanceCheckboxId = "userPerformanceCheckbox";
const beforeAfterPopupId = "beforeAfterPopup";
const beforeAfterPopupEl = document.getElementById(beforeAfterPopupId);
const beforeAfterPopupClass = "before-after-popup";

window.onresize = toggleCheckbox;

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
            // Reset the work dropdown arrows.
            navbarEl.className = navbarClass;
            workDropdownEl.className = workDropdownClass;
            workArrowDownEl.className = workArrowDownClass;
            workArrowUpEl.className = workArrowUpClass;
        }
    } else if (!isDropdownClick && navbarEl.className.includes("responsive")) {
        // The dropdown is open and the click came from outside the dropdown,
        // so close the dropdown. Reset (close) the work dropdown and work dropdown arrows.
        navbarEl.className = navbarClass;
        workDropdownEl.className = workDropdownClass;
        workArrowDownEl.className = workArrowDownClass;
        workArrowUpEl.className = workArrowUpClass;
    }
})

function workDropdownToggle() {
    if (navbarEl.className.includes("responsive")) {
        if (workDropdownEl.className === workDropdownClass) {
            // Open the work dropdown, hide the down arrow, and display the up arrow
            workDropdownEl.className += " open";
            workArrowDownEl.className += " hide";
            workArrowUpEl.className += " show";
        } else {
            // Close the work dropdown, display the down arrow, and hide the up arrow
            workDropdownEl.className = workDropdownClass;
            workArrowDownEl.className = workArrowDownClass;
            workArrowUpEl.className = workArrowUpClass;
        }
    }
}

// Enables/disables window scroll on desktop
function toggleScrollDesktop() {
    if (window.innerWidth >= 1200) {
        document.body.classList.toggle(noScrollClass);
    }
}

// Enables/disables window scroll on all viewports
function toggleScrollAll() {
    document.body.classList.toggle(noScrollClass);
}

function toggleCheckbox() {
    if (window.innerWidth >= 1200) {
        // Enable checkboxes on desktop
        document.getElementById(userProfileCheckboxId).disabled = false;
        document.getElementById(userWorkflowCheckboxId).disabled = false;
        document.getElementById(userPerformanceCheckboxId).disabled = false;
    } else {
        // Disable checkboxes for all other viewports
        document.getElementById(userProfileCheckboxId).disabled = true;
        document.getElementById(userWorkflowCheckboxId).disabled = true;
        document.getElementById(userPerformanceCheckboxId).disabled = true;
    }
}

function toggleBeforeAfterImage() {
    toggleScrollAll();

    if (beforeAfterPopupEl.className === beforeAfterPopupClass) {
        beforeAfterPopupEl.className += " show";
    } else {
        beforeAfterPopupEl.className = beforeAfterPopupClass;
    }
}