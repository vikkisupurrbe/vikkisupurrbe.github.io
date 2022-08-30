function navbarCollapse() {
    var x = document.getElementById("websiteNavbar");

    if (x.className === "website-navbar") {
        x.className += " responsive";
    } else {
        x.className = "website-navbar";
    }
}