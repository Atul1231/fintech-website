document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll('.story-section .reveal'); 

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, {
        threshold: 0.2  });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});

