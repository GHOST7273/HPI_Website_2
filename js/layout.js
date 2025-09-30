// Section fade-in on scroll
(function() {
    const faders = document.querySelectorAll('.fade-in');
    if (faders.length === 0) return;
    const appearOptions = { threshold: 0.1 };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);
    faders.forEach(fader => appearOnScroll.observe(fader));
})();

// Accordion/expandable sections
(function() {
    document.querySelectorAll('.accordion-header').forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.parentElement;
            item.classList.toggle('active');
        });
    });
})();

// Smooth scroll for anchor links
(function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})(); 