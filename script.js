// small helpers
document.getElementById("year").textContent = new Date().getFullYear();

// simple fade up animation trigger
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-up").forEach((el, i) => {
    el.style.animationDelay = i * 80 + "ms";
  });
});
