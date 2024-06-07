// app.js
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeBtn = document.querySelector(".close");

    openModalBtn.onclick = function() {
        modal.style.display = "flex";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
