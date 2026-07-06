const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (name === "" || email === "" || message === "") {
            messageBox.style.color = "red";
            messageBox.textContent = "Please fill in all fields.";
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            messageBox.style.color = "red";
            messageBox.textContent = "Please enter a valid email.";
            return;
        }

        // Success
        messageBox.style.color = "lightgreen";
        messageBox.textContent = "Message sent successfully!";

        form.reset();
    });
}