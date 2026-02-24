// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll("section");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// INITIAL STYLE
revealElements.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});