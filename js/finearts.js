function openModal(imageId) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    // Seleciona a imagem correspondente ao ID fornecido
    const photoElement = document.querySelector(`[onclick="openModal('${imageId}')"]`);

    if (photoElement) {
        modal.style.display = "flex";
        modalImg.src = photoElement.src; // Define a fonte da imagem no modal
        captionText.innerText = photoElement.alt || "Imagem sem descrição"; // Insere o texto alternativo
    } else {
        console.error("Imagem não encontrada para o ID:", imageId);
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
