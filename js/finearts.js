// Função para criar o modal dinamicamente
function createModal() {
    // Verifica se o modal já existe, para não criar duplicado
    if (document.getElementById("modal")) return;

    // Cria o container do modal
    const modal = document.createElement("div");
    modal.id = "modal";
    modal.className = "modal";
    modal.style.display = "none"; // Inicialmente escondido

    // Cria o botão de fechar
    const closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = closeModal;

    // Cria a imagem do modal
    const modalImg = document.createElement("img");
    modalImg.id = "modalImage";
    modalImg.className = "modal-content";
    modalImg.alt = "Modal Image";

    // Cria o caption
    const caption = document.createElement("div");
    caption.id = "caption";

    // Adiciona os elementos ao modal
    modal.appendChild(closeButton);
    modal.appendChild(modalImg);
    modal.appendChild(caption);

    // Adiciona o modal ao body
    document.body.appendChild(modal);
}

// Função para abrir o modal
function openModal(imageId) {
    createModal(); // Certifica-se de que o modal existe
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    const photoElement = document.querySelector(`[onclick="openModal('${imageId}')"]`);
    if (photoElement) {
        modal.style.display = "flex";
        modalImg.src = photoElement.src;
        captionText.innerText = photoElement.alt || "Imagem sem descrição";
    }
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Adiciona o estilo do modal dinamicamente
const style = document.createElement("style");
style.innerHTML = `
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.modal-content {
    max-width: 90%;
    height: auto;
    border-radius: 8px;
}
.close {
    position: absolute;
    top: 20px;
    right: 30px;
    color: white;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
}
#caption {
    color: white;
    text-align: center;
    margin-top: 12px;
    font-size: 14px;
}
`;
document.head.appendChild(style);


function toggleMenu() {
    const menuItems = document.getElementById("menu-items");
    menuItems.classList.toggle("active");
}
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark-mode');
}