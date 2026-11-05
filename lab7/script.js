
// Dark mode button
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    themeBtn.setAttribute("aria-pressed", String(isDark));

    themeBtn.textContent = isDark
        ? "☀️ Light mode"
        : "🌙 Dark mode";
});

// Flip card button
const flipBtn = document.querySelector(".flip-btn");
const flipCard = document.querySelector(".flip-card");

flipBtn.addEventListener("click", function() {
    flipCard.classList.toggle("flipped");

    const isFlipped = flipCard.classList.contains("flipped");
    flipBtn.setAttribute("aria-pressed", String(isFlipped));
});
