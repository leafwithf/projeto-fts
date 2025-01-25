// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var legendaText = document.getElementById("legenda");
    var closeBtn = document.querySelector('.close');
    var images = document.querySelectorAll('.grid-photos');

    // Garante que o modal fique oculto ao carregar a página
    modal.style.display = "none";

    // Abre o modal ao clicar na imagem
    function openModal(imageElement) {
        modal.style.display = "block";
        modalImg.src = imageElement.src;
        captionText.innerHTML = imageElement.alt || "Sem descrição";
        legendaText.innerHTML = imageElement.dataset.legenda || "Sem legenda";
    }

    // Fecha o modal ao clicar no botão de fechar ou fora da imagem
    function closeModal() {
        modal.style.display = "none";
    }

    // Adiciona evento de clique às imagens da galeria
    if (images.length > 0) {
        images.forEach((img) => {
            img.addEventListener('click', function() {
                openModal(img);
            });
        });
    } else {
        console.error("Nenhuma imagem encontrada com a classe 'grid-photo'.");
    }

    // Adiciona evento de clique no botão de fechar
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    } else {
        console.error("Botão de fechar não encontrado!");
    }

    // Fecha o modal ao clicar fora da imagem
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});





// Função para filtrar categorias
function filterCategory(category) {
    const images = document.querySelectorAll('.image img'); // Seleciona todas as imagens dentro das divs .image

    // Itera pelas imagens e aplica o filtro
    images.forEach(image => {
        // Obtém o valor do data-category da imagem
        const imageCategory = image.getAttribute('data-category');

        if (category === 'todas') {
            image.parentElement.classList.remove('hidden'); // Exibe todas as imagens
        } else {
            // Verifica se a imagem pertence à categoria selecionada
            if (imageCategory === category) {
                image.parentElement.classList.remove('hidden'); // Exibe a imagem
            } else {
                image.parentElement.classList.add('hidden'); // Esconde a imagem
            }
        }
    });
}
        // Função para alternar a visibilidade do filtro
        function toggleFiltro() {
            var filtro = document.getElementById('filtro');
            var display = filtro.style.display;
    
            if (display === 'none' || display === '') {
                filtro.style.display = 'block';  // Mostra o filtro
            } else {
                filtro.style.display = 'none';  // Oculta o filtro
            }
        }
    
        // Função que pode ser usada para aplicar filtros (lógica adicional)
        function aplicarFiltros() {
            // Aqui você pode implementar a lógica para aplicar os filtros escolhidos
            var categoria = document.getElementById('categoria').value;
            var preco = document.getElementById('preco').value;
            alert("Filtros aplicados: Categoria - " + categoria + ", Preço - " + preco);
        }
    
        function toggleCatalogo() {
            var catalogoMenu = document.getElementById('catalogo-menu');
            catalogoMenu.classList.toggle('open'); // Adiciona ou remove a classe 'open'
        }
        function filterGallery(category) {
            let items = document.querySelectorAll('.gallery-item');
        
            items.forEach(item => {
                // Oculta todas as imagens primeiro
                if (category === 'all') {
                    item.classList.remove('hidden');
                } else {
                    if (item.classList.contains(category)) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        }
        function toggleCatalogo() {
            var catalogoMenu = document.getElementById('catalogo-menu');
            var catalogoToggle = document.getElementById('catalogo-toggle');
    
            if (catalogoMenu.classList.contains('open')) {
                catalogoMenu.classList.remove('open');
                catalogoMenu.setAttribute('aria-hidden', 'true');
                catalogoToggle.setAttribute('aria-expanded', 'false');
            } else {
                catalogoMenu.classList.add('open');
                catalogoMenu.setAttribute('aria-hidden', 'false');
                catalogoToggle.setAttribute('aria-expanded', 'true');
            }
        }                
    document.addEventListener("DOMContentLoaded", function() {
        const params = new URLSearchParams(window.location.search);
        const categoria = params.get("categoria");

        if (categoria) {
            const images = document.querySelectorAll('.image');
            images.forEach(img => {
                if (!img.classList.contains(categoria)) {
                    img.classList.add('hidden');
                } else {
                    img.classList.remove('hidden');
                }
            });
        }
    });
