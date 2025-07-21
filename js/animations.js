document.addEventListener('DOMContentLoaded', () => {
    // Scroll-triggered fade-in animation for elements with 'fade-in-element' class
    const fadeInElements = document.querySelectorAll('.fade-in-element');

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // The viewport is the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); // Add class to trigger CSS animation
                observer.unobserve(entry.target); // Stop observing once it's visible (optional, for one-time animation)
            }
        });
    }, observerOptions);

    // Observe each element that needs a fade-in effect
    fadeInElements.forEach(el => {
        observer.observe(el);
    });

    // Subtle Parallax Effect for the Hero Section Background
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            // Get the current scroll position
            const scrollPos = window.scrollY;
            // Adjust the background position based on scroll.
            // Multiplying by a small factor (e.g., 0.3) creates the parallax effect.
            // A higher factor means the background moves faster relative to scroll.
            hero.style.backgroundPositionY = `${-scrollPos * 0.3}px`;
        });
    }

    // You can add more complex animations here, such as:
    // - Element sliding in from sides
    // - Counter animations for statistics
    // - More intricate hover effects
    // These might require additional libraries like GSAP for very smooth and complex timelines.
});
