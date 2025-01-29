document.addEventListener("DOMContentLoaded", function () {
    // Carousel 1 (com classe "carousel-slide")
    let slideIndexCarousel = 0;
    let slideIntervalCarousel = setInterval(nextSlideCarousel, 5000);

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

    // Carousel 2 (com classe "fineart")
    const fineartSlides = document.querySelectorAll(".fineart");
    let currentIndex = 0;

    function showFineartSlide(index) {
        fineartSlides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextFineartSlide() {
        currentIndex = (currentIndex + 1) % fineartSlides.length;
        showFineartSlide(currentIndex);
    }

    // Mostrar a primeira imagem do fineart ao iniciar
    showFineartSlide(currentIndex);

    // Mudar de imagem do fineart a cada 3 segundos
    setInterval(nextFineartSlide, 3000);
});
