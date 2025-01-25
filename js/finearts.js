var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var legendaText = document.getElementById("legenda");

// Função para abrir o modal
function openModal(imageElement) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var legendaText = document.getElementById("legenda");

    // Define a imagem da modal
    modal.style.display = "block";
    modalImage.src = imageElement.src;

    // Adiciona a legenda da imagem
    captionText.innerHTML = imageElement.alt;  // Se você usa alt para descrição, ele exibe isso como título
    legendaText.innerHTML = imageElement.dataset.legenda || "Sem legenda";  // Se houver uma legenda definida no atributo data-legenda
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// Atribuindo evento de clique para abrir o modal
var images = document.querySelectorAll('.grid-photos img');
images.forEach((img) => {
    img.addEventListener('click', () => openModal(img));
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.close').addEventListener('click', closeModal);
});
