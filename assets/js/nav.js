// Reset any instant browser jump-to-anchor before we take over with a smooth scroll.
if (window.location.hash) {
  window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  const brandDropdown = document.querySelector(".brand-dropdown");
  const brandToggle = document.querySelector(".brand-toggle");
  if (brandDropdown && brandToggle) {
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
  }

  // Cross-page section links (e.g. "index.html#academics" from other pages):
  // navigate without the hash so the browser doesn't instantly jump, then
  // smooth-scroll to the target ourselves once index.html has loaded.
  document.querySelectorAll('a[href^="index.html#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const hash = link.getAttribute("href").split("#")[1];
      if (!hash) return;
      e.preventDefault();
      sessionStorage.setItem("scrollTarget", hash);
      window.location.href = "index.html";
    });
  });

  const smoothScrollTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth" }));
  };

  const pendingTarget = sessionStorage.getItem("scrollTarget");
  if (pendingTarget) {
    sessionStorage.removeItem("scrollTarget");
    smoothScrollTo(pendingTarget);
  } else if (window.location.hash) {
    smoothScrollTo(window.location.hash.slice(1));
  }
});
