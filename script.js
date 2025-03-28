const container = document.getElementById("cubecontainer");
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];

const minimum = 3;
const maximum = 10;
const count = minimum + Math.floor(Math.random() * (maximum - minimum + 1));

for (let i = 0; i < count; i++) {
    const cube = document.createElement("div");
    cube.className = "cube";

    cube.innerHTML = `
        <div class="left face"></div>
        <div class="right face"></div>
        <div class="top face"></div>
        <div class="bottom face"></div>
        <div class="front face" ></div>
        <div class="back face"></div>`;

    cube.style.setProperty('--cube-color', colors[Math.floor(Math.random() * colors.length)]);

    const ranSpeed = 5 + Math.random() * 5; 
    cube.style.animationDuration = `${ranSpeed}s`;

    container.appendChild(cube);
}

