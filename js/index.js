let slideIndexCarousel = 0;
let slideIntervalCarousel = setInterval(nextSlideCarousel, 5000); 

let slideIndexFinePrints = 0;
let slideIntervalFinePrints = setInterval(nextSlideFinePrints, 5000); 

function showSlideCarousel(index) {
    const slides = document.getElementsByClassName("carousel-slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndexCarousel = index;
    if (slideIndexCarousel >= slides.length) slideIndexCarousel = 0;
    else if (slideIndexCarousel < 0) slideIndexCarousel = slides.length - 1;

    slides[slideIndexCarousel].style.display = "block";
}

function nextSlideCarousel() {
    slideIndexCarousel++;
    const slides = document.getElementsByClassName("carousel-slide");
    if (slideIndexCarousel >= slides.length) {
        slideIndexCarousel = 0;
    }
    showSlideCarousel(slideIndexCarousel);
}

function changeSlideCarousel(direction) {
    clearInterval(slideIntervalCarousel); 
    slideIndexCarousel += direction;
    const slides = document.getElementsByClassName("carousel-slide");
    if (slideIndexCarousel < 0) slideIndexCarousel = slides.length - 1;
    else if (slideIndexCarousel >= slides.length) slideIndexCarousel = 0;

    showSlideCarousel(slideIndexCarousel);
    slideIntervalCarousel = setInterval(nextSlideCarousel, 5000);
}


document.addEventListener("DOMContentLoaded", function() {
    showSlideCarousel(slideIndexCarousel);
    showSlideFinePrints(slideIndexFinePrints);
});
function toggleMenu() {
    const menuItems = document.getElementById("menu-items");
    menuItems.classList.toggle("active");
}
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark-mode');
}

let captionIndex = 0;
let captionInterval = setInterval(nextCaption, 5000); // 8 segundos entre os captions

function showCaption(index) {
    const captions = document.querySelectorAll(".caption");

    // Remove visibilidade de todos os captions
    captions.forEach((caption) => caption.classList.remove("visible"));

    // Atualiza o índice
    captionIndex = index;
    if (captionIndex >= captions.length) captionIndex = 0;
    if (captionIndex < 0) captionIndex = captions.length - 1;

    // Torna o caption atual visível
    captions[captionIndex].classList.add("visible");
}

function nextCaption() {
    captionIndex++;
    showCaption(captionIndex);
}

document.addEventListener("DOMContentLoaded", function () {
    showCaption(captionIndex);
});

function showSlideFinePrints(index) {
    const slides = document.getElementsByClassName("finePrints-slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndexFinePrints = index;
    if (slideIndexFinePrints >= slides.length) slideIndexFinePrints = 0;
    else if (slideIndexFinePrints < 0) slideIndexFinePrints = slides.length - 1;

    slides[slideIndexFinePrints].style.display = "block";
}

function nextSlideFinePrints() {
    slideIndexFinePrints++;
    const slides = document.getElementsByClassName("finePrints-slide");
    if (slideIndexFinePrints >= slides.length) {
        slideIndexFinePrints = 0;
    }
    showSlideFinePrints(slideIndexFinePrints);
}

function changeSlideFinePrints(direction) {
    clearInterval(slideIntervalFinePrints); 
    slideIndexFinePrints += direction;
    const slides = document.getElementsByClassName("finePrints-slide");
    if (slideIndexFinePrints < 0) slideIndexFinePrints = slides.length - 1;
    else if (slideIndexFinePrints >= slides.length) slideIndexFinePrints = 0;

    showSlideFinePrints(slideIndexFinePrints);
    slideIntervalFinePrints = setInterval(nextSlideFinePrints, 5000);
}