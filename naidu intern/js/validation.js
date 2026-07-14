// ===================================
// VALIDATION
// ===================================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("resumeForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        if (validateForm()) {

            saveResume();

        }

    });

});

// ===================================
// VALIDATE FORM
// ===================================

function validateForm() {

    let valid = true;

    clearErrors();

    // Name
    const name = document.getElementById("name");

    if (name.value.trim() === "") {

        showError(name, "Name is required");

        valid = false;

    }

    // Email
    const email = document.getElementById("email");

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value)) {

        showError(email, "Enter a valid email");

        valid = false;

    }

    // Phone
    const phone = document.getElementById("phone");

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone.value)) {

        showError(phone, "Enter a valid 10-digit phone number");

        valid = false;

    }

    // Address
    const address = document.getElementById("address");

    if (address.value.trim() === "") {

        showError(address, "Address is required");

        valid = false;

    }

    // Career Objective
    const objective = document.getElementById("objective");

    if (objective.value.trim().length < 30) {

        showError(
            objective,
            "Objective should contain at least 30 characters."
        );

        valid = false;

    }

    return valid;

}

// ===================================
// SHOW ERROR
// ===================================

function showError(input, message) {

    const error = document.createElement("small");

    error.className = "error";

    error.style.color = "red";

    error.style.display = "block";

    error.style.marginTop = "5px";

    error.innerText = message;

    input.parentElement.appendChild(error);

    input.style.border = "2px solid red";

}

// ===================================
// CLEAR ERRORS
// ===================================

function clearErrors() {

    document.querySelectorAll(".error").forEach(error => {

        error.remove();

    });

    document.querySelectorAll("input, textarea").forEach(input => {

        input.style.border = "1px solid #ccc";

    });

}