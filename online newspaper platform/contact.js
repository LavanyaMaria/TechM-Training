document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Hide the form after submission
        this.style.display = "none";

        // Show the thank you message
        const message = document.getElementById("success-message");
    message.classList.remove("d-none");
    message.classList.add("show");
    });
});
