document.addEventListener('DOMContentLoaded', () => {
    // JS Interaction 1: Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Horizontal Scroll JS Code for Slider
    const productsGrid = document.getElementById('productsGrid');
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');

    if (leftBtn && rightBtn && productsGrid) {
        leftBtn.addEventListener('click', () => {
            productsGrid.scrollBy({ left: -250, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            productsGrid.scrollBy({ left: 250, behavior: 'smooth' });
        });
    }
});