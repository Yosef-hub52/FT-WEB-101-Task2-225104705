// Toggle the dark class on the body when the button is clicked.
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// Show a greeting using the name entered in the form.
const contactForm = document.getElementById("contact-form");
const greeting = document.getElementById("greeting");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const visitorName = document.getElementById("name").value.trim();
    greeting.textContent = "Hello, " + visitorName + "! Thanks for visiting my page.";
});
