/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const animeData = [
  {
    title: "Attack on Titan",
    genre: "Action",
    year: 2013,
    rating: 9.0,
    episodes: 87,
    studio: "MAPPA / Wit Studio",
    status: "Completed",
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg"
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    genre: "Adventure",
    year: 2009,
    rating: 9.1,
    episodes: 64,
    studio: "Bones",
    status: "Completed",
    image: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg"
  },
  {
    title: "Death Note",
    genre: "Psychological",
    year: 2006,
    rating: 8.6,
    episodes: 37,
    studio: "Madhouse",
    status: "Completed",
    image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg"
  },
  {
    title: "Demon Slayer",
    genre: "Action",
    year: 2019,
    rating: 8.7,
    episodes: 44,
    studio: "ufotable",
    status: "Ongoing",
    image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
  },
  {
    title: "Blue Lock",
    genre: "Sports",
    year: 2022,
    rating: 8.4,
    episodes: 24,
    studio: "8bit",
    status: "Ongoing",
    image: "https://myanimelist.net/images/anime/1258/126929.jpg"
  },
  {
    title: "Hunter x Hunter",
    genre: "Adventure",
    year: 2011,
    rating: 9.0,
    episodes: 148,
    studio: "Madhouse",
    status: "Completed",
    image: "https://cdn.myanimelist.net/images/anime/11/33657.jpg"
  },
  {
    title: "Jujutsu Kaisen",
    genre: "Action",
    year: 2020,
    rating: 8.7,
    episodes: 48,
    studio: "MAPPA",
    status: "Ongoing",
    image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg"
  },
  {
    title: "Spirited Away",
    genre: "Fantasy",
    year: 2001,
    rating: 8.8,
    episodes: 1,
    studio: "Studio Ghibli",
    status: "Completed",
    image: "https://cdn.myanimelist.net/images/anime/6/79597.jpg"
  },
  {
    title: "JoJo's Bizarre Adventure",
    genre: "Action",
    year: 2012,
    rating: 8.7,
    episodes: 152,
    studio: "David Production",
    status: "Ongoing",
    image: "https://cdn.myanimelist.net/images/anime/3/40409.jpg"
  },
  {
    title: "Your Lie in April",
    genre: "Romance",
    year: 2014,
    rating: 8.7,
    episodes: 22,
    studio: "A-1 Pictures",
    status: "Completed",
    image: "https://cdn.myanimelist.net/images/anime/3/67177.jpg"
  },
  {
    title: "Haikyuu!!",
    genre: "Sports",
    year: 2014,
    rating: 8.7,
    episodes: 85,
    studio: "Production I.G",
    status: "Completed",
    image: "https://cdn.myanimelist.net/images/anime/7/76014.jpg"
  },
  {
    title: "Neon Genesis Evangelion",
    genre: "Sci-Fi",
    year: 1995,
    rating: 8.5,
    episodes: 26,
    studio: "Gainax",
    status: "Completed",
    image: "https://myanimelist.net/images/anime/1314/108941.jpg"
  },
  {
    title: "My Hero Academia",
    genre: "Action",
    year: 2016,
    rating: 8.4,
    episodes: 138,
    studio: "Bones",
    status: "Completed",
    image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg"
  },
  {
    title: "Naruto",
    genre: "Adventure",
    year: 2002,
    rating: 8.3,
    episodes: 220,
    studio: "Pierrot",
    status: "Completed",
    image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg"
  },
  {
    title: "Clannad: After Story",
    genre: "Slice of Life",
    year: 2008,
    rating: 8.9,
    episodes: 24,
    studio: "Kyoto Animation",
    status: "Completed",
    image: "https://cdn.myanimelist.net/images/anime/1299/110774.jpg"
  },
  {
    title: "Re:Zero",
    genre: "Fantasy",
    year: 2016,
    rating: 8.3,
    episodes: 50,
    studio: "White Fox",
    status: "Ongoing",
    image: "https://cdn.myanimelist.net/images/anime/11/79410.jpg"
  },
  {
    title: "Chainsaw Man",
    genre: "Action",
    year: 2022,
    rating: 8.7,
    episodes: 12,
    studio: "MAPPA",
    status: "Ongoing",
    image: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg"
  },
  {
    title: "Parasyte: The Maxim",
    genre: "Horror",
    year: 2014,
    rating: 8.4,
    episodes: 24,
    studio: "Madhouse",
    status: "Completed",
    image: "https://cdn.myanimelist.net/images/anime/3/73178.jpg"
  }
];

let currentSearch = "";
let currentGenre = "all";
let currentSort = "default";

function handleSearch() {
  currentSearch = document.getElementById("search-input").value;
  showCards();
}

function handleFilter() {
  currentGenre = document.getElementById("genre-filter").value;
  showCards();
}

function handleSort() {
  currentSort = document.getElementById("sort-select").value;
  showCards();
}

function resetFilters() {
  currentSearch = "";
  currentGenre = "all";
  currentSort = "default";
  document.getElementById("search-input").value = "";
  document.getElementById("genre-filter").value = "all";
  document.getElementById("sort-select").value = "default";
  showCards();
}

function getGenreColor(genre) {
  const colors = {
    "Action": "linear-gradient(135deg, #e63946, #c1121f)",
    "Adventure": "linear-gradient(135deg, #f77f00, #d62828)",
    "Fantasy": "linear-gradient(135deg, #7b2d8b, #3a0ca3)",
    "Sci-Fi": "linear-gradient(135deg, #0077b6, #023e8a)",
    "Psychological": "linear-gradient(135deg, #2d6a4f, #1b4332)",
    "Romance": "linear-gradient(135deg, #e07a5f, #c1666b)",
    "Slice of Life": "linear-gradient(135deg, #48cae4, #0096c7)",
    "Sports": "linear-gradient(135deg, #52b788, #2d6a4f)",
    "Horror": "linear-gradient(135deg, #333333, #660000)"
  };
  return colors[genre] || "linear-gradient(135deg, #555, #333)";
}


function showCards() {
  let displayData = animeData;

  if (currentSearch.trim() !== "") {
    let searchLower = currentSearch.toLowerCase();
    displayData = displayData.filter(function(anime) {
      return (
        anime.title.toLowerCase().includes(searchLower) ||
        anime.studio.toLowerCase().includes(searchLower)
      );
    });
  }

  if (currentGenre !== "all") {
    displayData = displayData.filter(function(anime) {
      return anime.genre === currentGenre;
    });
  }

  if (currentSort === "rating-desc") {
    displayData = displayData.slice().sort(function(a, b) { return b.rating - a.rating; });
  } else if (currentSort === "rating-asc") {
    displayData = displayData.slice().sort(function(a, b) { return a.rating - b.rating; });
  } else if (currentSort === "year-desc") {
    displayData = displayData.slice().sort(function(a, b) { return b.year - a.year; });
  } else if (currentSort === "year-asc") {
    displayData = displayData.slice().sort(function(a, b) { return a.year - b.year; });
  } else if (currentSort === "title-asc") {
    displayData = displayData.slice().sort(function(a, b) { return a.title.localeCompare(b.title); });
  }

  const resultsCount = document.getElementById("results-count");
  resultsCount.textContent = displayData.length + " anime found";

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < displayData.length; i++) {
    let anime = displayData[i];
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, anime); // Edit card content
    cardContainer.appendChild(nextCard); // Add new card to the container
  }

  if (displayData.length === 0) {
    cardContainer.innerHTML = '<p class="no-results">No anime matched your search. Try something else!</p>';
  }
}

function editCardContent(card, anime) {
  card.style.display = "block";

  const banner = card.querySelector(".card-banner");
  banner.style.background = getGenreColor(anime.genre);

  const cardImage = card.querySelector(".card-img");
  cardImage.src = anime.image;
  cardImage.alt = anime.title + " cover art";

  card.querySelector(".card-title").textContent = anime.title;
  card.querySelector(".card-rating").textContent = "★ " + anime.rating.toFixed(1);
  card.querySelector(".card-genre").textContent = anime.genre;
  card.querySelector(".card-year").textContent = anime.year;
  card.querySelector(".card-studio").textContent = anime.studio;
  card.querySelector(".card-desc").textContent = anime.description;
  card.querySelector(".card-episodes").textContent = anime.episodes + (anime.episodes === 1 ? " episode" : " eps");

  const statusEl = card.querySelector(".card-status");
  statusEl.textContent = anime.status;
  statusEl.className = "card-status " + (anime.status === "Ongoing" ? "status-ongoing" : "status-completed");

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", anime.title, "- html: ", card);
}

// This calls the showCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);