// ================================
// PROFILE IMAGE PREVIEW
// ================================

const profileImage = document.getElementById("profileImage");
const previewImage = document.getElementById("previewImage");

if (profileImage) {

    profileImage.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {

            const reader = new FileReader();

            reader.onload = function (e) {

                previewImage.src = e.target.result;

                localStorage.setItem(
                    "profileImage",
                    e.target.result
                );

            };

            reader.readAsDataURL(file);

        }

    });

}

// ================================
// PROGRESS BAR
// ================================

const form = document.getElementById("resumeForm");

if (form) {

    const inputs = form.querySelectorAll("input, textarea");

    inputs.forEach(input => {

        input.addEventListener("input", updateProgress);

    });

}

function updateProgress() {

    const inputs = document.querySelectorAll(
        "#resumeForm input, #resumeForm textarea"
    );

    let filled = 0;

    inputs.forEach(input => {

        if (input.value.trim() !== "") {

            filled++;

        }

    });

    const progress =
        Math.round((filled / inputs.length) * 100);

    const bar = document.getElementById("progressBar");

    if (bar) {

        bar.style.width = progress + "%";

    }

}

// ================================
// ADD EDUCATION
// ================================

const addEducation = document.getElementById("addEducation");

if (addEducation) {

    addEducation.addEventListener("click", () => {

        const container =
            document.getElementById("educationContainer");

        const div = document.createElement("div");

        div.className = "card education-item";

        div.innerHTML = `

        <div class="form-grid">

            <div class="input-group">
                <label>College</label>
                <input type="text" name="college[]">
            </div>

            <div class="input-group">
                <label>Degree</label>
                <input type="text" name="degree[]">
            </div>

            <div class="input-group">
                <label>Specialization</label>
                <input type="text" name="specialization[]">
            </div>

            <div class="input-group">
                <label>CGPA</label>
                <input type="text" name="cgpa[]">
            </div>

            <div class="input-group">
                <label>Start Year</label>
                <input type="month" name="startYear[]">
            </div>

            <div class="input-group">
                <label>End Year</label>
                <input type="month" name="endYear[]">
            </div>

        </div>

        <button
            type="button"
            class="remove-btn">

            Remove

        </button>

        `;

        container.appendChild(div);

    });

}

// ================================
// REMOVE CARD
// ================================

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("remove-btn")) {

        e.target.parentElement.remove();

    }

});

// ================================
// ADD EXPERIENCE
// ================================

const experienceBtn =
    document.getElementById("addExperience");

if (experienceBtn) {

    experienceBtn.addEventListener("click", () => {

        const container =
            document.getElementById("experienceContainer");

        const div = document.createElement("div");

        div.className = "card";

        div.innerHTML = `

        <input
        type="text"
        placeholder="Company">

        <br><br>

        <input
        type="text"
        placeholder="Job Role">

        <br><br>

        <textarea
        rows="4"
        placeholder="Job Description"></textarea>

        <br>

        <button
        type="button"
        class="remove-btn">

        Remove

        </button>

        `;

        container.appendChild(div);

    });

}

// ================================
// ADD PROJECT
// ================================

const projectBtn =
    document.getElementById("addProject");

if (projectBtn) {

    projectBtn.addEventListener("click", () => {

        const container =
            document.getElementById("projectContainer");

        const div = document.createElement("div");

        div.className = "card";

        div.innerHTML = `

        <input
        type="text"
        placeholder="Project Name">

        <br><br>

        <textarea
        rows="4"
        placeholder="Project Description"></textarea>

        <br>

        <button
        type="button"
        class="remove-btn">

        Remove

        </button>

        `;

        container.appendChild(div);

    });

}

// ================================
// SAVE DATA
// ================================

function saveResume() {

    const data = {

        name:
            document.getElementById("name").value,

        email:
            document.getElementById("email").value,

        phone:
            document.getElementById("phone").value,

        address:
            document.getElementById("address").value,

        objective:
            document.getElementById("objective").value,

        linkedin:
            document.getElementById("linkedin").value,

        github:
            document.getElementById("github").value

    };

    localStorage.setItem(
        "resumeData",
        JSON.stringify(data)
    );

    window.location.href =
        "preview.html";

}