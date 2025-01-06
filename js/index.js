function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('active');
}

let slideIndex = 0;
let slideInterval = setInterval(nextSlide, 5000); 

function showSlide(index) {
    const slides = document.getElementsByClassName("carousel-slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex = index;
    if (slideIndex >= slides.length) slideIndex = 0;
    else if (slideIndex < 0) slideIndex = slides.length - 1;

    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= document.getElementsByClassName("carousel-slide").length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function changeSlide(direction) {
    clearInterval(slideInterval); 
    slideIndex += direction;
    if (slideIndex < 0) slideIndex = document.getElementsByClassName("carousel-slide").length - 1;
    else if (slideIndex >= document.getElementsByClassName("carousel-slide").length) slideIndex = 0;

    showSlide(slideIndex);
    slideInterval = setInterval(nextSlide, 5000);
}

document.addEventListener("DOMContentLoaded", function() {
    showSlide(slideIndex);
});
    document.addEventListener("DOMContentLoaded", function() {
        const counters = document.querySelectorAll('.stats-number');
        const speed = 200;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target').replace(/\D/g, '');
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    });
