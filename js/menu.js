document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const productDropdown = document.querySelector('nav ul li.dropdown');
    const productButton = document.querySelector('nav ul li .dropbtn');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = menuToggle && menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            if (productDropdown) productDropdown.classList.remove('open');
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
            if (productDropdown) productDropdown.classList.remove('open');
        });
    });

    // Mobile: tap-to-toggle Products submenu (prevent immediate navigation)
    if (productButton && productDropdown) {
        productButton.addEventListener('click', function(e) {
            if (window.matchMedia('(max-width: 768px)').matches) {
                e.preventDefault();
                productDropdown.classList.toggle('open');
            }
        });
    }
}); 