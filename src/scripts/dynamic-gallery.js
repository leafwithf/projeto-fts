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

  gallery.innerHTML = fineArtsImages.map(img => `
      <div class="grid-item">
          <img src="${img.secure_url || img.url}" 
               alt=""  <!-- Removido o texto alternativo -->
               class="gallery-image"
               onclick="openModal(this)">
      </div>
  `).join('');

  return fineArtsImages.length;
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