document.addEventListener("DOMContentLoaded", () => {
    // Select all elements that should fade in
    const faders = document.querySelectorAll('.fade-in');

    // Options for the IntersectionObserver
    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };

    // IntersectionObserver to handle when elements come into view
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // Observe each element that should fade in
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const socialIcons = document.querySelectorAll("footer .social-icons li a");
    socialIcons.forEach(icon => {
        if (!icon.offsetParent) {
            console.warn("Footer icon is not visible:", icon);
            icon.style.display = "inline-block"; // Ensure the icon is displayed
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.querySelector('.projects-grid');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(projectsGrid);
});
