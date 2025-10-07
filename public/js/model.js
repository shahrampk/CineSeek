// Model.js file
import { API_KEY } from "./config.js";
import { BASE_URL } from "./config.js";
export const state = {
  trendingMovies: [],
  cardNum: 0,
  exploreMovie: {
    data: [],
    page: 1,
    totalPages: 500,
  },
  searchResult: [],
  watchList: JSON.parse(localStorage.getItem("watchlist")) || [],
};
// Trending Movies...
export const fetchTrendingMovies = async function () {
  try {
    const response = await fetch(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    if (!response.ok)
      throw new Error(`${response.status} - ${response.statusText}`);
    const data = await response.json();
    state.trendingMovies = data.results;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchMoviesData = async function () {
  try {
    const response = await fetch(
      `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${state.exploreMovie.page}`
    );
    if (!response.ok)
      throw new Error(`${response.status} - ${response.statusText}`);
    const data = await response.json();

    state.exploreMovie.data = data.results;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export function setCardNum(cardNum) {
  state.cardNum = cardNum;
}
export const moveToPage = function (goToPage) {
  state.exploreMovie.page = goToPage;
};
// MODEL
export const loadSearchResult = async function (query, page = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );

    if (!response.ok) {
      console.log(`${response.status} - ${response.statusText}`);
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    if (data.results.length === 0)
      throw new Error("No movies found for your search. Try another title!");
    state.searchResult = data.results.slice(0, 4);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const addToWatchList = function (cardNum) {
  const movieDate = state.exploreMovie.data[cardNum];
  if (!state.watchList.some((m) => m.id === movieDate.id)) {
    state.watchList.push(movieDate);
    localStorage.setItem("watchlist", JSON.stringify(state.watchList));
  }
};
export const deleteFromWatch = function (cardNum) {
  state.watchList.splice(cardNum, 1);

  localStorage.setItem("watchlist", JSON.stringify(state.watchList));
};
