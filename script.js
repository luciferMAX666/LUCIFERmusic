document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links (if needed)
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Card reveal animations on scroll
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Dynamic placeholder fallback for broken images
    const images = document.querySelectorAll('.card img');
    images.forEach(img => {
        img.addEventListener('error', () => {
            img.src = 'https://via.placeholder.com/300x200?text=Image+Unavailable';
        });
    });
});
