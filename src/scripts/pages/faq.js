document.addEventListener("DOMContentLoaded", function () { 
    const questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(question => { 
        question.addEventListener('click', () => { 
            const item = question.parentElement; 
            const icon = question.querySelector('.faq-toggle svg');   

            if (icon) {
                item.classList.toggle('active');
                icon.style.transform = item.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0)';
            }
        });
    });
});
