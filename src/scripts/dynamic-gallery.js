document.addEventListener('DOMContentLoaded', async () => {
  const gallery = document.getElementById('gallery-container');
  
  const API_URL = window.location.hostname === 'localhost' 
    ? '/api/.netlify/functions/get-cloudinary-images'
    : '/.netlify/functions/get-cloudinary-images';

  try {
    const response = await fetch(API_URL);
    
    let images = [];
    
    if (response.ok) {
      const data = await response.json();
      images = data.resources || [];
    } else {
      const mockResponse = await fetch('/mock-images.json');
      images = await mockResponse.json();
    }

    const fineArtsImages = images.filter(img => 
      img.public_id.includes('finearts/')
    );

    if (fineArtsImages.length === 0) {
      throw new Error('Nenhuma imagem encontrada na pasta finearts');
    }

    gallery.innerHTML = fineArtsImages.map(img => `
      <div class="grid-item">
        <img src="${img.secure_url || img.url}" 
             alt="${img.public_id.split('/').pop().replace(/\.[^/.]+$/, '')}" 
             class="gallery-image"
             onclick="openModal(this)">
      </div>
    `).join('');

  } catch (error) {
    console.error('Erro ao carregar galeria:', error);
    gallery.innerHTML = `
      <div class="error">
        <p>Erro ao carregar galeria</p>
        <small>${error.message}</small>
        <button onclick="location.reload()">Recarregar</button>
      </div>
    `;
  }
});

window.openModal = function(imgElement) {
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('img01');
  const captionText = document.getElementById('caption');
  
  modal.style.display = "block";
  modalImg.src = imgElement.src;
  captionText.innerHTML = imgElement.alt;
  
  document.getElementById('closeModalIcon').onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
};