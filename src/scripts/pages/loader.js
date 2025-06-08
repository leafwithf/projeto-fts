document.addEventListener("DOMContentLoaded", async () => {
    const loader = document.querySelector(".loader-container");
    const content = document.getElementById("content");
    const gallery = document.getElementById("gallery-container");

    // 1. Mostra o loader e prepara o conteúdo
    loader.style.display = "flex";
    content.style.opacity = "0";
    content.style.display = "none";

    try {
        // 2. Busca as imagens da API
        const images = await Gallery.fetchGalleryImages();
        const fineArtsImages = images.filter(img => img.public_id.includes("finearts/"));

        if (fineArtsImages.length === 0) {
            throw new Error("Nenhuma imagem encontrada na galeria.");
        }

        // 3. Renderiza todas as imagens e espera o carregamento completo
        const imagesLoadedPromise = Gallery.renderGallery(images);

        // 4. Tempo MÍNIMO do loader (3 segundos)
        const minLoaderTimePromise = new Promise(resolve => setTimeout(resolve, 3000));

        // Espera ambas as promessas serem resolvidas
        await Promise.all([imagesLoadedPromise, minLoaderTimePromise]);

        // 5. Esconde o loader
        fadeOutLoader(loader, content);

    } catch (error) {
        handleGalleryError(error, loader, gallery);
    }
});

// --- Funções Auxiliares ---
function fadeOutLoader(loader, content) {
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
        setTimeout(() => content.style.opacity = "1", 20);
    }, 500); // Animação de fade
}

function handleGalleryError(error, loader, gallery) {
    console.error("Erro na galeria:", error);
    loader.style.display = "none";
    gallery.innerHTML = `
        <div class="error">
            <p>Erro ao carregar a galeria</p>
            <small>${error.message}</small>
            <button onclick="location.reload()">Tentar novamente</button>
        </div>
    `;
}

