let hamburgerIsExpanded = false;
function hamburgerMenuClicked() {
    let hamburger = document.getElementById("hamburger");
    let menu = document.getElementById("hamburger-menu");
    hamburgerIsExpanded = !hamburgerIsExpanded;
    if(hamburgerIsExpanded) {
        hamburger.classList.add("is-active");
        menu.classList.remove("d-none")
    } else {
        hamburger.classList.remove("is-active");
        menu.classList.add("d-none")
    }
}