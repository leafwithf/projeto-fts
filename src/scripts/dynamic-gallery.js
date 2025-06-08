async function fetchGalleryImages() {
  const API_URL = window.location.hostname === 'localhost' 
      ? '/api/.netlify/functions/get-cloudinary-images'
      : '/.netlify/functions/get-cloudinary-images';

  try {
      const response = await fetch(API_URL);
      if (response.ok) {
          const data = await response.json();
          return data.resources || [];
      } else {
          const mockResponse = await fetch('/mock-images.json');
          return await mockResponse.json();
      }
  } catch (error) {
      console.error("Erro ao buscar imagens:", error);
      return [];
  }
}

function renderGallery(images) {
  const gallery = document.getElementById('gallery-container');
  const fineArtsImages = images.filter(img => 
      img.public_id.includes('finearts/')
  );

  if (fineArtsImages.length === 0) {
      throw new Error('Nenhuma imagem encontrada na pasta finearts');
  }

  let loadedImagesCount = 0;
  const totalImages = fineArtsImages.length;

  return new Promise(resolve => {
    gallery.innerHTML = fineArtsImages.map(img => `
        <div class="grid-item" style="opacity: 0; transition: opacity 0.5s ease-in-out;">
            <img src="${img.secure_url || img.url}" 
                 alt="${img.public_id.split('/').pop().replace(/\.[^/.]+$/, '')}" 
                 class="gallery-image"
                 onload="(() => {
                     this.parentNode.style.opacity = '1';
                     window.imageLoaded();
                 })()"
                 onerror="(() => {
                     this.parentNode.style.opacity = '1';
                     window.imageLoaded();
                 })()"
                 onclick="openModal(this)"> 
        </div>
    `).join('');

    window.imageLoaded = () => {
        loadedImagesCount++;
        if (loadedImagesCount === totalImages) {
            resolve();
        }
    };
  });
}

window.openModal = function(imgElement) {
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('img01');
  const captionText = document.getElementById('caption');
  
  modal.style.display = "block";
  modalImg.src = imgElement.src;
  captionText.style.display = "none";  
};

document.getElementById('closeModalIcon')?.addEventListener('click', () => {
  document.getElementById('myModal').style.display = "none";
});

window.onclick = function(event) {
  if (event.target === document.getElementById('myModal')) {
      document.getElementById('myModal').style.display = "none";
  }
};

window.Gallery = {
  fetchGalleryImages,
  renderGallery
};
