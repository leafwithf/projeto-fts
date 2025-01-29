// Função para alternar a visibilidade do menu principal
function toggleMenu() {
    const menuItems = document.getElementById("menu-items");
    menuItems.classList.toggle("active"); // Exibe/oculta o menu principal
}
// Função para alternar a visibilidade do submenu do catálogo
function toggleCatalogo(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    const submenuContainer = document.querySelector('.submenu-container');
    
    // Alterna a visibilidade do submenu
    submenuContainer.classList.toggle('active');  // Adiciona ou remove a classe "active"
}


// Função para filtrar categorias de imagens
function filterCategory(category) {
    const images = document.querySelectorAll('.grid-photos img');
    images.forEach(image => {
        if (image.dataset.category === category || category === 'all') {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    // Fecha o menu principal e o submenu após a seleção
    const menuItems = document.getElementById("menu-items");
    menuItems.classList.remove("active"); // Fecha o menu principal

    const submenu = document.querySelector('.submenu-container');
    submenu.classList.remove("active"); // Fecha o submenu
}
// Função para fechar o menu
function closeMenu() {
    const menu = document.getElementById("menu-items");
    menu.classList.remove("active");  // Fecha o menu principal
}

// Função para alternar a visibilidade do menu principal
function toggleMenu() {
    const menuItems = document.getElementById("menu-items");
    menuItems.classList.toggle("active"); // Exibe/oculta o menu principal
}

// Função para alternar a visibilidade do submenu do catálogo
function toggleCatalogo(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    const submenuContainer = document.querySelector('.submenu-container');
    
    // Alterna a visibilidade do submenu
    submenuContainer.classList.toggle('active');  // Adiciona ou remove a classe "active"
}

// Adiciona evento de clique no botão de fechar
const closeBtn = document.getElementById('close-btn');
if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
} else {
    console.error("Botão de fechar não encontrado!");
}

// Função para alternar o modo escuro
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark-mode');
}
