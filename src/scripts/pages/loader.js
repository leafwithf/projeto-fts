document.addEventListener('DOMContentLoaded', async () => {
    const loader = document.querySelector('.loader-container');
    const content = document.getElementById('content');
    const gallery = document.getElementById('gallery-container');

    // 1. Mostra o loader e prepara o conteúdo
    loader.style.display = 'flex';
    content.style.opacity = '0';
    content.style.display = 'none';

    try {
        // 2. Busca as imagens da API
        const images = await Gallery.fetchGalleryImages();
        const fineArtsImages = images.filter(img => img.public_id.includes('finearts/'));

        if (fineArtsImages.length === 0) {
            throw new Error('Nenhuma imagem encontrada na galeria.');
        }

        // 3. Renderiza todas as imagens (inicialmente invisíveis)
        gallery.innerHTML = fineArtsImages.map(img => `
            <div class="grid-item" style="opacity: 0; transition: opacity 0.5s ease-in-out;">
                <img src="${img.secure_url || img.url}" 
                     alt="${img.public_id.split('/').pop().replace(/\.[^/.]+$/, '')}" 
                     class="gallery-image"
                     onload="this.parentNode.style.opacity = '1'" 
                     onclick="openModal(this)"
                     onerror="this.parentNode.style.opacity = '1'"> <!-- Caso a imagem falhe -->
            </div>
        `).join('');

        // 4. Tempo MÍNIMO do loader (3 segundos)
        await new Promise(resolve => setTimeout(resolve, 3000));

        // 5. Esconde o loader (as imagens já estão aparecendo progressivamente)
        fadeOutLoader(loader, content);

    } catch (error) {
        handleGalleryError(error, loader, gallery);
    }
});

// --- Funções Auxiliares ---
function fadeOutLoader(loader, content) {
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
        setTimeout(() => content.style.opacity = '1', 20);
    }, 500); // Animação de fade
}

function handleGalleryError(error, loader, gallery) {
    console.error('Erro na galeria:', error);
    loader.style.display = 'none';
    gallery.innerHTML = `
        <div class="error">
            <p>Erro ao carregar a galeria</p>
            <small>${error.message}</small>
            <button onclick="location.reload()">Tentar novamente</button>
        </div>
    `;
}