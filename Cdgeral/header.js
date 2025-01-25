
function toggleMenu() {
    const menuItems = document.getElementById("menu-items");
    menuItems.classList.toggle("active");
}
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark-mode');
}