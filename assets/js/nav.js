document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  const brandDropdown = document.querySelector(".brand-dropdown");
  const brandToggle = document.querySelector(".brand-toggle");
  if (!brandDropdown || !brandToggle) return;

  const closeBrandMenu = () => {
    brandDropdown.classList.remove("open");
    brandToggle.setAttribute("aria-expanded", "false");
  };

  brandToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = brandDropdown.classList.toggle("open");
    brandToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (e) => {
    if (!brandDropdown.contains(e.target)) closeBrandMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBrandMenu();
  });
});
