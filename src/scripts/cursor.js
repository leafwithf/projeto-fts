document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("inkCanvas");
    const ctx = canvas.getContext("2d");
  
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
  
    const trail = [];
    const TRAIL_LENGTH = 30;
  
    const cursor = { x: width / 2, y: height / 2 };
    const target = { x: width / 2, y: height / 2 };
  
    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  
    document.addEventListener("mousemove", (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    });
  
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      trail.push({ x: cursor.x, y: cursor.y });
    }
  
    function draw() {
      ctx.clearRect(0, 0, width, height);
  
      cursor.x += (target.x - cursor.x) * 0.2;
      cursor.y += (target.y - cursor.y) * 0.2;
  
      trail.push({ x: cursor.x, y: cursor.y });
      if (trail.length > TRAIL_LENGTH) trail.shift();
  
      for (let i = 0; i < trail.length; i++) {
        const p = trail[i];
        const progress = i / trail.length;
        const radius = 2 + 8 * progress;
  
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(50, 50, 50, 1)";
        ctx.fill();
      }
  
      requestAnimationFrame(draw);
    }
  
    draw();
  });
  