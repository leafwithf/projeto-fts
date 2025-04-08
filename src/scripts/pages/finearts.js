document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var legendaText = document.getElementById("legenda"); // Agora o 'legenda' usará o alt
    var closeBtn = document.querySelector('.close');
    var images = document.querySelectorAll('.grid-photos img');

    // Garante que o modal fique oculto ao carregar a página
    modal.style.display = "none";

    // Abre o modal ao clicar na imagem
    function openModal(imageElement) {
        modal.style.display = "block";
        modalImg.src = imageElement.src;
        legendaText.innerHTML = imageElement.getAttribute('alt') || "Sem descrição"; // Usa o alt como legenda

        // Move a legenda para logo abaixo da imagem no modal
        modalImg.insertAdjacentElement('afterend', legendaText);
    }

    // Fecha o modal ao clicar no botão de fechar ou fora da imagem
    function closeModal() {
        modal.style.display = "none";
    }

    // Adiciona evento de clique às imagens da galeria
    images.forEach(img => {
        img.addEventListener('click', function() {
            openModal(img);
        });
    });

    // Fecha o modal ao clicar fora da imagem
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
});
