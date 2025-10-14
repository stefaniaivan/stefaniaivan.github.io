const text = "Hello, my name is Stefania Ivan";
const textElement = document.getElementById('text');

text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${index * 0.05}s`;
    
    if (index >= 11) {
        span.classList.add('bold');
    }
    
    textElement.appendChild(span);
});

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
});

window.addEventListener('load', () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 250;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
});

