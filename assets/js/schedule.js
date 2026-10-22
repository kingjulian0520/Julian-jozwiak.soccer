document.addEventListener("DOMContentLoaded", () => {
  const games = [
    { date: "Date TBA", text: "Adding schedule soon" },
  ];

  let index = 0;
  const dateEl = document.querySelector(".schedule-date");
  const boxEl = document.querySelector(".schedule-box p");
  const prevBtn = document.querySelector(".schedule-arrow-left");
  const nextBtn = document.querySelector(".schedule-arrow-right");
  if (!dateEl || !boxEl || !prevBtn || !nextBtn) return;

  const render = () => {
    dateEl.textContent = games[index].date;
    boxEl.textContent = games[index].text;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === games.length - 1;
  };

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index -= 1;
      render();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (index < games.length - 1) {
      index += 1;
      render();
    }
  });

  render();
});
