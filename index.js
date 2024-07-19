const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const body = document.body;
const nav = document.querySelector('nav');
const overlay = document.querySelector('.overlay');
const faqQuestions = document.querySelectorAll('.faq-question');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeToggle.innerHTML = body.classList.contains('dark-theme') 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-lightbulb"></i>';
});

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('no-scroll'); // Toggle no-scroll class on body
});

overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll'); // Ensure scrolling is enabled when menu is closed
});

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
