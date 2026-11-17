// 1. Update footer year automatically
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// 2. Mobile menu toggle (for index.html)
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("open");
    });
  });
}

// 3. Simple download notification toast
let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);
}

// 4. A4 Sheet Auto-Fit & Zoom Controls (for resume.html & biodata.html)
const viewport = document.getElementById("a4-viewport");
const wrapper = document.getElementById("a4-wrapper");
const sheet = document.getElementById("a4-sheet");
const zoomLabel = document.getElementById("zoom-level");

if (viewport && wrapper && sheet) {
  let currentScale = 1;

  function applyScale(scale) {
    currentScale = Math.min(Math.max(scale, 0.4), 2.0);
    wrapper.style.transform = "scale(" + currentScale + ")";
    wrapper.style.height = 1123 * currentScale + "px";
    wrapper.style.width = 794 * currentScale + "px";

    if (zoomLabel) {
      zoomLabel.textContent = Math.round(currentScale * 100) + "%";
    }
  }

  function fitToScreen() {
    const availableHeight = viewport.clientHeight - 32;
    const availableWidth = viewport.clientWidth - 32;
    const scaleH = availableHeight / 1123;
    const scaleW = availableWidth / 794;
    applyScale(Math.min(scaleH, scaleW));
  }

  document.getElementById("zoom-in").addEventListener("click", function () {
    applyScale(currentScale + 0.15);
  });

  document.getElementById("zoom-out").addEventListener("click", function () {
    applyScale(currentScale - 0.15);
  });

  document.getElementById("zoom-reset").addEventListener("click", fitToScreen);

  // Fit entire A4 sheet to screen on load and window resize
  fitToScreen();
  window.addEventListener("resize", fitToScreen);
}
