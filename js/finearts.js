// Função para criar o modal dinamicamente com tipo específico (horizontal ou vertical)
function createModal(type) {
    const modalId = `modal-${type}`;

    // Verifica se o modal já existe para o tipo especificado, para não criar duplicado
    if (document.getElementById(modalId)) return;

    // Cria o container do modal
    const modal = document.createElement("div");
    modal.id = modalId;
    modal.className = `modal modal-${type}`;
    modal.style.display = "none"; // Inicialmente escondido

    // Cria o botão de fechar
    const closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = () => closeModal(type);

    // Cria a imagem do modal
    const modalImg = document.createElement("img");
    modalImg.id = `modalImage-${type}`;
    modalImg.className = "modal-content";
    modalImg.alt = "Imagem em destaque";

    // Cria o caption
    const caption = document.createElement("div");
    caption.id = `caption-${type}`;
    caption.className = "caption";

    // Adiciona os elementos ao modal
    modal.appendChild(closeButton);
    modal.appendChild(modalImg);
    modal.appendChild(caption);

    // Adiciona o modal ao body
    document.body.appendChild(modal);
}

// Função para abrir o modal, diferenciando entre imagem vertical e horizontal
function openModal(imageId, type) {
    createModal(type); // Garante que o modal existe para o tipo certo

    const modal = document.getElementById(`modal-${type}`);
    const modalImg = document.getElementById(`modalImage-${type}`);
    const captionText = document.getElementById(`caption-${type}`);

    const photoElement = document.querySelector(`[data-id="${imageId}"][data-type="${type}"]`);
    if (photoElement) {
        modal.style.display = "flex";
        modalImg.src = photoElement.src;
        captionText.innerText = photoElement.alt || "Imagem sem descrição";
    }
}

// Função para fechar o modal
function closeModal(type) {
    const modal = document.getElementById(`modal-${type}`);
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
    border-radius: 8px;
    max-width: 100%;
    height: auto;
}

/* Estilos específicos para imagens horizontais */
.modal-horizontal .modal-content {
    width: 80%;
    max-width: 900px;
}

/* Estilos específicos para imagens verticais */
.modal-vertical .modal-content {
    width: 40%;
    max-width: 400px;
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

.caption {
    color: white;
    text-align: center;
    margin-top: 12px;
    font-size: 14px;
}
`;
document.head.appendChild(style);

// Adiciona eventos às imagens automaticamente
document.querySelectorAll('.horizontal, .vertical').forEach(img => {
    const id = img.src.split('/').pop().split('.')[0]; // Obtém o nome do arquivo sem extensão
    const type = img.classList.contains('horizontal') ? 'horizontal' : 'vertical';
    img.setAttribute('data-id', id);
    img.setAttribute('data-type', type);

    // Usando addEventListener para evitar conflitos de escopo
    img.addEventListener('click', () => openModal(id, type));
});

document.querySelectorAll('.vertical').forEach(img => {
    // Obtém o nome do arquivo da imagem (sem a extensão)
    const id = img.src.split('/').pop().split('.')[0]; // Ex: 'image01', 'image02', etc.

    // Atribui o ID à imagem
    img.setAttribute('id', id);

    // Atribui os dados para uso no modal
    img.setAttribute('data-id', id);
    img.setAttribute('data-type', 'vertical'); // Já sabemos que são imagens verticais
});
