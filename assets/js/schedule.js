document.addEventListener("DOMContentLoaded", () => {
  // Glenbrook South Varsity, 2026-27 season.
  // oppRankAtGame is the opponent's IL ranking at the time of that game;
  // oppFinalRank is their end-of-season ranking, used whenever the
  // at-the-time ranking isn't known. Shown via the "State Ranking" pill.
  const gbsGames = [
    { date: "August 24, 2026", time: "6:30 PM", opponent: "Leyden", oppRankAtGame: "", oppFinalRank: "87", home: false, location: "Franklin Park, IL", note: "", result: "W 3-2" },
    { date: "August 26, 2026", time: "7:00 PM", opponent: "Fremd", oppRankAtGame: "", oppFinalRank: "134", home: true, location: "Palatine, IL", note: "", result: "L 2-1" },
    { date: "August 29, 2026", time: "1:30 PM", opponent: "Prospect", oppRankAtGame: "", oppFinalRank: "125", home: true, location: "Mt. Prospect, IL", note: "Tournament", result: "L 3-2" },
    { date: "September 3, 2026", time: "7:00 PM", opponent: "Mundelein", oppRankAtGame: "", oppFinalRank: "281", home: true, location: "Mundelein, IL", note: "Tournament", result: "W 3-0" },
    { date: "September 4, 2026", time: "6:30 PM", opponent: "Glenbard West", oppRankAtGame: "", oppFinalRank: "19", home: false, location: "Glen Ellyn, IL", note: "Tournament", result: "L 2-1" },
    { date: "September 5, 2026", time: "12:00 PM", opponent: "St. Patrick", oppRankAtGame: "", oppFinalRank: "56", home: false, location: "Chicago, IL", note: "GBS Titan Invitational", result: "W 2-1" },
    { date: "September 8, 2026", time: "7:00 PM", opponent: "Maine West", oppRankAtGame: "", oppFinalRank: "29", home: false, location: "Des Plaines, IL", note: "", result: "W 2-0" },
    { date: "September 10, 2026", time: "7:00 PM", opponent: "Evanston", oppRankAtGame: "", oppFinalRank: "46", home: true, location: "Evanston, IL", note: "Conference", result: "W 2-1" },
    { date: "September 15, 2026", time: "7:00 PM", opponent: "Deerfield", oppRankAtGame: "", oppFinalRank: "199", home: true, location: "Deerfield, IL", note: "", result: "W 1-0" },
    { date: "September 17, 2026", time: "7:00 PM", opponent: "Glenbrook North", oppRankAtGame: "", oppFinalRank: "10", home: true, location: "Northbrook, IL", note: "Conference", result: "W 1-0" },
    { date: "September 19, 2026", time: "12:00 PM", opponent: "Argo", oppRankAtGame: "", oppFinalRank: "177", home: true, location: "Summit, IL", note: "", result: "W 3-1" },
    { date: "September 22, 2026", time: "7:00 PM", opponent: "New Trier", oppRankAtGame: "", oppFinalRank: "28", home: false, location: "Winnetka, IL", note: "Conference", result: "W 4-3" },
    { date: "September 25, 2026", time: "3:15 PM", opponent: "Normal Community", oppRankAtGame: "", oppFinalRank: "108", home: false, location: "Normal, IL", note: "Great River Classic – Iowa Tournament", result: "W 5-0" },
    { date: "September 26, 2026", time: "9:45 AM", opponent: "Morton", oppRankAtGame: "", oppFinalRank: "63", home: false, location: "Normal, IL", note: "Great River Classic – Iowa Tournament", result: "W 1-0" },
    { date: "September 29, 2026", time: "7:00 PM", opponent: "Maine South", oppRankAtGame: "", oppFinalRank: "54", home: true, location: "Park Ridge, IL", note: "Conference", result: "W 1-0" },
    { date: "October 1, 2026", time: "6:30 PM", opponent: "Niles West", oppRankAtGame: "", oppFinalRank: "143", home: false, location: "Skokie, IL", note: "Conference", result: "W 4-2" },
    { date: "October 6, 2026", time: "6:30 PM", opponent: "Naperville Central", oppRankAtGame: "", oppFinalRank: "17", home: false, location: "Naperville, IL", note: "", result: "L 3-2" },
    { date: "October 8, 2026", time: "7:00 PM", opponent: "Maine West", oppRankAtGame: "", oppFinalRank: "29", home: true, location: "Des Plaines, IL", note: "Conference Crossover Championship", result: "W 2-1" },
    { date: "October 12, 2026", time: "7:00 PM", opponent: "Loyola Academy", oppRankAtGame: "", oppFinalRank: "96", home: true, location: "Wilmette, IL", note: "", result: "W 1-0" },
    { date: "October 15, 2026", time: "7:00 PM", opponent: "Warren Township", oppRankAtGame: "", oppFinalRank: "16", home: true, location: "Gurnee, IL", note: "", result: "T 0-0" },
    { date: "October 20, 2026", time: "5:00 PM", opponent: "Fremd", oppRankAtGame: "", oppFinalRank: "134", home: false, location: "Palatine, IL", note: "IHSA Regional Semi-Final", result: "W 1-0", important: true },
    { date: "October 24, 2026", time: "2:00 PM", opponent: "Warren Township", oppRankAtGame: "", oppFinalRank: "16", home: false, location: "Gurnee, IL", note: "IHSA Regional Championship", result: "W 3-2", important: true, celebration: true },
    { date: "October 28, 2026", time: "7:00 PM", opponent: "Stevenson", oppRankAtGame: "8", oppFinalRank: "", home: false, location: "Palatine, IL", note: "IHSA Sectional Semi-Final", result: "", important: true },
  ];

  // GBS's own W-L-T record entering each game, computed from the results above.
  let w = 0, l = 0, t = 0;
  gbsGames.forEach((game) => {
    game.ourRecord = w + "-" + l + "-" + t;
    if (game.result.startsWith("W")) w += 1;
    else if (game.result.startsWith("L")) l += 1;
    else if (game.result.startsWith("T")) t += 1;
  });

  const importantGames = gbsGames.filter((game) => game.important);

  const seasons = {
    "gbs-2026": {
      label: "GBS 2026 Schedule",
      subtitle: "Glenbrook South Varsity, 2026-27 — use the arrows to browse the season.",
      games: gbsGames,
    },
    "important-games": {
      label: "⭐ Important Games",
      subtitle: "The biggest wins of the season.",
      games: importantGames,
      hideStar: true,
    },
    "ecnl-phoenix-2026": {
      label: "ECNL Phoenix 2026",
      subtitle: "Season hasn't started yet.",
      games: [{ date: "Date TBA", placeholder: true, message: "Adding schedule soon" }],
    },
    "ecnl-2027": {
      label: "ECNL 2027",
      subtitle: "Season hasn't started yet.",
      games: [{ date: "Date TBA", placeholder: true, message: "Adding schedule soon" }],
    },
  };

  let currentSeason = "gbs-2026";
  let index = seasons[currentSeason].games.length - 1;

  const dateEl = document.querySelector(".schedule-date");
  const starEl = document.querySelector(".schedule-star");
  const photosEl = document.querySelector(".schedule-photos");
  const noteEl = document.querySelector(".schedule-note");
  const opponentEl = document.querySelector(".schedule-opponent");
  const oppRankEl = document.querySelector(".schedule-opp-rank");
  const locationEl = document.querySelector(".schedule-location");
  const ourRecordEl = document.querySelector(".schedule-our-record");
  const resultEl = document.querySelector(".schedule-result");
  const prevBtn = document.querySelector(".schedule-arrow-left");
  const nextBtn = document.querySelector(".schedule-arrow-right");
  const subtitleEl = document.querySelector(".schedule-season-subtitle");
  const seasonLabelEl = document.querySelector(".schedule-season-label");
  const seasonToggle = document.querySelector(".schedule-season-toggle");
  const seasonSelect = document.querySelector(".schedule-season-select");
  const seasonOptions = document.querySelectorAll(".schedule-season-option");
  if (!dateEl || !opponentEl || !oppRankEl || !locationEl || !resultEl || !prevBtn || !nextBtn) return;

  const resultClass = (result) => {
    if (!result) return "schedule-result-upcoming";
    if (result.startsWith("W")) return "schedule-result-win";
    if (result.startsWith("L")) return "schedule-result-loss";
    return "schedule-result-tie";
  };

  const render = () => {
    const season = seasons[currentSeason];
    const list = season.games;
    const game = list[index];
    dateEl.textContent = game.date;
    if (starEl) starEl.hidden = !(game.important && !season.hideStar);
    if (photosEl) photosEl.hidden = !game.celebration;

    if (game.placeholder) {
      noteEl.hidden = true;
      oppRankEl.hidden = true;
      locationEl.hidden = true;
      ourRecordEl.hidden = true;
      resultEl.hidden = true;
      opponentEl.textContent = game.message;
    } else {
      noteEl.hidden = !game.note;
      noteEl.textContent = game.note;
      oppRankEl.hidden = false;
      locationEl.hidden = false;
      ourRecordEl.hidden = false;
      resultEl.hidden = false;
      opponentEl.textContent = (game.home ? "vs " : "@ ") + game.opponent;
      oppRankEl.textContent = "State Ranking: " + (game.oppRankAtGame || game.oppFinalRank || "TBA");
      locationEl.textContent = game.location + " · " + game.time;
      ourRecordEl.textContent = "GBS enters " + game.ourRecord;
      resultEl.textContent = game.result || "Upcoming";
      resultEl.className = "schedule-result " + resultClass(game.result);
    }

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === list.length - 1;
  };

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index -= 1;
      render();
    }
  });

  nextBtn.addEventListener("click", () => {
    const list = seasons[currentSeason].games;
    if (index < list.length - 1) {
      index += 1;
      render();
    }
  });

  if (seasonToggle && seasonSelect) {
    const closeMenu = () => {
      seasonSelect.classList.remove("open");
      seasonToggle.setAttribute("aria-expanded", "false");
    };

    seasonToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = seasonSelect.classList.toggle("open");
      seasonToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (e) => {
      if (!seasonSelect.contains(e.target)) closeMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    seasonOptions.forEach((option) => {
      option.addEventListener("click", () => {
        const key = option.dataset.season;
        if (!seasons[key] || key === currentSeason) {
          closeMenu();
          return;
        }
        currentSeason = key;
        index = seasons[currentSeason].games.length - 1;
        if (seasonLabelEl) seasonLabelEl.textContent = seasons[currentSeason].label;
        if (subtitleEl) subtitleEl.textContent = seasons[currentSeason].subtitle;
        seasonOptions.forEach((o) => o.classList.toggle("active", o === option));
        render();
        closeMenu();
      });
    });
  }

  render();
});
