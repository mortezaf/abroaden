   // Initialize Vanta.js effect
   VANTA.RINGS({
    el: "#background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200, // Adjusted for full-page coverage
    minWidth: 200, // Adjusted for full-page coverage
    scale: 1.0,
    color: 0x2d2d2d,
    backgroundColor: 0x06172e
});

function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('متن کپی شد: ' + text);
}

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.target;
        tabContents.forEach(tabContent => {
            if (tabContent.id === target) {
                tabContent.classList.remove('hidden');
            } else {
                tabContent.classList.add('hidden');
            }
        });
    });
});


const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question, index) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('hidden');
    });
});

document.querySelectorAll('[data-carousel-next]').forEach(button => {
    button.addEventListener('click', () => {
        const carousel = button.closest('[id="carouselExampleIndicators"]');
        const track = carousel.querySelector('.flex');
        const slides = track.children;
        const currentSlide = track.scrollLeft / (track.scrollWidth / slides.length);
        track.scrollLeft = (currentSlide + 1) * (track.scrollWidth / slides.length);
    });
});

document.querySelectorAll('[data-carousel-prev]').forEach(button => {
    button.addEventListener('click', () => {
        const carousel = button.closest('[id="carouselExampleIndicators"]');
        const track = carousel.querySelector('.flex');
        const slides = track.children;
        const currentSlide = track.scrollLeft / (track.scrollWidth / slides.length);
        track.scrollLeft = (currentSlide - 1) * (track.scrollWidth / slides.length);
    });
});
