document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const closeBtn = document.getElementById("closeBtn");
    const images = document.querySelectorAll('.grid-photos img');

    modal.style.display = "none";

    function openModal(imageElement) {
        modal.style.display = "block";
        modalImg.src = imageElement.src;
    }

    images.forEach(img => {
        img.addEventListener('click', function () {
            openModal(img);
        });
    });

    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
