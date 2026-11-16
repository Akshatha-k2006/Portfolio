// 1. Update footer year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Mobile menu toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});

// Close mobile menu when a link is clicked
navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
  });
});

// 3. Simple download notification toast
let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);
}
