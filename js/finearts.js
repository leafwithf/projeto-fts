function openModal(imageId) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    // Defina a imagem e o texto do modal com base no ID da imagem clicada
    const photoElement = document.querySelector(`[onclick="openModal('${imageId}')"]`);
    const imgElement = photoElement.querySelector("img");
    const caption = photoElement.querySelector("p").innerText;

    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    captionText.innerText = caption;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
