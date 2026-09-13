/* =========================================================
   SCROLL PROGRESS
========================================================= */

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});


/* =========================================================
   SECTION REVEAL
========================================================= */

const sections =
    document.querySelectorAll(".fade-section");


const revealSections = () => {

    const windowHeight =
        window.innerHeight;

    sections.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {

            section.classList.add("visible");

        }

    });

};


window.addEventListener(
    "scroll",
    revealSections
);

window.addEventListener(
    "load",
    revealSections
);


/* =========================================================
   TERMINAL TYPING EFFECT
========================================================= */

const typingElement =
    document.querySelector(".typing-text");

const originalText =
    typingElement.textContent.trim();

typingElement.textContent = "";

let characterIndex = 0;


function typeText() {

    if (characterIndex < originalText.length) {

        typingElement.textContent +=
            originalText.charAt(characterIndex);

        characterIndex++;

        setTimeout(typeText, 35);

    }

}


window.addEventListener("load", () => {

    setTimeout(typeText, 800);

});
