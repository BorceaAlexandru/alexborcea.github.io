const toggleBtn = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".menu-overlay");

function openMenu() {
  mobileMenu.classList.add("open");
  overlay.classList.add("open");
  toggleBtn.setAttribute("aria-expanded", "true");
  mobileMenu.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  mobileMenu.classList.remove("open");
  overlay.classList.remove("open");
  toggleBtn.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
}

toggleBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("open");
  isOpen ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);

// Închide meniul când user apasă un link
mobileMenu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", closeMenu);
});

// Optional: ESC to close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});