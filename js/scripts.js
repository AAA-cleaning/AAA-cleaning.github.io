function toggleMenu() {
    var menu = document.getElementById("nav-menu");

    if (menu.style.display === "block") {
        menu.style.display = "none"; // Hide menu
    } else {
        menu.style.display = "block"; // Show menu
    }
}
