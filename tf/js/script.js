document.addEventListener("DOMContentLoaded", function () {
    // Código para navegación en index.html
    const banner = document.querySelector("#banner");
    const features = document.querySelector("#features");
    const about = document.querySelector("#about");
    const contact = document.querySelector("#contact");

    if (banner) {
        banner.addEventListener("click", (b) => {
            b.preventDefault();
            const sectionB = document.querySelector(".banner");
            sectionB.scrollIntoView({ behavior: "smooth" });
        });
    }

    if (features) {
        features.addEventListener("click", (f) => {
            f.preventDefault();
            const sectionF = document.querySelector(".features");
            sectionF.scrollIntoView({ behavior: "smooth" });
        });
    }

    if (about) {
        about.addEventListener("click", (a) => {
            a.preventDefault();
            const sectionA = document.querySelector(".about");
            sectionA.scrollIntoView({ behavior: "smooth" });
        });
    }

    if (contact) {
        contact.addEventListener("click", (c) => {
            c.preventDefault();
            const sectionC = document.querySelector(".contact");
            sectionC.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Formulario de contacto en index.html
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        const confirmationMessage = document.getElementById("confirmationMessage");

        function validateField(field, errorContainer, message) {
            if (!field.checkValidity()) {
                errorContainer.textContent = message;
                field.classList.add("invalid");
                return false;
            } else {
                errorContainer.textContent = "";
                field.classList.remove("invalid");
                return true;
            }
        }

        function validateForm() {
            let isValid = true;

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const subject = document.getElementById("subject");
            const message = document.getElementById("message");

            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const subjectError = document.getElementById("subjectError");
            const messageError = document.getElementById("messageError");

            isValid &= validateField(name, nameError, "El nombre es obligatorio.");
            isValid &= validateField(email, emailError, "Introduce un correo válido.");
            isValid &= validateField(subject, subjectError, "El asunto es obligatorio.");
            isValid &= validateField(message, messageError, "El mensaje no puede estar vacío.");

            return isValid;
        }

        contactForm.addEventListener("submit", function (event) {
            if (!validateForm()) {
                event.preventDefault();
            } else {
                event.preventDefault();
                confirmationMessage.style.display = "block";
                contactForm.reset();
                setTimeout(() => {
                    confirmationMessage.style.display = "none";
                }, 5000);
            }
        });
    }

    // Formulario de login en login.html
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        const errorMessage = document.getElementById("errorMessage");
        const confirmationMessage = document.getElementById("confirmationMessage");

        const validCredentials = {
            username: "admin",
            password: "1234"
        };

        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (!username || !password) {
                errorMessage.textContent = "Por favor, completa todos los campos.";
                errorMessage.style.display = "block";
                confirmationMessage.style.display = "none";
                return;
            }

            if (username === validCredentials.username && password === validCredentials.password) {
                errorMessage.style.display = "none";
                confirmationMessage.style.display = "block";

                setTimeout(() => {
                    window.location.href = "index.html";
                }, 2000);
            } else {
                errorMessage.textContent = "Usuario o contraseña incorrectos.";
                errorMessage.style.display = "block";
                confirmationMessage.style.display = "none";
            }
        });
    }
});
