// ========================================
// LOAD RESUME DATA
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const resumeData = JSON.parse(localStorage.getItem("resumeData"));

    if (!resumeData) {
        alert("No Resume Data Found!");
        window.location.href = "form.html";
        return;
    }

    // =============================
    // PERSONAL INFORMATION
    // =============================

    document.getElementById("fullName").textContent =
        resumeData.name || "Your Name";

    document.getElementById("email").textContent =
        resumeData.email || "";

    document.getElementById("phone").textContent =
        resumeData.phone || "";

    document.getElementById("address").textContent =
        resumeData.address || "";

    document.getElementById("linkedin").textContent =
        resumeData.linkedin || "";

    document.getElementById("github").textContent =
        resumeData.github || "";

    document.getElementById("objective").textContent =
        resumeData.objective || "";

    // =============================
    // PROFILE IMAGE
    // =============================

    const image = localStorage.getItem("profileImage");

    if (image) {

        document.getElementById("profileImage").src = image;

    }

});

// ========================================
// PRINT RESUME
// ========================================

function downloadResume(){

    window.print();

}

// ========================================
// GO BACK
// ========================================

function editResume(){

    window.location.href="form.html";

}