const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const loginContainer = {
    x: (canvas.width - 400) / 2,
    y: (canvas.height - 500) / 2,
    width: 400,
    height: 500,
};

const margin = 250; // Aumentamos a margem para 250 pixels
const colors = ['#CC0733', '#5B0F2F', '#DB1100', '#8D270F', '#120601', '#F26F5F', '#F2770F'];
const bubbles = [];

function createBubbles() {
    for (let i = 0; i < 100; i++) {
        let x, y, radius;

        do {
            x = Math.random() * canvas.width;
            y = Math.random() * canvas.height;
            radius = Math.random() * 70;  // Reduzimos o tamanho máximo das bolhas para 50
        } while (
            x + radius > loginContainer.x - margin &&
            x - radius < loginContainer.x + loginContainer.width + margin &&
            y + radius > loginContainer.y - margin &&
            y - radius < loginContainer.y + loginContainer.height + margin
        );

        const color = colors[Math.floor(Math.random() * colors.length)];
        const speedX = (Math.random() - 0.5) * 0.3;  // Velocidade horizontal reduzida
        const speedY = (Math.random() - 0.5) * 0.3;  // Velocidade vertical reduzida

        bubbles.push({ x, y, radius, color, speedX, speedY });
    }
}

function drawBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bubbles.forEach(bubble => {
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;

        if (bubble.x - bubble.radius < 0 || bubble.x + bubble.radius > canvas.width) {
            bubble.speedX *= -1;
        }
        if (bubble.y - bubble.radius < 0 || bubble.y + bubble.radius > canvas.height) {
            bubble.speedY *= -1;
        }

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color;
        ctx.fill();
    });

    requestAnimationFrame(drawBackground);
}

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    bubbles.length = 0;
    createBubbles();
});

createBubbles();
drawBackground();
