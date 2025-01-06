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

document.addEventListener("DOMContentLoaded", function() {
    showSlideCarousel(slideIndexCarousel);
    showSlideFinePrints(slideIndexFinePrints);
});
