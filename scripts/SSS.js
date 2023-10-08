function toggleAnswer(id) {
    const answer = document.getElementById(id);
    answer.style.display = (answer.style.display === "none" || answer.style.display === "") ? "block" : "none";
}

function createLogoRain() {
    const logoContainer = document.querySelector(".logo-rain-container");

    for (let i = 0; i < 100; i++) {
        const logo = document.createElement("div");
        logo.className = "logo";
        logo.style.left = Math.random() * 100 + "vw"; // Rastgele yatay konum
        logo.style.animationDelay = Math.random() + "s"; // Rastgele gecikme
        logoContainer.appendChild(logo);
    }
}

function startLogoRain() {
    createLogoRain();
}