/* =========================================================
   ASHWIN V G
   CYBERSECURITY PORTFOLIO
   script.js
========================================================= */


/* =========================================================
   SCROLL PROGRESS
========================================================= */

const progressBar =
    document.getElementById("progress-bar");


function updateProgress() {

    if (!progressBar) {
        return;
    }

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

}


window.addEventListener(
    "scroll",
    updateProgress,
    { passive: true }
);

updateProgress();


/* =========================================================
   SECTION REVEAL
========================================================= */

const sections =
    document.querySelectorAll(".fade-section");


function revealSections() {

    const windowHeight =
        window.innerHeight;

    sections.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 80) {

            section.classList.add(
                "visible"
            );

        }

    });

}


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
   TERMINAL TYPING
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
                originalText.charAt(
                    characterIndex
                );

            characterIndex++;

            setTimeout(
                typeText,
                35
            );

        } else {

            typingElement.classList.add(
                "typing-complete"
            );

        }

    }


    window.addEventListener(
        "load",
        () => {

            setTimeout(
                typeText,
                800
            );

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const navLinks =
    document.querySelectorAll(
        "nav a"
    );


const pageSections =
    document.querySelectorAll(
        "section[id]"
    );


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                const id =
                    entry.target.getAttribute(
                        "id"
                    );

                navLinks.forEach(link => {

                    link.classList.remove(
                        "active"
                    );

                    if (
                        link.getAttribute(
                            "href"
                        ) === `#${id}`
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                });

            });

        },

        {
            threshold: 0.35
        }

    );


pageSections.forEach(section => {

    sectionObserver.observe(
        section
    );

});


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const href =
                link.getAttribute(
                    "href"
                );

            if (
                !href ||
                !href.startsWith("#")
            ) {
                return;
            }

            const target =
                document.querySelector(
                    href
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
   TERMINAL INTERACTION
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
   SYSTEM STATUS
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
   SECURITY LAB INTERACTION
========================================================= */

const labItems =
    document.querySelectorAll(
        ".lab-item"
    );


labItems.forEach(item => {

    const status =
        item.querySelector(
            ".lab-status"
        );


    if (!status) {
        return;
    }


    const originalStatus =
        status.textContent;


    item.addEventListener(
        "mouseenter",
        () => {

            status.textContent =
                "ACTIVE";

        }
    );


    item.addEventListener(
        "mouseleave",
        () => {

            status.textContent =
                originalStatus;

        }
    );

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%cASHWIN V G",
    "font-size: 20px; font-weight: 700;"
);

console.log(
    "%cCybersecurity Portfolio",
    "font-size: 13px;"
);

console.log(
    "%c[ SYSTEM ] ONLINE",
    "font-size: 12px;"
);

console.log(
    "%c[ MODE ] DEFENSIVE",
    "font-size: 12px;"
);
