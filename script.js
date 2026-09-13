/* =========================================================
   CYBERSECURITY PORTFOLIO
   script.js
========================================================= */


/* =========================================================
   SCROLL PROGRESS
========================================================= */

const progressBar =
    document.getElementById("progress-bar");


window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    if (documentHeight <= 0) {
        return;
    }

    const progress =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width =
        `${progress}%`;

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
    revealSections,
    { passive: true }
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


if (typingElement) {

    const originalText =
        typingElement.textContent.trim();

    typingElement.textContent = "";

    let characterIndex = 0;


    function typeText() {

        if (
            characterIndex <
            originalText.length
        ) {

            typingElement.textContent +=
                originalText.charAt(characterIndex);

            characterIndex++;

            setTimeout(
                typeText,
                35
            );

        } else {

            /* Add blinking cursor after typing */

            typingElement.classList.add(
                "typing-complete"
            );

        }

    }


    window.addEventListener("load", () => {

        setTimeout(
            typeText,
            800
        );

    });

}


/* =========================================================
   NAVBAR ACTIVE SECTION
========================================================= */

const navLinks =
    document.querySelectorAll("nav a");


const observedSections =
    document.querySelectorAll(
        "section[id]"
    );


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");

                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                        if (
                            link.getAttribute("href") ===
                            `#${currentId}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                }

            });

        },

        {
            threshold: 0.35
        }

    );


observedSections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================================================
   TERMINAL COMMAND EFFECT
========================================================= */

const terminal =
    document.querySelector(
        ".terminal-window"
    );


if (terminal) {

    terminal.addEventListener(
        "mouseenter",
        () => {

            terminal.classList.add(
                "terminal-active"
            );

        }
    );


    terminal.addEventListener(
        "mouseleave",
        () => {

            terminal.classList.remove(
                "terminal-active"
            );

        }
    );

}


/* =========================================================
   SECURITY STATUS
========================================================= */

const statusDot =
    document.querySelector(
        ".status-dot"
    );


if (statusDot) {

    setInterval(() => {

        statusDot.classList.toggle(
            "status-pulse"
        );

    }, 1500);

}


/* =========================================================
   PROJECT CARD INTERACTION
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.classList.add(
                "security-active"
            );

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.classList.remove(
                "security-active"
            );

        }
    );

});


/* =========================================================
   SECURITY LAB STATUS
========================================================= */

const labItems =
    document.querySelectorAll(
        ".lab-item"
    );


labItems.forEach(item => {

    item.addEventListener(
        "mouseenter",
        () => {

            const status =
                item.querySelector(
                    ".lab-status"
                );

            if (status) {

                status.textContent =
                    "ACTIVE";

            }

        }
    );


    item.addEventListener(
        "mouseleave",
        () => {

            const status =
                item.querySelector(
                    ".lab-status"
                );

            if (status) {

                status.textContent =
                    "LEARNING";

            }

        }
    );

});


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                !targetId.startsWith("#")
            ) {
                return;
            }

            const target =
                document.querySelector(
                    targetId
                );

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =========================================================
   SECURITY CONSOLE MESSAGE
========================================================= */

console.log(
    "%cASHWIN V G",
    "font-size: 20px; font-weight: bold;"
);

console.log(
    "%cCybersecurity Portfolio",
    "font-size: 13px;"
);

console.log(
    "%cSystem initialized successfully.",
    "font-size: 12px;"
);

console.log(
    "%c[STATUS] ONLINE",
    "font-size: 12px;"
);
