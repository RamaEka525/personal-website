document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const boxes = document.querySelectorAll(".box");
    const burgerIcon = document.querySelector(".burger-icon");
    const menuList = document.querySelector(".menu-list");
    const navLinks = document.querySelectorAll(".nav-link");
    const observerOptions = {
        threshold: 0.1
    };
    
    burgerIcon.addEventListener("click", () => {
        menuList.classList.toggle("active");
    });
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuList.classList.remove("active");
        });
    });
    
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
});
