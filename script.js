document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const boxes = document.querySelectorAll(".box");
    const observerOptions = {
        threshold: 0.1
    };
    
    function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }
    
    const observer = new IntersectionObserver(animateOnScroll, observerOptions);
    boxes.forEach(box => {
        observer.observe(box);
    });

    // Burger Menu for mobile view
    const burgerIcon = document.querySelector(".burger-icon");
    burgerIcon.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});