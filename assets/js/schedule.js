document.addEventListener("DOMContentLoaded", () => {
  // Glenbrook South Varsity, 2026-27 season.
  const games = [
    { date: "August 24, 2026", time: "6:30 PM", opponent: "Leyden", home: false, location: "Franklin Park, IL", note: "", result: "W 3-2" },
    { date: "August 26, 2026", time: "7:00 PM", opponent: "Fremd", home: true, location: "Palatine, IL", note: "", result: "L 2-1" },
    { date: "August 29, 2026", time: "1:30 PM", opponent: "Prospect", home: true, location: "Mt. Prospect, IL", note: "Tournament", result: "L 3-2" },
    { date: "September 3, 2026", time: "7:00 PM", opponent: "Mundelein", home: true, location: "Mundelein, IL", note: "Tournament", result: "W 3-0" },
    { date: "September 4, 2026", time: "6:30 PM", opponent: "Glenbard West", home: false, location: "Glen Ellyn, IL", note: "Tournament", result: "L 2-1" },
    { date: "September 5, 2026", time: "12:00 PM", opponent: "St. Patrick", home: false, location: "Chicago, IL", note: "GBS Titan Invitational", result: "W 2-1" },
    { date: "September 8, 2026", time: "7:00 PM", opponent: "Maine West", home: false, location: "Des Plaines, IL", note: "", result: "W 2-0" },
    { date: "September 10, 2026", time: "7:00 PM", opponent: "Evanston", home: true, location: "Evanston, IL", note: "Conference", result: "W 2-1" },
    { date: "September 15, 2026", time: "7:00 PM", opponent: "Deerfield", home: true, location: "Deerfield, IL", note: "", result: "W 1-0" },
    { date: "September 17, 2026", time: "7:00 PM", opponent: "Glenbrook North", home: true, location: "Northbrook, IL", note: "Conference", result: "W 1-0" },
    { date: "September 19, 2026", time: "12:00 PM", opponent: "Argo", home: true, location: "Summit, IL", note: "", result: "W 3-1" },
    { date: "September 22, 2026", time: "7:00 PM", opponent: "New Trier", home: false, location: "Winnetka, IL", note: "Conference", result: "W 4-3" },
    { date: "September 25, 2026", time: "3:15 PM", opponent: "Normal Community", home: false, location: "Normal, IL", note: "Great River Classic – Iowa Tournament", result: "W 5-0" },
    { date: "September 26, 2026", time: "9:45 AM", opponent: "Morton", home: false, location: "Normal, IL", note: "Great River Classic – Iowa Tournament", result: "W 1-0" },
    { date: "September 29, 2026", time: "7:00 PM", opponent: "Maine South", home: true, location: "Park Ridge, IL", note: "Conference", result: "W 1-0" },
    { date: "October 1, 2026", time: "6:30 PM", opponent: "Niles West", home: false, location: "Skokie, IL", note: "Conference", result: "W 4-2" },
    { date: "October 6, 2026", time: "6:30 PM", opponent: "Naperville Central", home: false, location: "Naperville, IL", note: "", result: "L 3-2" },
    { date: "October 8, 2026", time: "7:00 PM", opponent: "Maine West", home: true, location: "Des Plaines, IL", note: "", result: "W 2-1" },
    { date: "October 12, 2026", time: "7:00 PM", opponent: "Loyola Academy", home: true, location: "Wilmette, IL", note: "", result: "W 1-0" },
    { date: "October 15, 2026", time: "7:00 PM", opponent: "Warren Township", home: true, location: "Gurnee, IL", note: "", result: "T 0-0" },
    { date: "October 20, 2026", time: "5:00 PM", opponent: "Fremd", home: false, location: "Palatine, IL", note: "IHSA Regional Semi-Final", result: "W 1-0" },
    { date: "October 24, 2026", time: "2:00 PM", opponent: "Warren Township", home: false, location: "Gurnee, IL", note: "IHSA Regional Championship", result: "" },
  ];

  let index = games.length - 1;
  const dateEl = document.querySelector(".schedule-date");
  const noteEl = document.querySelector(".schedule-note");
  const opponentEl = document.querySelector(".schedule-opponent");
  const locationEl = document.querySelector(".schedule-location");
  const resultEl = document.querySelector(".schedule-result");
  const counterEl = document.querySelector(".schedule-counter");
  const prevBtn = document.querySelector(".schedule-arrow-left");
  const nextBtn = document.querySelector(".schedule-arrow-right");
  if (!dateEl || !opponentEl || !locationEl || !resultEl || !prevBtn || !nextBtn) return;

  const resultClass = (result) => {
    if (!result) return "schedule-result-upcoming";
    if (result.startsWith("W")) return "schedule-result-win";
    if (result.startsWith("L")) return "schedule-result-loss";
    return "schedule-result-tie";
  };

  const render = () => {
    const game = games[index];
    dateEl.textContent = game.date;
    noteEl.textContent = game.note;
    noteEl.hidden = !game.note;
    opponentEl.textContent = (game.home ? "vs " : "@ ") + game.opponent;
    locationEl.textContent = game.location + " · " + game.time;
    resultEl.textContent = game.result || "Upcoming";
    resultEl.className = "schedule-result " + resultClass(game.result);
    counterEl.textContent = "Game " + (index + 1) + " of " + games.length;
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
