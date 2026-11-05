
// Bootstrap Dark Mode
const bsBtn = document.getElementById("themeBtn");

if (bsBtn) {
    bsBtn.addEventListener("click", function () {
        const html = document.documentElement;
        const dark = html.getAttribute("data-bs-theme") === "dark";

        html.setAttribute("data-bs-theme", dark ? "light" : "dark");
        bsBtn.textContent = dark ? "Dark Mode" : "Light Mode";
    });
}

// Bootstrap Form Validation
document.querySelectorAll(".needs-validation").forEach(form => {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add("was-validated");

        if (form.checkValidity()) {
            alert("Бүртгэлийн мэдээлэл зөв байна!");
        }
    });
});

// Tailwind Dark Mode
const twBtn = document.getElementById("tailwindTheme");

if (twBtn) {
    twBtn.addEventListener("click", function () {
        document.documentElement.classList.toggle("dark");

        const dark = document.documentElement.classList.contains("dark");
        twBtn.textContent = dark ? "Light Mode" : "Dark Mode";
    });
}

// Tailwind Form Validation
const twForm = document.getElementById("tailwindForm");

if (twForm) {
    twForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (twForm.reportValidity()) {
            alert("Бүртгэлийн мэдээлэл зөв байна!");
        }
    });
}
