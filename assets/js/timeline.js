document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tl-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".tl-item");
      const open = item.classList.toggle("open");
      trigger.setAttribute("aria-expanded", open);
    });
  });
});
