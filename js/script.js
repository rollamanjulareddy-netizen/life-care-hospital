// ===============================
// LifeCare Hospital JavaScript
// ===============================

// Welcome Message
window.onload = function () {
    console.log("Welcome to LifeCare Hospital Website");
};

// Contact Form
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("✅ Thank you! Your message has been sent successfully.");

        form.reset();
    });
}

// Book Appointment Button
const btn = document.querySelector(".btn");

if (btn) {
    btn.addEventListener("click", function () {
        console.log("Book Appointment button clicked.");
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});