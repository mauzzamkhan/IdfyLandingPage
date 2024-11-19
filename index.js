// Add scroll event listener to handle navbar background change
document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


const testimonials = document.querySelectorAll('.testimonial');
let current = 0;

function showNextTestimonial() {
    // Hide current testimonial
    testimonials[current].classList.remove('active');

    // Move to the next testimonial
    current = (current + 1) % testimonials.length;

    // Show the next testimonial
    testimonials[current].classList.add('active');
}

// Change testimonial every 5 seconds
document.addEventListener('DOMContentLoaded', () => {
    setInterval(showNextTestimonial, 4000);
}); 