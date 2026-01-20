const textElement = document.getElementById('typewriter');
const text = "Angelito Tugap";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.innerHTML = text.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 150);
    } else {
        // Optional: Reset or stop animation
        textElement.style.borderRight = "none";
    }
}

// Start animation on load
window.onload = typeWriter;

// Simple Theme Toggle Console Log
document.querySelector('.theme-toggle').addEventListener('click', () => {
    alert("Theme switching logic would go here!");
});