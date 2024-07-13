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
