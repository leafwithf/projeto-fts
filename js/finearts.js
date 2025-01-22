function openModal(imageId) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    // Encontra a imagem clicada com base no ID
    const photoElement = document.querySelector(`[onclick="openModal('${imageId}')"]`);

    if (photoElement) {
        modal.style.display = "flex";
        modalImg.src = photoElement.src; // Define a fonte da imagem no modal
        captionText.innerText = photoElement.alt; // Define o texto do caption
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
