/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});

/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});

/* ================= FAQ ================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(otherItem => {

            if (otherItem !== item) {

                otherItem.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

const successModal = document.getElementById("successModal");

const closeModal = document.getElementById("closeModal");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const formData = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        support: document.getElementById("support").value,

        message: document.getElementById("message").value,

        date: new Date().toLocaleString()

    };

    /*

        Demo storage:

        Form data is saved only in this browser.

        A real NGO website can later connect this form

        to email, database or backend.

    */

    const existingData =

        JSON.parse(localStorage.getItem("shyamaShreeEnquiries")) || [];

    existingData.push(formData);

    localStorage.setItem(

        "shyamaShreeEnquiries",

        JSON.stringify(existingData)

    );

    successModal.classList.add("show");

    contactForm.reset();

});

/* ================= CLOSE MODAL ================= */

closeModal.addEventListener("click", () => {

    successModal.classList.remove("show");

});

successModal.addEventListener("click", (event) => {

    if (event.target === successModal) {

        successModal.classList.remove("show");

    }

});

/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =

    new Date().getFullYear();

/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(

    ".care-card, .program-grid article, .help-card, .values-grid div, .gallery-item"

);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {

        threshold: 0.12

    }

);

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});