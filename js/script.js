

document.addEventListener("DOMContentLoaded", () => {

    /* ================= ELEMENTS ================= */

    const navbar = document.querySelector(".navbar");
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const backToTop = document.getElementById("backToTop");
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");


    /* ================= MOBILE MENU ================= */

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("open");
            document.body.classList.toggle("menu-open");

            const icon = menuToggle.querySelector("i");

            if (navMenu.classList.contains("open")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        /* Close menu after clicking a navigation link */

        navMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");
                document.body.classList.remove("menu-open");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /* ================= NAVBAR SCROLL ================= */

    function handleScroll() {

        if (window.scrollY > 40) {
            navbar?.classList.add("scrolled");
        } else {
            navbar?.classList.remove("scrolled");
        }

        if (window.scrollY > 500) {
            backToTop?.classList.add("show");
        } else {
            backToTop?.classList.remove("show");
        }

    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();


    /* ================= ACTIVE NAVIGATION ================= */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    function updateActiveNavigation() {

        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                navLinks.forEach(link => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav-menu a[href="#${sectionId}"]`
                );

                activeLink?.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateActiveNavigation);

    updateActiveNavigation();


    /* ================= BACK TO TOP ================= */

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(
        ".section-heading, .about-card, .stat-card, " +
        ".service-card, .skill-category, .project-card, " +
        ".timeline-card, .education-card, .achievement-card, " +
        ".contact-info, .contact-form-wrapper"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* ================= CONTACT FORM ================= */

    /*
        This is currently a front-end form.

        To actually send emails, connect this form
        to EmailJS or another email service.

        Required EmailJS values later:

        - Public Key
        - Service ID
        - Template ID
    */


    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            formMessage.className = "form-message";

            /*
                Temporary demo behavior.

                Replace this section with EmailJS
                after configuring your EmailJS account.
            */

            formMessage.textContent =
                "Thanks! Your message is ready to be sent.";

            formMessage.classList.add("success");

        });

    }


    /* ================= INPUT ANIMATION ================= */

    const inputs = document.querySelectorAll(
        ".contact-form input, " +
        ".contact-form textarea, " +
        ".contact-form select"
    );

    inputs.forEach(input => {

        input.addEventListener("focus", () => {
            input.parentElement?.classList.add("focused");
        });

        input.addEventListener("blur", () => {

            if (!input.value.trim()) {
                input.parentElement?.classList.remove("focused");
            }

        });

    });


    /* ================= CURRENT YEAR ================= */

    const footerYear = document.querySelector(
        ".footer-bottom p"
    );

    if (footerYear) {

        footerYear.textContent =
            `© ${new Date().getFullYear()} Rohit Metri Jaywant. All rights reserved.`;

    }


    /* ================= ESCAPE KEY ================= */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            navMenu?.classList.contains("open")
        ) {

            navMenu.classList.remove("open");
            document.body.classList.remove("menu-open");

            const icon = menuToggle?.querySelector("i");

            icon?.classList.remove("fa-xmark");
            icon?.classList.add("fa-bars");

        }

    });


    /* ================= CONSOLE ================= */

    console.log(
        "%cRohit Metri Jaywant",
        "font-size: 20px; font-weight: bold;"
    );

    console.log(
        "%cWeb Developer Portfolio",
        "font-size: 14px;"
    );

});

