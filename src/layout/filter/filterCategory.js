fetch('../layout/filter/filterCategory.html')
.then(res => res.text())
.then(data => {
    document.getElementById("filterCategory").innerHTML = data;
});

function toggleMenu() {
    const menuItems = document.getElementById("menu-items");
    menuItems.classList.toggle("active"); 
}
function toggleCatalogo(event) {
    event.preventDefault(); 
    const submenuContainer = document.querySelector('.submenu-container');
    
    submenuContainer.classList.toggle('active');  
}

function filterCategory(category) {
    const images = document.querySelectorAll('.grid-photos img');
    images.forEach(image => {
        if (image.dataset.category === category || category === 'all') {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    const menuItems = document.getElementById("menu-items");
    menuItems.classList.remove("active");

    const submenu = document.querySelector('.submenu-container');
    submenu.classList.remove("active");
}
function closeMenu() {
    const menu = document.getElementById("menu-items");
    menu.classList.remove("active");  
}

function toggleMenu() {
    const menuItems = document.getElementById("menu-items");
    menuItems.classList.toggle("active"); 
}

function toggleCatalogo(event) {
    event.preventDefault(); 
    const submenuContainer = document.querySelector('.submenu-container');
    
    // Alterna a visibilidade do submenu
    submenuContainer.classList.toggle('active'); 
}
